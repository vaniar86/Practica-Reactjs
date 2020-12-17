import React from 'react';

import ExercisesForm from '../component/ExercisesForm';
import Card from '../component/Card';


function newExercise ({form, onChange, onSubmit})  {
    return(
        <div className="row">
        <div className="col-sm">
            <ExercisesForm
                onChange={onChange}
                onSubmit={onSubmit}
                form={form}
             />
        </div>
        <div className="col-sm">
            <Card {...form} />
        </div>            
    </div>
    )
       
        
       
   

    
}


export default newExercise