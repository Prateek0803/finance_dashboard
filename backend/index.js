import express from "express";
import cors from "cors"
import env from "dotenv"
import bodyParser from "body-parser";
import mongoose from "mongoose";
import helmet from "helmet"
import morgan from "morgan";

import KpiRoutes from "./routes/kpi.js"
import productRoutes from "./routes/product.js"
import transactionRoutes from "./routes/transactions.js"
import {products, transactions} from './data/data.js'
import Transaction from "./models/TransactionModel.js";

/* CONFIGURATIONS */
env.config()
const app = express()
app.use((express.json()))
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

/* ROUTES */
app.use("/kpi", KpiRoutes)
app.use("/product", productRoutes)
app.use("/transaction",transactionRoutes)


/* MONGOOSE SETUP */

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => { 
      // Transaction.insertMany(transactions)
      console.log('Connected to MongoDB')
    }
  )
    .catch((error) => console.error('Failed to connect to MongoDB', error));
  

  const PORT = process.env.PORT || 3000;
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });