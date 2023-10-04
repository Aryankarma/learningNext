import MeetupDetail from '../../components/meetups/MeetupDetail.js'

// const obj = {
//     imgSrc:"https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/images/tfsg/five-things-callout1.jpg",
//     title:"Code for Good Hackathon",
//     description: "A hackathon to build tech solutions for social good.",
//     address: "123 Main Street, Anytown, CA 91234"
// }

function returnThis(props){
    return <MeetupDetail input={props.meetupData} />
}

// if you are using a getstaticprops function on a dynamic page then theirs an another funciton that you neet to export to use getstaticprops it's getstaticpaths 
// reason why we need getstaticpath - as getstaticprops is executed when the page pre-renders at the very first instinct when the page loads and as we are usign a dynamic page the function need to load all dynamic pages that could be loaded, and to do so it needs all the possible id's that could trigger this dynamic url newMeetup so to get those id's we need getstaticpath fucntion 
// we neeed all the id's this dynamic page could be trigger by, cause this page pre-generated not when a user visits this page, it pre-generated in the build process, so we need to pre generate it for all the id's
export async function getStaticProps(context){
    console.log("Here's the url id : " + context.params.newMeetup)
    const meetupID = context.params.newMeetup;
    // fetching the data here
     return{
        props : {
            meetupData :  {
            imgSrc:"https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/images/tfsg/five-things-callout1.jpg",
            title:"Code for Good Hackathon",
            description: "A hackathon to build tech solutions for social good.",
            address: "123 Main Street, Anytown, CA 91234",
            id : meetupID}
        }
    }
}

export async function getStaticPaths(){
    return{
        paths:[
            {   
                params:{
                    newMeetup: "1"
                }
            },{
                params:{
                    newMeetup : "2"
                }
            },{
                params:{
                    newMeetup:"3"
                }
            },{
                params:{
                    newMeetup:"4"
                }
            }
        ], fallback: false
    } 
}

export default returnThis;