import React from 'react'
import imgFatalErr from '../images/500.png';
import '../component/Styles/FatalError.css'

const FatalError= () => {
    return (
        <div>
            <div className="text-center">
                <h1 className="ErrorText">Error: 500 unexpected Error</h1>
                <img src={ imgFatalErr } alt="500 Unexpected Error" className="ErrorImg"/>
            </div>
        </div>
    )
}

export default FatalError
