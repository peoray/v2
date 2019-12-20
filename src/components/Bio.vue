<template>
  <div class="overflow-x-hidden border-gray-200 border-b">
    <div class="get-to-know-me container-inner mx-auto text-xl pb-16 relative">
      <h2 class="font-bold mb-6" id="about">Get to know me:</h2>

      <div
        class="absolute left-0"
        style="top: 50px; transform: translateX(-100%)"
      >
        <svg width="170px" height="170px">
          <use xlink:href="#dots-triangle" />
        </svg>
      </div>

      <div class="flex flex-col sm:flex-row justify-between items-center mb-16">
        <div>
          <g-image
            src="../../static/avatar.jpg"
            alt="avatar"
            class="w-32 h-32 rounded-full mb-8 lg:mb-0"
          />
        </div>
        <div class="flex-1 text-lg sm:text-xl ml-6">
          Join my adventure in discovering everything about web programming and
          life. Everything on this site is for you, ad-free
        </div>
      </div>

      <!-- <div class="responsive-container">
          <iframe class="responsive-iframe w-full h-full top-0 left-0 border-0" src="https://www.youtube.com/embed/uHo6o1TNQeE" style="border:0;" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div> -->
    </div>
    <!-- end get-to-know me -->
  </div>
</template>
