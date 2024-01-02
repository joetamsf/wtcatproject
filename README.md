## What the Cats! Project

This is of repository of What the Cat! Project: https://wtc.shinjtprojs.dev/. The repository contains code for frontend and backend.

The frontend is written in React.js, whereas backend is an Apollo server that accepting GraphQL query and connecting MongoDB Atlas for data store. 

Even though the backend code is provided, since this project is deployed into AWS, the Apollo server and MongodbAtlas are replaced by AWS Appsync and Dynamodb. 

This guide will cover deployment on both local machine and AWS. 

## Prerequisites

1. Linux/Unix based environment (e.g MacOS)
2. npm package version: ≥ 8.1.2
3. git package installed
4. MongoDB (Local installation) or MongoDB Atlas (Cloud)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Optional: AWS Deployment

5. #1 - #3 Above
6. AWS Account (Works with Free Tier)
7. GitHub repository (for AWS Amplify)
8. IAM permissions for creating Dynamodb, AppSync and file upload to S3

## Get Started: Clone the repository
Use git clone command to clone this repository:

`
    # git clone https://github.com/joetamsf/wtcatproject.git
`

Everything is placed inside the wtcproject folder:

    |- wtcproject
        |- apollo
        |- data
          |- dynamodb
          |- mongodb
        |- react 
        |- README.md

apollo folder: code of apollo server for handling GraphQL query.

data folder: contains data dump of either dynamodb or mongodb

react folder: containes React.js code as the frontend.

## Installing modules

Assuming now you are in wtcproject folder, run `npm install` command to necessary modules:

Apollo server

```
    $ cd apollo 
    $ npm install
 ```

React

```
    $ cd react
    $ npm install
 ```

## Environment Variables

Depending on the deployment method you choose, specified environment variables needed to be set before starting application:

Apollo server + Mongodb:

1.  REACT_APP_GQLURL (URL of Apollo server)
2. REACT_APP_TOKEN_USR (User name of the JWT - Json Web Token)
3. REACT_APP_TOKEN_SEC (The security of JWT)
4. DATABASE_URL (The Mongodb data source used by prisma module of Apollo server) 
* The format of Mongodb connection string is: mongodb+srv://\<username\>:\<password\>@mongodb_url/\<collection_name\>


* Suppose the username is abc, password is def, mongodb_url is mongodb.com and the collection_name is wtcproject, the actual connection string will be: mongodb+srv://abc:def@mongodb.com/wtcproject

* To obtain the connection string of mongodb atlas, refer to [mongodb guide](https://www.mongodb.com/docs/guides/atlas/connection-string/) 

AWS Appsync + Dynamodb

1. REACT_APP_API_URL (GraphQL Endpoint)
2. REACT_APP_API_KEY (API Key for connection GraphQL endpoint)

* You can obtain Graphql Endpoint and API Key in Settings of AWS Appsync console.

## Restoring data

### MongoDB

Use `mongodbimport` command provided by `mongoDB database tool` to restore data from `data/mongodb` folder:

```
cd data/mongodb
mongoimport --uri="mongodb+srv://<username>:<password>@<mongodb_url>/<db_name>" \
--collection=<collection_name> \
--drop < likescount.json
```

### Dynamodb

Go to `data/dynamodb` folder and upload likescount.csv to S3.

Now execute `aws dynamodb import-table` command to create a table from the likescount.csv in S3.

```
aws dynamodb import-table --s3-bucket-source S3Bucket=your_bucket_name --input-format CSV --table-creation-parameters file://import_table.json
```

Replace `your_bucket_name` above to the name of your S3 bucket created for uploading the csv file.

### AWS AppSync

Using AWS console is the easiest way to create a Graphql API, as Graphql schema, resolvers and data source will be created automatically, which is pretty enough for this stage of development. 

1. Go to AWS console -> AWS Appsync 
2. Click Create API button
3. In API type, select GraphQL APIs, also select "Start with a DynamoDB table", then click Next button at the bottom
4. Enter the name of your API in the API name field
5. In the Import from DynamoDB table column, select the AWS region and table name of the dynamodb created above, the click Next button at the bottom
6. Click Add new field in Model information, and input below fields respectively:


| Name | Type | Array |Required |
| ---  | ---  | --- | --- |
| name | String | No |Yes |
| cname | String | No |No |
| likes | Float | No |Yes |
| description | String | No |Yes |
| birth | String | No | Yes |
| imgs | String | Yes | Yes |
| imgFolder | String | No | Yes |
| special | String | No | Yes |
| thumbnail | String | No | Yes |
| thumbs | String | Yes | Yes |
| location | String | No | Yes |
|


## Starting the application 

### Apollo Server
If you use apollo server to handle Graphql queries from React, please execute `ln` command to link `catsSliceAPOLLO.js` to `catsSlice.js`:

```
cd react/src/features/cats
unlink catsSlice.js
ln -s catsSliceAPOLLO.js catsSlice.js
```

Otherwise, under the same folder, link `catsSliceAWS.js` to `catsSlice.js` instead:

```
unlink catsSlice.js
ln -s catsSliceAWS.js catsSlice.js
```


Now we can use start apollo server by `node` command:

```
$ cd apollo
$ node index.js
```

### React

```
$ cd react/src
$ npm start
```

Open you browser and access http://localhost:3000, you should be able to access the What the Cat! application.