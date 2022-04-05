<script>
export default {
  props: {
    icon: String, // file location of img
    iconAlt: String, // alt attr for img tag
    heading: String,
    body: String,
    bgColor: String, // using scss variables in colors.scss
  },
  data() {
    return {
      style: {
        "--cardColor": this.bgColor, // main color of this card component
      },
    };
  },
};
</script>

<template>
  <div class="card-wrapper" :style="{ backgroundColor: bgColor }">
    <img :src="icon" :alt="iconAlt" class="icon" />
    <h2 class="card-header">{{ heading.toUpperCase() }}</h2>
    <p class="copy">{{ body }}</p>
    <!-- add hover state for background and text color? -->
    <a href="#" class="card-button" :style="{ style }"> Learn More </a>
  </div>
</template>

<style lang="scss">
.card-wrapper {
  border-radius: 8px;
  padding: clamp(1.5rem, 3.2rem, 4rem);
}

.icon {
  width: 4.27rem;
  margin-bottom: 2.3rem;
}

.card-header {
  @include big-shoulders-display;
  font-size: 40px;
  line-height: 47.88px;
  margin-bottom: 1.7rem;
  color: $veryLightGray;
}

.copy {
  @include lexend-deca;
  line-height: 25px;
  color: $transparentWhite;
  margin-bottom: 5.5rem;
  min-height: 8.3rem;
  width: 14.1rem;
}

.card-button {
  @include lexend-deca;
  line-height: 25px;
  border: 0.13rem solid $veryLightGray;
  border-radius: 25px;
  text-decoration: none;
  padding: 1rem 2rem;

  // swap when hovering; uses props from parent
  background-color: $veryLightGray;
  color: var(--cardColor);

  &:hover {
    background-color: var(--cardColor);
    color: $veryLightGray;
  }
}
</style>
