<template>
  <div
    class="font-bold mx-auto mt-5 pb-2 bg-white w-full max-w-sm rounded overflow-hidden shadow-lg"
  >
    <div class="font-bold text-sm border-b px-3.5 py-2">
      {{ secondBlockTitle ? secondBlockTitle : '-' }}
    </div>
    <hr />
    <div class="flex flex-col justify-center mx-2 md:flex-row">
      <div class="w-full md:w-5/12 h-full border px-2 pb-2 pt-1 m-1">
        <p class="label-xs mb-1">{{ tableBlockSecond[0].label }}</p>
        <h4 class="text-center">{{ tableBlockSecond[0].value }}</h4>
      </div>
      <div
        class="bg-orange-700 w-full md:w-5/12 h-full border px-2 pb-2 pt-1 m-1"
      >
        <p class="label-xs mb-1">{{ tableBlockSecond[1].label }}</p>
        <h4 class="text-center">{{ tableBlockSecond[1].value }}</h4>
      </div>
      <div class="w-full md:w-2/12 h-full border px-2 pb-2 pt-1 m-1">
        <p class="label-xs mb-1">{{ tableBlockSecond[2].label }}</p>
        <h4 class="text-center">{{ tableBlockSecond[2].value }}</h4>
      </div>
    </div>
    <div class="flex flex-col justify-center mx-2 md:flex-row">
      <div class="w-full md:w-3/12 h-full border px-2 pb-2 pt-1 m-1">
        <p class="label-xs mb-1">{{ tableBlockSecond[3].label }}</p>
        <h4 class="text-center">{{ tableBlockSecond[3].value }}</h4>
      </div>
      <div class="w-full md:w-3/12 h-full border px-2 pb-2 pt-1 m-1">
        <p class="label-xs mb-1">{{ tableBlockSecond[4].label }}</p>
        <h4 class="text-center">{{ tableBlockSecond[4].value }}</h4>
      </div>
      <div
        class="bg-orange-700 w-full md:w-6/12 h-full border px-2 pb-2 pt-1 m-1"
      >
        <p class="label-xs mb-1">{{ tableBlockSecond[5].label }}</p>
        <h4 class="text-center">{{ tableBlockSecond[5].value }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    dataValue: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      secondBlockTitle: 'Floor 1, Block B',
      tableBlockSecond: [
        {
          id: 1,
          label: 'Zone 13',
          value: 29,
          active: false,
        },
        {
          id: 2,
          label: 'Zone 14',
          value: 17,
          active: true,
        },
        {
          id: 3,
          label: 'Zone 15',
          value: 16,
          active: false,
        },
        {
          id: 4,
          label: 'Zone 16',
          value: 27,
          active: false,
        },
        {
          id: 5,
          label: 'Zone 17',
          value: 22,
          active: false,
        },
        {
          id: 6,
          label: 'Zone 18',
          value: 13,
          active: true,
        },
      ],
    }
  },
}
</script>

<style>
.label-xs {
  font-size: 6px;
}
.bg-orange-700 {
  background-color: rgb(234 88 12);
  color: #ffffff;
}
</style>

<style>
.w-card-full {
  width: 366px;
  height: fit-content;
}
</style>
