<template>
  <ul id="nav-bar" class="nav-collapsed">
    <li>
      <span class="material-icons md-24" style="color: white" @click="toggleNavCollapsed">menu</span>
    </li>
    <li><a href="./home"><span class="material-icons md-24" style="color: white">home</span><span class="nav-bar-span nav-collapsed" style="margin-left: 0.5rem">HOME</span></a></li>
    <li><a href="./monthly"><span class="material-icons md-24" style="color: white">calendar_month</span><span class="nav-bar-span nav-collapsed" style="margin-left: 0.5rem">MONTHLY</span></a></li>
    <li><a href="./weekly"><span class="material-icons md-24" style="color: white">date_range</span><span class="nav-bar-span nav-collapsed" style="margin-left: 0.5rem">WEEKLY</span></a></li>
  </ul>
</template>

<script>

export default {
  name: "NavBar",
  data() {
    return{
      navCollapsed: true
    }
  },
  methods: {
    toggleNavCollapsed() {
      let $ul = document.getElementById("nav-bar")
      $ul.classList.toggle("nav-collapsed")
      let $spans = document.getElementsByClassName("nav-bar-span")
      for (let $span of $spans) {
        $span.classList.toggle("nav-collapsed")
      }
      console.log($ul.classList)
      this.navCollapsed = !(this.navCollapsed)
    }
  },
}
</script>

<style scoped>
ul {
  text-decoration: none;
  list-style-type: none;
  padding-left: 0;
  background-color: #e86467;
  margin-top: 0;
  height: calc(var(--realVh) * 100);
  width: 10rem;
  transition: 0.7s;
  overflow: hidden;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}

ul.nav-collapsed {
  width: calc(48px + 0.5rem);
  transition: 0.5s;
}

ul li{
  display: block;
  margin-top: 1.5rem;
  margin-left: 1rem ;
  color: white;
  font-size: 1.2rem;
  height: 1.5rem;
  overflow: hidden;
}
ul li a {
  display: flex;
  color: white;
}

span {
  width: 1.5rem;
  transition: 0.7s;
  text-align: start;
  padding-left: 0;
}

span.nav-bar-span {
  width: 4.5rem;
}

span.nav-collapsed {
  width: 0;
  overflow: hidden;
  transition: 0.5s;
}


</style>