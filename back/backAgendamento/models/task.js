const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//Definição dos campos do banco de dados
const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    project: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Project',
       require: true,
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    completed: {
        type: Boolean,
        require: true,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

});

const Task = mongoose.model('Task',TaskSchema);

module.exports = Task;