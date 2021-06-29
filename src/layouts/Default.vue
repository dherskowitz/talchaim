<template>
  <div>
    <span id="top"></span>
    <!-- <header class="header">
      <strong>
        <g-link class="nav__link" to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
      </nav>
    </header> -->
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  padding-top: 50px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background: #00007f;
}

.nav__link {
  margin-left: 20px;
  color: #fff;
}
</style>
