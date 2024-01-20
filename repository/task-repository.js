const Task = require('../entity/task');

class TaskRepository{
  async getAllTasks(limit) {
    return await Task.findAll({ limit });
  }

  async getTaskById(id) {
    return await Task.findByPk(id);
  }

  async createTask(data) {
    return await Task.create(data);
  }

  async updateTask(id, data) {
    const filter = { where: { id }, returning: true };
    return await Task.update(data, filter);
  }

  async deleteTask(id) {
    const filter = { where: { id } };
    return await Task.destroy(filter);
  }
}

module.exports = new TaskRepository();