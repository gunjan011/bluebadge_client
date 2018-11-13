import React, {Component} from 'react';
import './Tips.css';

class Tips extends Component {
    render() {
        return (
            <div classname="writingtips">
                <h3>Some Tips on writing poems</h3>
                <ul className="sometips">
                <li>Know your purpose: <br />Why are you writing a poem and what do you want it to say?</li>
                <li>Pick a subject:<br /> You do not have to pick a stereotypical topic such as nature, 
                    animals, love, or something dark, like death or fear. 
                    Poems can be written about any topic under the sun.</li>
                <li>Choose a pattern:<br /> You might choose to use free verse or rhyming couplets.
                    The more you write in one form, the more naturally your prose will fall into that mold.</li> 
                <li>Avoid clichés:<br /> Clichés are sayings that have been overused, 
                    like "busy as a bee," or "blind as a bat."</li>  
                <li>Use imagery:<br /> Use concrete words that appeal to the senses. 
                    Abstract words will not offer the reader a firm picture of what you're trying to say.</li> 
                <li>Use similes and metaphors:<br /> Similes compare two things and usually use the word "like" or "as."
                    Metaphors do the same, but without using "like" or "as." 
                    Things being compared in a metaphor have at least one thing in common but are different in many other ways.</li>           
                </ul>
            </div>
        )
    }
}
export default Tips;