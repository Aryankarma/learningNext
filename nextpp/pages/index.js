import MeetupList from '../components/meetups/MeetupList';

const dummyEvents = [
  {
    id: 1,
    title: "Code for Good Hackathon",
    image: "https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/images/tfsg/five-things-callout1.jpg",
    description: "A hackathon to build tech solutions for social good.",
    address: "123 Main Street, Anytown, CA 91234",
  },
  {
    id: 2,
    title: "Food Truck Festival",
    image: "https://www.tourmyindia.com/blog//wp-content/uploads/2019/02/Cuisines-in-Food-Truck-Festival-Mumbai.jpg",
    description: "A festival featuring over 50 food trucks from all over the city.",
    address: "Central Park, Anytown, CA 91234",
  },
  {
    id: 3,
    title: "Art Walk",
    image: "https://www.welikela.com/wp-content/uploads/2015/06/downtown-la-artwalk-spring-street.jpg",
    description: "A monthly art walk featuring galleries, studios, and live music.",
    address: "Downtown Anytown, CA 91234",
  },
  {
    id: 4,
    title: "Farmers Market",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Farmers_and_Artisans_Market_at_Farmington_-_Michigan.jpg",
    description: "A weekly farmers market featuring fresh produce, flowers, and prepared foods.",
    address: "City Hall Plaza, Anytown, CA 91234",
  },
  {
    id: 5,
    title: "Music Festival",
    image: "https://img.freepik.com/free-photo/excited-audience-watching-confetti-fireworks-having-fun-music-festival-night-copy-space_637285-559.jpg?w=740&t=st=1696254023~exp=1696254623~hmac=b082639e56eff9f4037161bdb5cea902f1f46d94bd2ac289f4a0e9e3211bcfab",
    description: "A three-day music festival featuring over 100 bands and artists.",
    address: "Golden Gate Park, San Francisco, CA 94117",
  },
];

function returnThis(){
  return <MeetupList meetups={dummyEvents}/>
}

export default returnThis;