import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import { useUser } from "../components/Usercontext";
import logo from "../assets/TeamFlicksUpdated.png";
import backgroundImage from "../assets/LoginBackground.png";
import toast, { Toaster } from 'react-hot-toast';
import { duration } from "@mui/material";

const Login = ({setShowLogin}) => {
  const navigate = useNavigate();
  const { login } = useUser();

  const initialValues = { email: '', password: '' };
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email address is required'),
    password: Yup.string().required('Password is required'),
  });

  const onSubmit = async (values) => {
    const success = await login(values);
    if (success) {
      toast.success('Login successful!');
      setTimeout(() => {
      navigate('/home');
      }, 2000);
    }
  };

  const pageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    paddingTop: '80px',
    color: 'white',
  };

  const containerStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '40px',
    backgroundColor: '#2c2c2c',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    border: '1px solid #FFFFFF',
  };

  const fieldStyle = {
    display: 'block', width: '100%', padding: '10px', marginTop: '5px',
    marginBottom: '10px', border: '1px solid #555', borderRadius: '5px',
    backgroundColor: '#1e1e1e', color: 'white',
  };

  const errorStyle = { color: '#ff4d4f', fontSize: '0.85em', marginBottom: '10px' };
  const labelStyle = { fontWeight: 'bold', marginBottom: '5px', display: 'block' };
  const buttonStyle = {
    width: '100%', padding: '10px', backgroundColor: '#e50914', color: 'white',
    border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold',
  };
  const toggleStyle = {
    display: 'block', marginTop: '20px', textAlign: 'center',
    color: '#fff', fontSize: '1em', fontWeight: 'bold', cursor: 'pointer',
    textDecoration: 'underline',
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <img src={logo} alt="TeamFlix Logo" style={{ maxWidth: '300px' }} />
        </div>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'bold', fontSize: '1.8em' }}>
          Login
        </h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <Form>
            <div>
              <label htmlFor="email" style={labelStyle}>Email</label>
              <Field name="email" type="email" style={fieldStyle} />
              <ErrorMessage name="email" component="div" style={errorStyle} />
            </div>
            <div>
              <label htmlFor="password" style={labelStyle}>Password</label>
              <Field name="password" type="password" style={fieldStyle} />
              <ErrorMessage name="password" component="div" style={errorStyle} />
            </div>
            <button type="submit" style={buttonStyle}>Login</button>
          </Form>
        </Formik>
        <div style={toggleStyle} onClick={() => setShowLogin(false)}>Don't have an account? Register here</div>
      </div>
      <Toaster position="top-center" reverseOrder={false}
        toastOptions={{ style: { background: '#333', color: '#fff', fontWeight: 'bold' } }} />
    </div>
  );
};

export default Login;