#Flat DB
####A quick flat file databasing wrapper 
------


###Useage 


#####Add object
```javascript
var db = require('./flatDB.js');
```


#####Open/Create DB
```javascript
db.openDatabase({dbName:'My_Database',writeAccess:true, localOnly:false});
```
localOnly option allows for a database without a file. When the instance dies all data will die as well. This would only be recommended for caching.

#####View Record By ID
```javascript
var record = db.viewRecordByID(1);
```

#####Search Record
```javascript
var record = db.search({"message":"Message I am searching for"});
```


#####Inserting Record
```javascript
db.insert({"message":"Message I am inserting"});
```


#####Removing Record
```javascript
db.remove({"message":"Message of the record I want to remove"});
```



