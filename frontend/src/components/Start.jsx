import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Start = () => {
  const navigate = useNavigate();
  const URL = "http://localhost:8001"; 

  const isValid = async (userID) => {
    try {
      console.log(userID);
      
      const response = await axios.get(`${URL}/valid-user`, {
        params: { _id: userID.toString() } 
      });
      console.log("data", response.data);

      if (!response.data.user) {
        navigate("/login");
      } else {
        navigate("/chat");
      }
    } catch (error) {
      console.error("Error validating user:", error);
      navigate("/login"); // Optionally handle errors by redirecting to login
    }
  };

  useEffect(() => {
    const userID = localStorage.getItem('userId');
    if (!userID) {
      navigate("/login");
    } else {
      isValid(userID);
    }
  }, [navigate]); // Add `navigate` to dependencies to avoid exhaustive-deps warning

  return (
    <div>
      <p>Loading...</p>
    </div>
  );
};

export default Start;
