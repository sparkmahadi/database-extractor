import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router';
import { createContext, useState } from 'react';
export const UserDataContext = createContext();

function App() {

  const [userData, setUserData] = useState({});

  const value = {userData, setUserData}

  return (
    <UserDataContext.Provider value={value}>
      <RouterProvider router={router}>
      </RouterProvider>
    </UserDataContext.Provider>
  );
}

export default App;
