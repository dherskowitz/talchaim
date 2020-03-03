<template>
  <footer class="footer">
    <div class="contact">
      <p>If you have any questions please send us an email.</p>
      <a href="mailto:talchaimkaddish@gmail.com">TalChaimKaddish@gmail.com</a>
    </div>
    <div class="copyright">&copy; Copyright {{currentYear}} Tal Chaim</div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
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
.copyright {
  text-align: center;
  font-size: 0.75rem;
  background: #232528;
  color: #fff;
  padding: 1em 0;
}
@media (max-width: 768px) {
  .contact {
    padding: 2em 0 4em;
  }
}
</style>