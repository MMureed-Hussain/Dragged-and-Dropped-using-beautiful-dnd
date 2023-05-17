import {
  Avatar,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
} from "@mui/material";

import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const GameOver = () => {
  const itemData = [
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
  ];

  const [data, setData] = useState(itemData);
  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(data);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    console.log(items);
    setData(items);
  };
  return (
    <Container maxWidth="sm">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <List
              {...provided.droppableProps}
              ref={provided.innerRef}
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {data &&
                data.map((item, index) => {
                  return (
                    <Draggable
                      key={item.id}
                      draggableId={item.id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <Paper
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          elevation={2}
                          sx={{ marginBottom: "10px" }}
                        >
                          <Avatar src={item.url} />
                        </Paper>
                      )}
                    </Draggable>
                  );
                })}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
};

export default GameOver;
