var db = require('./flatDB');

//Create Database
db.openDatabase({
	dbName:'MyDB',
	writeAccess:true, 
	localOnly:true
});



//Insert a row
var row = {"first_name":"John","last_name":"Doe"};
if(db.insert(row)) {
	console.log('Inserted row successfully!');
}



//Search that row
var row = {"first_name":"John","last_name":"Doe"};
var result = db.search(row);
if(result) {
	console.log("Found row:");
	console.log(result);
}



//Remove row;
var row = {"first_name":"John","last_name":"Doe"};
if(db.remove(row)) {
	console.log('Removed row successfully!');
}