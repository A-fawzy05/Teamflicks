import React from 'react';
import '../App.css';
import '../Home_movie.css';
import mariam from '../assets/mariam.jpeg';
import mero from '../assets/mero.jpeg';
import mo from '../assets/mo.jpeg';
import Ad from '../assets/Ad.jpeg';
import gatway from '../assets/gatway.jpeg';
import trnas from '../assets/trnas.jpeg';
import footer from '../assets/footer.png';
import { Link } from 'react-router-dom';
import Navbar from "../components/navbar.jsx";
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();
    const handleclick = () => {
        navigate('/Subscription');
    };
    return (
        <><><><><><><><><><><div>



        <div className="img">  <img className='hero-img' src={mariam} alt="" />
          <div className='text'> The Best Streaming Experience <div />
            <div className='text2'> Streamvibe is the best streaming experince for watching your favourite movie and shows on the demand , <br></br>anytime anywhere , anytime.with streamvibes.youcan enjoy awide varity of content  , including the latest blockbusters,classic movies. </div>
          </div></div>

      </div></><div>

          <div className='m'>Explore our wide variaty of categories</div>
          <div className='mo'>whethere you are looking for comedy to make you laugh, adrama to make you think , or docmentary to learen somthing new </div>
        </div>


      </> <div class="image-container">
          <div class="image-box">
            <img className='hero' src={mero} alt="" />
            <div className='text3'> Adventure <div className='no'> &rarr;</div></div>
          </div>
          <div class="image-box"><img className='zero' src={Ad} alt="" />
            <div className='text7'> Cultural<div className='no'> &rarr;</div> </div>

          </div>
          <div class="image-box">
            <img className='mero' src={mo} alt="" />
            <div className='text4'> Harror <div className='no'> &rarr;</div></div>
          </div>
          <div class="image-box">
            <img className='gatway' src={gatway} alt="" />
            <div className='text5'> Action<div className='no'> &rarr;</div> </div>
          </div>
          <div class="image-box">
            <img className='trnas' src={trnas} alt="" />
            <div className='text6'> Science fiction<div className='no'> &rarr;</div></div>
          </div>
        </div></>
        <div className='video'> We provide you streaming experince across various devices. </div>



      </><div className="icon">
          <div className="m">
            <i className="fa-solid fa-laptop"></i>
            <div className="smart">Laptops</div>
            <div className="sm">Streamvibes is optimized for both Android and iOS smartphones</div>
          </div>
          <div className="m">
            <i className="fa-solid fa-tv"></i>
            <div className="smart">Smart TV</div>
            <div className="sm">Streamvibes is optimized for both Android and iOS smartphones</div>
          </div>
          <div className="m">
            <i className="fa-solid fa-tablet"></i>
            <div className="smart">Tablet</div>
            <div className="sm">Streamvibes is optimized for both Android and iOS smartphones</div>
          </div>
        </div>
        <div className="sperate">
          <div className="m">
            <i className="fa-solid fa-mobile"></i>
            <div className="smart">Smartphone</div>
            <div className="sm">Streamvibes is optimized for both Android and iOS smartphones</div>
          </div>
          <div className="m">
            <i className="fa-solid fa-gamepad"></i>
            <div className="smart">Gaming Consoles</div>
            <div className="sm">Streamvibes is optimized for both Android and iOS smartphones</div>
          </div>
          <div className="m">
            <i className="fa-solid fa-vr-cardboard"></i>
            <div className="smart">VR Headsets</div>
            <div className="sm">Streamvibes is optimized for both Android and iOS smartphones</div>
          </div>
        </div>

      </><div cl>

          <div className='Ask'>
            Frequently Asked Questions
            <div className='Askm'> Got questions?We have got answer!Check out our FAQsection to find answer to yhe most common questions about StreamVibe </div>
          </div>
        </div></><div className='Askwhat'>

          <div className='number1'>
            <div class="faq-number">01</div>
            <div class="nm"> What content StreamVibe?</div>
            <div class="faq-toggle">-</div>

          </div>
          <div className='number1'>
            <div class="faq-number">02</div>
            <div class="nm"> How much does StreamVibe cost?</div>
            <div class="faq-toggle">+</div>

          </div>
          <div className='number1'>
            <div class="faq-number">03</div>
            <div class="nm"> What are the StreamVibe payment methods?</div>
            <div class="faq-toggle">+</div>

          </div>
          <div className='number1'>
            <div class="faq-number">04</div>
            <div class="nm"> How can I watch StramVibe?</div>
            <div class="faq-toggle">+</div>

          </div>
          <div className='number1'>
            <div class="faq-number">05</div>
            <div class="nm"> What content is available on StreamVibe?</div>
            <div class="faq-toggle">+</div>

          </div>
          <div className='number1'>
            <div class="faq-number">06</div>
            <div class="nm"> How do  signup for StreamVibe?</div>
            <div class="faq-toggle">+</div>

          </div>
          <div className='number1'>
            <div class="faq-number">07</div>
            <div class="nm"> What is the StramVibw free trial?</div>
            <div class="faq-toggle">+</div>

          </div>
          <div className='number1'>
            <div class="faq-number">08</div>
            <div class="nm"> How do i Contact StreamVibe customer support ?</div>
            <div class="faq-toggle">+</div>

          </div>
          <div className='meto'>
            Choose the plan that is right for you
            <div className='meto1'> Join StreamVibe and select from our flexible subscription options tailored to suit your viewing perferences. </div>
          </div>
          <div class="pricing-container">

            <div class="pricing-card">
              <h3>Basic Plan</h3>
              <p>Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.</p>
              <h2 >$9.99 <span className='amr2'>/month</span></h2>
              <div class="buttons">
                <button onClick = {handleclick} className="free-trial">Start Free Trial</button>
                <button onClick = {handleclick} className="choose-plan">Choose Plan</button>
              </div>
            </div>


            <div class="pricing-card">
              <h3>Standard Plan</h3>
              <p>Access to a wider selection of movies and shows, including most new releases and exclusive content.</p>
              <h2 className='amr'>$12.99 <span className='amr2'>/month</span></h2>
              <div className="buttons">
                <button onClick = {handleclick} className="free-trial">Start Free Trial</button>
                <button onClick = {handleclick} className="choose-plan">Choose Plan</button>
              </div>
            </div>


            <div className="pricing-card">
              <h3>Premium Plan</h3>
              <p>Access to a widest selection of movies and shows, including all new releases and Offline Viewing.</p>
              <h2>$14.99 <span className='amr2'>/month</span></h2>
              <div className="buttons">
                <button onClick = {handleclick} className="free-trial">Start Free Trial</button>
                <button onClick = {handleclick} className="choose-plan">Choose Plan</button>
              </div>
            </div>
          </div>
        </div></><div className='image33'>
          <div className="img3">
            <img className='footer' src={footer} alt="" /></div>
          <div className='text100'> Start your free trial today! <div />

            <div className='text1001'> this is clear and concise call to action that encourages users to sign up for afree trial of StreamVibe.</div>
            <div className="buttons2">
              <button onClick = {handleclick} className="freetrial7-">Start Free Trial</button>
            </div>

          </div>
        </div></><div>


        </div></></>
    
    
    
    )
    
    
    
}

export default Home;