import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [socialMedia, setSocialMedia] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [images, setImages] = useState<File[]>([]); 

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleImageUpload(images);
    console.log(images)
  };

  const handleImageUpload = async (files: File[]) => {
    if (files.length === 0) {
      setError('No images selected for upload');
      return;
    }

    const formData = new FormData();
    for (const file of files) {
      formData.append('images', file);
    }
    formData.append('name', username);
    formData.append('socialMediaHandle', socialMedia);

    try {
      setLoading(true); 
      const response = await axios.post('https://w3-backend.onrender.com/user', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        alert('Images uploaded successfully!');
        setError('')
      }
    } catch (error) {
      setError('Image upload failed');
      console.error(error);
    } finally {
      setLoading(false); 
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files)); 
    }
  };

  return (
    <div className="bg-white shadow-lg shadow-neutral-800 rounded-lg p-5 w-4/5 text-center">
      <h2 className="mb-5 font-bold">User Submission Form</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2">
            Name:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md text-lg"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="socialMedia" className="block mb-2">
            Social media handler:
          </label>
          <input
            type="text"
            id="socialMedia"
            value={socialMedia}
            onChange={(e) => setSocialMedia(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md text-lg"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="images" className="block mb-2">
            Upload Images:
          </label>
          <input
            type="file"
            id="images"
            name="images"
            multiple
            onChange={handleFileChange} // Handle file input change
            required
            className="w-full p-2 border border-gray-300 rounded-md text-lg"
          />
        </div>

        {error && !loading && <p className="text-red-500 mb-4">{error}</p>}
        {loading && <p className="text-blue-500 mb-4">Uploading...</p>}

        <button
          type="submit"
          className="w-fit mb-3 self-start p-2 bg-blue-500 text-white rounded-md text-lg cursor-pointer hover:bg-blue-400"
        >
          Submit
        </button>
        <h1>Login as admin click <Link className=' text-blue-600 underline' to='/adminLogin'>here</Link> </h1>
      </form>
    </div>
  );
};

export default RegisterPage;
