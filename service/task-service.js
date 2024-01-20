const repository = require('../repository/task-repository');

class TaskService{

  async getAllTasks(limit) {
    return await repository.getAllTasks(limit);
  }

  async getTaskById(id) {
    return await repository.getTaskById(id);
  }

  async createTask(data) {
    return await repository.createTask(data);
  }

  async updateTask(id, data) {
    const [task, _] = await repository.updateTask(id, data);
    return task;
  }

  async deleteTask(id) {
    const countDeleted = await repository.deleteTask(id);
    return countDeleted > 0;
  }

}

module.exports = new TaskService();