export default function InvitationMessage() {
    return (
      <section className="flex flex-col items-center justify-center dark:bg-slate-800 mx-auto h-screen text-center px-4">
        <h1 className="text-xl font-light dark:text-red-600 text-gray-600 mb-4">
          A Match Made In Heaven
        </h1>
        <h2 className="text-2xl md:text-4xl font-serif text-pink-400 dark:text-pink-200 mx-auto max-w-4xl leading-relaxed">
          Blessing and Unyime joyfully request the pleasure of your company as we
          speak our vows and join in marriage in the presence of family and
          friends.
        </h2>
        <p className="text-lg text-gray-500 dark:text-white mt-8">
          We&#39;ll start with a church ceremony, then move to another venue for
          the reception.
        </p>
      </section>
    );
  }