<template>
  <div
    class="mx-auto mb-10 mt-5 bg-white w-full max-w-sm rounded-t overflow-hidden shadow-lg"
  >
    <div class="font-bold text-sm mb-2 border-b px-6 py-1">
      {{ title ? title : '-' }}
    </div>
    <img class="w-full" :src="img" :alt="title ? title : '-'" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
}
</script>
