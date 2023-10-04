import classes from './MeetupDetail.module.css';

function returnThis (props){
    // console.log(props.input)
    const {imgSrc, title, description, address} = props.input;
return <section className={classes.detail}>
        <img src={imgSrc}/>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{address}</p>
    </section>
}

export default returnThis;