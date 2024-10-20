import React, { useState, useEffect } from 'react';
import './Profile.css';
import Header from '../header/Header';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    const response = await new Promise((resolve) =>
      setTimeout(() => resolve({
        name: 'John Doe',
        email: 'john.doe@example.com',
        bio: 'Software Developer based in San Francisco.',
        avatar: 'https://via.placeholder.com/150'
      }), 1000)
    );
    setUser(response);
    setLoading(false);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <img src={user.avatar} alt="Avatar" className="avatar" />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.bio}</p>
    </div>
  );
};

export default Profile;
