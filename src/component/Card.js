import React  from 'react';
import circlesImage from '../images/circles.png';
import './Styles/Card.css';
import imgDefault from '../images/empty.png'

const Card = ({title, description, img, leftColor, rightColor}) => {

        return(
            <div className="card mx-auto my-3 GlobalCard" 
            style= {{
                backgroundImage: `url(${circlesImage}), linear-gradient(to right, ${leftColor || '#ff6e7f'}, ${rightColor || '#bfe9ff'})`
             }}>
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={img || imgDefault } alt="imagen" className="float-right"/>
                        </div>
                        <div className="col-6 CardInfo">
                            <h1>{ title }</h1>
                            <p>{ description }</p>
                        </div>
                    </div>
                </div>
            </div>
        )

}
export default  Card


