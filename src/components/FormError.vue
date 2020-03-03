<template>
  <div class="error">{{message}}</div>
</template>

<script>
export default {
  name: "FormError",
  props: ["message"]
};
</script>

<style scoped>
.error {
    background: red;
    margin-top: 0.5em;
    padding: 0.25em 0.75em;
}
</style>