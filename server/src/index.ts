require("dotenv").config();
import {createProxyMiddleware} from 'http-proxy-middleware';
import express, {Application} from "express";
import {ApolloServer} from "apollo-server-express";
import {connectDatabase} from "./database";
import {resolvers, typeDefs} from "./graphql";

const mount = async (app: Application) => {
    const db = await connectDatabase();
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: () => ({db}),
    });

    server.applyMiddleware({app, path: "/api"});
    app.listen(process.env.PORT);

    console.log(`App running at: http://localhost:${process.env.PORT}`);
};

const app = express();

app.use('/api', createProxyMiddleware({target: 'https://finnhub.io', changeOrigin: true}));
app.listen(9001);

mount(express());
