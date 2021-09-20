let parentEl = document.getElementById('list');

let Seattle = {
    minCustPerHr: 23,
    maxCustPerHr: 65,
    avgCookiePerCus: 44,
    results: [],
    numOfCusPerHr: function (minCustPerHr, maxCustPerHr) {
        let custPerHr = Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1) + this.minCustPerHr);
        console.log(custPerHr);

        let listEl = document.createElement('ul')

        for (let i = 0; i < this.results.length; i++) {
            let amountOfcookies = this.avgCookiePerCus * custPerHr;

            let hourlyEl = document.createElement('li')
            hourlyEl.innerText = this.results[i];

            listEl.appendChild(hourlyEl);

        }
        parentEl.appendChild(listEl);
    }

};


// let tokyo = {
//     minHours: 3,
//     maxHours: 24,
//     avrgeCookiesPerCus: function () {
//         Math.floor(Math.random() * 10)
//     }
// }

// let dubai = {
//     minHours: 11,
//     maxHours: 38,
//     avrgeCookiesPerCus: function () {
//         Math.floor(Math.random() * 10)
//     }
// }

// let paris = {
//     minHours: 20,
//     maxHours: 38,
//     cavrgeCookiesPerCus: function () {
//         Math.floor(Math.random() * 10)
//     }
// }

// let lima = {
//     minHours: 2,
//     maxHours: 16,
//     avrgeCookiesPerCus: function () {
//         Math.floor(Math.random() * 10)
//     }
// }
