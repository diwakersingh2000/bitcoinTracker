myApp.controller('homeController',["BitcoinTrackerService", function(BitcoinTrackerService){
    var main = this;
    main.data;
    main.usd;
    main.gbp;
    main.eur;

    this.sixHours = function(){
        BitcoinTrackerService.getCurrencyRates({"Time":"sixHours"}).then((response) => {
            if (response) {
                main.data = response.data;
            } else {
                alert("Profile updated successfully");
            }
        }, (err) => {
            alert("Oops something gone wrong");
        });
    }

    this.twelveHours = function(){
        BitcoinTrackerService.getCurrencyRates({"Time":"twelveHours"}).then((response) => {
            if (response) {
                main.data = response.data;
            } else {
                alert("Profile updated successfully");
            }
        }, (err) => {
            alert("Oops something gone wrong");
        });
    }

    this.oneDay = function(){
        BitcoinTrackerService.getCurrencyRates({"Time":"oneDay"}).then((response) => {
            if (response) {
                main.data = response.data;
            } else {
                alert("Profile updated successfully");
            }
        }, (err) => {
            alert("Oops something gone wrong");
        });
    }

    this.oneWeek = function(){
        BitcoinTrackerService.getCurrencyRates({"Time":"oneWeek"}).then((response) => {
            if (response) {
                main.data = response.data;
            } else {
                alert("Profile updated successfully");
            }
        }, (err) => {
            alert("Oops something gone wrong");
        });
    }
    
    this.oneMonth = function(){
        BitcoinTrackerService.getCurrencyRates({"Time":"oneMonth"}).then((response) => {
            if (response) {
                main.data = response.data;
            } else {
                alert("Profile updated successfully");
            }
        }, (err) => {
            alert("Oops something gone wrong");
        });
    }

    this.oneYear = function(){
        BitcoinTrackerService.getCurrencyRates({"Time":"oneYear"}).then((response) => {
            if (response) {
                main.data = response.data;
            } else {
                alert("Profile updated successfully");
            }
        }, (err) => {
            alert("Oops something gone wrong");
        });
    }

}]);