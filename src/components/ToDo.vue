<template>
  <div class="task-container">
    <div class="task-title-container">
      <h1>To Do</h1>
    </div>
    <ul>
      <li v-for="it in $store.state.todoList" :key="it">
        <div class="task-item-container">
          {{it}}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Tasks",
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.task-container > ul{
  list-style-type: none;
  padding-left: 0;
}

.task-container > ul > li{
  align-content: center;
}

.task-item-container {
  background-color: beige;
  height: 7vh;
  width: 40vw;
  margin-top: 1rem;
  /*
  position: sticky;
  top: 10rem;
  */
}

/*.task-title-container{
  background-color: white;
  position: sticky;
  !*height: 6rem;*!
  top: 1.5rem;
  !*background-color: red;*!
  !*align-items: end;*!
  !*display: flex;*!
}*/

.task-title-container {
  position: sticky;
  top: 1.5rem;
  background-color: white;
}

.task-title-container > h1 {
  /*background-color: green;*/
  /*margin-top: 6rem;*/
  /*height: 6rem;*/
}
</style>

<!--TODO: 여기서 task 만드는 모달 혹은 우측 창, 그리고 이를 state.js에 업데이트-->