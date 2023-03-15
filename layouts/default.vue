<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <layout :main-menus="mainMenus" :profile-data="profileData" />
</template>
<script>
import Layout from '../components/sidebar-layout/layout.vue'
import MainMenu from '@/resources/menu'

export default {
  components: { Layout },
  data() {
    return {
      mainMenus: MainMenu,
      profileData: {
        userName: '',
        userRole: 'Manager',
        userImageUrl:
          'https://avatars3.githubusercontent.com/u/7432391?s=460&u=afb02121fc4cd70433af2462c4d24ddbc5d88903&v=4',
        menus: [
          {
            path: '/profile',
            icon: '/feather/user',
            caption: 'Profile',
          },
        ],
        logoutPath: '/',
      },
    }
  },
  methods: {
    makeTitle: (text) => {
      const words = text.split('-')

      for (let i = 0; i < words.length; i++) {
        const word = words[i]
        words[i] = word.charAt(0).toUpperCase() + word.slice(1)
      }

      return words.join(' ')
    },
  },
}
</script>

<style>
body {
  background: #f3f3f3;
}
#header {
  background: #ffffff;
}
</style>
