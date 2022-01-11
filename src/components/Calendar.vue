<template>
  <div id="calendar-template">
    <p>HEllo World!</p>
    <p>{{showingDate}}</p>
<!--
    <p>{{showingType===ShowingType.MONTHLY}}</p>
    <p>{{showingType===symb1}}</p>
-->
    <button @click="updateSelectedDate"></button>
    <div id="calendar-container">
      <h3>{{showingDate.getFullYear()}}년 {{showingDate.getMonth()+1}}월</h3>
      <table id="calendar-table">
        <tr>
          <th v-for="(i1,idx) in ['S', 'M', 'T', 'W', 'T', 'F', 'S']" :key="idx" :class="'Day-'+idx">
            <p>{{i1}}</p>
          </th>
        </tr>
        <tr v-for="i in rowCnt" :key="i">
          <td v-for="j in 7" :key="j" :class="'Day-'+(j-1)" :id="'Date-'+(dateList[(i-1)*7+j-1]!==-1?dateList[(i-1)*7+j-1]:i*1000+j*100)">
            <p v-if="(i-1)*7+j-1<dateList.length && dateList[(i-1)*7+j-1]!==-1" >{{dateList[(i-1)*7+j-1]}}</p>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import {ShowingType} from "@/Enums/Enums";

export default {
  name: "Calendar",
  props: {
    showingDate: Date,
    showingType: ShowingType,
  },
  data() {
    return {
      ShowingType: ShowingType,
      dateList: [],
      rowCnt: 0,
      selectedDate: new Date()
      // symb1: ShowingType.MONTHLY

    }
  },
  methods: {
    dateToId(date) {
      return date.getMonth() + date.getFullYear() * 100
    },
    changeDateList() {
      let tmpDate = new Date(this.showingDate)
      tmpDate.setDate(tmpDate.getDate()-tmpDate.getDate()+1)
      while(tmpDate.getDay()!==0) {
        tmpDate.setDate(tmpDate.getDate()-1)
      }
      this.dateList=[]
      let goal = this.dateToId(this.showingDate)
      while(this.dateToId(tmpDate)<=goal) {
        if(this.dateToId(tmpDate)<goal) {
          this.dateList.push(-1)
        } else {
          this.dateList.push(tmpDate.getDate())
        }
        tmpDate.setDate(tmpDate.getDate()+1)
      }
      console.log(this.dateList)
      this.rowCnt=Math.ceil(this.dateList.length/7-0.0001)
    },
    updateSelectedDate() {
      if(this.dateToId(this.showingDate)===this.dateToId(this.selectedDate)) {
        let $selectedOne = document.getElementById("Date-"+(this.selectedDate.getDate()))
        $selectedOne.classList.add("crrntDate")
        console.log(this.selectedDate.getDate())
      } else {
        let $selectedOne = document.getElementById("Date-"+(this.selectedDate.getDate()))
        $selectedOne.classList.remove("crrntDate")
      }
    }
  },
  beforeMount() {
    this.changeDateList()
  }
}
</script>

<style scoped>

#calendar-template {
  font-family: "Noto Sans";

}

.Day-0 {
  color: red;
}
.Day-6 {
  color: blue;
}

#calendar-table td, th{
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;
  /*border: 1px solid black;*/
}
#calendar-table th {
  border-bottom: 1px solid lightgray;
}

#calendar-table {
  /*border: 1px solid lightgray;*/
  border-collapse: collapse;
  font-size: 1rem;

}

#calendar-container {
  width: fit-content;
  background-color: rgba(255, 251, 226, 0.27);

}

#calendar-container h3{
  text-align: center;
  padding-top: 1rem;
}

.crrntDate {
  background-color: red;
  color: white;
}

</style>