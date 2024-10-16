import { useEffect } from 'react';

const Profile = () => {
  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch('http://localhost:3000/profile');
      const profile = await response.json();
      console.log('profile ', profile);
    };
    fetchProfile();
  }, []);
  return <div>Profile</div>;
};

export default Profile;
