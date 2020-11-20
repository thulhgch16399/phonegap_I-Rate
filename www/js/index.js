// var db = window.openDatabase("iRate", "1.0", "iRate database", 1000000);
// document.addEventListener("deviceready", onDeviceReady, false);

// function onDeviceReady() {
//     db.transaction(populateDB, errorCB, successCB); 
//     // db.transaction(existingData, error, addSuccessCB); 
//     fetchData();
// }

// // Create existing Data
// function existingData(tx) {
//     var existingData = [
//         ["Zhao XiaoTang", "Haidilao", "Grill", "05/11/2020", 8, "&#x1F60D", "&#x1F60A", "&#x1F610", "Good service quality"],
//         ["Yu ShuXin", "Haidilao", "Grill", "05/11/2020", 8, "&#x1F60D", "&#x1F60A", "&#x1F610", "Good service quality"],
//         ["YuYan", "Haidilao", "Grill", "05/11/2020", 8, "&#x1F60D", "&#x1F60A", "&#x1F610", "Good service quality"]
//     ]
//     var executeQuery = "INSERT INTO iRate (CustomerName, RestaurantName, RestaurantType, VisitDate, " + 
//     " MealPrice, ServiceStatus, CleanlinessStatus, FoodQualityStatus, Notes) VALUES (?,?,?,?,?,?,?,?,?)";
    
//     existingData.forEach(element => {
//         tx.executeSql(executeQuery, element)
//     });
// }
// function populateDB(tx) {
//     tx.executeSql('CREATE TABLE IF NOT EXISTS iRate (id INTEGER PRIMARY KEY AUTOINCREMENT, nameCustomer text, ' +
//         ' nameRestaurant text, typeRestaurant text, VisitDate text, MealPrice text, ' +
//         ' ServiceStatus text, CleanlinessStatus text, FoodQualityStatus text, Notes text) ')
//     console.log("Created");
// }
// function fetchData() {
//     db.transaction(function (tx) {

//         tx.executeSql("select * from iRate", [], function (tx1, result) {
//             var len = result.rows.length;
//             var contentInner = ''

//             for (var i = 0; i < len; i++) {
//                 var note = result.rows.item(i)
//                 contentInner += ` <div class="card mt-2" style="width: 90%;">
//                 <div class="card-body">
//                     <div class="text-center">
//                         <h5 class="card-title">`+ note.nameRestaurant+` </h5>
//                         <h6 class="card-subtitle mb-2 text-muted">`+ note.typeRestaurant+`</h6>
//                     </div>
//                     <span class="h6">Reporter: </span> <span>`+ note.nameCustomer+`</span> <br>
//                     <span class="h6">Reporter: </span> <span>`+ note.CleanlinessStatus+`</span> <br>
//                     <span class="h6">Reporter: </span> <span>`+ note.FoodQualityStatus+`</span> <br>
//                     <span class="h6">Reporter: </span> <span>`+ note.ServiceStatus+`</span> <br>
//                     <span class="h6">Reporter: </span> <span>`+ note.MealPrice+`</span> <br>
//                     <span class="h6">Reporter: </span> <span>`+ note.VisitDate+`</span> <br>
//                     <span class="h6">Reporter: </span> <span>`+ note.Notes+`</span> <br>
//                 </div>
//             </div>`
//             document.getElementById("content").innerHTML = contentInner
//             }
//         }, errorCB);

//     }, errorCB, successCB);
// }
// function errorCB(err) {
//     alert("Error processing SQL: " + err.code);
// }
// function error(err) {
//     alert("Error Insert: " + err.code);
// }
// function addSuccessCB() {
    
// }
// function successCB() {
    
// }