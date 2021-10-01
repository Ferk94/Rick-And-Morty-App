import './landingPage.css';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
      <div className='landing'>
       <Link to = '/home'> 
        <button className = 'l-button'>
          START!
        </button>
        </Link>
      </div>
    );
  }
  
  export default LandingPage;