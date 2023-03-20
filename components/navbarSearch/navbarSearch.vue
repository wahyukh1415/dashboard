<template>
  <nav
    class="relative flex w-full flex-wrap items-center justify-between bg-white py-3 text-neutral-500 shadow-lg lg:flex-wrap lg:justify-start"
    data-te-navbar-ref
  >
    <div class="flex w-full flex-wrap items-center justify-between px-4">
      <nav class="bg-grey-light w-full rounded-md" aria-label="breadcrumb">
        <ol class="list-reset flex flex-col md:flex-row justify-between">
          <li class="flex items-center justify-center md:justify-start">
            <a href="#" class="text-neutral-500 font-bold text-md text-xl"
              >Trending Analytic</a
            >
          </li>
          <li class="flex flex-col md:flex-row items-center justify-end">
            <label class="mr-5 color-sort-navbar" for="sortby">Sort By:</label>
            <div class="flex inline-flex items-center justify-center my-1">
              <button
                type="button"
                class="btn-sort active bg-color-global text-white inline-block border-primary px-2 py-1.5 pb-[6px] text-xs font-medium uppercase leading-normal text-primary"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Today
              </button>
              <button
                type="button"
                class="btn-sort inline-block border-t border-b border-primary px-2 py-1.5 text-xs font-medium uppercase leading-normal text-primary"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Week
              </button>
              <button
                type="button"
                class="btn-sort inline-block border-t border-b border-r border-primary px-2 py-1.5 text-xs font-medium uppercase leading-normal text-primary"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Month
              </button>
            </div>
            <select
              id="from"
              class="w-full my-1 md:w-2/12 mx-4 px-2.5 py-0.5"
              name="from"
            >
              <option class="text-xs" value="">DD/MM/YYYY</option>
            </select>
            <span>to</span>
            <select
              id="to"
              class="w-full my-1 md:w-2/12 mx-4 px-2.5 py-0.5"
              name="to"
            >
              <option class="text-xs" value="">DD/MM/YYYY</option>
            </select>
            <button class="search my-1 w-full bg-gray-400 px-1 py-1">OK</button>
          </li>
        </ol>
      </nav>
    </div>
  </nav>
</template>

<style scoped>
.color-sort-navbar {
  color: bbbbbb;
}
.btn-sort {
  width: 70px;
  height: 32px;
}

select {
  width: 150px;
  height: 30px;
  color: #bcbcbc;
  border: 0.5px solid #d8d8d8;
}
option {
  color: #bcbcbc;
}

button {
  color: #bcbcbc;
}

button.active {
  color: white;
}

button.search {
  width: 70px;
  height: 30px;
  color: white;
  background-color: #818181;
}
</style>
