<template >
<div class="App-container">
  <nav>
    <ul class="nav-flex">
      <router-link to='/' class="li">Home</router-link>
      <router-link to='/repos' class="li">Repos</router-link >
      <router-link to='/search' class="li">Search</router-link>
    </ul>
  </nav>
    <router-View />

    <!-- <footer>Created With ❤ By Victor Patrick </footer> -->
</div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.active{
  color: red;
}

.App-container{
  display: flex;
  flex-direction: column;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}


  header {
    display: flex;
    place-items: center;
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .nav-flex{
    display: flex;
    
  }

  nav{
    width: 100%;
    background-color: rgb(36, 9, 61);
    /* position: fixed;
    top: 0;
    z-index: 10; */
  }

  .li{
    list-style-type: none;
    cursor: pointer;
    padding: 10px;
    background-color: rgb(36, 9, 61);
    color: aqua;
    text-align: center;
  }
  .li:hover{
    font-weight: bold;
    background-color: aqua;
    color: rgb(36, 9, 61);
  }



  footer{
    text-align: center;
    color: aqua;
    position: fixed;
    bottom: 20px;
    left: 20%;
    right: 20%;
  }

  @media (max-width: 600px){
    nav{
      padding-left: 10%;
    }

  }



</style>
