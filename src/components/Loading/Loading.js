import './Loading.css'
import { useState } from 'react';


const Loading = ({}) => {
    const [condition, setCondition] = useState(true);
  return (
    <h2 className={condition === true ? 'greenClass' : 'redClass'}>Cargando...</h2>
    // <h2>Cargando...</h2>
    // Crear spinner con css
  )
};

export default Loading;