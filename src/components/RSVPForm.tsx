'use client';
import axios from 'axios';
import { useState } from 'react';

export default function RSVPForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [plusOne, setPlusOne] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // const validateEmail = (email: string) =>
  //   /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string) =>
    /^\+?\d{7,15}$/.test(phone);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!firstName.trim() || !lastName.trim()) {
      setError('First name and last name are required.');
      return;
    }
    // if (!validateEmail(email)) {
    //   setError('Please enter a valid email address.');
    //   return;
    // }
    if (phone) {
      if (!validatePhone(phone)) {
        setError('Please enter a valid phone number.');
        return;
      }
    }


    setLoading(true);

    try {
       await axios.post('https://bleuyi-admin.onrender.com/api/rsvp', {
        name: `${firstName} ${lastName}`,
        email,
        phone      });

      setSubmitted(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.status === 409 ? 'Your RSVP has already been submitted.' : err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="rsvp" className="bg-white dark:text-slate-800 py-24 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Thank you!</h2>
        <p>Your RSVP has been received. We look forward to celebrating with you! ❤️</p>
      </section>    
    );
  }

  return (
    <section id="rsvp" className="bg-white dark:bg-slate-500 py-24 px-6">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl dark:text-gray-800 font-serif text-center mb-8">RSVP</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="text-red-600 bg-red-100 py-2 rounded-sm text-center mb-2">{error}</div>
          )}
          <input
            required
            type="text"
            placeholder="First Name"
            className={`w-full p-3 border rounded `}
            value={firstName}
            readOnly={loading}
            onChange={e => setFirstName(e.target.value)}
          />
          <input
            required
            type="text"
            placeholder="Last Name"
            className="w-full p-3 border rounded"
            value={lastName}
            readOnly={loading}
            onChange={e => setLastName(e.target.value)}
          />
          <input
            
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded"
            value={email}
            readOnly={loading}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 border rounded"
            value={phone}
            readOnly={loading}
            onChange={e => setPhone(e.target.value)}
          />
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="plusOne"
              checked={plusOne}
              disabled={loading}
              onChange={e => setPlusOne(e.target.checked)}
              className="accent-emerald-600"
            />
            <label htmlFor="plusOne" className="text-gray-700">
              I am coming with a plus one
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#f84622] text-white rounded hover:bg-pink-700 transition"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit RSVP'}
          </button>
        </form>
      </div>
    </section>
  );
}