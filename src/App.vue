<template>
  <nav>
    <router-link to="/signup">SignUp</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/">Home</router-link> |
  </nav>
  <router-view />
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #8abaeb;
  margin-top: 60px;
}

nav {
  padding: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

nav a {
  font-weight: bold;
  color: #4099f3;
  text-decoration: none;
  margin: 0 10px;
}

nav a.router-link-exact-active {
  color: #77f1ba;
}
</style>