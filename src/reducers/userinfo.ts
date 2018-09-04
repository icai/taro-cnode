import { GET, SET } from '../constants/userinfo'

const INITIAL_STATE = {
  user: {}
}

export default function userInfo (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET:
      return {
        ...state
      }
     case SET:
      state.user = action.user
     default:
       return state
  }
}
