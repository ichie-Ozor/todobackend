import express from 'express'
import { createTodo } from './todoController.js'

export const todoRouter = express.Router()

todoRouter.route('/').post(createTodo)