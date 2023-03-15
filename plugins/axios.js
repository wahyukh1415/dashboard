import * as axios from 'axios'
import CryptoJS from 'crypto-js'

export default function ({ store, app }) {
  axios.interceptors.request.use((req) => {
    // req.timeout = 8000; // set timeout connection
    if (localStorage.getItem('token')) {
      const token = CryptoJS.AES.decrypt(
        localStorage.getItem('token'),
        process.env.CRYPTO_KEY
      ).toString(CryptoJS.enc.Utf8)

      if (token.length) {
        // eslint-disable-next-line dot-notation
        req.headers.common['Token'] = token
      }
    }

    return req
  })

  axios.interceptors.response.use(
    (res) => {
      const code = res.data.code

      // If 502 token failed or expired
      if (code === 502) {
        // logout
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        sessionStorage.removeItem('mode')
        window.location.href = process.env.BASE_URL
      }
      return res
    },
    (error) => {
      return error
    }
  )
}
