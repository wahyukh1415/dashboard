<template>
  <ul
    id="myTab"
    class="flex items-center mt-8 flex-col md:flex-row -mb-px text-sm font-medium text-center"
    data-tabs-toggle="#myTabContent"
    role="tablist"
  >
    <li
      class="py-6 px-2.5 border-b-4 border-purple-600 border-1 flex justify-center items-center w-full white sm:w-fit xl:w-full h-9"
      role="presentation"
    >
      <p class="font-bold text-md text-xl color-logo whitespace-nowrap">
        Dashboard Overview
      </p>
    </li>
    <li
      class="flex justify-center items-center w-full sm:w-fit xl:w-full h-9"
      role="presentation"
    >
      <svg-icon
        icon="feather/chrome"
        class="h-6 w-6 text-gray-400 cursor-pointer color-logo"
      />
    </li>
    <li
      class="flex justify-center items-center w-full sm:w-fit xl:w-full h-9"
      role="presentation"
    >
      <svg-icon
        icon="feather/codepen"
        class="h-6 w-6 text-gray-400 cursor-pointer color-logo"
      />
    </li>
    <li
      class="flex justify-center items-center w-full sm:w-fit xl:w-full h-9"
      role="presentation"
    >
      <svg-icon
        icon="feather/codesandbox"
        class="h-6 w-6 text-gray-400 cursor-pointer color-logo"
      />
    </li>
    <li
      class="flex justify-center items-center w-full sm:w-fit xl:w-full h-9"
      role="presentation"
    >
      <svg-icon
        icon="feather/figma"
        class="h-6 w-6 text-gray-400 cursor-pointer color-logo"
      />
    </li>
    <li
      class="flex justify-center items-center w-full sm:w-fit xl:w-full h-9"
      role="presentation"
    >
      <svg-icon
        icon="feather/github"
        class="h-6 w-6 text-gray-400 cursor-pointer color-logo"
      />
    </li>
    <li
      class="flex justify-center items-center w-full sm:w-fit xl:w-full h-9"
      role="presentation"
    >
      <svg-icon
        icon="feather/gitlab"
        class="h-6 w-6 text-gray-400 cursor-pointer color-logo"
      />
    </li>
    <li
      class="flex justify-center items-center w-full sm:w-fit xl:w-full h-9"
      role="presentation"
    >
      <svg-icon
        icon="feather/instagram"
        class="h-6 w-6 text-gray-400 cursor-pointer color-logo"
      />
    </li>
    <li
      class="flex justify-center items-center w-full sm:w-fit xl:w-full h-9"
      role="presentation"
    >
      <svg-icon
        icon="feather/linkedin"
        class="h-6 w-6 text-gray-400 cursor-pointer text-gray-300"
      />
    </li>
    <li
      class="flex justify-center items-center w-full sm:w-fit xl:w-full h-9"
      role="presentation"
    >
      <svg-icon
        icon="feather/package"
        class="h-6 w-6 text-gray-400 cursor-pointer text-gray-300"
      />
    </li>
    <li
      class="flex justify-center items-center w-full sm:w-fit xl:w-full h-9"
      role="presentation"
    >
      <svg-icon
        icon="feather/pocket"
        class="h-6 w-6 text-gray-400 cursor-pointe text-gray-300"
      />
    </li>
    <li
      class="flex justify-center items-center w-full sm:w-fit xl:w-full h-9"
      role="presentation"
    >
      <svg-icon
        icon="feather/slack"
        class="h-6 w-6 text-gray-400 cursor-pointer text-gray-300"
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
