import Weather from './components/Weather';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';

function App() {
  

  return (
    <div style={{ backgroundColor: '#ddd9d9ff',padding:"40px" ,height:"50vh",color:"black",justifyContent:"center",alignItems:"center",textAlign:"center" }}>
      <Weather />
    </div>
  )
}

export default App;
