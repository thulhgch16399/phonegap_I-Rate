var db = window.openDatabase("I-Rate", "1.0", "iRate database", 1000000);

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    db.transaction(populateDB, errorCB, successCB); 
}

function insertData() {
    // if (validation()) {
    //     confirmData()
    // }
    confirmData()
}
function confirmData() {
    // var r = confirm("Do you want to sent feedback?");
    // if (r == true) {
    //     db.transaction(addFeedback, errorCB, successCB)
    // }
    db.transaction(addFeedback, errorCB, successCB)
}
function addFeedback(tx) {
    var CustomerName = document.getElementById("nameCustomer").value
    var RestaurantName = document.getElementById("nameRestaurant").value
    var RestaurantType = document.getElementById("typeRestaurant").value
    var VisitDate = document.getElementById("visitTime").value
    var MealPrice = document.getElementById("MealPrice").value
    var ServiceStatus = document.getElementById("rateService").value
    var CleanlinessStatus = document.getElementById("rateCleanliness").value
    var FoodQualityStatus = document.getElementById("rateFoodQuality").value
    var Notes = document.getElementById("note").value

    var executeQuery = "INSERT INTO iRate (nameCustomer, nameRestaurant, typeRestaurant, visitTime, " + 
    " MealPrice, rateService, rateCleanliness, rateFoodQuality, note) VALUES (?,?,?,?,?,?,?,?,?)";
    // tx.executeSql(executeQuery, [CustomerName, RestaurantName, RestaurantType, VisitDate,
    //     MealPrice, ServiceStatus, CleanlinessStatus, FoodQualityStatus, Notes])    
        tx.executeSql(executeQuery, ["YuYan", "Haidilao", "Grill", "05/11/2020", 8, "&#x1F60D", "&#x1F60A", "&#x1F610", "Good service quality"])
}

function errorCB(err) {
    alert("Error processing SQL: " + err.code);
}
function successCB() {
    console.log(" da tao database")

}
function validation() {
    console.log("nameCustomer", validateString("nameCustomer"))
    console.log("nameRestaurant", validateString("nameRestaurant"))
    console.log("typeRestaurant", validateString("typeRestaurant"))
    console.log("MealPrice", validateMoney("MealPrice"))
    if (validateString("nameCustomer") == false || validateString("nameRestaurant") == false || 
        validateString("typeRestaurant") == false|| validateMoney("MealPrice") == false) {
        alert("Invalid input fields!")
        return false
    } else return true
}
function validateString(id) {
    let str = document.getElementById(id).value
    if (str.length == 0) {
        document.getElementById(id).classList.add("border-danger");
        return false;
    }
    var letters = /[A-Za-z ]/;
    if (str.match(letters)) {
        document.getElementById(id).classList.remove("border-danger");
        return true
    }
    else {
        document.getElementById(id).classList.add("border-danger");
        return false;
    }
}
function validateMoney(id) {
    var money = document.getElementById(id).value
    var moneyformat = /[0-9]./
    if (money.length == 0) {
        document.getElementById(id).classList.add("border-danger");
        return false;
    }
    if (money.match(moneyformat)) {
        document.getElementById(id).classList.remove("border-danger");
        return true
    }
    else {
        document.getElementById(id).classList.add("border-danger");
        return false;
    }
}
function populateDB(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS iRate (id INTEGER PRIMARY KEY AUTOINCREMENT, nameCustomer text, ' +
        ' nameRestaurant text, typeRestaurant text, visitTime text, MealPrice text, ' +
        ' rateService text, rateCleanliness text, rateFoodQuality text, note text) ')
}