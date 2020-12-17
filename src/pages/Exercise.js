import React from 'react';

import Welcome from '../component/Welcome';
import ExercisesList from '../component/ExercisesList';
import AddButton from '../component/Button';

const Excercise = ({name, data, urlImg}) => {
    return (
        <React.Fragment>

                <Welcome userName={name}/>
                <ExercisesList exercises={data}/>
                <AddButton imge={urlImg}/>
        </React.Fragment>
    )
}

export default Excercise