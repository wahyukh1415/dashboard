<template>
  <header
    id="header"
    class="shadow-header border-header flex justify-between items-center pl-3 pr-8"
  >
    <div class="flex items-center py-4">
      <button
        title="Hide sidebar"
        class="text-gray-600 focus:outline-none lg:hidden mr-3"
        @click="$emit('toggleClick')"
      >
        <svg-icon icon="feather/menu" class="h-6 w-6" />
      </button>
      <!-- <button title="Hide sidebar" class="bar-showhide lg:inline-flex text-gray-600 mr-3" @click="$emit('toggleClickLarge')">
        <svg-icon icon="feather/menu" class="h-6 w-6" />
      </button> -->
    </div>

    <div class="flex items-center h-full py-4">
      <notification />
      <location class="ml-5" />
      <profile class="ml-5" />
      <svg-icon
        icon="feather/align-right"
        class="h-6 w-6 text-gray-400 cursor-pointer ml-4"
      />
    </div>
  </header>
</template>

<script>
import Notification from './notification.vue'
import Profile from './profile.vue'
import Location from './location.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
  name: 'Header',
  components: { Notification, Profile, Location },
  // components: { Search, Notification },
  props: {
    profileData: {
      type: Object,
      default: () => {
        return {
          userName: null,
          userRole: null,
          userImageUrl: null,
          menus: [],
          logoutPath: '/',
        }
      },
    },
  },
  data: () => ({
    dropdownOpen: false,
  }),
  methods: {
    logout() {
      window.location.href = process.env.BASE_URL + '/logout'
    },
  },
}
</script>
