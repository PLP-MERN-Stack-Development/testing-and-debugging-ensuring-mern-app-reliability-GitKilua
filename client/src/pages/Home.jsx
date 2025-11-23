import BugList from '../components/BugList';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button'; // shadcn

const Home = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Bug Tracker</h1>
    <Link to="/report">
      <Button className="bg-green-500 text-white">Report New Bug</Button>
    </Link>
    <BugList />
  </div>
);

export default Home;