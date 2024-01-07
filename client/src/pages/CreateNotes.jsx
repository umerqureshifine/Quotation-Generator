

import React, { useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const CreateNotes = () => {
  const { id } = useParams();
  const [noteTexts, setNoteTexts] = useState([""]);
  const [quotationId, setQuotationId] = useState(id);

  const handleCreateNote = async () => {
    try {
      // Make a POST request to the backend endpoint for creating notes
      const response = await axios.post("http://localhost:9000/api/notes", {
        noteTexts: noteTexts,
        quotationId: quotationId,
      });

      // If the notes are created successfully, you can handle the response here
      console.log("Notes created successfully:", response.data);
    } catch (error) {
      // Handle errors, e.g., show an error message to the user
      console.error("Error creating notes:", error);
    }
  };

  const handleAddNote = () => {
    setNoteTexts([...noteTexts, ""]);
  };

  const handleNoteTextChange = (index, text) => {
    const updatedNoteTexts = [...noteTexts];
    updatedNoteTexts[index] = text;
    setNoteTexts(updatedNoteTexts);
  };

  return (
    <div className="container mt-5">
      <h2>Create New Notes</h2>
      {noteTexts.map((text, index) => (
        <div key={index}>
          <textarea
            rows="4"
            cols="50"
            className="form-control"
            placeholder={`Enter note text #${index + 1}`}
            value={text}
            onChange={(e) => handleNoteTextChange(index, e.target.value)}
          />
          <br />
        </div>
      ))}
      <input
        type="text"
        placeholder="Quotation ID"
        value={quotationId}
        disabled
      />
      <br />
      <Link to={`/final-quotation/${id}`}  className="btn btn-success mt-3" onClick={handleCreateNote}>
      Create Notes
      </Link>
      
      <button className="btn btn-primary mx-2 mt-3" onClick={handleAddNote}>
        Add Note
      </button>
     
    </div>
  );
};

export default CreateNotes;

