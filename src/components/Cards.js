import React from 'react';
import Map from "../images/map.png";

export default function Cards(props) {
    return (
        <div className='card'>
            <div className="card--img-box">
                <img src={require(`../images/${props.item.image}`)} alt={props.item.title} className="card--img" />
            </div>

            <div className="card--infos"> 
                <img src={Map} alt="location logo" className="card--location-icon" />
                <h2 className="card--location">{props.item.location}</h2>
                <a className="card--location-url" href={props.item.googleMapsURL} target='-blank'>
                     View on Google Maps
                </a>


                <h3 className="card--title">{props.item.titile}</h3>
        <p className="card--date">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="card--description">{props.item.description}</p>
            </div>
        </div>



      //code from bootstrap
        /*<div className='card'>
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="..." className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className='upper-portion'>
                        <img src={Map} alt="Location  logo" className='location-logo' />
                        <p>JAPAN </p>
                        </div>
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
        </div>*/
    );
}
