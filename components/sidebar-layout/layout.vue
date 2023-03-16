<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- <div class="flex h-screen"> -->
  <div class="flex h-screen">
    <!-- Overlay -->
    <div
      class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"
      :class="isOpen ? 'block' : 'hidden'"
      @click="isOpen = !isOpen"
    ></div>
    <!-- End of Overlay -->

    <!-- Sidebar -->
    <Sidebar
      v-show="!isOpenLarge"
      :menu-items="mainMenus"
      :is-open="isOpen"
      @click="closeSidebar()"
    />
    <!-- End of Sidebar -->

    <div class="flex-1 flex flex-col overflow-hidden bg-default">
      <!-- Header -->
      <Header
        :profile-data="profileData"
        @toggleClick="isOpen = !isOpen"
        @toggleClickLarge="isOpenLarge = !isOpenLarge"
      />
      <!-- End of Header -->

      <!-- Main -->
      <main id="main" class="bg-container bg-default flex-1 overflow-x-hidden">
        <Nuxt />
      </main>
      <!-- End of Main -->
    </div>
  </div>
</template>

<script>
import Header from './header.vue'
import Sidebar from './sidebar.vue'

export default {
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Header, Sidebar },
  props: {
    mainMenus: {
      type: Array,
      default: () => [],
    },
    profileData: {
      type: Object,
      default: () => {
        return Header.props.profileData.default
      },
    },
  },
  data() {
    return {
      isOpen: false,
      isOpenLarge: false,
    }
  },
  methods: {
    closeSidebar() {
      this.isOpen = false
      document.getElementById('main').scrollTop = 0
    },
    hideShowSidebar() {
      if (this.isOpenLarge === false) {
        this.isOpenLarge = true
      } else {
        this.isOpenLarge = false
      }
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
.bg-container {
  background: #f0f0fa;
}
</style>
