let seattleList = document.getElementById('seattle');
let tokyoList = document.getElementById('tokyo');
let dubaiList = document.getElementById('dubai');
let parisList = document.getElementById('paris');
let limaList = document.getElementById('lima');
let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

/** ************************************************ */
//Seattle store
let Seattle = {
    minCustPerHr: 23,
    maxCustPerHr: 65,
    avgCookiePerCus: 6.3,
    results: [],
    totalCookies: 0,
    numOfCusPerHr: function () {
        let custPerHr = Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1) + this.minCustPerHr);
        console.log(custPerHr);
        return custPerHr;

    },
    cookiesPerHr: function () {
        for (let i = 0; i < storeHours.length; i++) {
            this.results.push(Math.ceil(this.avgCookiePerCus * this.numOfCusPerHr()));
            this.totalCookies = this.results[i] + this.totalCookies;
        }
    },

    cookiesOutPut: function () {
        this.cookiesPerHr();
        for (let i = 0; i < this.results.length; i++) {
            let hourlyEl = document.createElement('li');
            hourlyEl.innerText = storeHours[i] + ' ' + this.results[i] + ' cookies';
            seattleList.appendChild(hourlyEl);

        }
        let totalSales = document.createElement('li');
        totalSales.innerText = 'Total: ' + this.totalCookies;
        seattleList.appendChild(totalSales);
    }

};
Seattle.cookiesOutPut();

/** ************************************************ */
//Tokyo store
let tokyo = {
    minCustPerHr: 3,
    maxCustPerHr: 24,
    avgCookiePerCus: 1.2,
    results: [],
    totalCookies: 0,
    numOfCusPerHr: function () {
        let custPerHr = Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1) + this.minCustPerHr);
        console.log(custPerHr);
        return custPerHr;

    },
    cookiesPerHr: function () {
        for (let i = 0; i < storeHours.length; i++) {
            this.results.push(Math.ceil(this.avgCookiePerCus * this.numOfCusPerHr()));
            this.totalCookies = this.results[i] + this.totalCookies;
        }
    },

    cookiesOutPut: function () {
        this.cookiesPerHr();
        for (let i = 0; i < this.results.length; i++) {
            let hourlyEl = document.createElement('li');
            hourlyEl.innerText = storeHours[i] + ' ' + this.results[i] + ' cookies';
            tokyoList.appendChild(hourlyEl);

        }
        let totalSales = document.createElement('li');
        totalSales.innerText = 'Total: ' + this.totalCookies;
        tokyoList.appendChild(totalSales);
    }

};
tokyo.cookiesOutPut();

/** ************************************************ */
//Dubai store
let dubai = {
    minCustPerHr: 11,
    maxCustPerHr: 38,
    avgCookiePerCus: 3.7,
    results: [],
    totalCookies: 0,
    numOfCusPerHr: function () {
        let custPerHr = Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1) + this.minCustPerHr);
        console.log(custPerHr);
        return custPerHr;

    },
    cookiesPerHr: function () {
        for (let i = 0; i < storeHours.length; i++) {
            this.results.push(Math.ceil(this.avgCookiePerCus * this.numOfCusPerHr()));
            this.totalCookies = this.results[i] + this.totalCookies;
        }
    },

    cookiesOutPut: function () {
        this.cookiesPerHr();
        for (let i = 0; i < this.results.length; i++) {
            let hourlyEl = document.createElement('li');
            hourlyEl.innerText = storeHours[i] + ' ' + this.results[i] + ' cookies';
            dubaiList.appendChild(hourlyEl);

        }
        let totalSales = document.createElement('li');
        totalSales.innerText = 'Total: ' + this.totalCookies;
        dubaiList.appendChild(totalSales);
    }

};
dubai.cookiesOutPut();

/** ************************************************ */
//Paris store
let paris = {
    minCustPerHr: 20,
    maxCustPerHr: 38,
    avgCookiePerCus: 2.3,
    results: [],
    totalCookies: 0,
    numOfCusPerHr: function () {
        let custPerHr = Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1) + this.minCustPerHr);
        console.log(custPerHr);
        return custPerHr;

    },
    cookiesPerHr: function () {
        for (let i = 0; i < storeHours.length; i++) {
            this.results.push(Math.ceil(this.avgCookiePerCus * this.numOfCusPerHr()));
            this.totalCookies = this.results[i] + this.totalCookies;
        }
    },

    cookiesOutPut: function () {
        this.cookiesPerHr();
        for (let i = 0; i < this.results.length; i++) {
            let hourlyEl = document.createElement('li');
            hourlyEl.innerText = storeHours[i] + ' ' + this.results[i] + ' cookies';
            parisList.appendChild(hourlyEl);

        }
        let totalSales = document.createElement('li');
        totalSales.innerText = 'Total: ' + this.totalCookies;
        parisList.appendChild(totalSales);
    }

};
paris.cookiesOutPut();

/** ************************************************ */
//Lima store
let lima = {
    minCustPerHr: 2,
    maxCustPerHr: 16,
    avgCookiePerCus: 4.6,
    results: [],
    totalCookies: 0,
    numOfCusPerHr: function () {
        let custPerHr = Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1) + this.minCustPerHr);
        console.log(custPerHr);
        return custPerHr;

    },
    cookiesPerHr: function () {
        for (let i = 0; i < storeHours.length; i++) {
            this.results.push(Math.ceil(this.avgCookiePerCus * this.numOfCusPerHr()));
            this.totalCookies = this.results[i] + this.totalCookies;
        }
    },

    cookiesOutPut: function () {
        this.cookiesPerHr();
        for (let i = 0; i < this.results.length; i++) {
            let hourlyEl = document.createElement('li');
            hourlyEl.innerText = storeHours[i] + ' ' + this.results[i] + ' cookies';
            limaList.appendChild(hourlyEl);

        }
        let totalSales = document.createElement('li');
        totalSales.innerText = 'Total: ' + this.totalCookies;
        limaList.appendChild(totalSales);
    }

};
lima.cookiesOutPut();


