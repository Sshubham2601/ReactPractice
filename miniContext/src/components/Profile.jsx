import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
  const { user } = useContext(UserContext);

  // Check if the user is not logged in
  if (!user) {
    return <div className='bg-gray-700 flex justify-center text-3xl'>Please login</div>;
  }

  // Display user information if logged in
  return (
    <div className='bg-gray-700 flex justify-center text-3xl'>
      Welcome {user.userName}
    </div>
  );
}

export default Profile;
