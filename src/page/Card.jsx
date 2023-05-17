import { List, Table, TableCell } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Col, Row } from "react-bootstrap";

const Card = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
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
    ]; // Array of card image URLs
    // Shuffle the array of image URLs using the Fisher-Yates shuffle algorithm
    for (let i = imageUrls.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [imageUrls[i], imageUrls[j]] = [imageUrls[j], imageUrls[i]];
    }
    setImages(imageUrls); // Set the shuffled array of image URLs as the state
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
  const cardStyle = {
    padding: "10px",
    margin: "10px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "3px",
    boxShadow: "0px 1px 1px #ccc",
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <List
        className="bg-success"
        style={{
          border: "10px solid",
          borderRadius: "30px",
        }}
      >
        {Array.from(
          { length: Math.ceil(images.length / 12) },
          (_, rowIndex) => (
            <Droppable key={rowIndex} droppableId={`list-${rowIndex}`}>
              {(provided) => (
                <div
                  className="m-3"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <Row className="g-0">
                    {images
                      .slice(rowIndex * 12, (rowIndex + 1) * 12)
                      .map((image, cellIndex) => (
                        <Draggable
                          key={image}
                          draggableId={image}
                          index={rowIndex * 12 + cellIndex}
                        >
                          {(provided) => (
                            <img
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                              className="draggable col-md-1 card"
                              src={image}
                              width="50px"
                              alt={`Playing card ${rowIndex * 12 + cellIndex}`}
                            />
                          )}
                        </Draggable>
                      ))}
                  </Row>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          )
        )}
      </List>
    </DragDropContext>
  );
};

export default Card;
