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

let seattleObject = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  dailyTotal: 0,
  avgCPH: [],

  getRandomCustomers: function () { // + Random number of customers function
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  perCust: function () { // + Customer # * average sales for expected cookies sold
    return Math.round(this.getRandomCustomers() * this.avg);
  },

  saleAlg: function () { // Push cookie sales to array for every hour
    for (let i = 0; i < hour.length; i++) {
      let customerThisHour = this.perCust();
      this.avgCPH.push(customerThisHour);
      // console.log(customerThisHour);
    }// something wrong up here
    return this.customerThisHour;
  },

  cookiesTotal: function () { // total sales rounded
    let daily = Math.round(this.avgCPH.reduce((a, b) => a + b));
    this.dailyTotal = daily;
    return this.dailyTotal;
  },

  render: function () {
    let ul = document.createElement('ul');
    this.saleAlg();
    this.cookiesTotal();
    storeList.appendChild(ul);
    let topper = document.createElement('h3');
    topper.textContent = `${this.name}`;
    ul.appendChild(topper);
    for (let i = 0; i < this.avgCPH.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hour[i]}:00 ${this.avgCPH[i]}`;
      ul.appendChild(li);
    }
    let totalPrint = document.createElement('p');
    totalPrint.textContent = `Total: ${this.dailyTotal}`;
    ul.appendChild(totalPrint);
  },

};
seattleObject.render();

let tokyoObject = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  dailyTotal: 0,
  avgCPH: [],

  getRandomCustomers: function () { // + Random number of customers function
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  perCust: function () { // + Customer # * average sales for expected cookies sold
    return Math.round(this.getRandomCustomers() * this.avg);
  },

  saleAlg: function () { // Push cookie sales to array for every hour
    for (let i = 0; i < hour.length; i++) {
      let customerThisHour = this.perCust();
      this.avgCPH.push(customerThisHour);
      // console.log(customerThisHour);
    }// something wrong up here
    return this.customerThisHour;
  },

  cookiesTotal: function () { // total sales rounded
    let daily = Math.round(this.avgCPH.reduce((a, b) => a + b));
    this.dailyTotal = daily;
    return this.dailyTotal;
  },

  render: function () {
    let ul = document.createElement('ul');
    this.saleAlg();
    this.cookiesTotal();
    storeList.appendChild(ul);
    let topper = document.createElement('h3');
    topper.textContent = `${this.name}`;
    ul.appendChild(topper);
    for (let i = 0; i < this.avgCPH.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hour[i]}:00 ${this.avgCPH[i]}`;
      ul.appendChild(li);
    }
    let totalPrint = document.createElement('p');
    totalPrint.textContent = `Total: ${this.dailyTotal}`;
    ul.appendChild(totalPrint);
  },
};
tokyoObject.render();

let dubaiObject = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  dailyTotal: 0,
  avgCPH: [],

  getRandomCustomers: function () { // + Random number of customers function
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  perCust: function () { // + Customer # * average sales for expected cookies sold
    return Math.round(this.getRandomCustomers() * this.avg);
  },

  saleAlg: function () { // Push cookie sales to array for every hour
    for (let i = 0; i < hour.length; i++) {
      let customerThisHour = this.perCust();
      this.avgCPH.push(customerThisHour);
      // console.log(customerThisHour);
    }// something wrong up here
    return this.customerThisHour;
  },

  cookiesTotal: function () { // total sales rounded
    let daily = Math.round(this.avgCPH.reduce((a, b) => a + b));
    this.dailyTotal = daily;
    return this.dailyTotal;
  },

  render: function () {
    let ul = document.createElement('ul');
    this.saleAlg();
    this.cookiesTotal();
    storeList.appendChild(ul);
    let topper = document.createElement('h3');
    topper.textContent = `${this.name}`;
    ul.appendChild(topper);
    for (let i = 0; i < this.avgCPH.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hour[i]}:00 ${this.avgCPH[i]}`;
      ul.appendChild(li);
    }
    let totalPrint = document.createElement('p');
    totalPrint.textContent = `Total: ${this.dailyTotal}`;
    ul.appendChild(totalPrint);
  },
};
dubaiObject.render();

let parisObject = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  dailyTotal: 0,
  avgCPH: [],

  getRandomCustomers: function () { // + Random number of customers function
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  perCust: function () { // + Customer # * average sales for expected cookies sold
    return Math.round(this.getRandomCustomers() * this.avg);
  },

  saleAlg: function () { // Push cookie sales to array for every hour
    for (let i = 0; i < hour.length; i++) {
      let customerThisHour = this.perCust();
      this.avgCPH.push(customerThisHour);
      // console.log(customerThisHour);
    }// something wrong up here
    return this.customerThisHour;
  },

  cookiesTotal: function () { // total sales rounded
    let daily = Math.round(this.avgCPH.reduce((a, b) => a + b));
    this.dailyTotal = daily;
    return this.dailyTotal;
  },

  render: function () {
    let ul = document.createElement('ul');
    this.saleAlg();
    this.cookiesTotal();
    storeList.appendChild(ul);
    let topper = document.createElement('h3');
    topper.textContent = `${this.name}`;
    ul.appendChild(topper);
    for (let i = 0; i < this.avgCPH.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hour[i]}:00 ${this.avgCPH[i]}`;
      ul.appendChild(li);
    }
    let totalPrint = document.createElement('p');
    totalPrint.textContent = `Total: ${this.dailyTotal}`;
    ul.appendChild(totalPrint);
  },
};
parisObject.render();

let limaObject = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  dailyTotal: 0,
  avgCPH: [],

  getRandomCustomers: function () { // + Random number of customers function
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  perCust: function () { // + Customer # * average sales for expected cookies sold
    return Math.round(this.getRandomCustomers() * this.avg);
  },

  saleAlg: function () { // Push cookie sales to array for every hour
    for (let i = 0; i < hour.length; i++) {
      let customerThisHour = this.perCust();
      this.avgCPH.push(customerThisHour);
      // console.log(customerThisHour);
    }// something wrong up here
    return this.customerThisHour;
  },

  cookiesTotal: function () { // total sales rounded
    let daily = Math.round(this.avgCPH.reduce((a, b) => a + b));
    this.dailyTotal = daily;
    return this.dailyTotal;
  },

  render: function () {
    let ul = document.createElement('ul');
    this.saleAlg();
    this.cookiesTotal();
    storeList.appendChild(ul);
    let topper = document.createElement('h3');
    topper.textContent = `${this.name}`;
    ul.appendChild(topper);
    for (let i = 0; i < this.avgCPH.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hour[i]}:00 ${this.avgCPH[i]}`;
      ul.appendChild(li);
    }
    let totalPrint = document.createElement('p');
    totalPrint.textContent = `Total: ${this.dailyTotal}`;
    ul.appendChild(totalPrint);
  },
};
limaObject.render();