import {
  GET,
  SET
} from '../constants/userinfo'

export const get = () => {
  return {
    type: GET
  }
}
export const set = (obj) => {
  return {
    type: SET,
    ...obj
  }
}

// 异步的action
// export function asyncAdd () {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch(add())
//     }, 2000)
//   }
// }
