import './App.css'
import EventDetails from './components/EventDetails'
import Gifting from './components/Gifting'
import HeroAccordion from './components/HeroAccordion'
import InvitationFooter from './components/InvitationFooter'
import InvitationMessage from './components/InvitationMessage'
import Navbar from './components/Navbar'
import { useRef, useState } from 'react';

function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
  <main className='w-full'>
      {/* Background Music Controls */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-white/80 rounded-full shadow px-4 py-2">
        <button
          onClick={handlePlayPause}
          className={`btn-primary px-4 py-2 text-sm`}
        >
          {isPlaying ? 'Pause Music' : 'Play Music'}
        </button>
        <audio
          ref={audioRef}
          src="/BestPart.mp3" // Place your mp3 in the public folder
          loop
        />
      </div>
      <Navbar />
      <HeroAccordion />
      <InvitationMessage />
      <EventDetails/>
      <Gifting />
      <InvitationFooter/>
    </main>
  )
}

export default App
