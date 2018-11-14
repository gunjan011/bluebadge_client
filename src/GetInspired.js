import React, { Component } from 'react';
import { Link, } from 'react-router-dom';
import './GetInspired.css'

class GetInspired extends Component {


    render() {
        return (


            <div className="poems">
                <ul className="poems-list">
                    <li><Link to="/poemone">I Carry Your Heart With Me</Link></li>
                    <br />
                    <li><Link to="/poemtwo">A Dream Within a Dream</Link> </li>
                    <br />
                    <li><Link to="/poemthree">I Wandered Lonely as a Cloud</Link></li>
                    <br />
                    <li><Link to="/poemfour">Hope Is The Thing With Feathers</Link></li>
                    <br />
                    <li><Link to="/poemfive">Blue Roses</Link></li>
                </ul>
            </div>

        )
    }
}
export default GetInspired;
