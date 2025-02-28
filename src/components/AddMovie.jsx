import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Add a New Movie</h1>
      <form>
        <input type="text" placeholder="Title" required />
        <input type="text" placeholder="Director" required />
        <select required>
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
        </select>
        <input type="number" placeholder="Release Year" required />
        <textarea placeholder="Synopsis" required></textarea>
        <input type="url" placeholder="Poster Image URL" required />
        <button type="submit">Submit</button>
        <button type="button" onClick={() => navigate('/')}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
