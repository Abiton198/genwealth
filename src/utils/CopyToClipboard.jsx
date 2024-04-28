import React, { useState } from 'react';

const CopyTextToClipboard = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <div>
      <button
        style={{ cursor: 'pointer' }}
        onClick={copyToClipboard}
        aria-label={copied ? 'Text Copied!' : 'Click to Copy'}
        className='clipboard'
      >
        {copied ? 'Copied!' : 'Click to Copy Number'}
      </button>
    </div>
  );
};

export default CopyTextToClipboard;
