const router = require("express").Router();

const Holds = require("./holds-model.js");

router.get("/", (req, res) => {
  Holds.getAll()
    .then(holds => {
      console.log(holds);
      res.status(200).json(holds);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(error);
    });
});

router.post("/", (req, res) => {
  const newHold = req.body;

  Holds.insert(newHold)
    .then(holdId => {
      console.log(holdId);
      res
        .status(201)
        .json({ message: `a new hold was created with id ${holdId}` });
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Something went wrong adding a new hold" });
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Holds.remove(id)
    .then(bool => {
      if (bool) {
        res.status(200).json({ message: `Hold with id ${id} was deleted` });
      } else {
        res.status(404).json({ message: "hold not found" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: "Something went wrong and your hold was not deleted"
      });
    });
});

module.exports = router;
