const service = require('../service/task-service');

class TaskController{

  
  async getAllTasks(request, response) {
    let { limit } = request.query;
    let tasksList = await service.getAllTasks(limit);
    response.json(tasksList);
  }

  async getTaskById(request, response) {
    const task = await service.getTaskById(request.params.id);
    if (!task) return response.status(404).end("Tarefa não encontrada.");
    
    response.json(task);
  }

  async createTask(request, response) {
    const task = await service.createTask(request.body);
    response.status(201).json(task);
  }

  async updateTask(request, response) {
    try {
      const taskId = request.params.id;
      const updatedTask = await service.updateTask(taskId, request.body);
  
      if (updatedTask) {
        return response.status(200).json({
          message: 'Tarefa atualizada com sucesso.',
          task: updatedTask
        });
      } else {
        return response.status(404).json({
          error: 'Tarefa não encontrada.',
          taskId: taskId
        });
      }
    } catch (error) {
      console.error('Erro ao atualizar a tarefa:', error);
      return response.status(500).json({
        error: 'Erro interno ao atualizar a tarefa.'
      });
    }
  }

  async deleteTask(request, response) {
    const success = await service.deleteTask(request.params.id);
    if (!success) return response.status(404).end("Tarefa não encontrada.");
    
    response.end("Tarefa removida com sucesso!");
  }

}
module.exports = new TaskController();