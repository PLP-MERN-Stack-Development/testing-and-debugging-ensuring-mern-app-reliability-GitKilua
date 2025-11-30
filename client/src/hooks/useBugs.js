import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBugs, addBug, updateBug, deleteBug } from '../store/bugSlice';

const useBugs = () => {
  const dispatch = useDispatch();
  const { list: bugs, loading, error } = useSelector((state) => state.bugs);

  // Fetch bugs on mount
  useEffect(() => {
    dispatch(fetchBugs());
  }, [dispatch]);

  const createBug = async (bugData) => {
    try {
      await dispatch(addBug(bugData));
      console.log('Bug created'); // Debugging log
    } catch (err) {
      console.error('Create bug error:', err);
      throw err; // Re-throw for component handling
    }
  };

  const modifyBug = async (id, status) => {
    try {
      await dispatch(updateBug({ id, status }));
      console.log('Bug updated'); // Debugging log
    } catch (err) {
      console.error('Update bug error:', err);
      throw err;
    }
  };

  const removeBug = async (id) => {
    try {
      await dispatch(deleteBug(id));
      console.log('Bug deleted'); // Debugging log
    } catch (err) {
      console.error('Delete bug error:', err);
      throw err;
    }
  };

  return {
    bugs,
    loading,
    error,
    createBug,
    modifyBug,
    removeBug,
  };
};

export default useBugs;
