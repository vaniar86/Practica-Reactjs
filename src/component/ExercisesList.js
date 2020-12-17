import React from 'react';
import Card from './Card'

const ExercisesList = ({exercises}) => {
    
      return(
        <React.Fragment>
        { exercises.map((exercise) => {
                   return(
                       <Card 
                           key= {exercise._id}
                           {...exercise}
                     />
                   )

               })
           }
   </React.Fragment>
      )
    
}

export default  ExercisesList