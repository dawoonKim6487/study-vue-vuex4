import { createStore } from "vuex";
import { userInfoType } from "./autho/autho.type"
import { boardType } from './board/board.type';
import { ModuleUserInfo } from './autho'
import { ModuleBoard } from './board/index'

export interface RootState {
  ModuleUserInfo: userInfoType;
  ModuleBoard: boardType;
}

export default createStore({

  modules: {
    ModuleUserInfo, ModuleBoard
  },
});
