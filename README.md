# FinApp

Simple React app to check ETFs industry exposures.
![Gif of app usage](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oqrynkxswzew6gbbchse.gif)

## Build with
- TS Node
- React - Typescript
- GraphQL
- React-Bootstrap
- Redux ([deprecated branch](https://github.com/JanSysala/FinApp/tree/Redux_version))

## How to run App:

### Backend
1. Navigate into server directory with`cd server`
2. Create `.env` file with the login variables for you MongoDB 
```
PORT=9000
DB_USER=YOUR_VALUE
DB_USER_PASSWORD=YOUR_VALUE
DB_CLUSTER=YOUR_VALUE
PUBLIC_URL=YOUR_VALUE
```
3. Install dependencies `yarn install`
4. Run `yarn start`

### Frontend
1. Navigate into client directory with `cd client` 
2. Create `.env` file with your [finnhub.io](finnhub.io) API token
```
REACT_APP_FINNHUB_API_TOKEN=YOUR_API_TOKEN
```  
3. Download the GraphQL schema from the running server with `npm run codegen:schema`
4. Generate Typescript types from the schema with `codegen:generate`
5. Install dependencies `yarn install`
6. Run the client `yarn start`
