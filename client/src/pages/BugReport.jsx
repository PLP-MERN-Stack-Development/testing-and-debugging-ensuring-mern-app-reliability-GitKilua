  import BugForm from '../components/BugForm';
  import { Link } from 'react-router-dom';
  import { Button } from '../components/ui/button'; // shadcn

  const BugReport = () => (
    <div>
      <h1 className="text-2xl font-bold mb-4">Report a Bug</h1>
      <BugForm />
      <Link to="/">
        <Button className="mt-4 bg-gray-500 text-white">Back to List</Button>
      </Link>
    </div>
  );

  export default BugReport;
  