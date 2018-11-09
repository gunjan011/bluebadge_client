import React, { Component } from 'react';
import { Link, } from 'react-router-dom'

class GetInspired extends Component {


    render() {
        return (


            <div className="poems">
                <ul className="poems-list">
                    <li><Link to="/poemone">I Carry Your Heart With Me</Link></li>
                    <li><Link to="/poemtwo">A Dream Within a Dream</Link> </li>
                    <li><Link to="/poemthree">I Wandered Lonely as a Cloud</Link></li>
                    <li><Link to="/poemfour">Hope Is The Thing With Feathers</Link></li>
                    <li><Link to="/poemfive">Blue Roses</Link></li>
                </ul>
            </div>

        )
    }
}
export default GetInspired;
