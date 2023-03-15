<template>
  <div
    class="mx-auto mt-5 pb-1 bg-white w-full max-w-sm rounded overflow-hidden shadow-lg"
  >
    <div class="font-bold text-sm px-1 py-1 mx-2">
      {{ thirdBlockTitle ? thirdBlockTitle : '-' }}
    </div>
    <hr />
    <div class="flex flex-col justify-center mx-2 md:flex-row">
      <div class="w-full md:w-2/12 h-full border p-2 m-1">
        <p class="label-xs">{{ tableBlockThird[0].label }}</p>
        <h4 class="text-center">{{ tableBlockThird[0].value }}</h4>
      </div>
      <div class="bg-orange-700 w-full md:w-2/12 h-full border p-2 m-1">
        <p class="label-xs">{{ tableBlockThird[1].label }}</p>
        <h4 class="text-center">{{ tableBlockThird[1].value }}</h4>
      </div>
      <div class="w-full md:w-8/12 h-full border p-2 m-1">
        <p class="label-xs">{{ tableBlockThird[2].label }}</p>
        <h4 class="text-center">{{ tableBlockThird[2].value }}</h4>
      </div>
    </div>
    <div class="flex flex-col justify-center mx-2 md:flex-row">
      <div class="w-full md:w-2/3 h-full border p-2 m-1">
        <p class="label-xs">{{ tableBlockThird[3].label }}</p>
        <h4 class="text-center">{{ tableBlockThird[3].value }}</h4>
      </div>
      <div class="w-full md:w-1/3 h-full border p-2 m-1">
        <p class="label-xs">{{ tableBlockThird[4].label }}</p>
        <h4 class="text-center">{{ tableBlockThird[4].value }}</h4>
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
      thirdBlockTitle: 'Floor 2, Block A',
      tableBlockThird: [
        {
          id: 1,
          label: 'Zone 1',
          value: 17,
          active: false,
          width: false,
        },
        {
          id: 2,
          label: 'Zone 2',
          value: 27,
          active: true,
          width: false,
        },
        {
          id: 3,
          label: 'Zone 3',
          value: 16,
          active: false,
          width: false,
        },
        {
          id: 4,
          label: 'Zone 4',
          value: 21,
          active: false,
          width: true,
        },
        {
          id: 5,
          label: 'Zone 5',
          value: 24,
          active: false,
          width: true,
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
