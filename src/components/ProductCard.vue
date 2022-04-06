<script setup>
const props = defineProps({
  icon: String, // file name of img (as string)
  iconAlt: String, // alt attr for img tag
  heading: String,
  body: String,
  bgColor: String, // main color of card
});

// main color of this card component; reference in <style>
const style = {
  cardColor: props.bgColor,
};

// import card image
// NOTE: image will not render for npm run preview; vite bug? renders for dev
// and build, tho
const imgUrl = new URL(`../assets/images/${props.icon}`, import.meta.url).href;
</script>

<template>
  <article class="card-wrapper">
    <img :src="imgUrl" :alt="props.iconAlt" class="icon-img" />
    <h2 class="card-header">{{ props.heading.toUpperCase() }}</h2>
    <p class="copy">{{ props.body }}</p>
    <a href="#" class="card-button"> Learn More </a>
  </article>
</template>

<style lang="scss">
$card-color: v-bind("style.cardColor");

.card-wrapper {
  border-radius: 8px;
  padding: clamp(1.5rem, 3.2rem, 4rem);
  background-color: $card-color;
}

.icon-img {
  width: 4.27em;
  height: 2.67em;
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
  color: $card-color;

  &:hover {
    background-color: $card-color;
    color: $veryLightGray;
  }
}
</style>
