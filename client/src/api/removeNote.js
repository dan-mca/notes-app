import { deleteNote } from '../services/notes.service';

const removeNote = async (id) => {
  try {
    const response = await deleteNote(id);
    return response
  } catch (error) {
    console.error(error);
  }
}

export default removeNote;