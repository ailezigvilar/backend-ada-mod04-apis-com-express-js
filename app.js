const express = require("express");
const controller = require('./controller/task-controller');
const sequelize = require('./infra/sequelize')

async function main() {

  sequelize
    // Para manter o histórico do banco entre inicializações
    .sync()
    //Para dropar as tabelas e subir de novo (quando mexer na estrutura das entities)
    // .sync({ force: true })
    .then(() => {
      console.log('Arquivo de banco de dados importado corretamente!');
  });

  const app = express();
  app.use(express.json());

  app.get("/", controller.getAllTasks);
  app.get("/:id", controller.getTaskById);
  app.post("/", controller.createTask);
  app.put("/:id", controller.updateTask);
  app.delete("/:id", controller.deleteTask);

  const PORT = 3000;
  app.listen(PORT, () =>
    console.log(`Server running at http://localhost:${PORT}/`),
  );
}

main();
