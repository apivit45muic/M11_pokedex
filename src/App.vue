<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/" class="nav-link">Home</RouterLink>
          <RouterLink to="/about" class="nav-link">About</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
#layout {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  background-color: #34495e;
  padding: 15px 0;
}

.wrapper {
  width: 80%;
  margin: 0 auto;
}

nav {
  display: flex;
  justify-content: center;
}

.nav-link {
  font-weight: bold;
  color: #ecf0f1;
  margin: 0 15px;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-link:hover, .nav-link.router-link-exact-active {
  color: #42b983;
}
</style>
