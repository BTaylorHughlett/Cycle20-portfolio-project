<!-- <template> tells Vue that everything inside here is what should be displayed on the screen (the HTML). -->
<template> 
  <!-- <div id="app"> is the main container for our entire Vue application. It wraps everything our app will show. -->
  <div id="app">
    <!-- <main> is an HTML tag that represents the dominant, main content of the web page. -->
    <main>
      <!-- <Home/> is a custom Vue component we imported. It acts like a custom HTML tag to display the Home page content here. -->
      <Home/>
      <!-- <Projects/> displays everything coded inside the Projects.vue component at this exact spot. -->
      <Projects/>
      <!-- <Aboutsection/> displays the contents of the Aboutsection.vue component here. -->
      <Aboutsection/>
    </main>
  </div>
</template>

<!-- <script setup> tells Vue this is where our JavaScript logic goes. 'setup' makes everything inside automatically usable in the <template> above. -->
<script setup>
  // 'import Home from' grabs the Home component code. 
  // './' means "look in the current directory" (the src folder where App.vue is), then go into the components folder to find Home.vue.
  import Home from './components/Home.vue'
  
  // This imports the Projects component from the components folder.
  import Projects from './components/Projects.vue'
  
  // This imports the Aboutsection component from the components folder.
  import Aboutsection from './components/Aboutsection.vue'
</script>