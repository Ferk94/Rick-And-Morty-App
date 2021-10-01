import { Link } from 'react-router-dom';


function NavBar() {
    return (
      <div>
        <Link to = '/home'>
          <button>
            Home
          </button>
        </Link>
        <Link to = '/'>
          <button>
            Landing Page
          </button>
        </Link>
      </div>
    );
  }
  
  export default NavBar;