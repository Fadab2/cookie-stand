
let storeHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
let tableBody = document.getElementById('tbody');
let tableHeader = document.getElementById('tableHeader');
let tableFooter = document.getElementById('tableFooter');

function StoreLocation(storeName, minCustPerHr, maxCustPerHr, avgCookiePerCus) {
    this.storeName = storeName;
    this.minCustPerHr = minCustPerHr;
    this.maxCustPerHr = maxCustPerHr;
    this.avgCookiePerCus = avgCookiePerCus;
    this.results = [];
    this.totalCookies = 0;
}

// generate random num of customers each hr
StoreLocation.prototype.numOfCusPerHr = function () {
    let custPerHr = Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1) + this.minCustPerHr);
    //console.log(custPerHr);
    return custPerHr;
}
// fucntion to calculate the sales per hr
StoreLocation.prototype.cookiesPerHr = function () {
    for (let i = 0; i < storeHours.length; i++) {
        this.results.push(Math.ceil(this.avgCookiePerCus * this.numOfCusPerHr()));
        this.totalCookies = this.results[i] + this.totalCookies;
        //console.log(this.results[i]);
        //console.log("prototype fun cookiesPerHr " + this.totalCookies);
    }
}
// output data into document 
StoreLocation.prototype.salesOutPut = function () {
    this.cookiesPerHr();
    let rowEl = document.createElement('tr');
    let colEl = document.createElement('td');

    colEl.innerText = this.storeName;
    rowEl.appendChild(colEl);
    for (let i = 0; i < this.results.length; i++) {
        let hourlyEl = document.createElement('td');
        hourlyEl.innerText = this.results[i];
        rowEl.appendChild(hourlyEl);
    }

    // add totalsales to document
    let totalSales = document.createElement('td');
    totalSales.innerText = this.totalCookies;
    rowEl.appendChild(totalSales);
    tableBody.appendChild(rowEl);
};

// display time of the day header
function headerFunction() {
    let rowEl = document.createElement('tr');
    let colEl = document.createElement('th');
    colEl.innerText = '';
    rowEl.appendChild(colEl);

    for (let hour = 0; hour < storeHours.length; hour++) {
        let colEl = document.createElement('th');
        colEl.innerText = storeHours[hour];
        rowEl.appendChild(colEl);
    }
    let dailyTotals = document.createElement('th');
    dailyTotals.innerText = 'Daily Location Totals';
    rowEl.appendChild(dailyTotals);
    tableHeader.appendChild(rowEl);
}
headerFunction();

//display hourly totals for all stores
function footerFunction() {
    let rowEl = document.createElement('tr');
    let colEl = document.createElement('th');
    rowEl.appendChild(colEl);
    let test = this.results;
    console.log(test);
    for (let hour = 0; hour < storeHours.length; hour++) {
        
        console.log(typeof(this.results));
        
        for (let salesPerHr = 0; salesPerHr < test; salesPerHr++) {
            let dailySales = this.results[salesPerHr] + this.totalCookies;
            console.log("daily sales: " + dailySales)
        }
    } 
    };

footerFunction();

// create new instances for the locations
let seattle = new StoreLocation('Seattle', 23, 65, 6.5);
let tokyo = new StoreLocation('Tokyo', 3, 24, 1.2);
let dubai = new StoreLocation('dubai', 11, 38, 3.7);
let paris = new StoreLocation('Paris', 20, 38, 2.3);
let lima = new StoreLocation('Lima', 2, 16, 4.6);

console.log(seattle.results);

seattle.salesOutPut();
tokyo.salesOutPut();
dubai.salesOutPut();
paris.salesOutPut();
lima.salesOutPut();