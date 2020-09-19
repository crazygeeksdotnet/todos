"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
var bodyParser = require('body-parser');
// create application/json parser
var jsonParser = bodyParser.json();
const router = express_1.Router();
router.get("/todos", jsonParser, todos_1.getTodos);
router.post("/add-todo", jsonParser, todos_1.addTodo);
router.put("/edit-todo/:id", jsonParser, todos_1.updateTodo);
router.delete("/delete-todo/:id", jsonParser, todos_1.deleteTodo);
exports.default = router;
