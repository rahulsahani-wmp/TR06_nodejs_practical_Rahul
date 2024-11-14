there are 5 api endpoints:

http://localhost:4000/api/get   --get all user

http://localhost:4000/api/get/id     --get user by id

http://localhost:4000/api/put/id     --update user

http://localhost:4000/api/post    --add user

http://localhost:4000/api/delete/id  --delete user

-------------------------------------------------------------------------------
request body for post:
     {    
      "id": 1,
      "name": "name",
      "balance": "amount"
      }

request body for put:
     {    
      "name": "updated_name",
      "balance": "updated_amount"
      }


---------------------------------------------------------------------------------------------
used array of objects as database

schema
     { "id": 1,
      "name": "vipin",
      "balance": "2000"}