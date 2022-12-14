import React, { Component } from 'react';
import './card.styles.css';


class Card extends Component {
        render() {
                const { name, attack, species, hp, defense, img } = this.props.pokemon;
                return (
                        <div className='card-container'>
                                <h1>{name}</h1>
                                <img src={img} />
                                <table>
                                        <tbody>
                                                <tr>
                                                        <td>HP</td>
                                                        <td><h4>{hp}</h4></td>
                                                </tr>
                                                <tr>
                                                        <td>Species</td>
                                                        <td><h4>{species}</h4></td>
                                                </tr>
                                                <tr>
                                                        <td>Attack</td>
                                                        <td><h4>{attack}</h4></td>
                                                </tr>
                                                <tr>
                                                        <td>Defense</td>
                                                        <td><h4>{defense}</h4></td>
                                                </tr>
                                        </tbody>

                                </table>

                        </div>
                )
        }
}

export default Card;