const express = require("express");
const PORT = 3000;

// Zod schemas for todo
const { createTodoSchema, updateTodoSchema } = require("./types");
const app = express();

const { todo } = require("./db");

// Body Parser
app.use(express.json());

// Server Health Check
app.get("/health", (req, res) => {
  res.status(200).send("Ok");
});

// Post Todo
app.post("/todo", async (req, res) => {
  const data = req.body;
  const parsedData = createTodoSchema.safeParse(data);

  if (!parsedData.success) {
    res.send(411).json({ message: "You sent wrong inputs" });
    return;
  }

  // put it in mongo db
  await todo.create({
    title: parsedData.data.title,
    description: parsedData.data.description,
    completed: false,
  });

  res.status(200).json({
    message: "Todo is created",
  });
});

// Get todo
app.get("/todos", async (req, res) => {
  const todos = await todo.find();
  console.log(todos);
  res.status(200).json({
    message: "success",
    todos: todos,
  });
});

// update Todo
app.put("/update-todo", (req, res) => {});

// Delete todo
app.delete("/delete-todo", (req, res) => {});

// Mark Completed
app.post("/completed", (req, res) => {});

// Run server
app.listen(PORT, () => {
  console.log("Server is running at port", PORT);
});
