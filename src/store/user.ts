import { Module } from "vuex";
import { GlobalDataProps  } from './index'
export interface UserDataProps {
  username?: string;
  id?: string;
  phoneNumber?: string;
  nickName?: string;
  description?: string;
  updatedAt?: string;
  createdAt?: string;
  iat?: number;
  exp?: number;
  picture?: string;
  gender?: string;
}
export interface UserProps {
  isLogin: boolean;
  token?: string;
  data: UserDataProps;
}

const user: Module<UserProps,GlobalDataProps> = {
  state: {
    isLogin:false,
    data:{},
    token: localStorage.getItem('token') || ''
  },

 mutations:{
  },
  actions:{

  }
}

export default user