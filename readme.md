# Patient Registration Web Portal

## Usage

1. Update the database credentials in these two files to start with the project
   <br />
   a.TheLattice/connectDB.js
   <br />
   b.config/config.json ( in development object only )
   <br />

## Install Dependencies

```
npm install
```

## Run Migrations to Create required Tables in Database

```
npx sequelize-cli db:migrate
```

## Run Seeders to insert Database dump into Database

```
npx sequelize-cli db:seed:all
```

## Run App

```
npm run dev
```

## Open the postman to check the results of required APIs (Postman collection link is provided below)

https://api.postman.com/collections/24387783-97c76656-403f-4bf7-8967-5ece72d9b757?access_key=PMAT-01GPB421C2CKRZHZSGNS94WJVJ

## Major Libraries Used:

<br />
1. sequelize-cli (for migrations to the database)
<br />
2. sequelize (ORM for mysql)
<br />
3. multer (for handling images from the postman)
<br />
4. mysql2 (for working with MYSQL database)
