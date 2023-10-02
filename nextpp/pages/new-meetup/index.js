import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function returnThis(){

    function sendProp(inputData){
      console.log(inputData)
    }

    return <NewMeetupForm onAddMeetup={sendProp} /> 
  }
  
  export default returnThis;