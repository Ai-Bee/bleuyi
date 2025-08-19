
export default function EventDetails() {
  // Color palette for the event
  const eventColors = [
    { name: "Wine", hex: "#722f37" },
    { name: "Gold", hex: "#d4af37" },
    { name: "Peach", hex: "#fbc4ab" }
  ];
  
  return (
    <div id="wedding-day" className="bg-orange-50 dark:bg-[#c24040da] p-8 w-full rounded-lg shadow-sm">
      <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto mb-16">
        {/* When section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-gray-800 font-medium dark:text-white mb-4">When</h2>
          <h3 className="text-coral-500 dark:text-white text-3xl md:text-4xl font-light mb-6">Saturday, November 8th, 2025</h3>
          
          <div className="text-coral-400 dark:text-white text-xl mb-2">
            Reception: 2pm–5pm
          </div>
          {/* <div className="text-coral-400 text-xl mb-8">
            Ceremony: 6pm–10pm
          </div>
           */}
          {/* <a href="#details" className="text-coral-500 border-b border-coral-300 pb-1 inline-block hover:border-coral-500 transition-colors">
            Full Details +
          </a> */}
        </div>
        
        {/* Where section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-gray-800 font-medium mb-4 dark:text-white">Where</h2>
          <h3 className="text-coral-500 text-3xl md:text-4xl font-light mb-6 dark:text-white">Uyo, Akwa Ibom</h3>
          
          {/* <div className="text-coral-400 text-xl mb-2">
            123 Demo Street
          </div>
          <div className="text-coral-400 text-xl mb-8">
            New York, NY 12345
          </div>
          
          <a href="#location" className="text-coral-500 border-b border-coral-300 pb-1 inline-block hover:border-coral-500 transition-colors">
            Full Details +
          </a> */}
        </div>
      </div>

      {/* Color Scheme Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-gray-800 font-medium mb-6 text-center dark:text-white">Colors of the Day</h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          {eventColors.map((color, index) => (
            <div key={index} className="text-center mb-6">
              <div 
                className="w-20 h-20 dark:border-2 rounded-full mx-auto mb-3" 
                style={{ backgroundColor: color.hex }}
              ></div>
              <p className="text-coral-400">{color.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}