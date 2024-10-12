import React from 'react'
import Header from '../components/Header'
import UserData from '../components/UserData'
import { useState , useEffect } from 'react';
import axios from 'axios';

interface User {
  name: string;
  socialMediaHandle: string;
  images: string[];
}


function Dashboard() {

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/allUsers'); // Update the URL according to your API
        setUsers(response.data.data); // Assuming your API response is structured like { message: ..., data: [...] }
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch users');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);
 

  return (
    <div className='w-full bg-neutral-50 h-full px-24'>
        <Header />
        <h2 className='font-bold'>All registered users</h2>
        <div className="p-4">
      <ul className="flex w-full mt-14 flex-row justify-between items-center">
        {/* Text Section */}
        <div className="flex gap-14">
          <h1 className="font-bold">User Names</h1>
          <h1 className="font-bold">Social Media Handle</h1>
        </div>
        
        {/* Image Section */}
        <h1 className="font-bold ml-auto">Images</h1>
      </ul>

      {/* Horizontal Line */}
      <hr className="mt-4 h-1 rounded-md opacity-25 bg-black" />
    </div>
    {loading && <h1 className='font-bold text-3xl w-full  align-middle text-center'>Loading...</h1> }
    {error && <h1 className='font-bold text-3xl w-full  align-middle text-center'>error occurred</h1> }
    
    {users.map((user, index) => (
  <UserData key={index} user={user} />
))}
    </div>
  )
}

export default Dashboard