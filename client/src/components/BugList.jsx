import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBugs, updateBug, deleteBug } from '../store/bugsSlice';
import { Card } from './ui/card'; // shadcn
import { Select } from './ui/select'; // shadcn
import { Button } from './ui/button'; // shadcn

const BugList = () => {
  const bugs = useSelector((state) => state.bugs.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBugs());
  }, [dispatch]);

  const handleUpdate = (id, status) => {
    dispatch(updateBug({ id, status }));
  };

  const handleDelete = (id) => {
    dispatch(deleteBug(id));
  };

  return (
    <div className="space-y-4">
      {bugs.map((bug) => (
        <Card key={bug._id} className="p-4">
          <h3 className="font-bold">{bug.title}</h3>
          <p>{bug.description}</p>
          <Select
            value={bug.status}
            onValueChange={(value) => handleUpdate(bug._id, value)}
            className="mt-2"
          >
            <option value="open">Open</option>
            <option value="in-progress">In Progress</option>
            <option value="resolved">Resolved</option>
          </Select>
          <Button onClick={() => handleDelete(bug._id)} className="mt-2 bg-red-500 text-white">Delete</Button>
        </Card>
      ))}
    </div>
  );
};

export default BugList;