import React from 'react'
import { Link } from 'react-router-dom'


const AddButton = ({imge}) => {

    return(
        <Link to="/exercises">
            <div className="mt-5 d-flex justify-content-center">
                <img src={imge} alt="imagen2"/>
            </div>
        </Link>
    )
}


export default AddButton 
