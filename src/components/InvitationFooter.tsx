import { useState } from 'react';
import RSVPForm from './RSVPForm';

export default function InvitationFooter() {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <div className="w-full fade-slide-in">
      {/* Hero section with invitation text and RSVP button */}
      <div className="bg-orange-50 dark:bg-[#fbc4ab] py-16 px-4 text-center">
        <h2 className="text-coral-400 dark:text-white text-3xl md:text-5xl font-light max-w-3xl mx-auto leading-relaxed text-pop-in">
          We hope you&rsquo;ll join us
          <br />
          on this special day.
        </h2>
        <div className="mt-12">
          <button
            className="inline-block bg-[#f84622] cursor-pointer text-white text-lg font-medium py-3 px-6 rounded-full hover:bg-pink-700 transition text-pop-in"
            onClick={handleOpenModal}
          >
            RSVP
          </button>
        </div>
      {/* RSVP Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              onClick={handleCloseModal}
              aria-label="Close"
            >
              &times;
            </button>
            <RSVPForm />
          </div>
        </div>
      )}
      </div>
      {/* Footer with names and attribution */}
      <div className="bg-[#f84622] dark:bg-slate-800 py-12 px-4 text-center dark:text-pink-200 text-white">
        <div className="flex flex-col md:flex-row justify-center items-center max-w-6xl mx-auto">
          {/* Names in center */}
          <div className="md:w-1/3 text-xl md:text-2xl font-light mb-6 md:mb-0 text-pop-in">
            Blessing & Unyime
          </div>
        </div>
      </div>
    </div>
  );
}