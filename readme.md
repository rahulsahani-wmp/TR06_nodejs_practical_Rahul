# Node Assignment

# Discription
it is a node server that contain apis for get, put ,post and delete http methods

# Installation

## pre-requsite:
- node 
- http methods 
- json
- filesystem

## Step to run server
- clone the repository >> `https://github.com/rahulsahani-wmp/TR06_nodejs_practical_Rahul`
- navigate to project folder >> `cd TR06_nodejs_practical_Rahul`
- run command >> `npm install`
- run command >> `node server.js`

# more information
- environmental variable  >> PORT=2000
- for api texting :
- api endpoints>>

http://localhost:4000/api/get   --get all user

http://localhost:4000/api/get/id     --get user by id

http://localhost:4000/api/put/id     --update user

http://localhost:4000/api/post    --add user

http://localhost:4000/api/delete/id  --delete user

-------------------------------------------------------------------------------
- request body for post
```
{    
     "id": 1,
      "name": "name",
      "balance": "amount"
} 
```

- request body for put:
``` 
{    
      "name": "updated_name",
      "balance": "updated_amount"
}
```


---------------------------------------------------------------------------------------------
schema for database 
```
{ 
"id": 1,
"name": "vipin",
"balance": "2000"
}
```
--------------------------------------------------------------
