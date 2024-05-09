import React from 'react'
import que_image from '../img/world_image.jpeg'

export default function Questions() {
  const whatsappNumber = '+27664314171';
  return (
    <div>

      <h2 className='que-heading'>Ask anything?</h2>

       {/* WhatsApp Button */}
       <div className="flex justify-center mt-8">
        <a href={`whatsapp://send?phone=${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center animate-flicker">
           Send message now
            {/* Message Us on WhatsApp */}
            <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1zM6 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm9 3a1 1 0 0 1 1 1v11a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM3 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1zm14 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" clipRule="evenodd" />
            </svg>
          </button>
        </a>
      </div>
   
{/* Image */}
      <div className="digital-card-header">
          <img src={que_image} alt="Profile" className="world-image" />
        </div>

        <Footer/>
    </div>

   
  )
}
