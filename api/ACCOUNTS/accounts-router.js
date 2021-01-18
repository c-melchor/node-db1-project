const express = require("express");
const Accounts = require("./accounts-model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Accounts.getAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const account = await Accounts.getById(id);
    res.status(200).json(account);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const editedAccount = await Accounts.update(id, changes);
    res.status(200).json(editedAccount);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newAccount = req.body;
    const data = await Accounts.create(newAccount);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
