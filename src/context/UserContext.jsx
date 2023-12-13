import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';


const UserContext = createContext([])

export const useUserContext = () => useContext(UserContext)


export const UserContextProv = ({ children }) => {
  const API_URL = 'https://reqres.in/api/';
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = API_URL + 'users?per_page=5';
        const res = await axios.get(url);
        setUsers(res.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return(
    <UserContext.Provider
      value={{
        users,
        API_URL,
        
      }}>
      {children}
    </UserContext.Provider>
  )
}