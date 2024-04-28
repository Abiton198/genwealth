import React from 'react';

const WhatsApp = ({ number }) => {
  const handleClick = () => {
    const whatsappURL = `https://wa.me/${number}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <button
      className="whatsapp-button"
      onClick={handleClick}
      aria-label="Send WhatsApp Message"
    >
      Send WhatsApp Message
    </button>
  );
};

export default WhatsApp;
