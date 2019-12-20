<template>
  <header class="border-t-14 border-green-700">
    <nav
      class="container mx-auto flex flex-wrap justify-between items-center py-8"
    >
      <div>
        <g-link v-if="theme === 'theme-light'" to="/"
          ><g-image src="../../static/logo.svg" class="w-40" alt="logo"
        /></g-link>
        <g-link v-else to="/"
          ><g-image
            src="../../static/logo_dark_mode.svg"
            class="w-40"
            alt="logo"
        /></g-link>
      </div>
      <div class="block lg:hidden">
        <button
          @click="toggle"
          class="flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-600 hover:border-gray-600"
        >
          <svg
            class="current-color h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="gray" />
          </svg>
        </button>
      </div>
      <ul
        class="uppercase tracking-wide font-bold w-full block flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
        :class="isOpen ? 'block' : 'hidden'"
      >
        <li class="mr-8 mb-6 lg:mb-0">
          <search-input />
        </li>
        <li class="mr-8 mb-6 lg:mb-0">
          <theme-switcher :theme="theme" @themeChanged="updateTheme" />
        </li>
        <li class="mr-8 mb-6 lg:mb-0">
          <a
            v-if="$route.path === '/'"
            href="/#projects"
            v-scroll-to="'#projects'"
            class="text-copy-primary hover:text-gray-600"
            >Projects</a
          >
          <g-link
            v-else
            to="/#projects"
            class="text-copy-primary hover:text-gray-600"
            >Projects</g-link
          >
        </li>
        <li class="mr-8 mb-6 lg:mb-0">
          <a
            v-if="$route.path === '/'"
            href="/#about"
            v-scroll-to="'#about'"
            class="text-copy-primary hover:text-gray-600"
            >About</a
          >
          <g-link
            v-else
            to="/#about"
            class="text-copy-primary hover:text-gray-600"
            >About</g-link
          >
        </li>
        <li class="mr-8 mb-6 lg:mb-0">
          <a
            v-if="$route.path === '/'"
            href="/#contact"
            v-scroll-to="'#contact'"
            class="text-copy-primary hover:text-gray-600"
            >Contact</a
          >
          <g-link
            v-else
            to="/#contact"
            class="text-copy-primary hover:text-gray-600"
            >Contact</g-link
          >
        </li>
        <li class="mr-8 mb-6 lg:mb-0">
          <g-link to="/docs" class="text-copy-primary hover:text-gray-600"
            >Docs</g-link
          >
        </li>
        <li>
          <g-link to="/blog" class="text-copy-primary hover:text-gray-600"
            >Blog</g-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import ThemeSwitcher from '../components/ThemeSwitcher';
import SearchInput from '../components/SearchInput';

export default {
  components: {
    SearchInput,
    ThemeSwitcher
  },
  mounted() {
    this.theme = localStorage.getItem('theme') || 'theme-light';
  },
  data() {
    return {
      isOpen: false,
      theme: ''
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    updateTheme(theme) {
      this.theme = theme;
    }
  }
};
</script>
