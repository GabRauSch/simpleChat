import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config()

const app = express();

app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json())

app.use(cors())

export default app