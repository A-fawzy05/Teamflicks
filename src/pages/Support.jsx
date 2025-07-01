import React, { useState, useEffect } from 'react';
import '../Support.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import supportImage from '../assets/Pic3.png';
import api from '../api';
import { useUser } from '../components/Usercontext'; 

const Support = () => {
  const { currentUser } = useUser();
  const isAdmin = currentUser?.isAdmin;

  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [submissions, setSubmissions] = useState([]);

  const formik = useFormik({
    initialValues: { firstName: '', lastName: '', email: '', phone: '', message: '' },
    validationSchema: Yup.object({
      firstName: Yup.string().max(8,"Max 8 chars").matches(/^[A-Za-z\s]+$/).required(),
      lastName:  Yup.string().max(8,"Max 8 chars").matches(/^[A-Za-z\s]+$/).required(),
      email:     Yup.string().email().required(),
      phone:     Yup.string().matches(/^[0-9]+$/).required(),
      message:   Yup.string().required(),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await api.post('/support', values);
        resetForm();
        alert('Thank you—your message has been sent!');
      } catch {
        alert('Failed to send. Please try again.');
      }
    },
  });

  const fetchSubmissions = async () => {
    try {
      const { data } = await api.get('/support');
      setSubmissions(data.data);
    } catch (err) {
      console.error(err);
      alert('Cannot load submissions.');
    }
  };

  const toggleFAQ = idx => {
    setExpandedQuestion(expandedQuestion === idx ? null : idx);
  };

  return (
    <div className="support-container">
      {/* Left Section (FAQ + Image) */}
      <div className="left-section">
        <div className="support-header">
          <h1>Support</h1>
          <p className="support-subheader">We're here to help with any problems</p>
        </div>
        <img src={supportImage} alt="Support" className="support-image" />
        <div className="faq-section">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <hr className="faq-divider" />
          {[{
             q: 'How do I contact support?',
             a: "You can contact support through the 'Contact Us' form on the right."
           },{
             q: 'What is the response time for support requests?',
             a: 'We usually respond within 24 hours during business hours.'
          }].map((item, i) => (
            <div key={i} className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(i)}>
                {item.q}
              </button>
              {expandedQuestion === i && (
                <div className="faq-answer"><p>{item.a}</p></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Section (Form + Admin Results) */}
      <div className="right-section">
        <div className="contact-form-container">
          <h2>Contact Us</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-row">
              <input
                name="firstName" placeholder="First Name"
                className={`input ${formik.touched.firstName && formik.errors.firstName ? 'input-error' : ''}`}
                {...formik.getFieldProps('firstName')}
              />
              <input
                name="lastName" placeholder="Last Name"
                className={`input ${formik.touched.lastName && formik.errors.lastName ? 'input-error' : ''}`}
                {...formik.getFieldProps('lastName')}
              />
            </div>
            <div className="form-row">
              <input
                name="email" type="email" placeholder="Email"
                className={`input ${formik.touched.email && formik.errors.email ? 'input-error' : ''}`}
                {...formik.getFieldProps('email')}
              />
              <input
                name="phone" type="tel" placeholder="Phone Number"
                className={`input ${formik.touched.phone && formik.errors.phone ? 'input-error' : ''}`}
                {...formik.getFieldProps('phone')}
              />
            </div>
            <textarea
              name="message" rows={5} placeholder="Message"
              className={`textarea ${formik.touched.message && formik.errors.message ? 'input-error' : ''}`}
              {...formik.getFieldProps('message')}
            />
            <div className="button-container">
              <button type="submit">Send Message</button>
            </div>
          </form>

          {isAdmin && (
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <button onClick={fetchSubmissions} className="admin-fetch-btn">
                Display Results
              </button>

              {submissions.length > 0 && (
                <table className="results-table">
                  <thead>
                    <tr>
                      <th>Name</th><th>Email</th><th>Phone</th><th>Message</th><th>When</th>
                    </tr>
                  </thead>
                  <tbody>
                    {submissions.map((r, idx) => (
                      <tr key={idx}>
                        <td>{r.firstName} {r.lastName}</td>
                        <td>{r.email}</td>
                        <td>{r.phone}</td>
                        <td>{r.message}</td>
                        <td>{new Date(r.submittedAt).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Support;
