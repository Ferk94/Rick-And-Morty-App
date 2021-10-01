import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../../redux/actions/index';
import Card from './card';


function Cards() {

const dispatch = useDispatch()
const characters = useSelector(state => state.characters)

  useEffect(() => {
    dispatch(getCharacters())
  }, [dispatch])


    return (
      <div>
        {
          characters?.map((e, i) => {
            return <div key={i}>
                <Card id={e.id} name={e.name} image={e.image}/>
            </div>
          })
        }
      </div>
    );
  }
  
  export default Cards;