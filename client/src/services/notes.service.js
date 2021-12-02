import http from "../http-common";

export const getNotes = () => {
  return http.get("/notes");
};

export const getUserNotes = (uid) => {
  return http.get(`/notes/user/${uid}`)
}

export const createNote = data => {
  return http.post('/notes', data)
}

export const updateNote = (id, data) => {
  return http.put(`/notes/${id}`, data)
}

export const deleteNote = (id) => {
  return http.delete(`/notes/${id}`)
}
