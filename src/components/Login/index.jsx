import React from 'react';
import styles from './login.module.css';
import { signInWithGoogle } from "../../firebase/firebase";

const Login = () => {
  return (
    <div className={styles.Login}>
      <h2>Login to continue to Collections Page</h2>
      <button onClick={() => signInWithGoogle()} type="button">
        Continue With Google
      </button>
    </div>
  );
}

export default Login;