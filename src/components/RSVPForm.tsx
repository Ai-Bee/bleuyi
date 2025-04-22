'use client';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type Submission = {
  id: string;
  name: string;
  email: string;
  guests: number;
  dietary: string;
  status: 'pending';
};

export default function RSVPForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState(1);
  const [dietary, setDietary] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newSub: Submission = {
      id: uuidv4(),
      name,
      email,
      guests,
      dietary,
      status: 'pending',
    };
    const existing = JSON.parse(localStorage.getItem('rsvps') || '[]');
    existing.push(newSub);
    localStorage.setItem('rsvps', JSON.stringify(existing));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="rsvp" className="bg-white py-24 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Thank you!</h2>
        <p>We’ve received your RSVP. We’ll be in touch soon. ❤️</p>
      </section>
    );
  }

  return (
    <section id="rsvp" className="bg-white py-24 px-6">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-serif text-center mb-8">RSVP</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            required
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            required
            type="number"
            min={1}
            placeholder="Number of Guests"
            className="w-full p-3 border rounded"
            value={guests}
            onChange={e => setGuests(Number(e.target.value))}
          />
          <textarea
            placeholder="Dietary Restrictions"
            className="w-full p-3 border rounded"
            value={dietary}
            onChange={e => setDietary(e.target.value)}
          />
          <button
            type="submit"
            className="w-full py-3 bg-pink-400 text-white rounded hover:bg-pink-700 transition"
          >
            Submit RSVP
          </button>
        </form>
      </div>
    </section>
  );
}
