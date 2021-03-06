import React from 'react';
import '../styles/aboutStyle.css'
import petfinder from '../images/petfinder.png'
import reactpic from '../images/reactpic.png'

function About() {
    return (
        <React.Fragment>
                <h1>About</h1>
                <table>
                    <tr class="header">
                        <th>Developers</th>
                        <th>Goal</th>
                        <th>Resources</th>
                    </tr>
                    <tr>
                        <td class="general">
                            <ul>
                                <li>Michael Bamford</li>
                                <li>Nate DiMauro</li>
                                <li>Jake Capra</li>
                                <li>Philip Bell</li>
                            </ul>
                            <p>We are all from Champlain College in the class Innovation II: Open Source Software Dev. The teacher is Chris Bendel.</p>
                        </td>
                        <td class="general">
                            <p>The goal of the project is to simulate a real world develpment team.</p>
                        </td>
                        <td class="general">
                            <p>This site uses the <a href="https://www.petfinder.com/developers/v2/docs/">Petfinder API</a> and <a href="https://reactjs.org/">React Framework</a>.</p>
                        </td>
                    </tr>
                </table>
                <img class="image" src={petfinder} alt="Petfinder Logo"></img>
                <img class="image" src={reactpic} alt="React Logo"></img>
        </React.Fragment>
    )
}

export default About;