const zod = require("zod");

// Zod Schema for todo 
const createTodoSchema = zod.object({
  title: zod.string(),
  description: zod.string()
});

// Zod Schema for completed todo Items
const completeTodoSchema = zod.object({
    id: zod.string()
})

// Zod schema for update todo
const updateTodoSchema = zod.object({
    id: zod.string(),
    title: string,
    descriptilon: string
})

module.exports = {
    createTodo,
    updateTodo
}

