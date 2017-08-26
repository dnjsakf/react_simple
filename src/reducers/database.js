// import {
//   DATABASE_GET_SUCCESS,
//   DATABASE_GET_FAILURE
// } from './ActionTypes';
// import update from 'react-addons-update';


// const initialState = {
//   result: false,
//   data: Object
// }

// export default function databaseProcess(state, action){
//   if(typeof state === 'undefined'){
//     state = initialState;
//   }
  
//   switch(action.type){
//     case DATABASE_GET_SUCCESS:
//       return update( state, {
//         result:{ $set: true },
//         data: { $set: action.data }
//       });
//     case DATABASE_GET_FAILURE:
//       return update( state, {
//         result: { $set: false }
//       });
//     default:
//       return state;
//   }
// };