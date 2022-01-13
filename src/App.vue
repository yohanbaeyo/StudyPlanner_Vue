<template>
  <div id="app">
    <div style="display: flex">
      <NavBar @changeShowingType="changeShowingType"></NavBar>
<!--      <MonthlyCalendar :showing-type="showingType" v-if="showingType===ShowingType.MONTHLY"></MonthlyCalendar>-->
      <router-view ></router-view>
    </div>

  </div>
</template>

<script>

// import HelloWorld from "@/components/HelloWorld";
import {ShowingType} from "@/Enums/Enums"
import NavBar from "@/components/NavBar";
// import MonthlyCalendar from "@/components/MonthlyCalendar";

function setScreenSize() {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--realVh', `${vh}px`)
}

export default {
  name: 'App',
  components: {
    NavBar,
    // HelloWorld,
    // MonthlyCalendar
  },
  data() {
    return {
      showingType: ShowingType.WEEKLY,
      ShowingType: ShowingType
    }
  },
  mounted() {
    setScreenSize()
    window.addEventListener('resize', ()=>setScreenSize())
  },
  methods: {
    changeShowingType(newShowingType) {
      console.log(newShowingType)
      this.showingType = newShowingType
    }
  }

}
</script>

<style>
* {
  text-decoration: none;
  margin: 0;
}
#app {
  margin: 0;
  padding: 0;
}
</style>
