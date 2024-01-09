

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const CreateNotes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [noteTexts, setNoteTexts] = useState([]);
  const [selectedNotes, setSelectedNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    // Fetch notes from the backend API
    const fetchNotes = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/api/notes_data`);
        setNoteTexts(response.data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchNotes();
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts

  const handleNoteSelection = (e) => {
    const selectedNote = e.target.value;
    setNewNote(""); // Reset the new note input when selecting an existing note
    setSelectedNotes([...selectedNotes, selectedNote]);
  };

  const handleAddNote = () => {
    if (newNote.trim() !== "") {
      setSelectedNotes([...selectedNotes, newNote]);
      setNewNote("");
    }
  };

  const handleRemoveNote = (index) => {
    const updatedNotes = [...selectedNotes];
    updatedNotes.splice(index, 1);
    setSelectedNotes(updatedNotes);
  };

  const handleCreateNotes = async () => {
    try {
      
      for (const note of selectedNotes) {
        const response = await axios.post("http://localhost:9000/api/notes", {
          noteTexts: [note],
          quotationId: id,
        });

       
        console.log("Note stored successfully:", response.data);
      }
      navigate(`/final-quotation/${id}`);
      
    } catch (error) {
      console.error("Error storing notes:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create New Notes</h2>

   
      <select
        className="form-select mb-3"
        value=""
        onChange={handleNoteSelection}
      >
        <option value="" disabled>Select an existing note</option>
        {noteTexts.map((text, index) => (
          <option key={index} value={text}>
            {text}
          </option>
        ))}
      </select>

    
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a new note"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={handleAddNote}>
          Add Note
        </button>
      </div>

      
      {selectedNotes.length > 0 && (
        <div className="mb-3">
          <h5>Selected Notes:</h5>
          <ul>
            {selectedNotes.map((note, index) => (
              <li key={index}>
                {note}{" "}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleRemoveNote(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

     
      <button className="btn btn-success" onClick={handleCreateNotes}>
        Create Notes
      </button>

      
      <Link to={`/final-quotation/${id}`} className="btn btn-primary mx-4">
        Back to Final Quotation
      </Link>
    </div>
  );
};

export default CreateNotes;
