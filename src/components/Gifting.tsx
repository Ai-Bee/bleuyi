'use client';

import { useState } from 'react';
import { Gift } from 'lucide-react';

export default function Gifting() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const accountDetails = "Account Name: UNYIME INYANG \nAccount Number: 1036210431\nBank: VFD Microfinance Bank";

  const handleCopy = () => {
    navigator.clipboard.writeText(accountDetails);
    alert("Account details copied to clipboard!");
  };

  return (
    <section id="gifting" className="bg-[#fdfbf9] dark:bg-slate-800 py-24 px-6 text-center text-gray-800">
      <div className="max-w-2xl mx-auto">
        <Gift className="mx-auto mb-6 w-10 h-10 dark:text-pink-300 text-[#f84622]" />
        <h2 className="text-4xl font-serif dark:text-pink-200 mb-6">Gifting</h2>
        <p className="text-lg mb-8 dark:text-pink-200">
          Your presence is our greatest gift — but if you’d like to contribute to our honeymoon fund or future together, you can do so below ❤️
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-block bg-[#f84622] text-white text-lg font-medium py-3 px-6 rounded-full hover:bg-pink-700 transition"
        >
          Send a Gift
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full text-center">
            <h3 className="text-2xl font-semibold mb-4 dark:text-pink-200">Account Details</h3>
            <p className="text-gray-700 dark:text-pink-200 whitespace-pre-line mb-6">
              {accountDetails}
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleCopy}
                className="bg-[#f84622] text-white py-2 px-4 rounded-full hover:bg-pink-700 transition"
              >
                Copy Details
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-300 text-gray-800 py-2 px-4 rounded-full hover:bg-gray-400 transition dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
