<template>
  <div id="app">
    <button @click="addToDo" style="position: fixed; z-index: 1000">asadas</button>
    <div  ref="back" style="display: none; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.7); z-index: 5">
    </div>
    <div style="position: fixed; top: 0; left: 0;z-index: 1; width: 100vw; height: 1.5rem; background-color: white"></div>
    <div>
      <NavBar @changeShowingType="changeShowingType" @navCollapsed="changeNavCollapsed" style="z-index: 5"></NavBar>
      <!--      <MonthlyCalendar :showing-type="showingType" v-if="showingType===ShowingType.MONTHLY"></MonthlyCalendar>-->
      <router-view style="margin-left: calc(48px + 2rem); margin-top: 1.5rem; margin-right: 1.5rem; height: calc(var(--newVh, 1vh) * 100 - 3rem);"></router-view>
    </div>

  </div>
</template>

<script>

// import HelloWorld from "@/components/HelloWorld";
import {ShowingType} from "@/Classes/Enums"
import NavBar from "@/components/NavBar";
import {ToDoItem} from "@/Classes/ToDoItem";
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
    },
    changeNavCollapsed(willOpen) {
      if(willOpen) {
        this.$refs.back.style.display = 'block'
      } else {
        this.$refs.back.style.display = 'none';
      }
    },
    addToDo() {
      let test = new ToDoItem("SSD", new Date(), )
      this.$store.commit('addNewToDoItem', test);
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
  font-family: "Noto Sans KR", sans-serif;

}
</style>
