<template>
  <div id="app">
    <div style="display: flex">
      <NavBar></NavBar>
      <Calendar :showing-type="showingType" v-if="showingType===ShowingType.MONTHLY"></Calendar>
    </div>
  </div>
</template>

<script>

// import HelloWorld from "@/components/HelloWorld";
import Calendar from "@/components/Calendar";
import {ShowingType} from "@/Enums/Enums"
import NavBar from "@/components/NavBar";

function setScreenSize() {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--realVh', `${vh}px`)
}

export default {
  name: 'App',
  components: {
    NavBar,
    // HelloWorld,
    Calendar,
  },
  data() {
    return {
      showingType: ShowingType.MONTHLY,
      ShowingType: ShowingType
    }
  },
  methods: {

  },
  mounted() {
    setScreenSize()
    window.addEventListener('resize', ()=>setScreenSize())
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
