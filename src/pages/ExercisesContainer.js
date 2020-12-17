import React from 'react';

import Loading from '../component/Loading';
import FatalError from './FatalError'
import Exercise from './Exercise'
import useFetch from '../hooks/useFetch'
import url from '../config'

const ExcercisesContainer = () => {
    
    const { data, loading, error} = useFetch(`${url}/all`)

    if(loading)
       return <Loading />
    if(error)
        return <FatalError />   
    
        return <Exercise 
            name={'Vanina'}
            data={data}
            urlImg={'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/add.png?alt=media&token=fbe1d973-4b4f-42d8-b76e-2c4354f6ed9d'}
                />
   
}

export default ExcercisesContainer
