// import React from "react";
// import Step1 from '../img/Step1.png'
// import Step2 from '../img/Step2.png'
// import Step3 from '../img/Step3.png'
// import Step5 from '../img/step5.jpeg'
// import Corousel from "./Corousel";




// export default function SignUp() {

//   return (
//     <div>

//       <div>
//         <p>The sign-up process is straightforward and can be completed from the comfort 
//           of your home using either a phone or laptop. In this slide, We'll walk you through
//            five simple steps and what you'll need to complete the sign-up!</p>

//           <h2 className="text-lg font-bold text-white mb-2">Step 1: Visit Website</h2>

//         <p>Go on to DuePoint website to start the process: <br/> www.duepoint.net</p>
//         <p>Check the image below and see if you are on the correct site. We have 
//           taken our time to make it easy for you through this guide.</p>
//           <img src={Step1}/>


//           <h2 className="text-lg font-bold text-white mb-2">Step 2: Click Get Started</h2>

//         <p>As you have seen above on the image, the home page of DuePoint allows you to either log-in or sign-up.
//           Feel confident to click on <span className="text-blue-900 font-bold">Get Started</span>. Congrats your
//           your journey to financial freedom is on track! You got to see this image below after clicking.
//         </p>
//           <img src={Step2}/>

//           <h2 className="text-lg font-bold text-white mb-2">Step 3: Enter Wealth Engineer Number</h2>

//         <p>This must be the most exciting moment for you and for us! Acknowledging us as the lead to your financial freedom,
//           you are doing this out of both ethics and your heart. Kindly answer the who? with this:<br/> 
//           <span className="text-blue-700 font-extrabold">W1001488205</span>. <br/>
//           Next time it is someone doing that for you. Thank you for doing that, and you should give yoursel a pat and a nice 
//           treat after signing-up! </p>
//           <img src={Step3}/>

//           <h2 className="text-lg font-bold text-white mb-2">Step 4: Form Completion</h2>

//         <p>This is the most import step, feeding the system with you information. Get it right, because the 
//           system is linked to FICA, they will ask you of the following documents: <br/>
//           <span className="text-green-200 font-bold">South African ID or any valid Passport(if foreigner)</span> <br/>
//           <span className="text-green-200 font-bold">Proof of Address - utility bill or bank statement or anything permitable</span> <br/>
//          * After completing your personal details, take note: Skip on proof of address if only you dont have it with you, 
//          later you can email info@duepoint.net to update your documents, way after completing your application.
//          * You can set debit date of your account of your choice (you don't need money in the bank to complete the process!) <br/>
//          The below images gives you a glimps of your process, click continue at every botton page to continue.
//         </p>
//          <div>
//           <Corousel/>
//          </div>

//           <h2 className="text-lg font-bold text-white mb-2">Step 5: Download App on PlayStore</h2>

//         <p>The last but most important part of the process is to get your hands dirty! Yes, download the app. Go to your 
//           phone <span className="text-red-500 font-extrabold">PlayStore</span>. A very light but comprehensive application <isindex />ready to change your life. 
//           We call it 'A golden tool on your Palm' : DUEPOINT. Check the image below to see if we are seeing the same. At this stage you have received your
//           log-in details via email or text message. Please Check!</p>
//           <img src={Step5} height={'300px'} width={'300px'}/>


//           <p className="text-lg font-bold text-green-800 mb-2">Thank you for joining the wealth creation family: DUEPOINT</p>

//           <a href='/Intro'>
//               <button className="bg-red-600 hover:bg-green-600 text-white font-bold py-4 px-8 rounded inline-flex items-center animate-flicker">
//                 Next Step
//                 <svg className="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M9 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1zM6 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm9 3a1 1 0 0 1 1 1v11a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM3 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1zm14 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" clipRule="evenodd" />
//                 </svg>
//               </button>
//           </a>
//       </div>



       
//     </div>
//   );
// }

import React from "react";
import Step1 from '../img/Step1.png'
import Step2 from '../img/Step2.png'
import Step3 from '../img/Step3.png'
import Step5 from '../img/step5.jpeg'
import Carousel from "./Carousel";

export default function SignUp() {
  return (
    <div className="mx-auto px-4 md:px-8 lg:px-16">
      <div className="my-8 lg:my-16">
        <p className="text-lg text-gray-100 leading-7 mb-4">
          The sign-up process is straightforward and can be completed from the comfort 
          of your home using either a phone or laptop. In this slide, We'll walk you through
          five simple steps and what you'll need to complete the sign-up!
        </p>

        <div className="mb-8">
          <h2 className="text-lg font-bold text-white mb-2">Step 1: Visit Website</h2>
          <p className="text-gray-100 leading-7 mb-4">
            Go on to DuePoint website to start the process: <br/> www.duepoint.net
          </p>
          <img src={Step1} alt="Step 1" className="w-full md:w-auto md:max-w-xs mx-auto mb-4" />

          <h2 className="text-lg font-bold text-white mb-2">Step 2: Click Get Started</h2>
          <p className="text-gray-100 leading-7 mb-4">
            As you have seen above on the image, the home page of DuePoint allows you to either log-in or sign-up.
            Feel confident to click on <span className="text-blue-900 font-bold">Get Started</span>. Congrats your
            your journey to financial freedom is on track! You got to see this image below after clicking.
          </p>
          <img src={Step2} alt="Step 2" className="w-full md:w-auto md:max-w-xs mx-auto mb-4" />

          <h2 className="text-lg font-bold text-white mb-2">Step 3: Enter Wealth Engineer Number</h2>
          <p className="text-gray-100 leading-7 mb-4">
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


          <h2 className="text-lg font-bold text-white mb-2">Step 4: Form Completion</h2>
          <p className="text-gray-100 leading-7 mb-4">
            This is the most important step, your details. Get it right, the 
            system is linked to FICA, they will ask you of the following documents: <br/>
            <span className="text-green-200 font-bold"> - South African ID or any valid Passport(if foreigner)</span> <br/>
            <span className="text-green-200 font-bold"> - Proof of Address - utility bill or bank statement or anything permitable</span> <br/>
            ** After completing your personal details, take note: Skip on proof of address if only you dont have it with you, 
            later you can email <span className="text-red-300 font-bold">info@duepoint.net</span>  to update your documents, way after completing your application.<br/>
            ** You can set debit date of your account of your choice (you don't need money in the bank to complete the process!) <br/>
            The below images gives you a glimps of your process, click continue at bottom of every page to continue.
          </p>
          <div className="mb-4">
            <Carousel />
          </div>

          <h2 className="text-lg font-bold text-white mb-2">Step 5: Download App on PlayStore</h2>
          <p className="text-gray-100 leading-7 mb-4">
            The last but most important part of the process is to get your hands dirty! Yes, download the app. Go to your 
            phone <span className="text-red-500 font-extrabold">PlayStore</span>. A very light but comprehensive application
            ready to change your life. 
            We call it 'A golden tool on your Palm' : DUEPOINT. Check the image below to see if we are seeing the same. At this stage you have received your
            log-in details via email or text message. Please Check!
          </p>
          <img src={Step5} alt="Step 5" className="w-full md:w-auto md:max-w-xs mx-auto mb-4" />

          <p className="text-lg font-bold text-green-300 mb-2">Thank you for joining the wealth creation family: DUEPOINT</p>

          <div className="flex justify-center">
            <a href='/Intro'>
              <button className="bg-red-600 hover:bg-green-600 text-white font-bold py-4 px-8 rounded inline-flex items-center animate-flicker">
                Next Step
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
