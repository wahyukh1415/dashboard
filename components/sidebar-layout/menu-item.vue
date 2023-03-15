<!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
<template>
  <li>
    <nuxt-link
      :title="item.caption"
      class="flex items-center justify-between py-3 px-3 block menu-item list-menu rounded-3xs mx-4 my-3"
      :class="
        open || hasActive(vm)
          ? openClass
          : active(vm)
          ? activeClass
          : inactiveClass
      "
      :to="item.path || '#'"
      @click.native="clicked(item, vm)"
    >
      <div
        :class="active(vm) || hasActive(vm) ? 'font-color-third' : 'text-white'"
        class="inline-block"
      >
        <svg-icon
          v-if="item.icon === 'feather/dot'"
          :icon="icon ? icon : item.icon"
          :class="
            active(vm) || hasActive(vm)
              ? 'fill-active h-1 w-1 mr-2 ml-6'
              : iconClass
          "
        />
        <svg-icon
          v-else-if="item.icon !== undefined || icon"
          :icon="icon ? icon : item.icon"
          :class="
            active(vm) || hasActive(vm) ? 'fill-active h-6 w-6 mr-2' : iconClass
          "
        />
      </div>
      <span
        :title="item.caption"
        class="m-2 flex-grow font-normal text-sm"
        :class="active(vm) || hasActive(vm) ? 'font-color-third' : 'text-white'"
        >{{ item.caption }}</span
      >
      <svg-icon
        v-show="item.children !== undefined && open"
        icon="feather/chevron-up"
        class="w-4 h-4"
      />
      <svg-icon
        v-show="item.children !== undefined && !open"
        icon="feather/chevron-down"
        class="w-4 h-4 text-white"
      />
    </nuxt-link>
    <slot :open="open"></slot>
  </li>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          path: null,
          icon: null,
          caption: null,
          children: null,
          exact: false,
        }
      },
    },
    icon: {
      type: String,
      default: null,
    },
    iconClass: {
      type: String,
      default: 'h-6 w-6 mr-2',
    },
  },
  data() {
    return {
      vm: this,
      open: this.hasActive(this),
      openClass: 'border-gray-900 bg-active text-gray-100',
      activeClass: 'bg-active text-gray-100 border-gray-100',
      inactiveClass:
        'border-gray-900 text-gray-500 hover:bg-black hover:bg-opacity-10 hover:text-gray-100',
    }
  },
  methods: {
    active: (vm, current = null) => {
      const item = current || vm.item
      const path = item.path ? item.path.replace(/\/$/, '') : null
      const currentPath = vm.$route.path.replace(/\/$/, '')
      const exact = item.exact === undefined ? false : item.exact
      return exact
        ? currentPath === path
        : currentPath.indexOf(path) === 0 &&
            vm.inArray(currentPath.substring(path.length, path.length + 1), [
              '',
              '/',
              '?',
              '#',
            ])
    },
    hasActive: (vm) => {
      let state = false
      if (vm.item.children !== undefined) {
        vm.item.children.forEach((el) => {
          if (vm.active(vm, el)) {
            state = true
          }
        })
      }

      return state
    },
    inArray: (needle, haystack) => {
      const length = haystack.length
      for (let i = 0; i < length; i++) {
        if (haystack[i] === needle) return true
      }
      return false
    },
    clicked: (item, vm) => {
      if (item.children !== undefined) {
        vm.open = !vm.open
      } else {
        vm.$emit('click')
        sessionStorage.removeItem('status')
        sessionStorage.removeItem('category')
        sessionStorage.removeItem('company')
        sessionStorage.removeItem('limit')
        sessionStorage.removeItem('offset')
      }
    },
  },
}
</script>

<style scoped>
.menu-item {
  cursor: pointer;
}
.fill-active {
  /* filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(263deg) brightness(106%) contrast(100%); */
  filter: invert(55%) sepia(74%) saturate(676%) hue-rotate(1deg)
    brightness(106%) contrast(104%);
}

.list-menu {
  width: 220px;
  height: 48px;
}
</style>
