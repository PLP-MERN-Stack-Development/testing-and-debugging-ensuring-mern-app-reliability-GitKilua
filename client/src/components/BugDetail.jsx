import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBugs, updateBug, deleteBug } from '../store/bugSlice';
import Button from './Button';

const BugDetail = () => {
  const { id } = useParams(); // Get bug ID from URL (e.g., /bug/:id)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bugs = useSelector((state) => state.bugs.list);
  const bug = bugs.find((b) => b._id === id); // Find the specific bug
  const [status, setStatus] = useState(bug?.status || 'open');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!bug) {
      dispatch(fetchBugs()); // Fetch all bugs if not loaded
    } else {
      setStatus(bug.status);
    }
  }, [dispatch, bug]);

  const handleUpdate = async () => {
    setLoading(true);
    try {
      await dispatch(updateBug({ id, status }));
      console.log('Bug updated'); // Debugging log
      navigate('/'); // Redirect to home after update
    } catch (err) {
      console.error('Update error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this bug?')) {
      setLoading(true);
      try {
        await dispatch(deleteBug(id));
        console.log('Bug deleted'); // Debugging log
        navigate('/'); // Redirect to home after delete
      } catch (err) {
        console.error('Delete error:', err);
      } finally {
        setLoading(false);
      }
    }
  };

  if (!bug) {
    return <p className="text-center text-gray-500">Bug not found or loading...</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Bug Details</h1>
      <p className="mb-2"><strong>Title:</strong> {bug.title}</p>
      <p className="mb-4"><strong>Description:</strong> {bug.description}</p>
      <p className="mb-4"><strong>Status:</strong> <span className="px-2 py-1 bg-blue-100 rounded">{bug.status}</span></p>
      <p className="mb-4"><strong>Created:</strong> {new Date(bug.createdAt).toLocaleDateString()}</p>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Update Status</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full px-3 py-2 border rounded">
          <option value="open">Open</option>
          <option value="in-progress">In Progress</option>
          <option value="resolved">Resolved</option>
        </select>
      </div>

      <div className="flex flex-col space-y-2">
        <Button onClick={handleUpdate} disabled={loading} variant="primary">
          {loading ? 'Updating...' : 'Update Status'}
        </Button>
        <Button onClick={handleDelete} disabled={loading} variant="danger">
          {loading ? 'Deleting...' : 'Delete Bug'}
        </Button>
        <Button onClick={() => navigate('/')} variant="secondary">
          Back to List
        </Button>
      </div>
    </div>
  );
};

export default BugDetail;
