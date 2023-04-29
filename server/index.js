const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, showList, postItem, deleteItem } = require('./controller')


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/list", showList);
app.post("/api/add", postItem);
app.delete('/api/delete/:id', deleteItem);

app.listen(4000, () => console.log("Server running on 4000"));
