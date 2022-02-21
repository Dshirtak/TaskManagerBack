const express = require("express");
const { fetchTasks,addTask, updateTask,deleteTask } = require("../controllers/tasks");
const router = express.Router();
router.get("/", async (req, res) => {
    var tasks=fetchTasks(req.query);
    res.send(tasks);
  });





  router.post("/", async (req, res) => {
    const task={...req.body}
    var addedTasks=addTask(task)
    res.send(addedTasks);
  });



  router.put("/:id", async (req, res) => {
      const id=req.params.id;
      const taskUpdated={...req.body};
      var updatedTasks=updateTask(id,taskUpdated)
      res.send(updatedTasks);
  });

  router.delete("/:id", async (req, res) => {
    const id=req.params.id;
    var updatedTasks=deleteTask(id);
    res.send(updatedTasks);
  });
  module.exports = router;
  