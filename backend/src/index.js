"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const movieRouter = require('./controllers/MovieController');
const app = express();
const port = 4000;
app.use((0, cors_1.default)({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}));
app.use(bodyParser.json());
app.use(express.json());
app.use('/api', movieRouter);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
module.exports = app;
