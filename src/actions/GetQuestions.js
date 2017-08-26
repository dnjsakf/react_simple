// import {
//   QUESTION_GET_ALL,
//   QUESTION_GET_TITLE,
  
//   DATABASE_GET_SUCCESS,
//   DATABASE_GET_FAILURE

// } from './ActionTypes';

// import axios from 'axios';

// export function databaseGetRequest(tableName, dataKey){
//   switch(tableName){
//     case 'questions':
//       return (dispatch)=>{
//         return axios.get(`/database/${tableName}`,{dataKey})
//             .then((response)=>{
//               if(response.success){
//                 dispatch(databaseGetSuccess(response.data));
//               } else {
//                 dispatch(databaseGetFailure());
//               }
//             })
//             .cach((error)=>{
//               dispatch(databaseGetFailure());
//             });
//       }
//     default:
//       return databaseGetFailure();
//   }
// };

// export function databaseGetSuccess(data){
//   return {
//     type: DATABASE_SUCCESS,
//     data
//   }
// };

// export function databaseGetFailure(){
//   return {
//     type: DATABASE_GET_FAILURE
//   }
// };