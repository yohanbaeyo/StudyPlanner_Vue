<template>
  <div id="app">
    <h1>Hello World!!</h1>
    <button @click="addItem($event)">매물 추가</button>
    <ul>
      <li v-for="i in cnt" :key="i" :id="'item-'+(i-1)" class="room-item">
        <img src="./assets/room0.jpg" class="room-img">
        <h4 :style="myColor">{{ name[i-1] }} 원룸</h4>
        <p>{{price[i-1]}} 만원</p>
        <button @click="modifyItem">변경</button>
      </li>
    </ul>
<!--    <HelloWorld msg="Welcome"></HelloWorld>-->
  </div>
</template>

<script>

// import HelloWorld from "@/components/HelloWorld";

export default {
  name: 'App',
  components : {
    // HelloWorld,
  },
  data() {
    return {
      cnt : 0,
      price : [],
      name : [],
      myColor : "color: blue"
    }
  },
  methods : {
    addItem() {
      this.cnt++
      this.name.push("No Name")
      this.price.push(0)
    },
    modifyItem(event) {
      const target = event.currentTarget.parentElement
      // const target = event.currentTarget
      // target.style.display="none";
      // console.log(target.id)
      const regex = /[^0-9]/g;
      const idx = target.id.replace(regex, "")
      if(+idx>=this.cnt) {
        return
      }
      let newName = prompt("What's the new name?", "No Name")
      let newPrice = Number(prompt("What's the new cost?", "0"))
      if (isNaN(newPrice)) {
        newPrice = "등록되지 않음"
      }
      this.$set(this.name, idx, newName)
      this.$set(this.price, idx, newPrice)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
li {
  list-style-type: none;
}

.room-item {
  width: 40rem;
  align-self: center;
}

.room-img {
  width: 100%;
  margin-top: 1rem;
}
</style>
