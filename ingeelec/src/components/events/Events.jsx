
const getEvents = async ()=> {
    const res = await fetch('http://localhost:4000/events');
    return res.json();
}
const Events = async () => {
    const events = await getEvents();
    console.log(events);
    return <div>Eventos</div>;
  
}

export default Events