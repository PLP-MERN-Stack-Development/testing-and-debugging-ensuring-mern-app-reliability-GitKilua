import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBug } from '../store/bugSlice';
import { useNavigate } from 'react-router-dom';

const BugForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting bug:', { title, description });
    try {
      await dispatch(addBug({ title, description }));
      setTitle('');
      setDescription('');
      navigate('/');
    } catch (err) {
      console.error('Form submit error:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Bug Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded"
        required
      />
      
      <textarea
        placeholder="Bug Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded"
        rows="4"
        required
      />

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit Bug Report
      </button>
    </form>
  );
};

export default BugForm;
