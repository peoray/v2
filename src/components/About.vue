<template>
  <div>
    <div
      class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16"
    >
      <div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
        <div class="leading-tight">
          Full-Stack Web Developer and an Autodidact
        </div>
        <div class="text-green-700 leading-tight">
          Welcome to my Website
        </div>
      </div>
      <div class="mt-8 sm:mt-0">
        <!-- src="../../static/developer.svg" -->
        <g-image
          src="../../static/author.jpg"
          alt="hero"
          class="mx-auto sm:mx-0 object-contain h-48 w-full rounded-full"
        />
      </div>
    </div>
    <!-- end hero -->

    <div class="container-inner mx-auto">
      <p class="text-lg sm:text-xl">
        Join my adventure in discovering everything about web programming and
        life. Everything on this site is for you, ad-free
      </p>

      <div class="flex justify-between items-center py-6">
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
          <g-image src="../../static/mind_map.svg" alt="browser" />
        </div>
        <div class="w-1/2 px-8 hidden sm:flex justify-end">
          <g-image src="../../static/code_review.svg" alt="mobile" />
        </div>
      </div>
    </div>
  </div>
</template>
