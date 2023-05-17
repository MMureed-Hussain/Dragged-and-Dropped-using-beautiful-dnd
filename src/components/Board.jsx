import React, { useState, useEffect } from "react";
import GameNavbar from "./GameNavbar";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { List } from "@mui/material";

export default function Board() {
  const [images, setImages] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Define an array of image URLs
    const imageUrls = [
      process.env.PUBLIC_URL + "/assets/images/2_of_clubs.png",
      process.env.PUBLIC_URL + "/assets/images/3_of_clubs.png",
      process.env.PUBLIC_URL + "/assets/images/4_of_clubs.png",
      process.env.PUBLIC_URL + "/assets/images/5_of_clubs.png",
      process.env.PUBLIC_URL + "/assets/images/6_of_clubs.png",
      process.env.PUBLIC_URL + "/assets/images/7_of_clubs.png",
      process.env.PUBLIC_URL + "/assets/images/8_of_clubs.png",
      process.env.PUBLIC_URL + "/assets/images/9_of_clubs.png",
      process.env.PUBLIC_URL + "/assets/images/10_of_clubs.png",
      process.env.PUBLIC_URL + "/assets/images/jack_of_clubs.png",
      process.env.PUBLIC_URL + "/assets/images/king_of_clubs.png",
      process.env.PUBLIC_URL + "/assets/images/queen_of_clubs.png",
      process.env.PUBLIC_URL + "/assets/images/2_of_diamonds.png",
      process.env.PUBLIC_URL + "/assets/images/3_of_diamonds.png",
      process.env.PUBLIC_URL + "/assets/images/4_of_diamonds.png",
      process.env.PUBLIC_URL + "/assets/images/5_of_diamonds.png",
      process.env.PUBLIC_URL + "/assets/images/6_of_diamonds.png",
      process.env.PUBLIC_URL + "/assets/images/7_of_diamonds.png",
      process.env.PUBLIC_URL + "/assets/images/8_of_diamonds.png",
      process.env.PUBLIC_URL + "/assets/images/9_of_diamonds.png",
      process.env.PUBLIC_URL + "/assets/images/10_of_diamonds.png",
      process.env.PUBLIC_URL + "/assets/images/jack_of_diamonds.png",
      process.env.PUBLIC_URL + "/assets/images/king_of_diamonds.png",
      process.env.PUBLIC_URL + "/assets/images/queen_of_diamonds.png",
      process.env.PUBLIC_URL + "/assets/images/2_of_hearts.png",
      process.env.PUBLIC_URL + "/assets/images/3_of_hearts.png",
      process.env.PUBLIC_URL + "/assets/images/4_of_hearts.png",
      process.env.PUBLIC_URL + "/assets/images/5_of_hearts.png",
      process.env.PUBLIC_URL + "/assets/images/6_of_hearts.png",
      process.env.PUBLIC_URL + "/assets/images/7_of_hearts.png",
      process.env.PUBLIC_URL + "/assets/images/8_of_hearts.png",
      process.env.PUBLIC_URL + "/assets/images/9_of_hearts.png",
      process.env.PUBLIC_URL + "/assets/images/10_of_hearts.png",
      process.env.PUBLIC_URL + "/assets/images/jack_of_hearts.png",
      process.env.PUBLIC_URL + "/assets/images/king_of_hearts.png",
      process.env.PUBLIC_URL + "/assets/images/queen_of_hearts.png",
      process.env.PUBLIC_URL + "/assets/images/2_of_spades.png",
      process.env.PUBLIC_URL + "/assets/images/3_of_spades.png",
      process.env.PUBLIC_URL + "/assets/images/4_of_spades.png",
      process.env.PUBLIC_URL + "/assets/images/5_of_spades.png",
      process.env.PUBLIC_URL + "/assets/images/6_of_spades.png",
      process.env.PUBLIC_URL + "/assets/images/7_of_spades.png",
      process.env.PUBLIC_URL + "/assets/images/8_of_spades.png",
      process.env.PUBLIC_URL + "/assets/images/9_of_spades.png",
      process.env.PUBLIC_URL + "/assets/images/10_of_spades.png",
      process.env.PUBLIC_URL + "/assets/images/jack_of_spades.png",
      process.env.PUBLIC_URL + "/assets/images/king_of_spades.png",
      process.env.PUBLIC_URL + "/assets/images/queen_of_spades.png",
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
    const items = Array.from(images);
    const [reorderedItem] = items.splice(result.source.index, 1);
    console.log("reorderedItem", reorderedItem);
    items.splice(result.destination.index, 0, reorderedItem);
    setImages(items);
  };

  return (
    <>
      <GameNavbar />
      <p>Score: {score}</p>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="bg-success"
              style={{
                marginLeft: "100px",
                border: "10px solid",
                borderRadius: "30px",
              }}
            >
              <div className="container">
                {[...Array(4)].map((_, rowIndex) => (
                  <div
                    className="row g-0"
                    id={`row-${rowIndex + 1}`}
                    key={rowIndex}
                  >
                    {[...Array(13)].map((_, colIndex) => {
                      const index = rowIndex * 13 + colIndex;
                      return (
                        <Draggable
                          key={index}
                          draggableId={`image-${index}`}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              className="col"
                              id={`col-${colIndex + 1}`}
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <img
                                style={{ width: "50px", height: "75px" }}
                                src={images[index]}
                                alt=""
                              />
                            </div>
                          )}
                        </Draggable>
                      );
                    })}
                  </div>
                ))}
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}
