import React, { useState } from 'react';


const Questions = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
    }
  };

  const questionsAndAnswers = [
    {
      question: 'What exactly is DuePoint?',
      answer: 'DuePoint is a dynamic network referral business that offers individuals the opportunity to build their own business by promoting a range of financial products and services.',
    },
    {
      question: 'How does DuePoint differ from traditional business models?',
      answer: 'DuePoint provides a unique opportunity for individuals to build their own business without the high startup costs and overhead associated with traditional business models. With DuePoint, you can leverage your network to earn income through product sales and referrals.',
    },
    {
      question: 'What are the benefits of joining DuePoint?',
      answer: (
        <ul className='answer-list'>
          <li>Flexible working hours: Work from anywhere and set your own schedule.</li>
          <li>Low startup costs: DuePoint offers a low-cost entry point compared to starting a traditional business.</li>
          <li>Comprehensive training and support: DuePoint provides training and support to help you succeed, regardless of your background or experience.</li>
          <li>Unlimited income potential: Your earning potential with DuePoint is not capped, allowing you to earn as much as you are willing to work for.</li>
          <li>Access to financial products and services: DuePoint offers a range of financial products and services that are in demand, making it easier to generate sales and referrals.</li>
        </ul>
      )
    },
    {
      question: 'What financial products and services does DuePoint offer?',
      answer: (
      <ul className='answer-list'>
        <li>DuePoint offers a range of financial products and services, including:</li>
        <li>Insurance,</li>
        <li>Investment opportunities,</li>
        <li>Savings plans, and more.</li>
        <li>These products and services are designed to help individuals achieve their financial goals and secure their financial future.</li>

      </ul>)
    },
    {
      question: 'How do I earn money with DuePoint?',
      answer: (
        <ul className='answer-list'>
          <li>There are several ways to earn money with DuePoint, including:</li>
          <li>Direct sales: You earn commissions on the financial products and services you sell directly to customers.</li>
          <li>Referral bonuses: You earn bonuses for referring new customers and distributors to DuePoint.</li>
          <li>Residual income: You earn ongoing commissions on the sales and referrals made by your team members.</li>
          <li>Leadership bonuses: As you advance in rank and build a successful team, you can qualify for additional bonuses and incentives.</li>
        </ul>
      )
    },
    {
      question: 'Is DuePoint a legitimate business opportunity?',
      answer: (
        <ul className='answer-list'>
          <li>Yes, DuePoint is a legitimate business opportunity that operates ethically and in compliance with relevant laws and regulations.</li>
          <li>The company has a track record of success and integrity, making it a trusted choice for individuals looking to build their own business.</li>
        </ul>
     )
    },
    {
      question: 'How much time do I need to invest to succeed with DuePoint?',
      answer: (
        <ul className='answer-list'>
          <li>The amount of time required to succeed with DuePoint varies depending on your goals and level of commitment.</li>
          <li>Some people choose to work their DuePoint business part-time alongside other commitments, while others devote full-time hours to building their business.</li>
          <li>Consistency and persistence are key to success.</li>
        </ul>
      )  
    },
    {
      question: 'Can I really make a significant income with DuePoint?',
      answer: (
        <ul className='answer-list'>
          <li>Yes, many people have achieved significant success and financial freedom with DuePoint.</li>
          <li>However, it's important to approach it with realistic expectations and be willing to put in the effort required to build your business over time.</li>
        </ul>
)
    },
    {
      question: 'What kind of support and training will I receive with DuePoint?',
      answer: 'DuePoint provides comprehensive training and support to help you succeed. This may include online training modules, mentorship programs, live events, conferences, and access to marketing materials and resources.'
    },
    {
      question: 'How do I get started with DuePoint?',
      answer: (
        <ul>
          <li>Getting started with DuePoint is easy.</li>
          <li>You can sign up as an independent distributor through us (Abiton & Mechelle), and you'll receive access to training materials and resources to help you launch your business successfully.</li>
          <li> It's important to know that we have a team that aligns with your goals ready to assist you.</li>
        </ul>
      )
    
    }
    // Add more questions and answers here
  ];

  return (
    <div className="faq-container text-black">
      {questionsAndAnswers.map((qa, index) => (
        <div key={index} className="faq-item">
          <div
            className="faq-question"
            onClick={() => toggleDropdown(index)}
          >
            {qa.question}
            {openDropdown === index ? (
              <svg
                className="w-6 h-6 ml-2 inline"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V4H7a1 1 0 0 1-1-1zm6 6a1 1 0 0 1-1 1H9a1 1 0 1 1 0-2h2V7a1 1 0 1 1 2 0v2zm2 7a1 1 0 0 1-1 1H5a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 ml-2 inline"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V4H7a1 1 0 0 1-1-1zm6 6a1 1 0 0 1-1 1H9a1 1 0 1 1 0-2h2V7a1 1 0 1 1 2 0v2zm2 7a1 1 0 0 1-1 1H5a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
          {openDropdown === index && (
            <div className="faq-answer">{qa.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Questions;
