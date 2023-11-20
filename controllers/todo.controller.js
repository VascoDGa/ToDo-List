import Todo from '../models/todo.schema.js'

export const todoAdd = async(req, res) => {
    try {
        const {data} = req.body
        if(!data) {
            throw new Error("Enter valid data")
        }
        const newTodo = await Todo.create({
            data,
            createdAt : Date.now()
        })

        await newTodo.save()

        res.status(200).json(newTodo)
    }
    catch(err) {
        res.status(500).json(err.message)
    }
}

export const getAllTodos = async ( req, res) => {
    try {
        const allTodos = await Todo.find({}).sort({ 'createdAt' : -1})

        return res.status(200).json(allTodos)
    }
    catch(err) {
        res.status(500).json(err.message)
    }
}

export const toggleTodos = async(req , res) => {
    try {
        const getTodo = await Todo.findById(req.params.id)

        const todo = await Todo.findOneAndUpdate(
            {_id : req.params.id},
            {done : !getTodo.done}
        )

        await todo.save()

        res.status(200).json(todo)
    }
    catch(err) {
        res.status(500).json(err.message)
    }
}

export const updateTodo = async(req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(
            {_id : req.params.id},
            {data : req.body}
        )
        await todo.save()

        res.status(200).json(todo)
    }
    catch(err) {
        res.status(500).json(err.message)
    }
}

export const deleteTodo = async(req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id)

        res.status(200).json(todo)
    }
    catch(err) {
        res.status(500).json(err.message)
    }
}