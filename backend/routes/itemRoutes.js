// this script defines the routes for handling item-related API requests.
// we are using express to create these routes.
// we are importing the item model to interact with the database.

import express from "express";
import Item from "../models/itemModel.js";

const router = express.Router();

// POST: Add an item
router.post("/", async (req, res) => {
  try {
    const item = new Item(req.body);
    const saved = await item.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET: Retrieve all items
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
