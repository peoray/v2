<template>
  <div class="overflow-x-hidden">
    <div
      class="projects container-inner mx-auto text-xl border-t border-gray-500 border-b py-16 mb-16 relative"
    >
      <h2 class="font-bold mb-6" id="projects">
        Here are some projects I've worked on:
      </h2>

      <div
        class="absolute right-0"
        style="top: 50px; transform: translate(100%) rotate(180deg)"
      >
        <svg width="170px" height="170px">
          <use xlink:href="#dots-triangle" />
        </svg>
      </div>

      <ul
        class="text-lg sm:text-xl"
        v-for="project in projects"
        :key="project.title"
      >
        <li class="checkmark mb-6">
          <div>{{ project.title }}</div>
          <div class="text-lg text-gray-600">
            {{ project.description }}
          </div>
          <div class="mt-2">
            <a :href="project.source" target="_blank">Github</a>
            |
            <a :href="project.path" target="_blank">View</a>
          </div>
        </li>
      </ul>
    </div>
    <!-- end projects -->
  </div>
</template>

<script>
import projects from '../../data/projects';
export default {
  data() {
    return {
      projects
    };
  }
};
</script>
