import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBug } from '../store/bugsSlice';
import { Button } from './ui/button'; // shadcn
import { Input } from './ui/input'; // shadcn

const BugForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting bug:', { title, description }); // Debugging log
    try {
      await dispatch(addBug({ title, description }));
      setTitle('');
      setDescription('');
    } catch (err) {
      console.error('Form submit error:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        placeholder="Bug Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full"
      />
      <Input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full"
      />
      <Button type="submit" className="bg-blue-500 text-white">Report Bug</Button>
    </form>
  );
};

export default BugForm;