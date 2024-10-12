import React, { useState } from 'react';

// Define a TypeScript interface for User
interface User {
  name: string;
  socialMediaHandle: string;
  images: string[];
}

interface UserDataProps {
  user: User; // Accept user data as a prop
}

const UserData: React.FC<UserDataProps> = ({ user }) => {
  // State to manage the visibility of images
  const [showImages, setShowImages] = useState<boolean>(false);

  // Toggle function to show or hide images
  const toggleImages = () => {
    setShowImages(!showImages);
  };

  return (
    <div className="p-2 border-b-2 hover:bg-neutral-200">
      <ul className="flex w-full flex-row justify-between items-center">
        {/* Text Section */}
        <div className="flex gap-14">
          <h1 className="text-sm font-bold">{user.name}</h1>
          <h1 className="text-sm font-bold">{user.socialMediaHandle}</h1>
        </div>

        {/* Button to toggle images */}
        <button 
          className="text-blue-500 ml-auto" 
          onClick={toggleImages}
        >
          {showImages ? 'Hide images <<' : 'See images >>'}
        </button>
      </ul>

      
      <div 
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 pt-4 items-center justify-center gap-5 transition-all duration-[1000] ease-in-out 
          ${showImages ? 'opacity-100 scale-100' : 'opacity-0 scale-0 h-0 overflow-hidden'}`}
      >
        
        {user.images.map((image, index) => (
          <img 
            key={index}
            src={image} 
            className="w-44 h-44 rounded-md" 
            alt={`${user.name} upload ${index + 1}`} 
          />
        ))}
      </div>
    </div>
  );
};

export default UserData;
