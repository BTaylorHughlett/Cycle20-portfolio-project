<template>
  <section class="section" id="projects">

    <h2>Projects</h2>
    <p class="intro">A few things I've built while learning.</p>

    <ul class="project-list">
      <!-- 
        v-for="project in projects": This is a special Vue command (directive) that acts like a JavaScript 'for loop'. 
        It tells Vue: "Look at the 'projects' array in my <script> tag. For every item (which we'll temporarily call 'project') inside that array, create a new <li> tag exactly like this one."
        This saves you from copying and pasting the <li> code 4 times manually!
        
        :key="project.id": Vue needs a unique ID for every item it creates in a loop so it can keep track of them (like for deleting or organizing). We give it the project's unique id.
      -->
      <li
        v-for="project in projects"
        :key="project.id"
        class="project-item"
      >
        <!-- The double curly braces {{ }} let us inject our JavaScript variables directly into the HTML. 
             In this loop, 'project.name' will become 'This Portfolio', then 'Weather App', etc. -->
        <div>{{ project.name }}</div>
        <div>{{ project.desc }}</div>
        <span>{{ project.tag }}</span>
      </li>
    </ul>

  </section>
</template>


<script setup>
  // Why 'const' instead of 'let'?
  // In JavaScript, 'let' allows you to completely reassign a variable later (e.g., let x = 5; x = 10;).
  // 'const' tells JavaScript that this variable cannot be reassigned to a completely new value. 
  // However, for Arrays and Objects, 'const' still lets you modify the *contents* (like adding/removing items from the list), you just can't say `projects = "something else"`.
  // Since we know 'projects' will ALWAYS be an array of our portfolio data and will never completely turn into a string or number later on, 'const' is safer and considered a best practice here.
  const projects = [
    {
      id: 1,
      name: 'This Portfolio',
      desc: 'My personal portfolio page built with Vue 3 and Vite.',
      tag: 'Vue 3'
    },
    {
      id: 2,
      name: 'Weather App',
      desc: 'A simple app that shows the current weather for any city.',
      tag: 'JavaScript'
    },
    {
      id: 3,
      name: 'To-Do List',
      desc: 'A task manager with add, complete, and delete features.',
      tag: 'Vue 3'
    },
    {
      id: 4,
      name: 'To-Do List',
      desc: 'A task manager with add, complete, and delete features.',
      tag: 'Vue 3'
    }
  ]
</script>


<style scoped>
  .project-list {
    list-style: none;
    display: flex;
    gap: 1rem;
    max-width: 560px;
  }
  
  .project-item {
    background-color: aqua;
    border: 1px solid;
    border-radius: 8px;
  }
</style>
