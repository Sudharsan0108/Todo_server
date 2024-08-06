import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(cors());

let tasks = [];

app.get("/task", (req, res) => {
    res.json(tasks);
});

app.get("/", (req, res) => {
    res.send("Server running on port 4000");
});

app.post("/task", (req, res) => {
    const newTask = req.body.task;
    // console.log(newTask);

    // Create a task object with a unique id and name
    const task = {name: newTask };
    tasks.push(task);
console.log(task);

    res.json(task);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
