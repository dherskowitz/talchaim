<template>
  <footer class="footer">
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
