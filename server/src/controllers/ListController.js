const express = require("express");
const router = express.Router();
const models = require("../models");

const { Lists } = models;

router.get("/", async (req, res) => {
  try {
    res.json(
      await Lists.findAll({
        include: "Cards",
      })
    );
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    await Lists.create({ title: req.body.title });
    res.json(
      await Lists.findAll({
        include: "Cards",
      })
    );
  } catch (error) {
    console.log(error);
  }
});

router.delete("/", async (req, res) => {
  try {
    await Lists.destroy({
      where: {
        id: req.body.id,
      },
    });
    res.json(
      await Lists.findAll({
        include: "Cards",
      })
    );
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
