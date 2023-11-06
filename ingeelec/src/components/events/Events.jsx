import EventBox from './EventBox';
import SectionHeader from '../SectionHeader';

const getEvents = async () => {
    const res = await fetch('http://localhost:4000/events');
    return res.json();
};

const Events = async () => {
    const events = await getEvents();
    //console.log(events);

    return (
        <section className="section" id="tours">
            <div className="container mx-auto">
                <SectionHeader pretitle='INGEELEC' title='EN OFERTA %'/>
                {/*even box*/}
                <EventBox events={events} />
            </div>
        </section>
    );
};
export default Events