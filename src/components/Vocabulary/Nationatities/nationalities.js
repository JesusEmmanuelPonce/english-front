import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../../header';
import Loader from '../../../loader/loader';
import CardNationalities from './CardNationalities';

const Nationalities = () =>{

    const [nationalities, setNationalities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const getNationalities = async() =>{
            const resultado = await axios.get('https://backend-english-pb.herokuapp.com/nationalities');
            setNationalities(resultado.data.nationalities);
            setLoading(false);
        }

        getNationalities();
    },[]);

    return(
        <>
            <Header
                title="Nacionalidades"
            />
            {
                loading ? <Loader loading={loading}/>
                        : <CardNationalities
                            card={nationalities}
                          />
            }
        </>
    )
}

export default Nationalities;