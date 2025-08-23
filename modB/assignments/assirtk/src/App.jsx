// src/App.jsx

import React from 'react';
import AuthForm from './components/AuthForm';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './store/authSlice';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

// const App = () => {
//   const user = useSelector((state) => state.auth.user);
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     signOut(auth);
//     dispatch(logout());
//   };

//   return (
//     <div style={{ maxWidth: '500px', margin: '40px auto', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
//       {user ? (
//         <div style={{ textAlign: 'center' }}>
//           <h2>Welcome, {user.email}</h2>
//           <button
//             onClick={handleLogout}
//             style={{
//               padding: '12px 20px',
//               backgroundColor: '#ef4444',
//               color: 'white',
//               border: 'none',
//               borderRadius: '6px',
//               cursor: 'pointer',
//               fontWeight: 'bold',
//             }}
//           >
//             Logout
//           </button>
//         </div>
//       ) : (
//         <AuthForm />
//       )}
//     </div>
//   );
// };
const App = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    signOut(auth);
    dispatch(logout());
  };

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      {user ? (
        <div style={{ textAlign: 'center' }}>
          <h2>Welcome, {user.displayName || user.email}</h2> {/* Show username if available */}
          <button
            onClick={handleLogout}
            style={{
              padding: '12px 20px',
              backgroundColor: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <AuthForm />
      )}
    </div>
  );
};


export default App;

