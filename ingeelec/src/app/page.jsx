import Contacts from '@/components/Contacts';
import Hero from '@/components/Hero';
import Player from '@/components/Player';
import Blog from '@/components/blog/Blog';
import Events from '@/components/events/Events';
import Servicios from '@/components/services/Servicios';

export default function Home() {
  return (
    //
    <main>
      <Hero/> 
      <Player/>
      <Events />
      <Servicios />
      <Blog />
      <Contacts/> 
      <div className='h-[4000px]'></div>
    </main>
  );
}
