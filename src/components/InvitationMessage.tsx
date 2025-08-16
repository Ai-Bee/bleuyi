import coupleLogo2 from '../../public/coupleLogo2.png'; // Update path/extension if needed

export default function InvitationMessage() {
  return (
    <section className="invitation-message-section fade-slide-in flex flex-col items-center justify-center bg-[#f5f2ef] mx-auto h-screen text-center px-4">
      <img src={coupleLogo2} alt="Couple Logo" className="invitation-bg-logo" />
      <div className="invitation-message-content">
        <h1 className="text-xl font-light dark:text-red-600 text-gray-800 mb-4 text-pop-in">
          A Match Made In Heaven
        </h1>
        <h2 className="text-2xl md:text-4xl font-serif text-[#f84622] mx-auto max-w-4xl leading-relaxed text-pop-in">
          Blessing and Unyime joyfully request the pleasure of your company as we
          speak our vows and join in marriage in the presence of family and
          friends.
        </h2>
        <p className="text-lg text-gray-900  mt-8 text-pop-in">
          We&#39;ll start with a church ceremony, then move to another venue for
          the reception.
        </p>
      </div>
    </section>
  );
}