<template>
  <!-- <Tutorial /> -->
  <main class="container">
    <header class="my-6">
      <header-corousel />
    </header>
    <section>
      <navbar-search />
    </section>
    <section>
      <div
        class="py-3 px-6 flex flex-col justify-center md:flex-row md:grid gap-10 grid-cols-3"
      >
        <div class="basis-1/4">
          <card-chart :title="first.title" :img="first.src" />
          <card-chart :title="second.title" :img="second.src" />
          <card-chart :title="third.title" :img="third.src" />
        </div>
        <div class="basis-1/4">
          <table-custom :thead="tableHead" :tbody="tableData" />
        </div>
        <div class="basis-1/4">
          <card-block :title="firstBlockTitle" :data-value="tableBlockFirst" />
          <card-block-custom
            :title="secondBlockTitle"
            :data-value="tableBlockSecond"
          />
          <card-block-custom-small
            :title="thirdBlockTitle"
            :data-value="tableBlockThird"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
// import SvgIcon from '../components/SvgIcon.vue'
import headerCorousel from '../components/headerCorousel/headerCorousel.vue'
import navbarSearch from '../components/navbarSearch/navbarSearch.vue'
import cardChart from '../components/card/cardChart.vue'
import tableCustom from '../components/tableCustom/tableCustom.vue'
import cardBlock from '../components/card/cardBlock.vue'
import CardBlockCustom from '../components/card/cardBlockCustom.vue'
import CardBlockCustomSmall from '../components/card/cardBlockCustomSmall..vue'
export default {
  name: 'IndexPage',
  components: {
    // SvgIcon,
    cardChart,
    headerCorousel,
    navbarSearch,
    tableCustom,
    cardBlock,
    CardBlockCustom,
    CardBlockCustomSmall,
  },
  layout: 'default',
  data() {
    return {
      first: {
        title: 'Power',
        src: 'https://www.tibco.com/sites/tibco/files/media_entity/2022-01/GaugeChart-01.svg',
      },
      second: {
        title: 'Zone Temperature',
        src: 'https://icons-for-free.com/iconfiles/png/512/bar+chart+black+background+business+data+diagram+graph-1320086870657814851.png',
      },
      third: {
        title: 'Zone Humidity',
        src: 'https://icons-for-free.com/iconfiles/png/512/bar+chart+black+background+business+data+diagram+graph-1320086870657814851.png',
      },
      tableHead: [
        {
          id: 0,
          title: ' ',
          sort: false,
        },
        {
          id: 1,
          title: 'On',
          sort: true,
        },
        {
          id: 2,
          title: 'Off',
          sort: true,
        },
        {
          id: 3,
          title: 'Issue',
          sort: true,
        },
      ],
      tableData: [
        {
          id: 4,
          name: 'HVAC',
          on: 3,
          off: 2,
          issue: 0,
          active: false,
        },
        {
          id: 5,
          name: 'Compressor',
          on: 6,
          off: 9,
          issue: 0,
          active: false,
        },
        {
          id: 6,
          name: 'Fan Unit',
          on: 50,
          off: 10,
          issue: 0,
          active: false,
        },
        {
          id: 7,
          name: 'Zone Temperature',
          on: 30,
          off: 15,
          issue: 10,
          active: true,
        },
        {
          id: 8,
          name: 'Chiller',
          on: 5,
          off: 1,
          issue: 0,
          active: false,
        },
        {
          id: 9,
          name: 'PUMP',
          on: 7,
          off: 2,
          issue: 1,
          active: true,
        },
        {
          id: 10,
          name: 'Solenoid',
          on: 9,
          off: 2,
          issue: 0,
          active: false,
        },
        {
          id: 11,
          name: 'Water Tank',
          on: 3,
          off: 0,
          issue: 0,
          active: false,
        },
      ],
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
      secondBlockTitle: '',
      tableBlockSecond: [],
      thirdBlockTitle: '',
      tableBlockThird: [],
    }
  },
}
</script>
