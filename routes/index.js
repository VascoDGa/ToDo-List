import { Router } from "express";
import { getAllTodos, todoAdd, toggleTodos, updateTodo, deleteTodo } from "../controllers/todo.controller.js";

const router = Router()

router.post('/add' , todoAdd)
router.get('/get' , getAllTodos)
router.get('/toggle/:id', toggleTodos)
router.get('/update/:id' , updateTodo)
router.delete('/delete/:id', deleteTodo)


export default router