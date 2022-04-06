<script setup>
import ProductCard from "./components/ProductCard.vue";
</script>

<template>
  <main>
    <div class="card-container">
      <ProductCard
        heading="Sedans"
        body="Choose a sedan for its affordability and excellent fuel economy.
              Ideal for cruising in the city or on your next road trip."
        icon="icon-sedans.svg"
        icon-alt="icon of sedan automobile"
        bgColor="hsl(31, 77%, 52%)"
      />

      <ProductCard
        heading="SUVs"
        body="Take an SUV for its spacious interior, power, and versatility.
              Perfect for your next family vacation and off-road adventures."
        icon="icon-suvs.svg"
        icon-alt="icon of sports utility vehicle"
        bgColor="hsl(184, 100%, 22%)"
      />

      <ProductCard
        heading="Luxury"
        body="Cruise in the best car brands without the bloated prices.
              Enjoy the enhanced comfort of a luxury rental and arrive in style."
        icon="icon-luxury.svg"
        icon-alt="icon of luxury automobile"
        bgColor="hsl(179, 100%, 13%)"
      />
    </div>
  </main>

  <footer>
    <div class="attribution">
      Challenge by
      <a
        href="https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-"
        target="_blank"
        rel="noopener noreferrer"
        >Frontend Mentor</a
      >. Code by
      <a
        href="https://github.com/bradleyhop/frontend-mentor-3-col-preview-card/tree/main"
        target="_blank"
        rel="noopener noreferrer"
        >Bradley Smith</a
      >.
    </div>
  </footer>
</template>

<style lang="scss">
.card-container {
  display: grid;

  @include desktop-breakpoint {
    grid-template-columns: repeat(3, 1fr);
  }
}

.attribution {
  @include lexend-deca;
  font-size: 0.75rem;
  margin: 1rem auto;
  text-align: center;
  width: clamp(50%, 65%, 100%);

  @include desktop-breakpoint {
    margin-bottom: 0;
  }

  & a {
    text-decoration: none;
    color: black;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
