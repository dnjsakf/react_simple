import axios from 'axios';

export function getQuestion(tablename, key){
  return axios.get(`/api/database/${tablename}`, {key});
}
export function test(test){
  console.log(test);
  return test;
}