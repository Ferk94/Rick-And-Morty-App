import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetail } from '../../redux/actions/index';

function CharacterDetail() {
const id = useParams();

const dispatch = useDispatch();
const detail = useSelector(state => state.detail)
console.log(detail, 'DETALLE LINEA 11')

useEffect(() => {
  dispatch(getDetail(id))
}, [dispatch, id])


    return (
      <div>
        <h1>{detail.name}</h1>
      </div>
    );
  }
  
  export default CharacterDetail;