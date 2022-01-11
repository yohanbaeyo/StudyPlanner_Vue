<template>
  <div id="app">
    <h1>Hello World!!</h1>
    <Calendar :showing-date="showingDate" :showing-type="showingType"></Calendar>
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
      showingDate: new Date(),
      showingType: ShowingType.MONTHLY
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
