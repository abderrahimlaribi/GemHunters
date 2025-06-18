import React from 'react';
import CountDownTimer from './CountDown'; 


const PaymentPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-md text-center w-80">
        <h1 className="text-2xl font-bold mb-4 text-gray-900">Payment method</h1>
        <div className="mb-6">
          <span className="block text-3xl font-bold text-gray-900">1.00 ETH</span>
          <span className="text-gray-600">on Ethereum</span>
        </div>
        <div className="text-sm text-gray-500 mb-6">
          EXPIRY <CountDownTimer/>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
          Continue
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;