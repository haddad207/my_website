# My Portfolio Website

My portoflio website is built using Node.js, React and MongoDB.

## Installation

Navigate to the api folder and run npm install

```bash
cd api
npm install
```

Navigate to the client folder and run npm install

```bash
cd client
npm install
```

## Running the application

Please note as this is using a [MongoDB](https://www.mongodb.com/) cloud database and [dotenv](https://www.npmjs.com/package/dotenv) to store secrets. Therefore, before running the application you must create a MongoDB account and create a cloud DataBase.

After creating the cloud Database, create a .env file inside the api folder.

```bash
cd api
touch .env
```

Then create the following varialbes inside the .env file:

```bash
connectionString="YourConnectionString"
jwtSecret="YourJWTSecretKey"
```

Please note these are not the correct variables for the application, as it is sensitive information.

After the .env file has been created and initialized, please run two terminal windows and do the following:

```bash
cd api
npm start
```

```bash
cd client
npm run dev
```

you should be prompted with a url to click on from the client side's terminal.
