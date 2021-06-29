<template>
    <div class="contact">
      <p>If you have any questions please send us an email.</p>
      <a href="mailto:talchaimkaddish@gmail.com">TalChaimKaddish@gmail.com</a>
    </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
.contact {
  text-align: center;
  
  background: #00007f;
  color: #fff;
  padding: 4em 0;
}
.contact > p {
  color: #fff;
  font-size: 1.5rem;
}
.contact > a {
  color: #fff;
  font-size: 1.25rem;
}
@media (max-width: 768px) {
  .contact {
    padding: 2em 0 4em;
  }
}
</style>
