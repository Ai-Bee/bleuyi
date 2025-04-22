'use client';

import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { QRCodeCanvas } from 'qrcode.react';
import htmlToImage from 'html-to-image';

type Submission = {
  id: string;
  name: string;
  email: string;
  guests: number;
  dietary: string;
  status: 'pending' | 'accepted' | 'rejected';
  code?: string;
};

export default function RSVPAdmin() {
  const [subs, setSubs] = useState<Submission[]>([]);

  // load from localStorage
  useEffect(() => {
    const existing = JSON.parse(localStorage.getItem('rsvps') || '[]');
    setSubs(existing);
  }, []);

  const save = (updated: Submission[]) => {
    setSubs(updated);
    localStorage.setItem('rsvps', JSON.stringify(updated));
  };

  const accept = (id: string) => {
    const code = uuidv4();
    const updated = subs.map(s =>
      s.id === id ? { ...s, status: 'accepted', code } : s
    );
    save(updated);
  };

  const reject = (id: string) => {
    const updated = subs.map(s =>
      s.id === id ? { ...s, status: 'rejected' } : s
    );
    save(updated);
  };

  const downloadQR = async (id: string) => {
    const node = document.getElementById(`qr-${id}`);
    if (!node) return;
    const dataUrl = await htmlToImage.toPng(node);
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = `qr-${id}.png`;
    link.click();
  };

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-8">
          RSVP Management
        </h2>
        <table className="w-full table-auto text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2">Name</th>
              <th>Email</th>
              <th>Guests</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {subs.map(s => (
              <tr key={s.id} className="border-b">
                <td className="py-2">{s.name}</td>
                <td>{s.email}</td>
                <td>{s.guests}</td>
                <td className="capitalize">{s.status}</td>
                <td className="space-x-2">
                  {s.status === 'pending' && (
                    <>
                      <button
                        onClick={() => accept(s.id)}
                        className="px-3 py-1 bg-green-500 text-white rounded"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => reject(s.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded"
                      >
                        Reject
                      </button>
                    </>
                  )}

                  {s.status === 'accepted' && s.code && (
                    <>
                      {/* QR Code */}
                      <div
                        id={`qr-${s.id}`}
                        className="inline-block border p-2 bg-white"
                      >
                        <QRCodeCanvas value={s.code} size={128} />
                      </div>
                      {/* Download */}
                      <button
                        onClick={() => downloadQR(s.id)}
                        className="px-3 py-1 bg-blue-500 text-white rounded"
                      >
                        Download QR
                      </button>
                      {/* Mailto */}
                      <a
                        href={`mailto:${s.email}?subject=${encodeURIComponent(
                          'Your Wedding Invitation QR Code'
                        )}&body=${encodeURIComponent(
                          `Hello ${s.name},\n\nThank you for RSVPing! Please find your unique QR code attached (download it from the site and attach it here).\n\nLooking forward to celebrating with you!\n\n— Emma & James`
                        )}`}
                        className="px-3 py-1 bg-purple-500 text-white rounded"
                      >
                        Send Email
                      </a>
                    </>
                  )}

                  {s.status === 'rejected' && (
                    <span className="text-gray-500">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
