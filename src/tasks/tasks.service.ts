import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TasksRepository } from './tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepository: TasksRepository,
  ) {}

  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepository.createTask(createTaskDto);
  }

  async deleteTaskById(id: string): Promise<void> {
    const found = await this.tasksRepository.delete(id);
    if (found.affected === 0) {
      throw new NotFoundException('Task with ID ${id} not found');
    }
  }

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

  getTasks(filterDto: GetTasksFilterDto): Promise<Task[]> {
    return this.tasksRepository.getAllTasks(filterDto);
  }

  getTaskById(id: string): Promise<Task> {
    return this.tasksRepository.getTaskById(id);
  }

  async updateTaskStatus(id: string, status: TaskStatus): Promise<Task> {
    const task = await this.getTaskById(id);
    task.status = status;
    await this.tasksRepository.save(task);
    return task;
  }
}
