import { Schema, model } from 'mongoose'

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {timestamps: true})

export const Todo = model('todo', todoSchema)