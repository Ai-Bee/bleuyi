import './App.css'
import EventDetails from './components/EventDetails'
import Gifting from './components/Gifting'
import HeroAccordion from './components/HeroAccordion'
import InvitationFooter from './components/InvitationFooter'
import InvitationMessage from './components/InvitationMessage'
import Navbar from './components/Navbar'

function App() {

  return (
  <main className='w-full'>
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
