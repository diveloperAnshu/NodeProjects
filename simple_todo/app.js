const express = require('express')
// const bodyParser = require('body-parser');
const app = express();
// app.use(bodyParser.json());
const port = 3000

// --- Middleware ---
// This middleware is essential for parsing the JSON data that will be
// sent in the body of POST and PATCH requests. Without it, `req.body` would be undefined.
app.use(express.json());

let todos = [
    { id: 1, text: 'Learn Node.js', completed: false },
    { id: 2, text: 'Build a To-Do API', completed: false },
    { id: 3, text: 'Test the API', completed: false }
];

let nextId = 4;
// add a new to-do to our list

app.post("/todos", (req, res) => {
    const newTodoText = req.body.text;

    if(!newTodoText) {
        return res.status(400).json({
            error : "Text is required for a to-do",
        });
    }
    const newTodo = {
        id : nextId++,
        text : newTodoText,
        completed : false
    };

    todos.push(newTodo);
    res.status(201).json(newTodo);
});


// read:  get all todos

app.get("/todos", (req, res) => {
    res.json(todos);
});

// get a single to-do by its id

app.get("/todos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id);
    if(todo) {
        res.json(todo);
    } else {
        res.status(400).json({
            error : "To-do not found!",
        });
    }
});

// update a to-do
// this update will be performed by taking the id of the todo
app.patch("/todos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id); // it gives us the object not the index

    if(!todo) {
        return res.status(400).json({
            error : "To-do not found!",
        });
    }

    const {text, completed} = req.body;

    if(text !== undefined) {
        todo.text = text;
    }

    if(completed !== undefined) {
        todo.completed = completed;
    }

    res.json(todo);
});

// Remove a to-do from a list
app.delete("/todos/:id", (req, res) => {
    let id = parseInt(req.params.id);

    let todoIndex = todos.findIndex(t => t.id === id);

    if(todoIndex === -1) {
        res.status(400).json({
            error : "to-do not found",
        });
    }
    // remove the todo from the array using its index
    todos.splice(todoIndex, 1);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`App Listening at Port: ${port}`);
});