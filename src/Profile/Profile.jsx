// src/Profile.js
import React, { useState, useEffect } from 'react';
import './Profile.css';  // Import the CSS file
import Header from '../header/Header'; // Import the header

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulated fetch function for user data
  const fetchUserData = async () => {
    // Simulating an API call
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
    <div style={styles.container}>
    <Header />
      <img src={user.avatar} alt="Avatar" style={styles.avatar} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.bio}</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    maxWidth: '400px',
    margin: 'auto',
  },
  avatar: {
    borderRadius: '50%',
    marginBottom: '15px',
  },
};

export default Profile;
