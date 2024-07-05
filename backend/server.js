const connectToMongo = require("./db");
const express = require("express");
const cors=require("cors")

connectToMongo();
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/payment", require("./routes/payment"));
app.use("/api/result", require("./routes/result"));
//app.use('/api/payment', require('./routes/payment'))

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});
