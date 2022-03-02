'use strict';

let hour = ['6.am', '7.am'];

let  seattleObject = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  dailyTotal: 0,
  avgCookiesSoldEachHourArray:0,
  getRandomCustomers: function(){
    return Math.floor(Math.random)
  }
};

console.log(seattleObject.getRandomCustomers);