import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const UserInfo = () => {
  conts [user, setUser] = useState({})
  const { uid } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = API_URL + 'users/{id}';
        const res = await axios.get(url);
        setUser(res.data.data.id);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>User information</div>
  )
}
