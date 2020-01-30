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

module.exports = router;
