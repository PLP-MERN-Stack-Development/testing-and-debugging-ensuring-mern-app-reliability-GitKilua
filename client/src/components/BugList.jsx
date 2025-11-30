import React from 'react';
import { useSelector } from 'react-redux'; // Use useSelector to access state
import { Link } from 'react-router-dom';

const BugList = () => {
  // Correctly select the bugs array from the state
  const bugs = useSelector(state => state.bugs.list); 

  if (bugs.length === 0) {
    return <p className="text-gray-500">No bugs reported yet!</p>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Reported Bugs ({bugs.length})</h2>
      {/* Map over the bugs array to display each one */}
      {bugs.map(bug => (
        <Link key={bug._id} to={`/bug/${bug._id}`} className="block">
          <div 
            className={`p-4 rounded shadow cursor-pointer hover:shadow-lg transition ${bug.status === 'resolved' ? 'bg-green-100' : bug.status === 'in-progress' ? 'bg-yellow-100' : 'bg-red-100'}`}
          >
            <h3 className="font-semibold">{bug.title}</h3>
            <p className="text-sm text-gray-700">{bug.description}</p>
            <p className="text-xs text-gray-500 mt-2">Status: {bug.status}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BugList;