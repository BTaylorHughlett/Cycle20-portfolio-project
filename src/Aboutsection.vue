<!-- ========================================= -->
<!-- SERIES 2 — AboutSection.vue (GUIDED)     -->
<!-- ========================================= -->

<!--
INSTRUCTIONS:

You are NOT allowed to hard-code multiple <span> tags.

Your goal:
Use v-for to generate the skill tags dynamically
from an array inside <script setup>.
-->

<template>

  <section class="section" id="about">

    <h2>About Me</h2>

    <p class="bio">
      Hi! I'm Jane, a frontend developer who loves building
      clean, simple, and useful websites. I'm currently learning
      Vue.js and enjoying every step of the journey.
    </p>

    <div class="skills">

      <!-- ====================================== -->
      <!-- TODO #1 — Create the Loop              -->
      <!-- ====================================== -->

      <!--
      You need to:

      1. Create ONE <span>
      2. Add a v-for directive
      3. Loop through a variable called skills
      4. Provide a :key
      5. Display each skill using mustache syntax

      QUESTIONS TO ANSWER BEFORE WRITING:

      - What goes inside v-for?
      - What temporary variable name will you use?
      - What must :key be bound to?
      - How do you display JavaScript inside HTML?
      -->

      <span
        <!-- Write your v-for here -->
        <!-- Write your :key here -->
        class="skill-tag"
      >
        <!-- Display the skill here -->
      </span>

    </div>

  </section>

</template>



<script setup>

/*
======================================
TODO #2 — Create the Data
======================================

You need to create:

1. A constant variable
2. Named "skills"
3. It must be an ARRAY
4. It must contain at least 6 strings

QUESTIONS:

- What syntax creates an array?
- Should you use [] or {} ?
- What kind of data type is "Vue 3"?
- If you add a new item to the array,
  should it automatically appear on screen?
  Why?
*/




// Write your array here


</script>

<style scoped>

/* ========================================= */
/* SECTION                                  */
/* ========================================= */

.section {

  /* FULL SCREEN HEIGHT */
  /*
  GOAL:
  The section should take at least the full height of the screen.

  THINK:
  - What unit represents viewport height?
  - How do we make something take a minimum height instead of fixed height?

  WRITE THE COMPLETE DECLARATION.
  */


  /* INNER SPACING */
  /*
  GOAL:
  Add large vertical spacing and medium horizontal spacing inside the section.

  THINK:
  - What property controls inner space?
  - How does shorthand spacing syntax work?
  - Which value controls top/bottom? Which controls left/right?
  */


  /* BACKGROUND USING A CSS VARIABLE */
  /*
  GOAL:
  Apply the light theme background color using a CSS variable.

  THINK:
  - How do we access a CSS custom property?
  - What function allows us to use variables?
  */


  /* ENABLE FLEXBOX */
  /*
  GOAL:
  Turn this container into a flex container.

  THINK:
  - What property activates flexbox?
  */


  /* STACK ITEMS VERTICALLY */
  /*
  GOAL:
  Children should stack top-to-bottom.

  THINK:
  - What controls main axis direction?
  */


  /* CENTER CONTENT ALONG MAIN AXIS */
  /*
  GOAL:
  Content should be centered vertically inside the full-height section.

  THINK:
  - In column direction, what property controls vertical alignment?
  */

}



/* ========================================= */
/* SECTION TITLE                            */
/* ========================================= */

h2 {

  /*
  GOAL:
  Make this heading significantly larger using rem units.

  THINK:
  - What property changes text size?
  - If 1rem = 16px, what would double that be?
  */


  /*
  GOAL:
  Make the text bold using numeric font-weight.

  THINK:
  - What value range represents bold weights?
  */


  /*
  GOAL:
  Apply the dark theme text color using a variable.
  */


  /*
  GOAL:
  Add spacing below this heading.
  */
}



/* ========================================= */
/* BIO PARAGRAPH                            */
/* ========================================= */

.bio {

  /*
  GOAL:
  Keep text at default readable size using rem.
  */


  /*
  GOAL:
  Apply muted theme color.
  */


  /*
  GOAL:
  Improve readability by increasing spacing between lines.

  THINK:
  - What property controls vertical text rhythm?
  */


  /*
  GOAL:
  Prevent paragraph from stretching too wide.

  THINK:
  - What property sets maximum width instead of fixed width?
  */


  /*
  GOAL:
  Add larger spacing below paragraph.
  */
}



/* ========================================= */
/* SKILLS CONTAINER                         */
/* ========================================= */

.skills {

  /*
  GOAL:
  Arrange skill tags horizontally.
  */


  /*
  GOAL:
  Allow them to wrap onto the next line when needed.
  */


  /*
  GOAL:
  Add space between skill tags without using margin.
  */


  /*
  GOAL:
  Prevent container from becoming too wide.
  */
}



/* ========================================= */
/* SKILL TAG                                */
/* ========================================= */

.skill-tag {

  /*
  GOAL:
  Add internal spacing to create a badge look.
  */


  /*
  GOAL:
  Apply white background using variable.
  */


  /*
  GOAL:
  Add thin solid border using theme border variable.
  */


  /*
  GOAL:
  Make edges rounded to create a pill shape.
  */


  /*
  GOAL:
  Slightly reduce text size compared to normal paragraph text.
  */


  /*
  GOAL:
  Apply dark theme color.
  */


  /*
  GOAL:
  Use medium font weight between normal and bold.
  */

}

</style>