<template>
  <header class="header">
  <h1 id="title">Lavish Scents</h1>

    <nav class="nav">
      <ul class="nav-links">
        <li class="link">
          <router-link to="/">AllProducts</router-link>
        </li>
        <li class="link">
          <router-link to="/hers">Hers</router-link>
        </li>
        <li class="link">
          <router-link to="/his">His</router-link>
        </li>
      </ul>
    </nav>
    <slot></slot>
  </header>
</template>

<script>
export default {
};
</script>

<style scoped>
  .header {
    width: 100%;
    height: 70px;
    background-color: #333333;
    box-sizing: border-box;
    padding: .5em;
    padding-left:30px;
    display: flex;
    margin-bottom:20px;

    align-items: center;
  }

  .nav {
    width: 700px;

  }

  .nav-links {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  .link {
    list-style: none;
    padding: 0 2em;
  }
    #title{padding: 10px;color:white;margin-right:70px;}




.link a:hover {
  color: hotpink;
  }

  .link a {
    color: #fff;
    text-decoration: none;
  }
</style>
