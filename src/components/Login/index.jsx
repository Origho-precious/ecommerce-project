import React from 'react';
import { connect } from 'react-redux';
import styles from './login.module.css';
import { signInWithGoogle } from "../../firebase/firebase";

const Login = ({ setCurrentUser }) => {
    return (
      <div className={styles.Login}>
        <h2>Login to continue to Collections Page</h2>
        <button onClick={() => {
            signInWithGoogle();
                
        }} type="button">
          Continue With Google
        </button>
      </div>
    );
}

const mapStateToProps = ({ user }) => {
  return {
    user,
  };
};

export default connect(mapStateToProps)(Login);