<template>
  <div
    :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
    class="h-screen bg-dashboard fixed z-30 inset-y-0 left-0 w-64 transition overflow-y-auto duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0"
  >
    <!-- <div
    :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
    class=" h-min bg-dashboard fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:inset-0"
  > -->
    <div class="flex items-baseline mt-5">
      <div class="flex items-center">
        <!-- <LogoVer2 class="h-6 w-22 mx-6" /> -->
        <span class="text-white text-2xl mx-10 font-semibold">Logo Hide</span>
      </div>
    </div>
    <Menu class="mt-10" :items="menuItems" @click="$emit('click')" />
  </div>
</template>

<script>
import Menu from './menu.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Sidebar',
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Menu },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    menuItems: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
