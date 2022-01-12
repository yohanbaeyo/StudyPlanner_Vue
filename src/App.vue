<template>
  <div id="app">
    <h1>Study Planner</h1>
    <Calendar :showing-type="showingType" v-if="showingType===ShowingType.MONTHLY"></Calendar>
  </div>
</template>

<script>

// import HelloWorld from "@/components/HelloWorld";
import Calendar from "@/components/Calendar";
import {ShowingType} from "@/Enums/Enums"

export default {
  name: 'App',
  components: {
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

  }
}
</script>

<style>

</style>
