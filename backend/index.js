const express = require("express");
const PORT = 3000;

const app = express();

// Body Parser
app.use(express.json());

// Server Health Check
app.get("/health", (req, res) => {
  res.status(200).send("Ok");
});

// Post Todo
app.post('/todo', (req, res) {

})
     
// Get todo
app.get('/todos', (req, res) => {});

// update Todo
app.put('/update-todo', (req, res) => {

})

// Delete todo
app.delete('/delete-todo', (req, res) => {

})

// Mark Completed
app.post('/completed',  (req, res) => {
    
})

// Run server
app.listen(PORT, () => {
  console.log("Server is running at port", PORT);
});
