
import React from "react";
import Step1 from '../img/Step1.png'
import Step2 from '../img/Step2.png'
import Step3 from '../img/Step3.png'
import Step5 from '../img/step5.jpeg'
import Carousel from "./Carousel";

export default function Guide() {
  return (
    <div className="bg-white mx-auto px-4 md:px-8 lg:px-16">
      <div className="my-8 lg:my-16 mt-20">
        <h2 className="text-lg font-bold text-black mb-5">Welcome to a generous guide to success!</h2>
        <p className="text-lg text-black leading-7 mb-4">
          The sign-up process is straightforward and can be completed from the comfort 
          of your home using either a phone or laptop. In this slide, We'll walk you through
          five simple steps and what you'll need to complete the sign-up!
        </p>

        <div className="mb-8">
          <h2 className="text-lg font-bold text-black mb-2">Step 1: Visit Website</h2>
          <p className="text-black leading-7 mb-4">
            Go on to DuePoint website to start the process: <br/> 
            <a href="https://www.duepoint.net" className="text-black xl font-bold  hover:bg-green-600">www.duepoint.net</a>
          </p>
          <img src={Step1} alt="Step 1" className="w-full md:w-auto md:max-w-xs mx-auto mb-4" />

          <h2 className="text-lg font-bold text-black mb-2">Step 2: Click Get Started</h2>
          <p className="text-black leading-7 mb-4">
            As you have seen above on the image, the home page of DuePoint allows you to either log-in or sign-up.
            Feel confident to click on <span className="text-blue-900 font-bold">Get Started</span>. Congrats your
            your journey to financial freedom is on track! You got to see this image below after clicking.
          </p>
          <img src={Step2} alt="Step 2" className="w-full md:w-auto md:max-w-xs mx-auto mb-4" />

          <h2 className="text-lg font-bold text-white mb-2">Step 3: Enter Wealth Engineer Number</h2>
          <p className="text-black leading-7 mb-4">
            This must be the most exciting moment for you and for us! Acknowledging us as the lead to your financial freedom,
            you are doing this out of both ethics and your heart. Kindly answer the who? with this:</p> <br/> 
                  
                  {/* flashing number */}
                  <div className="flex justify-center">
                  
                    <button className="bg-red-600 hover:bg-green-600 text-white font-bold py-4 px-8 rounded inline-flex items-center animate-flicker">
                          W1001488205
                      <svg className="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1zM6 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm9 3a1 1 0 0 1 1 1v11a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM3 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1zm14 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                </div>

           <p className="mb-4"> Next time it is someone doing that for you. Thank you! Treat yourself for signing-up!
           </p>
         
          <img src={Step3} alt="Step 3" className="w-full md:w-auto md:max-w-xs mx-auto mb-4" />


          <h2 className="text-lg font-bold text-black mb-2">Step 4: Form Completion</h2>
          <p className="text-black leading-7 mb-4">
            Now it's time to put your details. Get it right, the 
            system is linked to FICA, you need these documents: <br/>
            <span className="text-green-800 font-bold"> - South African ID or any valid Passport(if foreigner)</span> <br/>
            <span className="text-green-800 font-bold"> - Proof of Address - utility bill or bank statement or anything permitable</span> <br/>
            ** Next, take note: Skip on proof of address if only you don't have it with you, email <span className="text-red-300 font-bold">info@duepoint.net</span> 
            to update your info,to complete the application.<br/>
            ** Set debit date for your account (you don't need money in the bank to complete the process!) <br/>
            The below images gives you a glimps of your process, click continue at bottom of every page to continue.
          </p>
          <div className="mb-4">
            <Carousel />
          </div>

          <h2 className="text-lg font-bold text-black mb-2">Step 5: Download App on PlayStore</h2>
          <p className="text-black leading-7 mb-4">
            The lastly get your hands dirty! Yes, download the app. Go to your 
            phone <span className="text-red-500 font-extrabold">PlayStore</span>. A very light but comprehensive application
            ready to change your life. 
            'A golden tool on your Palm' : DUEPOINT. Check the image below to see if we are seeing the same. At this stage you have received your
            log-in details via email or text message. Please Check!
          </p>
          <img src={Step5} alt="Step 5" className="w-full md:w-auto md:max-w-xs mx-auto mb-4" />

          <p className="text-lg font-bold text-green-900 mb-2">Thank you for joining the wealth creation family: DUEPOINT</p>

          <div className="flex justify-center">
            <a href='/Intro'>
              <button className="bg-red-600 hover:bg-green-600 text-white font-bold py-4 px-8 rounded inline-flex items-center animate-flicker">
                We are ready to help! Send WhatsApp!
                <svg className="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1zM6 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm9 3a1 1 0 0 1 1 1v11a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM3 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1zm14 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" clipRule="evenodd" />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
