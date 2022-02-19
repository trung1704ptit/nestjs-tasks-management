import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { title } from 'process';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {
        this.tasksService = tasksService
    }

    // http://localhost:3000/tasks
    @Get()
    getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
        // if we have any filters defined, call tasksService.getTasksWithFilters
        // otherwise, just get all tasks

        if (Object.keys(filterDto).length) {
            return this.tasksService.getTasksWithFilters(filterDto)
        } else {
            return this.tasksService.getAllTasks()
        }

    }


    // http://localhost:3000/tasks/3g234dsds-23dsd-32xdsd-2322s
    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        return this.tasksService.getTaskById(id)
    }

    @Delete('/:id')
    deleteTaskById(@Param('id') id: string): void {
        return this.tasksService.deleteTaskById(id)
    }

    @Patch('/:id/:taskField')
    updateTaskById(@Param('id') id: string, @Param('taskField') taskField: string, @Body('taskFieldValue') taskFieldValue): Task {
        return this.tasksService.updateTaskById(id, taskField, taskFieldValue)
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto): Task {
        return this.tasksService.createTask(createTaskDto)
    }
}
