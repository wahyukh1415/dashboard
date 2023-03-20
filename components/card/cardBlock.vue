<template>
  <div
    class="font-bold mx-auto pb-2 bg-white w-full max-w-sm rounded overflow-hidden shadow-lg"
  >
    <div class="font-bold text-sm border-b px-3.5 py-2">
      {{ firstBlockTitle ? firstBlockTitle : '-' }}
    </div>
    <hr />
    <div class="flex flex-col justify-center mx-2 md:flex-row">
      <div
        class="bg-orange-700 h-full w-full md:w-5/12 border px-2 pb-2 pt-1 m-1"
      >
        <p class="label-xs mb-1">{{ tableBlockFirst[0].label }}</p>
        <h4 class="text-center">{{ tableBlockFirst[0].value }}</h4>
      </div>
      <div class="h-full w-full md:w-2/12 border px-2 pb-2 pt-1 m-1">
        <p class="label-xs mb-1">{{ tableBlockFirst[1].label }}</p>
        <h4 class="text-center">{{ tableBlockFirst[1].value }}</h4>
      </div>
      <div class="h-full w-full md:w-2/12 border px-2 pb-2 pt-1 m-1">
        <p class="label-xs mb-1">{{ tableBlockFirst[2].label }}</p>
        <h4 class="text-center">{{ tableBlockFirst[2].value }}</h4>
      </div>
      <div class="h-full w-full md:w-3/12 border px-2 pb-2 pt-1 m-1">
        <p class="label-xs mb-1">{{ tableBlockFirst[3].label }}</p>
        <h4 class="text-center">{{ tableBlockFirst[4].value }}</h4>
      </div>
    </div>
    <div class="flex flex-col justify-center mx-2 md:flex-row">
      <div
        class="bg-orange-700 h-full w-full md:w-2/12 border px-2 pb-2 pt-1 m-1"
      >
        <p class="label-xs mb-1">{{ tableBlockFirst[4].label }}</p>
        <h4 class="text-center">{{ tableBlockFirst[4].value }}</h4>
      </div>
      <div
        class="bg-orange-700 h-full w-full md:w-4/12 border px-2 pb-2 pt-1 m-1"
      >
        <p class="label-xs mb-1">{{ tableBlockFirst[5].label }}</p>
        <h4 class="text-center">{{ tableBlockFirst[5].value }}</h4>
      </div>
      <div class="h-full w-full md:w-2/12 border px-2 pb-2 pt-1 m-1">
        <p class="label-xs mb-1">{{ tableBlockFirst[6].label }}</p>
        <h4 class="text-center">{{ tableBlockFirst[6].value }}</h4>
      </div>
      <div class="h-full w-full md:w-4/12 border px-2 pb-2 pt-1 m-1">
        <p class="label-xs mb-1">{{ tableBlockFirst[7].label }}</p>
        <h4 class="text-center">{{ tableBlockFirst[7].value }}</h4>
      </div>
    </div>
    <div class="flex flex-col justify-center mx-2 md:flex-row">
      <div class="h-full w-full md:w-2/12 border px-2 pb-2 pt-1 m-1">
        <p class="label-xs mb-1">{{ tableBlockFirst[8].label }}</p>
        <h4 class="text-center">{{ tableBlockFirst[8].value }}</h4>
      </div>
      <div class="h-full w-full md:w-2/12 border px-1 pb-2 pt-1 m-1">
        <p class="label-xs mb-1">{{ tableBlockFirst[9].label }}</p>
        <h4 class="text-center">{{ tableBlockFirst[9].value }}</h4>
      </div>
      <div class="h-full w-full md:w-6/12 border px-2 pb-2 pt-1 m-1">
        <p class="label-xs mb-1">{{ tableBlockFirst[10].label }}</p>
        <h4 class="text-center">{{ tableBlockFirst[2].value }}</h4>
      </div>
      <div class="h-full w-full md:w-2/12 border px-1 pb-2 pt-1 m-1">
        <p class="label-xs mb-1">{{ tableBlockFirst[11].label }}</p>
        <h4 class="text-center">{{ tableBlockFirst[11].value }}</h4>
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
      firstBlockTitle: 'Floor 1, Block A',
      tableBlockFirst: [
        {
          id: 1,
          label: 'Zone 1',
          value: 32,
          active: true,
        },
        {
          id: 2,
          label: 'Zone 2',
          value: 25,
          active: false,
        },
        {
          id: 3,
          label: 'Zone 3',
          value: 24,
          active: false,
        },
        {
          id: 4,
          label: 'Zone 4',
          value: 19,
          active: false,
        },
        {
          id: 5,
          label: 'Zone 5',
          value: 29,
          active: true,
        },
        {
          id: 6,
          label: 'Zone 6',
          value: 30,
          active: true,
        },
        {
          id: 7,
          label: 'Zone 7',
          value: 25,
          active: false,
        },
        {
          id: 8,
          label: 'Zone 8',
          value: 21,
          active: false,
        },
        {
          id: 9,
          label: 'Zone 9',
          value: 17,
          active: false,
        },
        {
          id: 10,
          label: 'Zone 10',
          value: 26,
          active: false,
        },
        {
          id: 11,
          label: 'Zone 11',
          value: 17,
          active: false,
        },
        {
          id: 12,
          label: 'Zone 12',
          value: 24,
          active: false,
        },
      ],
    }
  },
}
</script>

<style>
.label-xs {
  font-size: 10px;
}
.bg-orange-700 {
  background-color: rgb(234 88 12);
  color: #ffffff;
}
</style>
