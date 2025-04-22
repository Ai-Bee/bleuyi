import React from 'react';

export default function InvitationFooter() {
  return (
    <div className="w-full">
      {/* Hero section with invitation text and RSVP button */}
      <div className="bg-orange-50 dark:bg-[#fbc4ab] py-16 px-4 text-center">
        <h2 className="text-coral-400 dark:text-white text-3xl md:text-5xl font-light max-w-3xl mx-auto leading-relaxed">
          We hope you&rsquo;ll join us
          <br />
          on this special day.
        </h2>
        
        <div className="mt-12">
          <button  className="inline-block bg-pink-400 cursor-pointer text-white text-lg font-medium py-3 px-6 rounded-full hover:bg-pink-700 transition"
          >
            RSVP
          </button>
        </div>
      </div>
      
      {/* Footer with names and attribution */}
      <div className="bg-pink-400 dark:bg-slate-800 py-12 px-4 text-center dark:text-pink-200 text-white">
        <div className="flex flex-col md:flex-row justify-center items-center max-w-6xl mx-auto">
          
          {/* Names in center */}
          <div className="md:w-1/3 text-xl md:text-2xl font-light mb-6 md:mb-0">
            Blessing & Unyime
          </div>
          

        </div>
      </div>
    </div>
  );
}