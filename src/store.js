import Vue from 'vue';
import Vuex from 'vuex';
// import DB from './data.json'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state : {
        todoList : [],
        subjectList : {
/*
            LINEAR_ALGEBRA: "선대",
            NUMBER_THEORY: "정수론",
            COMPUTER_PROGRAMMING: "컴프",
            INFORMATICS_PROJECTS: "정프",
            PRINCIPLE_OF_PHYSICS: "일반물리",
            MATH_3: "수3",
            MATH_4: "수4",
            CALCULUS_1: "미적분1",
            CALCULUS_2: "미적분2",
*/
        },
    },
    mutations : {
        addNewToDoItem(state, newToDoItem) {
            state.todoList.push(newToDoItem)
        },
        addNewSubject(state, newSubject) {
            state.subjectList[newSubject.toString()] = newSubject.toString()
        },
        addNewSubjectWithDescription(state, newSubject, description) {
            state.subjectList[newSubject.toString()] = description
        },
        loadDB(state, data) {
            state.todoList = data.todoList
            state.subjectList = data.subjectList
        }
    },
    actions: {
        dbInit({commit}, DB) {
            const res = DB
            const subjectList = JSON.parse(JSON.stringify(res.subjectList))
            const todoList = res.todoList.map(d=> ({
                title: d.title,
                dueDate: d.dueDate,
                isDone: d.isDone,
                subject:d.subject
            }))
            const data = {todoList: todoList, subjectList: subjectList};
            commit('loadDB', data)
        }
    }
})