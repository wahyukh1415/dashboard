<template>
  <nav
    class="relative flex w-full flex-wrap items-center justify-between bg-white py-3 text-neutral-500 shadow-lg lg:flex-wrap lg:justify-start"
    data-te-navbar-ref
  >
    <div class="flex w-full flex-wrap items-center justify-between px-6">
      <nav class="bg-grey-light w-full rounded-md" aria-label="breadcrumb">
        <ol class="list-reset flex flex-col md:flex-row justify-between">
          <li class="flex items-center justify-center md:justify-start">
            <a href="#" class="text-neutral-500">Trending Analytic</a>
          </li>
          <li class="flex flex-col md:flex-row items-center justify-end">
            <label class="mx-4" for="sortby"> Sort By</label>
            <div class="flex inline-flex items-center justify-center">
              <button
                type="button"
                class="inline-block rounded-l border-2 border-primary px-2 py-2 pb-[6px] text-xs font-medium uppercase leading-normal text-primary"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Today
              </button>
              <button
                type="button"
                class="-ml-0.5 inline-block border-2 border-primary px-2 py-2 pb-[6px] text-xs font-medium uppercase leading-normal text-primary"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Week
              </button>
              <button
                type="button"
                class="-ml-0.5 inline-block rounded-r border-2 border-primary px-2 py-2 pb-[6px] text-xs font-medium uppercase leading-normal text-primary"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Month
              </button>
            </div>
            <input
              id="timepicker"
              class="w-full md:w-2/12 mx-4 rounded border-2 px-2 py-1"
              type="date"
              name="timepicker"
            />
            <span>to</span>
            <input
              id="timepicker"
              class="w-full md:w-2/12 mx-4 rounded border-2 px-2 py-1"
              type="date"
              name="timepicker"
            />
            <button class="bg-gray-400 px-3 py-1.5">OK</button>
          </li>
        </ol>
      </nav>
    </div>
  </nav>
</template>
