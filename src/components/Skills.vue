<template>
  <div :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }" class="p-st">
    <div class="container py-4">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <span
          class="title text-center"
          :class="{ pgray: !nightMode, 'text-light': nightMode }"
          >Skills.</span
        >
      </div>
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
      />
      <br />
      <div class="row justify-content-center">
        <!-- Loop through each category of skills (Languages, Front-End) -->
        <div
          v-for="(skillCategory, idx) in skills"
          :key="idx"
          class="col-lg-5 col-md-6 col-sm-12 mb-4"
        >
          <div
            :class="{ 'bg-dark': nightMode, 'bg-light': !nightMode }"
            class="skills-box"
          >
            <div class="d-flex align-items-center justify-content-center pb-3">
              <!-- Icon now comes before the title -->
              <div class="bg-div mr-2">
                <i :class="skillCategory.icon"></i>
              </div>
              <div class="box-title" :class="{ 'text-light': nightMode }">
                {{ skillCategory.title }}
              </div>
            </div>
            <div class="row">
              <!-- Loop through each skill in the current category -->
              <div
                v-for="(skillItem, idx) in skillCategory.info"
                :key="idx"
                class="col-12 text-center"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
              >
                <div class="skill-item">
                  <div class="skill-name" :class="{ 'text-light': nightMode }">
                    {{ skillItem.skill }}:
                  </div>
                  <div class="skill-level" :class="{ 'text-light': nightMode }">
                    {{ skillItem.level }}
                  </div>
                </div>
                <hr
                  width="50%"
                  :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Skills",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      skills: info.skills, // Importing the skills data from the info.js file
    };
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
}

.title1 {
  font-size: 24px;
  font-weight: 400;
}

.title2 {
  font-size: 20px;
  font-weight: 500;
}

.title3 {
  font-size: 16px;
  font-weight: 400;
}

.fa {
  color: #8585ad;
  font-size: 40px;
  transition: all 0.5s;
}

.fas {
  color: #8585ad;
  font-size: 40px;
  transition: all 0.5s;
}

.skills-box {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  background-color: #f9f9f9; /* Light background by default */
}

.skills-box.bg-dark {
  background-color: #333; /* Dark background when night mode is on */
}

.box-title {
  font-size: 24px;
  font-weight: 600;
}

.bg-div {
  font-size: 24px;
  color: #8585ad;
  transition: all 0.5s;
}

.d-flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

.mr-2 {
  margin-right: 10px;
}

.skill-item {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
}

.skill-name {
  font-weight: 600;
  margin-right: 5px; /* Add small margin to bring the level closer */
}

.skill-level {
  font-weight: 400;
  margin-left: 5px; /* Add small margin to bring the level closer */
}

@media only screen and (max-width: 768px) {
  .skills-box {
    margin-bottom: 30px;
  }
}

/* Night mode styles */
.bg-dark {
  background-color: #333;
}

.text-light {
  color: white;
}

.pgray {
  color: gray;
}
</style>
