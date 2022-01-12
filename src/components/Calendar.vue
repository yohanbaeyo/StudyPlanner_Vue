<template>
  <div id="calendar-template">
    <button @click="displaySelectedDate(new Date())">현재 날짜로 이동</button>
    <div>
      <div id="calendar-container">
        <div style="display: flex; justify-content: space-evenly">
          <div id="left-arrow" @click="updateShowingDateByArrow">&lt;</div>
          <div style="flex-basis: 7rem; text-align: center"><h3 style="display: inline;">{{showingDate.getFullYear()}}년 {{showingDate.getMonth()+1}}월</h3></div>
          <div id="right-arrow" @click="updateShowingDateByArrow">&gt;</div>
        </div>
        <table id="calendar-table">
          <tr>
            <th v-for="(i1,idx) in ['S', 'M', 'T', 'W', 'T', 'F', 'S']" :key="idx" :class="'Day-'+idx">
              <p>{{i1}}</p>
            </th>
          </tr>
          <tr v-for="i in rowCnt" :key="i">
            <td v-for="j in 7" :key="j" :class="'Day-'+(j-1)" :id="'Date-'+(dateList[(i-1)*7+j-1]!==-1?dateList[(i-1)*7+j-1]:i*1000+j*100)" @click="updateSelectedDateByClick">
              <p v-if="(i-1)*7+j-1<dateList.length && dateList[(i-1)*7+j-1]!==-1" >{{dateList[(i-1)*7+j-1]}}</p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {ShowingType} from "@/Enums/Enums";

Date.prototype.toId = function() {
  return this.getMonth() + this.getFullYear() * 100
}

export default {
  name: "Calendar",
  props: {
    showingType: ShowingType,
  },
  data() {
    return {
      ShowingType: ShowingType,
      dateList: [],
      rowCnt: 0,
      selectedDate: new Date(),
      showingDate: new Date()

      // symb1: ShowingType.MONTHLY
    }
  },
  methods: {
    updateCalendarWithNewMonth() {
      let tmpDate = new Date(this.showingDate)
      tmpDate.setDate(tmpDate.getDate()-tmpDate.getDate()+1)
      while(tmpDate.getDay()!==0) {
        tmpDate.setDate(tmpDate.getDate()-1)
      }
      this.dateList=[]
      let goal = this.showingDate.toId()
      while(tmpDate.toId()<=goal) {
        if(tmpDate.toId()<goal) {
          this.dateList.push(-1)
        } else {
          this.dateList.push(tmpDate.getDate())
        }
        tmpDate.setDate(tmpDate.getDate()+1)
      }
      console.log(this.dateList)
      this.rowCnt=Math.ceil(this.dateList.length/7-0.0001)
    },
    changeSelectedDate(newDate) {
      if(this.selectedDate.toId() === this.showingDate.toId()) {
        let $td = document.getElementById("Date-"+this.selectedDate.getDate())
        if($td !== null) {
          $td.classList.remove("currantDate")
        }
      }
      this.selectedDate = newDate
      console.log(this.selectedDate)
      let $td = document.getElementById("Date-"+this.selectedDate.getDate())
      $td.classList.add("currantDate")
    },
    removeHighlighted(newDate) {
      if(this.showingDate.toId() === this.selectedDate.toId() && this.showingDate.toId() !== newDate.toId()) {
        let $td = document.getElementById("Date-"+this.selectedDate.getDate())
        $td.classList.remove("currantDate")
      }
    },
    addHighlighted() {
      if(this.showingDate.toId() === this.selectedDate.toId()) {
        let $td = document.getElementById("Date-"+this.selectedDate.getDate())
        $td.classList.add("currantDate")
      }
    },
    updateSelectedDateByClick(event) {
      console.log(event.currentTarget.id)
      const regex = /[^0-9]/g;
      const idx = event.currentTarget.id.replace(regex, "")
      if(idx>31 || idx<1) {
        return
      }
      this.changeSelectedDate(new Date(this.showingDate.getFullYear(), this.showingDate.getMonth(), idx))
    },
    updateShowingDateByArrow(event) {
      let newDate
      console.log(this.showingDate.getMonth())
      if(event.currentTarget.id === "left-arrow") {
        if(this.showingDate.getMonth() === 0) {
          newDate = new Date(this.showingDate.getFullYear()-1,11,1)
        } else {
          newDate = new Date(this.showingDate.getFullYear(),this.showingDate.getMonth()-1,1)
        }
      } else if(event.currentTarget.id === "right-arrow") {
        if(this.showingDate.getMonth() === 11) {
          newDate = new Date(this.showingDate.getFullYear()+1,0,1)
        } else {
          newDate = new Date(this.showingDate.getFullYear(),this.showingDate.getMonth()+1,1)
        }
      }
      console.log(newDate)
      this.removeHighlighted(newDate)
      this.showingDate=newDate
      this.updateCalendarWithNewMonth()
      this.$nextTick(this.addHighlighted)
    }
  },
  beforeMount() {
    this.updateCalendarWithNewMonth()
  },
  mounted() {
    this.addHighlighted()
  }
}
</script>

<style scoped>

#calendar-template {
  font-family: "Noto Sans", serif;
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
  /*border: 1px solid black;*/
}
#calendar-table th {
  border-bottom: 1px solid lightgray;
}

#calendar-table {
  /*border: 1px solid lightgray;*/
  border-collapse: collapse;
  font-size: 1.2rem;
  text-align: center;

}

#calendar-container {
  width: fit-content;
  background-color: rgba(255, 251, 226, 0.27);
  padding: 15px;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}

#calendar-container h3{
  text-align: center;
  padding-top: 1rem;
  width: fit-content;
  height: auto;
}

.currantDate {
  background-color: red;
  color: white;
}

</style>