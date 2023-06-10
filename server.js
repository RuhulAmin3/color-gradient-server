const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const connectDB = require("./database/database");
const gradientRoutes = require("./routes/api/gradient");
// connect database
connectDB();

// middleware
app.use(cors());
app.use(express.json());

app.use("/gradients", gradientRoutes);

// post listen
app.listen(PORT, () => {
  console.log(`Server running port: ${PORT}`);
});

