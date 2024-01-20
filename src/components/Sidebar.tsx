import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
    return (
      <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
        <nav>
          <ul>
            <li className="mb-3">
              <Link to="/" className="text-lg hover:text-gray-300">Home</Link>
            </li>
            {/* Add more navigation links here */}
          </ul>
        </nav>
      </aside>
    );
  };
  

export default Sidebar;
