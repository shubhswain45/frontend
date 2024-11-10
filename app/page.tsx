'use client'
import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  const setCookie = async () => {
    try {
      const res = await fetch('https://backend-y4p6.onrender.com/set-cookie', {
        method: 'GET',
        credentials: 'include', // To include cookies in the request
      });
      const text = await res.text();
      setMessage(text);
    } catch (error) {
      console.error('Error setting cookie:', error);
      setMessage('Failed to set cookie');
    }
  };

  const getCookie = async () => {
    try {
      const res = await fetch('https://backend-y4p6.onrender.com/get-cookie', {
        method: 'GET',
        credentials: 'include', // To include cookies in the request
      });
      const text = await res.text();
      setMessage(text);
    } catch (error) {
      console.error('Error getting cookie:', error);
      setMessage('Failed to get cookie');
    }
  };

  return (
    <div>
      <h1>Cookie Handling with Next.js</h1>
      <button onClick={setCookie}>Set Cookie</button>
      <button onClick={getCookie}>Get Cookie</button>
      <p>{message}</p>
    </div>
  );
}
