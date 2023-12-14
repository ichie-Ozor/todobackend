import { Todo } from "./todoModel.js";

const createTodoService = async(body) => {
    const todo = new Todo(body)
    await todo.save()
    // console.log("see me", body.body)
    return todo
}

const todoExistService = async(todo) => {
    const findTodo = await Todo.findOne({todo})
    if(!findTodo){
        return false
    } else {
        return true
    }
}
 export const createTodo = async(req, res, next) => {
    try {
    console.log(req.body)
    const { title, description } = req.body
    if(!title || !description){
       return res.json({message: 'Please mind your self, add title and description😣😣😏'})
    }
    const findTodo = await todoExistService(title)
    if(findTodo){
      return 
    }
    const newTodo = await createTodoService(req.body)
    res.status(201).json({
        success: true,
        message: `A todo with a title: ${newTodo.title} has being created successfully`
    })
} catch (error) {
    return next(error)
}
 }