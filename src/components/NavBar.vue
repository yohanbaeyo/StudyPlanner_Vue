<template>
  <ul id="nav-bar" class="nav-collapsed" @mouseenter="toggleNavCollapsed" @mouseleave="toggleNavCollapsed">
    <li><span class="material-icons md-24" style="color: white" >menu</span></li>
    <li><router-link to="/"><span class="material-icons md-24" style="color: white">home</span><span class="nav-bar-span nav-collapsed" style="margin-left: 0.5rem">HOME</span></router-link></li>
    <li @click="$emit('changeShowingType', ShowingType.MONTHLY)"> <router-link to="/monthly"><span class="material-icons md-24" style="color: white">calendar_month</span><span class="nav-bar-span nav-collapsed" style="margin-left: 0.5rem">MONTHLY</span></router-link></li>
    <li @click="$emit('changeShowingType', ShowingType.WEEKLY)"> <router-link to="/weekly"><span class="material-icons md-24" style="color: white">date_range</span><span class="nav-bar-span nav-collapsed" style="margin-left: 0.5rem">WEEKLY</span></router-link></li>
  </ul>
</template>

<script>

import {ShowingType} from "@/Enums/Enums";

export default {
  name: "NavBar",
  data() {
    return{
      navCollapsed: true,
      ShowingType: ShowingType
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
    },
    clickParams() {
      this.$parent.$router.push({
        name: 'Monthly',
        params: {showingType: this.showingType}
      })
    },
    forDebug() {
      console.log("DASDSADAD")
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
  transition: width 0.7s;
  overflow: hidden;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}

ul.nav-collapsed {
  width: calc(48px + 0.5rem);
  transition: width 0.5s;
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
  transition: width 0.7s;
  text-align: start;
  padding-left: 0;
}

span.nav-bar-span {
  width: 4.5rem;
}

span.nav-collapsed {
  width: 0;
  overflow: hidden;
  transition: width 0.5s;
}

li span {
  vertical-align: center;
}

</style>