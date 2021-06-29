const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");

const app = express();
app.use(cors());

//Connect to mongoDB
connectDB();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "hello from Phonebook API" });
});

//Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
