import { Module } from "vuex";
import { RootState } from "../index";
import { boardType, boardDesc } from './board.type'


export const ModuleBoard: Module<boardType, RootState> = {
    state: {
        boardData: [
            {
                tit: 'title',
                desc: 'board desc'
            }
        ]
    },
    mutations: {
        BOARD_UPDATE(state: boardType, payload: boardDesc) {
            state.boardData.push(payload)
        }
    },
    actions: {
        boardUpdate({ state, commit, rootState }, payload) {
            console.log(state, rootState)
            commit('BOARD_UPDATE', payload)
        }
    },
    getters: {
        boardList: (state, rootGetter, rootState) => {
            console.log(rootGetter)
            console.log(rootState)
            return state.boardData
        }
    }

}