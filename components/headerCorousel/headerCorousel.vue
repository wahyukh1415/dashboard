<template>
  <ul
    id="myTab"
    class="flex flex-col md:flex-row -mb-px text-sm font-medium text-center"
    data-tabs-toggle="#myTabContent"
    role="tablist"
  >
    <li
      class="border-b border-purple-500 border-1 flex justify-center items-center w-full white sm:w-fit xl:w-full h-9"
      role="presentation"
    >
      <p class="whitespace-nowrap">Dashboard Overview</p>
    </li>
    <li
      class="flex justify-center items-center w-full sm:w-fit xl:w-full h-9"
      role="presentation"
    >
      <svg-icon
        icon="feather/chrome"
        class="h-6 w-6 text-gray-400 cursor-pointer"
      />
    </li>
    <li
      class="flex justify-center items-center w-full sm:w-fit xl:w-full h-9"
      role="presentation"
    >
      <svg-icon
        icon="feather/codepen"
        class="h-6 w-6 text-gray-400 cursor-pointer"
      />
    </li>
    <li
      class="flex justify-center items-center w-full sm:w-fit xl:w-full h-9"
      role="presentation"
    >
      <svg-icon
        icon="feather/codesandbox"
        class="h-6 w-6 text-gray-400 cursor-pointer"
      />
    </li>
    <li
      class="flex justify-center items-center w-full sm:w-fit xl:w-full h-9"
      role="presentation"
    >
      <svg-icon
        icon="feather/figma"
        class="h-6 w-6 text-gray-400 cursor-pointer"
      />
    </li>
    <li
      class="flex justify-center items-center w-full sm:w-fit xl:w-full h-9"
      role="presentation"
    >
      <svg-icon
        icon="feather/github"
        class="h-6 w-6 text-gray-400 cursor-pointer"
      />
    </li>
    <li
      class="flex justify-center items-center w-full sm:w-fit xl:w-full h-9"
      role="presentation"
    >
      <svg-icon
        icon="feather/gitlab"
        class="h-6 w-6 text-gray-400 cursor-pointer"
      />
    </li>
    <li
      class="flex justify-center items-center w-full sm:w-fit xl:w-full h-9"
      role="presentation"
    >
      <svg-icon
        icon="feather/instagram"
        class="h-6 w-6 text-gray-400 cursor-pointer"
      />
    </li>
    <li
      class="flex justify-center items-center w-full sm:w-fit xl:w-full h-9"
      role="presentation"
    >
      <svg-icon
        icon="feather/linkedin"
        class="h-6 w-6 text-gray-400 cursor-pointer"
      />
    </li>
    <li
      class="flex justify-center items-center w-full sm:w-fit xl:w-full h-9"
      role="presentation"
    >
      <svg-icon
        icon="feather/package"
        class="h-6 w-6 text-gray-400 cursor-pointer"
      />
    </li>
    <li
      class="flex justify-center items-center w-full sm:w-fit xl:w-full h-9"
      role="presentation"
    >
      <svg-icon
        icon="feather/pocket"
        class="h-6 w-6 text-gray-400 cursor-pointer"
      />
    </li>
    <li
      class="flex justify-center items-center w-full sm:w-fit xl:w-full h-9"
      role="presentation"
    >
      <svg-icon
        icon="feather/slack"
        class="h-6 w-6 text-gray-400 cursor-pointer"
      />
    </li>
  </ul>
</template>

<script>
import SvgIcon from '../SvgIcon.vue'
export default {
  components: {
    SvgIcon,
  },
}
</script>
