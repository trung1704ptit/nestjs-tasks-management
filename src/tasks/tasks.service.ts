import { Injectable } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
//   getAllTasks(): Task[] {
//     return this.tasks;
//   }

//   getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
//     const { search, status } = filterDto;

//     // define a temporary array to handle the result
//     let tasks = this.getAllTasks();

//     // do something with status
//     if (status) {
//       tasks = tasks.filter((task) => task.status === status);
//     }

//     // do something with search
//     if (search) {
//       tasks = tasks.filter((task) => {
//         if (
//           task.title.toLowerCase().includes(search.toLowerCase()) ||
//           task.description.toLowerCase().includes(search.toLowerCase())
//         ) {
//           return true;
//         }
//         return false;
//       });
//     }

//     // return final result
//     return tasks;
//   }

//   getTaskById(id: string): Task {
//     return this.tasks.find((task) => task.id === id);
//   }

//   deleteTaskById(id: string): void {
//     this.tasks = this.tasks.filter((task) => task.id !== id);
//   }

//   updateTaskById(id: string, taskField: string, taskFieldValue: string): Task {
//     const foundIndex = this.tasks.findIndex((t) => t.id === id);
//     if (foundIndex) {
//       this.tasks[foundIndex][taskField] = taskFieldValue;
//     }
//     return this.tasks[foundIndex];
//   }

//   createTask(createTaskDto: CreateTaskDto): Task {
//     const { title, description } = createTaskDto;
//     const task: Task = {
//       id: uuid(),
//       title,
//       description,
//       status: TaskStatus.OPEN,
//     };

//     this.tasks.push(task);
//     return task;
//   }
}
