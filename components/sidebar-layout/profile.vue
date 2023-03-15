<template>
  <div class="relative h-full">
    <button
      class="flex items-center h-full px-2 hover:bg-gray-100 z-10 text-gray-400 overflow-hidden focus:outline-none"
      @click="dropdownOpen = !dropdownOpen"
    >
      <div class="flex">
        <img
          class="w-8 h-8 object-cover rounded-full"
          src="~/assets/images/male.svg"
        />
        <div class="text-left ml-2.5">
          <p class="text-xs">Master</p>
          <p class="text-xs">Venkatesan</p>
        </div>
      </div>
      <!-- <svg
        v-if="!dropdownOpen"
        viewBox="0 0 9 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="pl-2 h-4 w-4"
      >
        <g clip-path="url(#clip0_14_57)">
          <path
            d="M4.05463 6.88058L0.184884 3.01071C-0.0614062 2.76454 -0.0614062 2.36542 0.184884 2.11937C0.430954 1.8733 0.830057 1.8733 1.07611 2.11937L4.50024 5.5436L7.92425 2.11947C8.17042 1.8734 8.56949 1.8734 8.81556 2.11947C9.06173 2.36554 9.06173 2.76464 8.81556 3.01081L4.94575 6.88068C4.82266 7.00371 4.6615 7.06516 4.50026 7.06516C4.33894 7.06516 4.17766 7.00359 4.05463 6.88058Z"
            fill="#A2A3B7"
          />
        </g>
        <defs>
          <clipPath id="clip0_14_57">
            <rect
              width="9"
              height="9.00002"
              fill="white"
              transform="translate(9) rotate(90)"
            />
          </clipPath>
        </defs>
      </svg>
      <svg
        v-else
        viewBox="0 0 9 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="pl-2 h-4 w-4"
      >
        <g clip-path="url(#clip0_165_218)">
          <path
            d="M4.94537 2.11942L8.81512 5.98929C9.06141 6.23546 9.06141 6.63458 8.81512 6.88063C8.56905 7.1267 8.16994 7.1267 7.92389 6.88063L4.49976 3.4564L1.07575 6.88053C0.829578 7.1266 0.430515 7.1266 0.184444 6.88053C-0.0617256 6.63446 -0.0617256 6.23536 0.184444 5.98919L4.05425 2.11932C4.17734 1.99629 4.3385 1.93484 4.49974 1.93484C4.66106 1.93484 4.82234 1.99641 4.94537 2.11942Z"
            fill="#A2A3B7"
          />
        </g>
        <defs>
          <clipPath id="clip0_165_218">
            <rect
              width="9"
              height="9.00002"
              fill="white"
              transform="translate(0 9) rotate(-90)"
            />
          </clipPath>
        </defs>
      </svg> -->
    </button>
    <div
      v-show="dropdownOpen"
      class="fixed inset-0 pr-3 z-10 w-full h-full"
      @click="dropdownOpen = false"
    />
    <transition
      enter-active-class="transition duration-150 ease-out transform"
      enter-from-class="scale-95 opacity-0"
      enter-to-class="scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-in transform"
      leave-from-class="scale-100 opacity-100"
      leave-to-class="scale-95 opacity-0"
    >
      <div
        v-show="dropdownOpen"
        class="absolute right-0 z-20 w-48 py-3 mt-2 bg-white rounded-md shadow-xl"
      >
        <p
          class="block px-5 py-2.5 text-sm text-gray-400 font-medium truncate ..."
        >
          Hi, {{ name }}
        </p>
        <div
          class="flex items-center dropdown-link px-5 py-2.5 text-sm text-gray-700"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_165_224)">
              <path
                d="M7 7C7.69223 7 8.36892 6.79473 8.9445 6.41014C9.52007 6.02556 9.96867 5.47893 10.2336 4.83939C10.4985 4.19985 10.5678 3.49612 10.4327 2.81718C10.2977 2.13825 9.96436 1.51461 9.47487 1.02513C8.98539 0.535644 8.36175 0.202301 7.68282 0.0672531C7.00388 -0.0677951 6.30015 0.0015165 5.66061 0.266423C5.02107 0.53133 4.47444 0.979933 4.08986 1.5555C3.70527 2.13108 3.5 2.80777 3.5 3.5C3.50093 4.42797 3.86997 5.31767 4.52615 5.97385C5.18233 6.63003 6.07203 6.99907 7 7ZM7 1.16667C7.46149 1.16667 7.91262 1.30352 8.29633 1.5599C8.68005 1.81629 8.97912 2.18071 9.15572 2.60707C9.33232 3.03343 9.37853 3.50259 9.2885 3.95521C9.19847 4.40783 8.97624 4.82359 8.64992 5.14991C8.32359 5.47624 7.90783 5.69847 7.45521 5.7885C7.00259 5.87853 6.53343 5.83232 6.10707 5.65572C5.68071 5.47911 5.31629 5.18004 5.0599 4.79633C4.80351 4.41261 4.66667 3.96149 4.66667 3.5C4.66667 2.88116 4.9125 2.28767 5.35008 1.85008C5.78767 1.4125 6.38116 1.16667 7 1.16667V1.16667Z"
                fill="#A2A3B7"
              />
              <path
                d="M7 8.16675C5.60808 8.16829 4.27362 8.72191 3.28939 9.70614C2.30516 10.6904 1.75154 12.0248 1.75 13.4167C1.75 13.5715 1.81146 13.7198 1.92085 13.8292C2.03025 13.9386 2.17862 14.0001 2.33333 14.0001C2.48804 14.0001 2.63642 13.9386 2.74581 13.8292C2.85521 13.7198 2.91667 13.5715 2.91667 13.4167C2.91667 12.3338 3.34687 11.2952 4.11265 10.5294C4.87842 9.76362 5.91703 9.33341 7 9.33341C8.08296 9.33341 9.12157 9.76362 9.88735 10.5294C10.6531 11.2952 11.0833 12.3338 11.0833 13.4167C11.0833 13.5715 11.1448 13.7198 11.2542 13.8292C11.3636 13.9386 11.5119 14.0001 11.6667 14.0001C11.8214 14.0001 11.9697 13.9386 12.0791 13.8292C12.1885 13.7198 12.25 13.5715 12.25 13.4167C12.2484 12.0248 11.6948 10.6904 10.7106 9.70614C9.72637 8.72191 8.39191 8.16829 7 8.16675V8.16675Z"
                fill="#A2A3B7"
              />
            </g>
            <defs>
              <clipPath id="clip0_165_224">
                <rect width="14" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span class="ml-4">Profile</span>
        </div>
        <button
          class="flex w-full items-center dropdown-link px-5 py-2.5 text-sm text-gray-700"
          @click="logout()"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.69433 8.75C6.53962 8.75 6.39125 8.81146 6.28185 8.92085C6.17246 9.03025 6.111 9.17862 6.111 9.33333V11.0833C6.111 11.5475 5.92663 11.9926 5.59844 12.3208C5.27025 12.649 4.82513 12.8333 4.361 12.8333H2.91667C2.45254 12.8333 2.00742 12.649 1.67923 12.3208C1.35104 11.9926 1.16667 11.5475 1.16667 11.0833V2.91667C1.16667 2.45254 1.35104 2.00742 1.67923 1.67923C2.00742 1.35104 2.45254 1.16667 2.91667 1.16667H4.361C4.82513 1.16667 5.27025 1.35104 5.59844 1.67923C5.92663 2.00742 6.111 2.45254 6.111 2.91667V4.66667C6.111 4.82138 6.17246 4.96975 6.28185 5.07915C6.39125 5.18854 6.53962 5.25 6.69433 5.25C6.84904 5.25 6.99742 5.18854 7.10681 5.07915C7.21621 4.96975 7.27767 4.82138 7.27767 4.66667V2.91667C7.27674 2.1434 6.96915 1.40208 6.42237 0.855295C5.87559 0.308514 5.13426 0.00092625 4.361 0H2.91667C2.1434 0.00092625 1.40208 0.308514 0.855295 0.855295C0.308514 1.40208 0.00092625 2.1434 0 2.91667L0 11.0833C0.00092625 11.8566 0.308514 12.5979 0.855295 13.1447C1.40208 13.6915 2.1434 13.9991 2.91667 14H4.361C5.13426 13.9991 5.87559 13.6915 6.42237 13.1447C6.96915 12.5979 7.27674 11.8566 7.27767 11.0833V9.33333C7.27767 9.17862 7.21621 9.03025 7.10681 8.92085C6.99742 8.81146 6.84904 8.75 6.69433 8.75Z"
              fill="#A2A3B7"
            />
            <path
              d="M13.3391 5.76268L10.6639 3.08751C10.6101 3.03179 10.5458 2.98735 10.4746 2.95678C10.4034 2.92621 10.3269 2.91012 10.2494 2.90945C10.172 2.90877 10.0952 2.92353 10.0235 2.95286C9.95178 2.98219 9.88665 3.02551 9.83188 3.08028C9.77711 3.13505 9.73379 3.20018 9.70446 3.27187C9.67513 3.34356 9.66037 3.42037 9.66105 3.49783C9.66172 3.57528 9.67781 3.65183 9.70838 3.723C9.73895 3.79416 9.78339 3.85853 9.83911 3.91234L12.3253 6.3991L3.50002 6.4166C3.34531 6.4166 3.19694 6.47805 3.08754 6.58745C2.97815 6.69685 2.91669 6.84522 2.91669 6.99993C2.91669 7.15464 2.97815 7.30301 3.08754 7.41241C3.19694 7.5218 3.34531 7.58326 3.50002 7.58326L12.3597 7.56518L9.83794 10.0875C9.78223 10.1413 9.73779 10.2057 9.70722 10.2769C9.67664 10.348 9.66055 10.4246 9.65988 10.502C9.65921 10.5795 9.67397 10.6563 9.7033 10.728C9.73263 10.7997 9.77594 10.8648 9.83071 10.9196C9.88548 10.9744 9.95061 11.0177 10.0223 11.047C10.094 11.0763 10.1708 11.0911 10.2483 11.0904C10.3257 11.0897 10.4023 11.0736 10.4734 11.0431C10.5446 11.0125 10.609 10.9681 10.6628 10.9124L13.3379 8.23718C13.6662 7.90916 13.8507 7.46421 13.8509 7.00017C13.8511 6.53613 13.667 6.09101 13.3391 5.76268Z"
              fill="#A2A3B7"
            />
          </svg>
          <span class="ml-4">Logout</span>
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
// import DropdownTopMenu from './dropdown-topmenu.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Profile',
  // components: { DropdownTopMenu },
  props: {
    userName: {
      type: String,
      default: null,
    },
    userRole: {
      type: String,
      default: null,
    },
    logoutPath: {
      type: String,
      default: null,
    },
    imageUrl: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80',
    },
    links: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    dropdownOpen: false,
    name: '',
  }),
  mounted() {
    const data = JSON.parse(localStorage.getItem('user'))
    this.name = data.name
  },
  methods: {
    logout() {
      // alert('Logout')
      localStorage.removeItem('user')
      localStorage.removeItem('assets')
      localStorage.removeItem('licenses')
      localStorage.removeItem('token')
      localStorage.removeItem('tableHeadLicense')
      localStorage.removeItem('tableHead')
      localStorage.removeItem('statusOptions')
      localStorage.removeItem('categoryOptions')
      localStorage.removeItem('locationsOptions')
      localStorage.removeItem('companyOptions')
      // this.$router.push({path: '/'})
      window.location.href = process.env.BASE_URL + '/'
    },
  },
}
</script>
