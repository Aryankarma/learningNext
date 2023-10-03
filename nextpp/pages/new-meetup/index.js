import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const takeInput=(input)=>{
  console.log(input)
}

function meetupForm(){
  return <NewMeetupForm onAddMeetup={takeInput}/>
}

export default meetupForm;