<template>
  <div
    class="py-4 p-st"
    :class="{
      'bg-light': !nightMode,
      'bg-dark2': nightMode,
      'text-light': nightMode,
    }"
  >
    <div class="container">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <span
          class="title text-center"
          :class="{ pgray: !nightMode, 'text-light': nightMode }"
          >Portfolio.</span
        >
      </div>
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
      />

      <!-- Projects Section -->
      <div class="title2 text-center">
        <h3
          :class="{ 'text-dark': !nightMode, 'text-light': nightMode }"
          class="mb-3"
        >
          Projects
        </h3>
      </div>
      <div class="row justify-content-center">
        <div
          class="col-xl-4 col-md-6 col-sm-12 mb-4"
          v-for="(portfolio, idx) in projects_info"
          :key="portfolio.name"
        >
          <div
            class="card p-3 mb-3"
            @click="showModalFn(portfolio)"
            :class="{ 'bg-light': !nightMode, 'bg-dark2': nightMode }"
            :style="{
              cursor: 'pointer',
              borderRadius: '8px',
              transition: '0.3s',
              border: nightMode ? '1px solid white' : '1px solid #ccc',
            }"
          >
            <h5
              class="card-title mb-2"
              :class="{ 'text-dark': !nightMode, 'text-light': nightMode }"
            >
              {{ portfolio.name }}
            </h5>
            <p
              class="card-text"
              :class="{ 'text-muted': !nightMode, 'text-light': nightMode }"
            >
              {{ portfolio.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Publications Section -->
      <div class="title2 text-center">
        <h3
          :class="{ 'text-dark': !nightMode, 'text-light': nightMode }"
          class="mb-3"
        >
          Publications
        </h3>
      </div>
      <div class="row justify-content-center">
        <div
          class="col-xl-4 col-md-6 col-sm-12 mb-4"
          v-for="(publication, idx) in publications_info"
          :key="publication.title"
        >
          <div
            class="card p-3 mb-3"
            @click="showModalFn(publication)"
            :class="{ 'bg-light': !nightMode, 'bg-dark2': nightMode }"
            :style="{
              cursor: 'pointer',
              borderRadius: '8px',
              transition: '0.3s',
              border: nightMode ? '1px solid white' : '1px solid #ccc',
            }"
          >
            <h5
              class="card-title mb-2"
              :class="{ 'text-dark': !nightMode, 'text-light': nightMode }"
            >
              {{ publication.title }}
            </h5>
            <p
              class="card-text"
              :class="{ 'text-muted': !nightMode, 'text-light': nightMode }"
            >
              {{ publication.description }}
            </p>
            <a
              v-if="publication.visit"
              :href="publication.visit"
              target="_blank"
              :class="{ 'text-light': nightMode, 'text-dark': !nightMode }"
            >
              View Publication
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";
export default {
  name: "Portfolio",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      projects_info: info.portfolio_projects,
      publications_info: info.portfolio_publications,
    };
  },
};
</script>

<style scoped>
.card {
  transition: 0.3s;
}

.bg-light {
  background-color: #f9f9f9;
}

.bg-dark2 {
  background-color: #333;
}

.text-light {
  color: white;
}

.text-dark {
  color: black;
}

.pgray {
  color: gray;
}

.title {
  font-size: 30px;
  font-weight: 500;
}

.title2 {
  font-size: 24px;
  font-weight: 400;
}

.card-title {
  font-size: 20px;
}

.card-text {
  font-size: 16px;
}

.card:hover {
  background-color: #eaeaea;
}
</style>
