<template>
  <div class="menu-wrapper">
    <ul>
      <li>
        <router-link to="/about" class="no-underline link">about</router-link>
      </li>
      <li>
        <router-link to="/" class="no-underline link">Home</router-link>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="sass">
.menu-wrapper
  ul
    display: flex
    flex-direction: row
    gap: 10px
    color: white
    list-style: none
    li
      display: block
      margin: 5px 10px
      .link
        color: white
        &:hover
          color: green

.no-underline
  text-decoration: none
</style>