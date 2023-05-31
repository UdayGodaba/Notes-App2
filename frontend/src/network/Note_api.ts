import axios from "axios";
import { NoteModal } from "../models/NoteModal";

export const deleteNote = async (noteId: string) => {
    await axios.delete("http://localhost:5000/api/notes/" + noteId);
};

export interface NoteInput {
    title?: string,
    text?: string,
};

export const createNote = async (note: NoteInput): Promise<NoteModal> => {
    const response = await axios.post("http://localhost:5000/api/notes", note);
    return response.data;
};

export const updateNote = async (noteId: string, note: NoteInput): Promise<NoteModal> => {
    const response = await axios.patch("http://localhost:5000/api/notes/" + noteId, note);
    return response.data;
};