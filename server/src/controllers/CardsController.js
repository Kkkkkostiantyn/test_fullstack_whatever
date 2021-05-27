const express = require("express");
const router = express.Router();
const models = require("../models");

const { Cards, Lists } = models;

router.post("/", async (req, res) => {
  try {
    await Cards.create({ title: req.body.title, list_id: req.body.list_id });
    res.json(
      await Lists.findAll({
        include: "Cards",
      })
    );
  } catch (error) {
    console.log(error);
  }
});

router.put("/", async (req, res) => {
  try {
    await Cards.update(
      { list_id: req.body.list_id },
      {
        where: {
          id: req.body.id,
        },
      }
    );
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
    await Cards.destroy({
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
