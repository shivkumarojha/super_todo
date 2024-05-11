const zod = require("zod");

// Zod Schema for todo 
const createTodo = zod.object({
  title: zod.string(),
  description: zod.string()
});

// Zod Schema for completed todo Items
const updateTodo = zod.object({
    id: zod.string()
})


module.exports = {
    createTodo,
    updateTodo
}

