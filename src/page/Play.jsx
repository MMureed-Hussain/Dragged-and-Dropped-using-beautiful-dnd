import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { List } from "@mui/material";
import GameNavbar from "../components/GameNavbar";
import { Button, Image } from "react-bootstrap";

export default function Play() {
  const [images, setImages] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const TOTAL_GAME_TIME_IN_MS = 120000; // 2 minutes in milliseconds

  const [time, setTime] = useState(0);

  // start the timer when the component mounts
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    // clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);


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
      { id: 48, url: "/assets/images/ace_of_spades.png" },
      { id: 49, url: "/assets/images/ace_of_diamonds.png" },
      { id: 50, url: "/assets/images/ace_of_hearts.png" },
      { id: 51, url: "/assets/images/ace_of_clubs.png" },
      // Add more image URLs here
    ];
    const url2 = [{ id: 52, url: "/assets/images/black_joker.png" }];

    // Shuffle the array of image URLs using the Fisher-Yates shuffle algorithm
    for (let i = imageUrls.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [imageUrls[i], imageUrls[j]] = [imageUrls[j], imageUrls[i]];
    }

    // Set the shuffled array of image URLs as the state
    setImages(imageUrls);

    // Replace specific image URLs
    const replacedImage = { id: 52, url: "/assets/images/black_joker.png" };
    const updatedImages = imageUrls.map((image) =>
      image.id === replacedImage.id ? replacedImage : image
    );

    // Set the updated array of image URLs as the state
    setImages(updatedImages);

    // Set a timeout to remove the last four images after 8 seconds
    const timeoutId = setTimeout(() => {
      const clearedImages = updatedImages.map((image) =>
        image.id >= 48 && image.id <= 51
          ? { ...image, url: "", alt: "" }
          : image
      );
      setImages(clearedImages);
    }, 2000);

    // Clear the timeout when the component unmounts or the state changes
    return () => clearTimeout(timeoutId);
  }, []);

  const handleDragEnd = (result) => {
    if (!result.destination || result.draggableId === undefined) {
      return;
    }
    const items = Array.from(images);
    console.log("items from images", items);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setImages(items);
    setScore(score + 10);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setGameOver(true);
    }, 120000); // 2 minutes in milliseconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (gameOver) {
      // calculate final score
      const finalScore = images.length * 10 + score;
      console.log(`Game over! Final score: ${finalScore}`);
    }
  }, [gameOver]);
  // Define the resetGame function to start a new game old 


   // end the game after 2 minutes and show the score
   useEffect(() => {
    if (time === 3000) {
      let intervalId = null;
      clearInterval(intervalId); // stop the timer
      alert(`Game over! Your score is ${score}.`);
    }

  }, [time, score]);
  return (
    <>
      <div>
        <GameNavbar />
        <p> score: {score}</p>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="images">
            {(provided) => (
              <List
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="col-10 bg-success"
                style={{
                  marginLeft: "110px",
                  border: "05px solid",
                  borderRadius: "20px",
                }}
              >
                {images.map((image, index) => (
                  <Draggable
                    key={image.id}
                    draggableId={image.id.toString()}
                    index={index}
                    // isDragDisabled={image.url === "" ?? "true" : "false"}
                  >
                    {(provided) => (
                      <Image
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        src={image.url}
                        alt={`Image ${image.id}`}
                        // alt={image.url !== "" ? `Image ${image.id}` : undefined}
                        style={{ width: "85px", height: "100px" }}
                      />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </List>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      {gameOver && <p>Game over!</p>}
      <Button>New Game</Button>
    </>
  );
}
