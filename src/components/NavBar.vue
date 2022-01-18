<template>
  <ul id="nav-bar" class="nav-collapsed" @mouseleave="makeNavCollapsed">
    <li style="margin-top: 0.75rem"  @mouseenter="makeNavNotCollapsed"><span class="material-icons md-24" style="color: white" >menu</span></li>
    <li :class="{'router-link-parent-exact-active' : subIsActive('/')}"><router-link  @click.native="$emit('changeShowingType', ShowingType.HOME)" :to="{name: 'Index'}"><span class="material-icons md-24" style="color: white">home</span><span class="nav-bar-span nav-collapsed" style="margin-left: 0.5rem">HOME</span></router-link></li>
    <li :class="{'router-link-parent-exact-active' : subIsActive('/todo')}"> <router-link @click.native="$emit('changeShowingType', ShowingType.TASK)" to="/todo"><span class="material-icons md-24" style="color: white">task_alt</span><span class="nav-bar-span nav-collapsed" style="margin-left: 0.5rem">TASKS</span></router-link></li>
    <li :class="{'router-link-parent-exact-active' : subIsActive('/monthly')}"> <router-link @click.native="$emit('changeShowingType', ShowingType.MONTHLY)" to="/monthly"><span class="material-icons md-24" style="color: white">calendar_month</span><span class="nav-bar-span nav-collapsed" style="margin-left: 0.5rem">MONTHLY</span></router-link></li>
    <li :class="{'router-link-parent-exact-active' : subIsActive('/weekly')}"> <router-link @click.native="$emit('changeShowingType', ShowingType.WEEKLY)" to="/weekly"><span class="material-icons md-24" style="color: white">date_range</span><span class="nav-bar-span nav-collapsed" style="margin-left: 0.5rem">WEEKLY</span></router-link></li>
    <li :class="{'router-link-parent-exact-active' : subIsActive('/daily')}"> <router-link @click.native="$emit('changeShowingType', ShowingType.DAILY)" to="/daily"><span class="material-icons md-24" style="color: white">today</span><span class="nav-bar-span nav-collapsed" style="margin-left: 0.5rem">DAILY</span></router-link></li>
  </ul>
</template>

<script>

import {ShowingType} from "@/Classes/Enums";

export default {
  name: "NavBar",
  data() {
    return{
      navCollapsed: true,
      ShowingType: ShowingType
    }
  },
  methods: {
    makeNavCollapsed() {
      let $ul = document.getElementById("nav-bar")
      $ul.classList.add("nav-collapsed")
      let $spans = document.getElementsByClassName("nav-bar-span")
      for (let $span of $spans) {
        $span.classList.add("nav-collapsed")
      }
      // console.log($ul.classList)
      this.navCollapsed = true
      this.$emit('navCollapsed', false)
    },
    makeNavNotCollapsed() {
      let $ul = document.getElementById("nav-bar")
      $ul.classList.remove("nav-collapsed")
      let $spans = document.getElementsByClassName("nav-bar-span")
      for (let $span of $spans) {
        $span.classList.remove("nav-collapsed")
      }
      // console.log($ul.classList)
      this.navCollapsed = false
      this.$emit('navCollapsed', true)
    },
    toogleNavCollapsed() {
      let $ul = document.getElementById("nav-bar")
      $ul.classList.toggle("nav-collapsed")
      let $spans = document.getElementsByClassName("nav-bar-span")
      for (let $span of $spans) {
        $span.classList.toggle("nav-collapsed")
      }
      // console.log($ul.classList)
      this.$emit('navCollapsed', this.navCollapsed)
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
    },
    subIsActive(input) {
      const paths = Array.isArray(input) ? input : [input]
      return paths.some(path => {
        return (this.$route.path.indexOf(path) === 0 && (this.$route.path.length===input.length || this.$route.path[input.length]==='/')) // current path starts with this path string
      })
    }
  },
}
</script>

<style scoped>
ul {
  text-decoration: none;
  list-style-type: none;
  padding-left: 0;
  background-color: #e5676d;
  margin-top: 0;
  height: calc(var(--realVh) * 100);
  width: 10rem;
  transition: width 0.7s;
  overflow: hidden;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  position: fixed;
  top: 0; left: 0;
}

ul.nav-collapsed {
  width: calc(48px + 0.5rem);
  transition: width 0.5s;
}

ul li{
  display: block;
  color: white;
  font-size: 1.2rem;
  height: 1.5rem;
  overflow: hidden;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1rem ;

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

.router-link-parent-exact-active {
  background-color: #961616;
}

</style>