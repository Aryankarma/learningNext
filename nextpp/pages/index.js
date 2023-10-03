import MeetupList from "../components/meetups/MeetupList";
import {useState, useEffect} from 'react'

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

function returnThis(props){ // taking props for static rendering

  // if we need tp fetch some data from an api or backend we have following approach as an option 
  // const [initialData, updateData] = useState([]);

  // useEffect(()=>{
  //   updateData(dummyEvents);
  // }, [])

  {/* but their's am better additional approach to this which is static rendering fot that see the function below  */}

  return <div>
       {/* <MeetupList meetups={initialData} /> */} {/* for fetching data using useState and useEffect */}
       {/* <MeetupList meetups={dummyEvents} /> general way */}
       {/* <MeetupList meetups={props.meetups} /> {// when we are using static rendering */}
       <MeetupList meetups={props.meetupsbyServer} /> {// when we are using server side rendering
  }  </div>
}

// this function is allowed to be async as we are fetching data we need this
// export async function getStaticProps(){
//   // this function has to be named getStaticProps only
//   // this function has to return an object only
//   // this function has to return an props object under the main return object that props would be the prop we are sending to the main function
//   return {
//     props:{
//       meetups: dummyEvents
//     },
//     // till here if we need to update the data on the website we would need to rebuild the website, modify the data and then the content would be updated so to solve that problem, we have {revalidate} it takes a number(seconds) that is the interval to fetch data from the backend (an incoming request) if the reevaluation is set to 10, it will every 10 seconds check for incoming requests and if their any, it will re generate the pages with updated data and will replace them with pre generated pages.
//     revalidate:10  //revalidate every 10 seconds
//     // this was all that we can do with static generation. But their are also some cases where we would not be happy with it's limitations sometimes when we may need to update the page ASA we get an incoming request to update data, (e.g. creating a socail media side) we can do this dynamically, and to do this we would have to jump to server side rendering. [checkout the other function getServerSideProps to understand the implementation]
//   }
// }


export async function getServerSideProps(context){
  // fetching data from an api.this code runs on the server side not on the client we can also perform operations that use credentials that should not be exposed to the users cause this code only runs on the server
  
  // here we can also store the requests that we get and the response we would be sending back again, below is the implementation (for this we would add a prop to the function getServerSideProps)
  const req = context.req;  // handling requests
  const res = context.res;  // sending response


  return {
    props:{
      meetupsbyServer : dummyEvents
    }
  }
}

// xusing getServerSideProps would be preferred if we are handling multiple requests only in 1 particular second. 

export default returnThis;