<template>
  <section class="info" id="info">
    <div class="info__content">
      <h2 class="info__title">About Kaddish Services</h2>
      <p>Our tradition teaches that following death the soul ascends and is judged according to its deeds while alive in the physical realm. Everything accomplished by the soul, both positive and negative, is carefully considered. One of the greatest legacies one can leave behind is a family that has been inspired to serve G‑d, even during times of distress.</p>
      <p>When in the midst of this judgment the hallowed words of Kaddish ascend, uttered by those who grieve most intensely, this serves as a great merit for the soul. It is for this same reason that many undertake to do mitzvot in honor and memory of those who have passed away. They are seeking to prove that the departed is truly a worthy soul deserving of a lichtig Gan Eden, a "luminous Paradise."</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "InfoSection"
};
</script>

<style scoped>
.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  z-index: 3;
  /* color: #fff; */
  padding: 2em 0 4em;
}

.info__title {
  font-size: 2.5rem;
  text-decoration: underline;
}
.info__content {
  width: 50em;
  margin: 1em auto;
  max-width: 100%;
}
.info__content > p {
  padding: 0;
  font-size: 1.25rem;
}

@media (max-width: 768px) {
  .info {
    padding: 0em 1em 1em;
  }
}
</style>
