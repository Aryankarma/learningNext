import classes from './MeetupDetail.module.css';

function returnThis (){
    return <section className={classes.detail}>
        <img src={obj.imgSrc}/>
        <h3>{obj.title}</h3>
        <p>{obj.description}</p>
        <p>{obj.address}</p>
    </section>
}

export default returnThis;

const obj = {
    imgSrc:"https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/images/tfsg/five-things-callout1.jpg",
    title:"Code for Good Hackathon",
    description: "A hackathon to build tech solutions for social good.",
    address: "123 Main Street, Anytown, CA 91234"
}
