const express = require("express");
const { NoteModel } = require("../models/Note.model");
const noteRouter = express.Router();

noteRouter.get("/", (req, res) => {
  res.send("All the notes");
});

noteRouter.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    const new_note = new NoteModel(payload);
    await new_note.save();
    res.send("Created a new note");
  } catch (err) {
    res.send({ msg: "Sorry cannot create the note" });
  }
});

noteRouter.patch("/update/:id", async (req, res) => {
  const ID = req.params.id;
  const payload = req.body;
  const note = await NoteModel.findOne({ _id: ID }); //get particular note whose user id i want, to patch.
  const user_id_innote = note.userID; //user id in that particular document
  const userid_makingrequest = req.body.userId;
  try {
    if (userid_makingrequest !== user_id_innote) {
      res.send({ msg: "You are not authorized" });
    } else {
      await NoteModel.findByIdAndUpdate({ _id: ID }, payload);
      res.send("Updated the note");
    }
  } catch (err) {
    res.send({ msg: "Sorry cannot update the note" });
  }
});

noteRouter.delete("/delete/:id", async (req, res) => {
  const ID = req.params.id;
  const note = await NoteModel.findOne({ _id: ID });
  const user_id_innote = note.userID;
  const userid_makingrequest = req.body.userId;
  try {
    if (userid_makingrequest !== user_id_innote) {
      res.send({ msg: "You are not authorized" });
    } else {
      await NoteModel.findByIdAndDelete({ _id: ID });
      res.send("Deleted the note");
    }
  } catch (err) {
    res.send({ msg: "Sorry cannot delete the note" });
  }
});

module.exports = { noteRouter };
