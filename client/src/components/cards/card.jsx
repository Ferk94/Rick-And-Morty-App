import { Link } from 'react-router-dom';

function Card(props) {
    return (
      <div>
        <h1>{props.name}</h1>
        <Link to={`/home/detail/${props.id}`}>
        <img src={props.image} alt=''/>
        </Link>
      </div>
    );
  }
  
  export default Card;