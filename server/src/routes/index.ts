import { Router } from "express"
import { getTodos, addTodo, updateTodo, deleteTodo } from "../controllers/todos"
var bodyParser = require('body-parser')
 
// create application/json parser
var jsonParser = bodyParser.json()

const router: Router = Router()

router.get("/todos", jsonParser, getTodos)
router.post("/add-todo", jsonParser, addTodo)
router.put("/edit-todo/:id", jsonParser, updateTodo)
router.delete("/delete-todo/:id", jsonParser, deleteTodo)

export default router