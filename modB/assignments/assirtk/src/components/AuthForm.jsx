// import React, { useState } from 'react';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase';
// import { useDispatch } from 'react-redux';
// import { setUser } from '../store/authSlice';
// import styles from './AuthForm.module.css'; // Import CSS module

// const AuthForm = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = isLogin
//         ? await signInWithEmailAndPassword(auth, email, password)
//         : await createUserWithEmailAndPassword(auth, email, password);

//       dispatch(setUser(userCredential.user));
//     } catch (error) {
//       alert(error.message); // Show alert on error
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h2>{isLogin ? 'Sign In' : 'Sign Up'}</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           value={email}
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           autoComplete="email"
//         />
//         <input
//           type="password"
//           value={password}
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           autoComplete={isLogin ? "current-password" : "new-password"}
//         />
//         <button type="submit">{isLogin ? 'Sign In' : 'Sign Up'}</button>
//       </form>
//       <button
//         className={styles['switch-btn']}
//         onClick={() => setIsLogin(!isLogin)}
//       >
//         Switch to {isLogin ? 'Sign Up' : 'Sign In'}
//       </button>
//     </div>
//   );
// };

// export default AuthForm;


import React, { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/authSlice';
import styles from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');       // New state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let userCredential;
      if (isLogin) {
        // Sign in
        userCredential = await signInWithEmailAndPassword(auth, email, password);
      } else {
        // Sign up
        userCredential = await createUserWithEmailAndPassword(auth, email, password);

        // Update user profile with username
        await updateProfile(auth.currentUser, {
          displayName: username,
        });
      }

      // Use updated user (with displayName)
      const user = auth.currentUser;
      dispatch(setUser(user));
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h2>{isLogin ? 'Sign In' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required={!isLogin}
            autoComplete="username"
          />
        )}
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete={isLogin ? "current-password" : "new-password"}
        />
        <button type="submit">{isLogin ? 'Sign In' : 'Sign Up'}</button>
      </form>
      <button
        className={styles['switch-btn']}
        onClick={() => setIsLogin(!isLogin)}
      >
        Switch to {isLogin ? 'Sign Up' : 'Sign In'}
      </button>
    </div>
  );
};

export default AuthForm;
