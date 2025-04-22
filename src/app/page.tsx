import Navbar from '@/components/Navbar';
import HeroAccordion from '@/components/HeroAccordion';
import Gifting from '@/components/Gifting';
import InvitationMessage from '@/components/InvitationMessage';
import { Playfair_Display } from 'next/font/google'; // Import Playfair Display
import EventDetails from '@/components/EventDetails';
import InvitationFooter from '@/components/InvitationFooter';
 
const playfairDisplay = Playfair_Display({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main id='wholeApp' className={playfairDisplay.className}>
      <Navbar />
      <HeroAccordion />
      <InvitationMessage />
      <EventDetails/>
      <Gifting />
      <InvitationFooter/>
    </main>
  );
}
