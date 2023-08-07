import mongoose from "mongoose";

const keeperNoteSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: { type: Date, default: Date.now }
})

const KeeperNote = mongoose.model("KeeperNotes", keeperNoteSchema)

export { KeeperNote }