import { createNote } from '../services/notes.service';

const saveNote = async (data) => {
  try {
    const response = await createNote(data);
    return response
  } catch (error) {
    console.error(error);
  }
}

export default saveNote;