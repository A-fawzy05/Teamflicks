import React, { useState, useEffect } from "react";
import "../App.css";
import { useUser } from "../components/Usercontext";
import toast, { Toaster } from 'react-hot-toast';

function Subscription() {
  const { currentUser, updateSubscription } = useUser();
  const [subscription, setSubscription] = useState("");

  useEffect(() => {
    if (currentUser) {
      setSubscription(currentUser.subscription);
    }
  }, [currentUser]);

  const handleSubscription = async (plan) => {
    if (subscription.toLowerCase() === plan.toLowerCase()) {
      toast.error(`You are already enrolled in the ${plan} plan!`);
    } else {
      const success = await updateSubscription(plan);
      if (success) {
        setSubscription(plan);
        toast.success(`You have subscribed to the ${plan} plan!`);
      } else {
        toast.error('Subscription update failed.');
      }
    }
  };

  return (
    <>
      <div className='meto'>
        Compare our plans and find the right one for you
        <div className='meto8'>
          TeamFlicks offers you three different plans to fit your needs: Basic, Standard and Premium.
        </div>
      </div>

      <div className="pricing-container">
        <div className="pricing-card">
          <h3>Basic Plan</h3>
          <p className="caption1">Enjoy an extensive library of movies and shows,</p>
          <p className="caption1">featuring a range of content including recently</p>
          <p className="caption1">released titles.</p>
          <h2>$9.99 <span className='amr2'>/month</span></h2>
          <div className="buttons4">
            <button id="buttonn4" onClick={() => handleSubscription("Basic")}>Choose Plan</button>
          </div>
        </div>

        <div className="pricing-card">
          <h3>Standard Plan</h3>
          <p className="caption1">Access to a wider selection of movies and shows,</p>
          <p className="caption1">including most new releases and exclusive</p>
          <p className="caption1">content.</p>
          <h2 className='amr'>$12.99 <span className='amr2'>/month</span></h2>
          <div className="buttons1">
            <button id="buttonn" onClick={() => handleSubscription("Standard")}>Choose Plan</button>
          </div>
        </div>

        <div className="pricing-card">
          <h3>Premium Plan</h3>
          <p className="caption1">Access to a wider selection of movies and</p>
          <p className="caption1">shows, including most new releases and offline</p>
          <p className="caption1">viewing.</p>
          <h2>$14.99 <span className='amr2'>/month</span></h2>
          <div className="buttons1">
            <button id="buttonn" onClick={() => handleSubscription("Premium")}>Choose Plan</button>
          </div>
        </div>
      </div>

      <div>
        <table id="table">
          <tr id="headertable">
            <th>Features</th>
            <th>Basic</th>
            <th>Standard</th>
            <th>Premium</th>
          </tr>
          <tr id="pricetable">
            <td>Price</td>
            <td>$4.9</td>
            <td>$9.9</td>
            <td>$14.9</td>
          </tr>
          <tr id="free">
            <td>Free Trial</td>
            <td>7 Days</td>
            <td>7 Days</td>
            <td>7 Days</td>
          </tr>
          <tr id="cancel">
            <td>Cancel Anytime</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr id="hdr">
            <td>HDR</td>
            <td>No</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr id="adfree">
            <td>Ad-Free</td>
            <td>No</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr id="offline">
            <td>Offline View</td>
            <td>No</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr id="family">
            <td>Family Sharing</td>
            <td>No</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr id="dolby">
            <td>Dolby Atmos</td>
            <td>No</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
        </table>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            duration:1000,
            style: { background: '#333', color: '#fff', fontWeight: 'bold' },
          }}
        />
      </div>
    </>
  );
}

export default Subscription;
