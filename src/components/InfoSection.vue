<template>
  <section class="info">
    <div class="info__content">
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
  background-image: url(/bg1.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 3;
  color: #fff;
  font-size: 1.5em;
}
.info::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background: rgba(0, 0, 0, 0.5);
}
.info__content {
  width: 45em;
  margin: 1em auto;
}
</style>