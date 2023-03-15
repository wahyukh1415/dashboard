<template>
  <div class="mx-auto">
    <div
      class="flex text-left font-bold text-sm md:flex-row mx-auto mt-5 bg-white w-full max-w-sm rounded-t overflow-hidden shadow-lg"
    >
      <div
        v-for="head in thead"
        :key="head.id"
        :class="head.id === 0 ? 'w-6/12' : 'w-2/12'"
        class="px-1 pt-1 pb-1.5"
      >
        {{ head.title }}
      </div>
    </div>
    <div
      v-for="body in tbody"
      :key="body.id"
      :class="body.active === true ? 'bg-orange-700' : ''"
      class="flex text-start font-semibold text-md md:flex-row mx-auto mt-5 pt-2 bg-white w-full max-w-sm rounded overflow-hidden shadow-lg"
    >
      <div class="w-6/12 text-sm p-3 whitespace-wrap uppercase">
        {{ body.name }}
      </div>
      <div class="w-2/12 p-3">{{ body.on }}</div>
      <div class="w-2/12 p-3">{{ body.off }}</div>
      <div class="w-2/12 p-3">{{ body.issue }}</div>
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
  background-color: rgb(234 88 12);
  color: #ffffff;
}
</style>
