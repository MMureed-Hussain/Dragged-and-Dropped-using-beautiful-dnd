// import React, { useState } from 'react';
// import Card from './Card';
// import './CardSolitaire.css';

// const CardSolitaire = () => {
//   const [cards, setCards] = useState([]);
//   const [dealtCards, setDealtCards] = useState([]);
//   const [selectedCard, setSelectedCard] = useState(null);

//   const shuffleCards = () => {
//     // Create a deck of cards
//     const suits = ['spades', 'hearts', 'diamonds', 'clubs'];
//     const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
//     const deck = [];
//     suits.forEach((suit) => {
//       ranks.forEach((rank) => {
//         deck.push({ rank, suit });
//       });
//     });

//     // Shuffle the deck
//     for (let i = deck.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [deck[i], deck[j]] = [deck[j], deck[i]];
//     }

//     setCards(deck);
//   };

//   const dealCards = () => {
//     // Deal the first seven cards
//     const newDealtCards = [];
//     for (let i = 0; i < 12; i++) {
//       const card = cards.pop();
//       card.hidden = false;
//       newDealtCards.push(card);
//     }
//     newDealtCards.push({ rank: null, suit: null, hidden: false });
//     setCards(cards);
//     setDealtCards(newDealtCards);
//   };

//   const handleCardClick = (card) => {
//     if (selectedCard === null) {
//       // Select the card
//       setSelectedCard(card);
//     } else if (selectedCard.rank === card.rank) {
//       // Remove the pair of cards
//       const newDealtCards = dealtCards.filter((c) => c.rank !== card.rank);
//       setDealtCards(newDealtCards);
//       setSelectedCard(null);
//     } else {
//       // Deselect the previous card and select the new one
//       setSelectedCard(card);
//     }
//   };

//   return (
//     <div>
//       <button onClick={shuffleCards}>Shuffle</button>
//       <button onClick={dealCards}>Deal</button>
//       <div className="dealt-cards">
//         {dealtCards.map((card, index) => (
//           <Card key={index} rank={card.rank} suit={card.suit} hidden={card.hidden} onClick={() => handleCardClick(card)} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CardSolitaire;

import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { List } from "@mui/material";
import GameNavbar from "../components/GameNavbar";
import { Image } from "react-bootstrap";
import GameOver from "./GameOver";

export default function Play() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Define an array of image URLs
    const imageUrls = [
      { id: 0, url: "/assets/images/2_of_clubs.png" },
      { id: 1, url: "/assets/images/3_of_clubs.png" },
      { id: 2, url: "/assets/images/4_of_clubs.png" },
      { id: 3, url: "/assets/images/5_of_clubs.png" },
      { id: 4, url: "/assets/images/6_of_clubs.png" },
      { id: 5, url: "/assets/images/7_of_clubs.png" },
      { id: 6, url: "/assets/images/8_of_clubs.png" },
      { id: 7, url: "/assets/images/9_of_clubs.png" },
      { id: 8, url: "/assets/images/10_of_clubs.png" },
      { id: 9, url: "/assets/images/jack_of_clubs.png" },
      { id: 10, url: "/assets/images/king_of_clubs.png" },
      { id: 11, url: "/assets/images/queen_of_clubs.png" },
      { id: 12, url: "/assets/images/2_of_diamonds.png" },
      { id: 13, url: "/assets/images/3_of_diamonds.png" },
      { id: 14, url: "/assets/images/4_of_diamonds.png" },
      { id: 15, url: "/assets/images/5_of_diamonds.png" },
      { id: 16, url: "/assets/images/6_of_diamonds.png" },
      { id: 17, url: "/assets/images/7_of_diamonds.png" },
      { id: 18, url: "/assets/images/8_of_diamonds.png" },
      { id: 19, url: "/assets/images/9_of_diamonds.png" },
      { id: 20, url: "/assets/images/10_of_diamonds.png" },
      { id: 21, url: "/assets/images/jack_of_diamonds.png" },
      { id: 22, url: "/assets/images/king_of_diamonds.png" },
      { id: 23, url: "/assets/images/queen_of_diamonds.png" },
      { id: 24, url: "/assets/images/2_of_hearts.png" },
      { id: 25, url: "/assets/images/3_of_hearts.png" },
      { id: 26, url: "/assets/images/4_of_hearts.png" },
      { id: 27, url: "/assets/images/5_of_hearts.png" },
      { id: 28, url: "/assets/images/6_of_hearts.png" },
      { id: 29, url: "/assets/images/7_of_hearts.png" },
      { id: 30, url: "/assets/images/8_of_hearts.png" },
      { id: 31, url: "/assets/images/9_of_hearts.png" },
      { id: 32, url: "/assets/images/10_of_hearts.png" },
      { id: 33, url: "/assets/images/jack_of_hearts.png" },
      { id: 34, url: "/assets/images/king_of_hearts.png" },
      { id: 35, url: "/assets/images/queen_of_hearts.png" },
      { id: 36, url: "/assets/images/2_of_spades.png" },
      { id: 37, url: "/assets/images/3_of_spades.png" },
      { id: 38, url: "/assets/images/4_of_spades.png" },
      { id: 39, url: "/assets/images/5_of_spades.png" },
      { id: 40, url: "/assets/images/6_of_spades.png" },
      { id: 41, url: "/assets/images/7_of_spades.png" },
      { id: 42, url: "/assets/images/8_of_spades.png" },
      { id: 43, url: "/assets/images/9_of_spades.png" },
      { id: 44, url: "/assets/images/10_of_spades.png" },
      { id: 45, url: "/assets/images/jack_of_spades.png" },
      { id: 46, url: "/assets/images/king_of_spades.png" },
      { id: 47, url: "/assets/images/queen_of_spades.png" },
      
      // Add more image URLs here
    ];

    // Shuffle the array of image URLs using the Fisher-Yates shuffle algorithm
    for (let i = imageUrls.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [imageUrls[i], imageUrls[j]] = [imageUrls[j], imageUrls[i]];
    }

    // Set the shuffled array of image URLs as the state
    setImages(imageUrls);
  }, []);

  const handleDragEnd = (result) => {
    if (!result.destination && result.draggableId === undefined) {
      return;
    }
    const items =[...images];
    const [draggedItem] = items.splice(result.source.index, 1);
    console.log("draggedItem" , draggedItem)
    items.splice(result.destination.index, 0, draggedItem);
    setImages(items);
  };

  return (
    <>
        <div className="d-flex justify-content-center" >
          {/* <GameNavbar /> */}
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="div">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="bg-success"
                style={{
                  border: "10px solid",
                  borderRadius: "30px",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center"
                }}
              >
                {images.map((image, index) => (
                  <Draggable
                    key={image.id}
                    draggableId={image.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <img
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{ margin: "10px" }}
                        src={image.url}
                        alt={`Image ${image.id}`}
                        width="90px"
                      />
                    )}
                  </Draggable> 
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        </div>
        <div className="container">
          <div className="">
            <div className="">
            <GameOver/>
            </div>
          </div>
        </div>
       
    </>
  );
}
