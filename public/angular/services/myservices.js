myApp.service('BitcoinTrackerService', function ($http) {
    var main = this;

    this.getCurrencyRates = function (data) {
        return $http({
            method: "POST",
            data: data,
            url: '/api/currency'
        })
    }
})