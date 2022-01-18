import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)



export const store = new Vuex.Store({
    state : {
        taskList : [],
        subjectList : {
            LINEAR_ALGEBRA: "선대",
            NUMBER_THEORY: "정수론",
            COMPUTER_PROGRAMMING: "컴프",
            INFORMATICS_PROJECTS: "정프",
            PRINCIPLE_OF_PHYSICS: "일반물리",
            MATH_3: "수3",
            MATH_4: "수4",
            CALCULUS_1: "미적분1",
            CALCULUS_2: "미적분2",
        },
    },
    mutations : {
        addNewToDoItem(state, newToDoItem) {
            state.taskList.push(newToDoItem)
        },
        addNewSubject(state, newSubject) {
            state.subjectList[newSubject.toString()] = newSubject.toString()
        },
        addNewSubjectWithDescription(state, newSubject, description) {
            state.subjectList[newSubject.toString()] = description
        },
        setDB(state, data) {
            state.taskList = data.taskList
            state.subjectList = data.subjectList
        }
    }
})