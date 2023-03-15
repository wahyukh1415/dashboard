<template>
  <div
    class="mx-auto mt-5 pb-1 bg-white w-full max-w-sm rounded overflow-hidden shadow-lg"
  >
    <div class="font-bold text-sm px-1 py-1 mx-2">
      {{ secondBlockTitle ? secondBlockTitle : '-' }}
    </div>
    <hr />
    <div class="flex flex-col justify-center mx-2 md:flex-row">
      <div class="w-full md:w-5/12 h-full border p-2 m-1">
        <p class="label-xs">{{ tableBlockSecond[0].label }}</p>
        <h4 class="text-center">{{ tableBlockSecond[0].value }}</h4>
      </div>
      <div class="bg-orange-700 w-full md:w-5/12 h-full border p-2 m-1">
        <p class="label-xs">{{ tableBlockSecond[1].label }}</p>
        <h4 class="text-center">{{ tableBlockSecond[1].value }}</h4>
      </div>
      <div class="w-full md:w-2/12 h-full border p-2 m-1">
        <p class="label-xs">{{ tableBlockSecond[2].label }}</p>
        <h4 class="text-center">{{ tableBlockSecond[2].value }}</h4>
      </div>
    </div>
    <div class="flex flex-col justify-center mx-2 md:flex-row">
      <div class="w-full md:w-3/12 h-full border p-2 m-1">
        <p class="label-xs">{{ tableBlockSecond[2].label }}</p>
        <h4 class="text-center">{{ tableBlockSecond[2].value }}</h4>
      </div>
      <div class="w-full md:w-3/12 h-full border p-2 m-1">
        <p class="label-xs">{{ tableBlockSecond[2].label }}</p>
        <h4 class="text-center">{{ tableBlockSecond[2].value }}</h4>
      </div>
      <div class="bg-orange-700 w-full md:w-6/12 h-full border p-2 m-1">
        <p class="label-xs">{{ tableBlockSecond[2].label }}</p>
        <h4 class="text-center">{{ tableBlockSecond[2].value }}</h4>
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
          label: 'Zone 1',
          value: 29,
          active: false,
        },
        {
          id: 2,
          label: 'Zone 2',
          value: 17,
          active: true,
        },
        {
          id: 3,
          label: 'Zone 3',
          value: 16,
          active: false,
        },
        {
          id: 4,
          label: 'Zone 4',
          value: 27,
          active: false,
        },
        {
          id: 5,
          label: 'Zone 5',
          value: 22,
          active: false,
        },
        {
          id: 6,
          label: 'Zone 6',
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
