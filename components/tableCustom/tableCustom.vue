<template>
  <div class="mx-auto">
    <div
      class="flex px-3.5 pt-2 pb-1 font-bold text-md md:flex-row mx-auto bg-white w-full max-w-sm rounded-t overflow-hidden"
    >
      <div
        v-for="head in thead"
        :key="head.id"
        :class="head.id === 0 ? 'w-6/12' : 'w-2/12'"
        class="text-center"
      >
        {{ head.title }}
      </div>
    </div>
    <div
      v-for="body in tbody"
      :key="body.id"
      :class="body.active === true ? 'bg-orange-700' : ''"
      class="flex items-center px-3.5 py-2 font-semibold text-md md:flex-row mx-auto mt-4 bg-white w-full max-w-sm rounded-t overflow-hidden"
    >
      <div class="w-6/12 text-md py-3 pl-5 whitespace-wrap uppercase">
        {{ body.name }}
      </div>
      <div class="text-center w-2/12 p-3">{{ body.on }}</div>
      <div class="text-center w-2/12 p-3">{{ body.off }}</div>
      <div class="text-center w-2/12 p-3">{{ body.issue }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    thead: {
      type: Array,
      default() {
        return []
      },
    },
    tbody: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style>
.bg-orange-700 {
  background-color: #f26c4f;
  color: #ffffff;
}
</style>
