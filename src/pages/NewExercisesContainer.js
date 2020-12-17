import React, { useState } from 'react'

import Loading from '../component/Loading'
import FatalError from './FatalError'
import NewExercise from './newExercise'
import url from '../config'

const NewExercisesContainer = ({history}) => {
    const [form, setForm] = useState({title: '', description: '', img: '', leftColor: '', rightColor: ''});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = e => {
            setForm({ 
                ...form,
                [e.target.name]: e.target.value 
            })                
    }

    const handleSubmit = async e => {
        setLoading(true);
        e.preventDefault();
       
       try {
           let config = {
               method: 'POST',
               headers: {
                   'accept': 'application/json',
                   'content-type': 'application/json'
               },
               body: JSON.stringify(form)
           }
           let res = await fetch (`${url}/create`, config )
           console.log(res)      
          
           setLoading(false)      
           
        } catch (error) {
           setLoading(false)
           setError (error) 
        }
       
        history.push('/')
    }

    if(loading)
     return <Loading />
        
    if(error)
     return <FatalError />
        
    return <NewExercise 
                form={form}
                onChange={handleChange}
                onSubmit={handleSubmit}
             /> 

}

export default NewExercisesContainer
