<template>
  <section class="banner">
    <div class="banner__caption">
      <h1 class="banner__title">Kaddish services for your loved one</h1>
      <h2 class="banner__subtitle">In loving memory of Vital Lindsay-Bowman & Talya Solomon</h2>
      <p
        class="banner__content"
      >Dedicated to the memory of our precious Winnie and Talya who both taught us the meaning of positivity, generosity, kindness, acceptance, resilience, laughter, forgiveness and a love of life. Thank you to you both for encouraging us to be our better selves.</p>
    </div>
    <g-image class="banner__image" src="~/images/tal.jpg" width="500" />
  </section>
</template>

<script>
export default {
  name: "Banner"
};
</script>

<style scoped>
.banner {
  background: #00007f;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 4em;
  justify-content: space-around;
}
.banner__caption {
  width: 40em;
}
.banner__image {
  max-width: 100%;
  width: 300px;
}
.banner__title {
  font-size: 2em;
  margin: 0.67em 0;
}
.banner__subtitle {
  font-size: 1em;
}
.banner__content {
}
</style>