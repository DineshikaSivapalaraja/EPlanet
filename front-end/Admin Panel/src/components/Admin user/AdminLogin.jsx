import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AdminLogin.css';
import { Link, useHistory } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'sheran' && password === 'sheran123') {
      // Set session or redirect to dashboard
      //console.log('Login success!');
      history.push('/card');
    } else {
      toast.error('Incorrect username or password', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
            fontSize: '15px'
          }
      });
    }
  };

  return (
    <>
      <div className='logincls'>
        <div className='loginbox'>
          <h1>Admin Login</h1>
          <form onSubmit={handleLogin}>
            <div className='logrow1'>
              <div className='logcol1'>
                <label htmlFor='username'>Username:</label>
              </div>
              <div className='logcol2'>
                <input
                  type='text'
                  id='uname'
                  placeholder='Your username..'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className='logrow1'>
              <div className='logcol1'>
                <label htmlFor='password'>Password:</label>
              </div>
              <div className='logcol2'>
                <input
                  type='password'
                  id='password'
                  placeholder='Your password..'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button className='button-30' type='submit'>
              Login
            </button>
          </form>
          <div className='forget'>
            <Link to='#'>
              <span>Forget Password</span>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AdminLogin;
