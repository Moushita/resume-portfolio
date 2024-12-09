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
        >
          Contact.
        </span>
      </div>
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
      />
      <br />
      <div class="text-center">
        <div
          class="my-3"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <p
            class="title1"
            :class="{ pgray: !nightMode, 'text-light': nightMode }"
          >
            <strong>Email:</strong> moushita.patnaik29@gmail.com
          </p>
        </div>
        <div
          class="my-3"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <p
            class="title1"
            :class="{ pgray: !nightMode, 'text-light': nightMode }"
          >
            <strong>Phone:</strong> +91 9937865256
          </p>
        </div>
        <div
          class="my-3"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <p
            class="title1"
            :class="{ pgray: !nightMode, 'text-light': nightMode }"
          >
            <strong>Location:</strong> Mumbai, India
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 26px; /* Reduced from 30px */
  font-weight: 500;
}
.title1 {
  font-size: 20px; /* Reduced from 24px */
  font-weight: 400;
}

.title2 {
  font-size: 18px; /* Reduced from 20px */
  font-weight: 400;
}

.title3 {
  font-size: 16px;
  font-weight: 400;
}

.pinput {
  font-size: 18px;
  outline: none;
  border: none;
  border-radius: 7px;
  padding: 10px;
  width: 50%;
  transition: all 1s;
  background-color: #b3b3cc;
}

.btn {
  border-color: #759cc9;
  color: #759cc9;
  width: 50%;
}

.btn:hover {
  background-color: #759cc9;
  border-color: #759cc9;
  color: white;
}

.btn:focus {
  background-color: #759cc9;
  border-color: #759cc9;
  color: white;
}

.pgray-dark {
  background-color: #3c4148 !important;
}

@media screen and (max-width: 1000px) {
  .pinput {
    width: 90%;
  }

  .btn {
    width: 90%;
  }
}
</style>
