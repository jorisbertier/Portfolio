import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';


const Img = styled.img `
    height: 30px;
    width: 30px;
    position: relative; /* Assurez-vous que l'image utilise un positionnement relatif */
    top: ${props => props.y * 30}px; /* Positionnement vertical en fonction de la valeur y */
    left: ${props => props.x * 30}px;
`


export const Game = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const gameRef = useRef(null); 

    useEffect(() => {
        const handleKeyDown = (event) => {
            console.log('Key pressed:', event.key);
            switch (event.key) {
                case 'z':
                    handleMove('up');
                    break;
                case 's':
                    handleMove('down');
                    break;
                case 'q':
                    handleMove('left');
                    break;
                case 'd':
                    handleMove('right');
                    break;
                default:
                    break;
            }
        };

        gameRef.current.focus(); // Assure que l'élément de jeu a le focus au montage
        gameRef.current.addEventListener('keydown', handleKeyDown);

        return () => {
            gameRef.current.removeEventListener('keydown', handleKeyDown);
        };
    }, []); // Empty dependency array to ensure the effect runs only once

    // Fonction pour gérer le déplacement du personnage
    const handleMove = (direction) => {
        // Déterminez la nouvelle position en fonction de la direction
        let newPosition = { ...position };
        switch (direction) {
            case 'up':
                newPosition.y -= 1;
                break;
            case 'down':
                newPosition.y += 1;
                break;
            case 'left':
                newPosition.x -= 1;
                break;
            case 'right':
                newPosition.x += 1;
                break;
            default:
                break;
        }
        // Mettez à jour la position seulement si elle reste dans les limites du bloc
        if (newPosition.x >= 0 && newPosition.x <= 9 && newPosition.y >= 0 && newPosition.y <= 9) {
            setPosition(newPosition); // Mise à jour de la position ici
        }
    };

    return (
        <div className="game-container"  ref={gameRef}>
            <div className="block">
                {[...Array(10)].map((_, row) => (
                    <div key={row} className="row">
                        {[...Array(10)].map((_, col) => (
                            <div key={col} className="cell">
                                {/* Utilisez la classe "character" pour afficher l'image du personnage */}
                                {position.x === col && position.y === row && <Img src='https://ih1.redbubble.net/image.4102644834.4659/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg' alt="Character" className="character" x={position.x} y={position.y} />}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};