import { getNotes } from '../services/notes.service';

const getAllNotes = async () => {
  try {
    const notes = await getNotes();
    return notes.data;
  } catch (error) {
    console.log(error);
  }
}

export default getAllNotes;