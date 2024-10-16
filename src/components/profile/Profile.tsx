import { useEffect, useState } from 'react';
import { getProfile, IProfile } from '../../api/profile';

const Profile = () => {
  const [profile, setProfile] = useState<IProfile | null>(null);
  useEffect(() => {
    const fetchProfile = async () => {
      const response = await getProfile();

      if (response.ok) {
        setProfile(response.profile);
      }
    };
    fetchProfile();
  }, []);

  if (!profile) {
    return <div>Loading profile...</div>;
  }
  return (
    <div>
      <h2>Profile</h2>
      <p>First Name: {profile.firstName}</p>
      <p>Last Name: {profile.lastName}</p>
      <p>Age: {profile.age}</p>
      <p>Email: {profile.email}</p>
      <p>Phone: {profile.phone}</p>
    </div>
  );
};

export default Profile;
