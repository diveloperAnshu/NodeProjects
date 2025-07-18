const express = require('express')
const router = express.Router();

let todos = [
    { id: 1, text: 'Learn Node.js', completed: false },
    { id: 2, text: 'Build a To-Do API', completed: false },
    { id: 3, text: 'Test the API', completed: false }
];
let nextId = 4;

// --- Routes (Now attached to 'router' instead of 'app') ---

// C - Create
router.post('/', (req, res) => { // Path is now '/' relative to '/todos'
    const newTodoText = req.body.text;
    if (!newTodoText) return res.status(400).json({ error: 'Text is required.' });
    const newTodo = { id: nextId++, text: newTodoText, completed: false };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// R - Read All
router.get('/', (req, res) => {
    res.json(todos);
});

// R - Read One
router.get('/:id', (req, res) => { // Path is now '/:id' relative to '/todos'
    const todoId = parseInt(req.params.id);
    const todo = todos.find(t => t.id === todoId);
    if (todo) res.json(todo);
    else res.status(404).json({ error: 'To-do not found.' });
});

// U - Update
router.patch('/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const todo = todos.find(t => t.id === todoId);
    if (!todo) return res.status(404).json({ error: 'To-do not found.' });
    const { text, completed } = req.body;
    if (text !== undefined) todo.text = text;
    if (completed !== undefined) todo.completed = completed;
    res.json(todo);
});

// D - Delete
router.delete('/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const todoIndex = todos.findIndex(t => t.id === todoId);
    if (todoIndex === -1) return res.status(404).json({ error: 'To-do not found.' });
    todos.splice(todoIndex, 1);
    res.status(204).send();
});


// This line exports the router to be used in other files
module.exports = router;




module.exports = router;