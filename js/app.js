'use strict';
//link repository and deploy text

// DONE Stores the min/max hourly customers, and the average cookies per customer, in object properties

// DONE Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// DONE Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// DONE Store the results for each location in a separate array… perhaps as a property of the object representing that location

// DONE Display the values of each array as unordered lists in the browser

// DONE Calculating the sum of these hourly totals; your output for each location should look like this:
let hour = ['6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'];
const storeList = document.getElementById('seattle');
const storeTable = document.getElementById('table');
const storeHead = document.getElementById('head');
const storeFoot = document.getElementById('foot');

// let seattleObject = {
//   name: 'Seattle',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   dailyTotal: 0,
//   avgCPH: [],

//   getRandomCustomers: function () { // + Random number of customers function
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   perCust: function () { // + Customer # * average sales for expected cookies sold
//     return Math.round(this.getRandomCustomers() * this.avg);
//   },

//   saleAlg: function () { // Push cookie sales to array for every hour
//     for (let i = 0; i < hour.length; i++) {
//       let customerThisHour = this.perCust();
//       this.avgCPH.push(customerThisHour);
//       // console.log(customerThisHour);
//     }// something wrong up here
//     return this.customerThisHour;
//   },

//   cookiesTotal: function () { // total sales rounded
//     let daily = Math.round(this.avgCPH.reduce((a, b) => a + b));
//     this.dailyTotal = daily;
//     return this.dailyTotal;
//   },

//   render: function () {
//     let ul = document.createElement('ul');
//     this.saleAlg();
//     this.cookiesTotal();
//     storeList.appendChild(ul);
//     let topper = document.createElement('h3');
//     topper.textContent = `${this.name}`;
//     ul.appendChild(topper);
//     for (let i = 0; i < this.avgCPH.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hour[i]}:00 ${this.avgCPH[i]}`;
//       ul.appendChild(li);
//     }
//     let totalPrint = document.createElement('p');
//     totalPrint.textContent = `Total: ${this.dailyTotal}`;
//     ul.appendChild(totalPrint);
//   },

// };
// seattleObject.render();

// let tokyoObject = {
//   name: 'Tokyo',
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   dailyTotal: 0,
//   avgCPH: [],

//   getRandomCustomers: function () { // + Random number of customers function
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   perCust: function () { // + Customer # * average sales for expected cookies sold
//     return Math.round(this.getRandomCustomers() * this.avg);
//   },

//   saleAlg: function () { // Push cookie sales to array for every hour
//     for (let i = 0; i < hour.length; i++) {
//       let customerThisHour = this.perCust();
//       this.avgCPH.push(customerThisHour);
//       // console.log(customerThisHour);
//     }// something wrong up here
//     return this.customerThisHour;
//   },

//   cookiesTotal: function () { // total sales rounded
//     let daily = Math.round(this.avgCPH.reduce((a, b) => a + b));
//     this.dailyTotal = daily;
//     return this.dailyTotal;
//   },

//   render: function () {
//     let ul = document.createElement('ul');
//     this.saleAlg();
//     this.cookiesTotal();
//     storeList.appendChild(ul);
//     let topper = document.createElement('h3');
//     topper.textContent = `${this.name}`;
//     ul.appendChild(topper);
//     for (let i = 0; i < this.avgCPH.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hour[i]}:00 ${this.avgCPH[i]}`;
//       ul.appendChild(li);
//     }
//     let totalPrint = document.createElement('p');
//     totalPrint.textContent = `Total: ${this.dailyTotal}`;
//     ul.appendChild(totalPrint);
//   },
// };
// tokyoObject.render();

// let dubaiObject = {
//   name: 'Dubai',
//   min: 11,
//   max: 38,
//   avg: 3.7,
//   dailyTotal: 0,
//   avgCPH: [],

//   getRandomCustomers: function () { // + Random number of customers function
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   perCust: function () { // + Customer # * average sales for expected cookies sold
//     return Math.round(this.getRandomCustomers() * this.avg);
//   },

//   saleAlg: function () { // Push cookie sales to array for every hour
//     for (let i = 0; i < hour.length; i++) {
//       let customerThisHour = this.perCust();
//       this.avgCPH.push(customerThisHour);
//       // console.log(customerThisHour);
//     }// something wrong up here
//     return this.customerThisHour;
//   },

//   cookiesTotal: function () { // total sales rounded
//     let daily = Math.round(this.avgCPH.reduce((a, b) => a + b));
//     this.dailyTotal = daily;
//     return this.dailyTotal;
//   },

//   render: function () {
//     let ul = document.createElement('ul');
//     this.saleAlg();
//     this.cookiesTotal();
//     storeList.appendChild(ul);
//     let topper = document.createElement('h3');
//     topper.textContent = `${this.name}`;
//     ul.appendChild(topper);
//     for (let i = 0; i < this.avgCPH.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hour[i]}:00 ${this.avgCPH[i]}`;
//       ul.appendChild(li);
//     }
//     let totalPrint = document.createElement('p');
//     totalPrint.textContent = `Total: ${this.dailyTotal}`;
//     ul.appendChild(totalPrint);
//   },
// };
// dubaiObject.render();

// let parisObject = {
//   name: 'Paris',
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   dailyTotal: 0,
//   avgCPH: [],

//   getRandomCustomers: function () { // + Random number of customers function
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   perCust: function () { // + Customer # * average sales for expected cookies sold
//     return Math.round(this.getRandomCustomers() * this.avg);
//   },

//   saleAlg: function () { // Push cookie sales to array for every hour
//     for (let i = 0; i < hour.length; i++) {
//       let customerThisHour = this.perCust();
//       this.avgCPH.push(customerThisHour);
//       // console.log(customerThisHour);
//     }// something wrong up here
//     return this.customerThisHour;
//   },

//   cookiesTotal: function () { // total sales rounded
//     let daily = Math.round(this.avgCPH.reduce((a, b) => a + b));
//     this.dailyTotal = daily;
//     return this.dailyTotal;
//   },

//   render: function () {
//     let ul = document.createElement('ul');
//     this.saleAlg();
//     this.cookiesTotal();
//     storeList.appendChild(ul);
//     let topper = document.createElement('h3');
//     topper.textContent = `${this.name}`;
//     ul.appendChild(topper);
//     for (let i = 0; i < this.avgCPH.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hour[i]}:00 ${this.avgCPH[i]}`;
//       ul.appendChild(li);
//     }
//     let totalPrint = document.createElement('p');
//     totalPrint.textContent = `Total: ${this.dailyTotal}`;
//     ul.appendChild(totalPrint);
//   },
// };
// parisObject.render();

// let limaObject = {
//   name: 'Lima',
//   min: 2,
//   max: 16,
//   avg: 4.6,
//   dailyTotal: 0,
//   avgCPH: [],

//   getRandomCustomers: function () { // + Random number of customers function
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   perCust: function () { // + Customer # * average sales for expected cookies sold
//     return Math.round(this.getRandomCustomers() * this.avg);
//   },

//   saleAlg: function () { // Push cookie sales to array for every hour
//     for (let i = 0; i < hour.length; i++) {
//       let customerThisHour = this.perCust();
//       this.avgCPH.push(customerThisHour);
//       // console.log(customerThisHour);
//     }// something wrong up here
//     return this.customerThisHour;
//   },

//   cookiesTotal: function () { // total sales rounded
//     let daily = Math.round(this.avgCPH.reduce((a, b) => a + b));
//     this.dailyTotal = daily;
//     return this.dailyTotal;
//   },

//   render: function () {
//     let ul = document.createElement('ul');
//     this.saleAlg();
//     this.cookiesTotal();
//     storeList.appendChild(ul);
//     let topper = document.createElement('h3');
//     topper.textContent = `${this.name}`;
//     ul.appendChild(topper);
//     for (let i = 0; i < this.avgCPH.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hour[i]}:00 ${this.avgCPH[i]}`;
//       ul.appendChild(li);
//     }
//     let totalPrint = document.createElement('p');
//     totalPrint.textContent = `Total: ${this.dailyTotal}`;
//     ul.appendChild(totalPrint);
//   },
// };
// limaObject.render();

// Code attempt 1
// function Store(name, min, max, avg, cph, total) {
//   this.name = name;
//   this.min = min;
//   this.max = max;
//   this.avg = avg;
//   this.cph = cph;
//   this.total = total;
// }
// Store.prototype.getRandomCustomers = function () {
//   return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
// },
//   Store.prototype.perCust = function () {
//     return Math.round(this.getRandomCustomers() * this.avg);
//   }
// Store.prototype.saleAlg = function () {
//   let cphArr = [];
//   for (let i = 0; i < hour.length; i++) {
//     let customerThisHour = this.perCust();
//     cphArr.push(customerThisHour);
//   }
//   return this.customerThisHour;
// }
// Store.prototype.cookiesTotal = function () {
//   let daily = Math.round(cphArr.reduce((a, b) => a + b));
//   this.total = daily;
//   return this.total;
// }

// Store.prototype.hourRender = function() {
//   for(let i = 0; i < hour.length; i++){
//     let thRow = document.createElement('th');
//     storeHead.appendChild(thRow);
//     let hourConstruct = document.createElement('td');
//     thRow.appendChild(hourConstruct);
//     hourConstruct.textContent = hour[i];
//     console.log('pog');
//     }
// }
// Store.prototype.content = function () {
//   let row = document.createElement('tr');
//   storeTable.appendChild(row);
//   for(let i = 0; i < hour.length; i++){
//     let mathConstruct = document.createElement('td');
//     row.appendChild(mathConstruct);
//     mathConstruct.textContent = this.perCust();
//     console.log(hour[i]);
//   }
// }
// Store.prototype.render = function () {
//   let row = document.createElement('tr');
//   storeTable.appendChild(row);
//   let nameConstruct = document.createElement('td');
//   // let minConstruct = document.createElement('td');
//   // let maxConstruct = document.createElement('td');
//   // let avgConstruct = document.createElement('td');
//   // let cphConstruct = document.createElement('td');
//   // let totalConstruct = document.createElement('td');

//   row.appendChild(nameConstruct);
//   // row.appendChild(minConstruct);
//   // row.appendChild(maxConstruct);
//   // row.appendChild(avgConstruct);
//   // row.appendChild(cphConstruct);
//   // row.appendChild(totalConstruct);

//   nameConstruct.textContent = this.name;
//   // minConstruct.textContent = this.min;
//   // maxConstruct.textContent = this.max;
//   // avgConstruct.textContent = this.avg;
//   // cphConstruct.textContent = this.saleAlg();
//   // totalConstruct.textContent = this.cookiesTotal();
// };

// let storeArray = [
//   new Store('Seattle', 23, 65, 6.3),
//   new Store('Tokyo', 3, 24, 1.2),
//   new Store('Dubai', 11, 38, 3.7),
//   new Store('Paris', 20, 38, 2.3),
//   new Store('Lima', 2, 16, 4.6),
// ];
// Store.prototype.engineStart = function(){
//   Store.prototype.saleAlg();
//   Store.prototype.perCust();
//   Store.prototype.hourRender();
//   Store.prototype.content();
// for (let i = 0; i < storeArray.length; i++) {
//   let tick = storeArray[i];
//   tick.render();
// }
// }
// Store.prototype.engineStart();


// Code attempt 2


// Inner loop running through the hour math, outer loop running through the stores

function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cphArr = [];
  this.total;
}; // This is good

Store.prototype.getRandomCustomers = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};

Store.prototype.perCust = function () {
  return Math.round(this.getRandomCustomers() * this.avg);
};

Store.prototype.saleAlg = function () {
  for (let i = 0; i < hour.length; i++) {
    let customerThisHour = this.perCust();
    this.cphArr.push(customerThisHour);
   //console.log(customerThisHour);
  };
};

Store.prototype.cookiesTotal = function () {
  let daily = Math.round(this.cphArr.reduce((a, b) => a + b));
  this.total = daily;
  return this.total;
};

Store.prototype.construct = function() {
  let row = document.createElement('tr');
  storeTable.appendChild(row);
  // These are good ^
  let nameTag = document.createElement('td');
  row.appendChild(nameTag);
  nameTag.textContent = this.name;
  for(let i = 0; i < hour.length; i++){
    let contentCount = this.cphArr[i];
    //console.log(contentCount);
    let contentConstruct = document.createElement('td');
    row.appendChild(contentConstruct);
    contentConstruct.textContent =  contentCount;
  }
  let totalContent = document.createElement('td');
  row.appendChild(totalContent);
  totalContent.textContent = this.total;
}
let storeArray = [
  new Store('Seattle', 23, 65, 6.3),
  new Store('Tokyo', 3, 24, 1.2),
  new Store('Dubai', 11, 38, 3.7),
  new Store('Paris', 20, 38, 2.3),
  new Store('Lima', 2, 16, 4.6),
  //new Store ('Banana Republic', 2, 3, 4),
];
function constructHeader() {
  let blank = document.createElement('th');
  storeHead.appendChild(blank);
  blank.textContent = "Salmon Cookies!";
  for(let i = 0; i < hour.length; i++){
  let thRow = document.createElement('th');
  storeHead.appendChild(thRow);
  thRow.textContent = `${hour[i]}:00`;
  }
  let blank2 = document.createElement('th')
  storeHead.appendChild(blank2);
  blank2.textContent = 'Total:';
}
constructHeader();
for (let i = 0; i < storeArray.length; i++){
  let test = storeArray[i];
  test.saleAlg();
  test.cookiesTotal();
  test.construct();
  console.log(test);
}
//console.log(Store.cphArr);
function constructFooter() {
  let totalFoot = document.createElement('th');
  storeFoot.appendChild(totalFoot);
  totalFoot.textContent = 'Total:';
  let hold = [];
  let mathNumbers = 0;
  for (let i = 0; i < hour.length; i++){
    mathNumbers = 0;
    for (let k = 0; k < storeArray.length; k++){
      mathNumbers += storeArray[k].cphArr[i];
      //console.log(mathNumbers);
    }
    hold.push(mathNumbers);
    //console.log(hold);
    let pog = document.createElement('th');
    storeFoot.appendChild(pog);
    pog.textContent = `${hold[i]}`;
  }
  let grandTotal = hold.reduce((a, b) => a + b);
  let extraPog = document.createElement('th');
  storeFoot.appendChild(extraPog);
  extraPog.textContent = `${grandTotal}`;
}
constructFooter();
