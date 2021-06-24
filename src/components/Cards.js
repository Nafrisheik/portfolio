import React from "react";
import CardItem from "./Carditem";
import "./Card.css";
export default function Cards() {
  return (
    <div className='cards'>
      <h1>Check out all of my Projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            {/* <h1>Full Stack Projects</h1> */}
          <ul className='cards__items'>
          <CardItem
  src='images/chat.png'
  text='A chat app similar to whatsapp'
  label='View details'
  path='https://whatsschat.netlify.app/'
  git="https://github.com/Nafrisheik/Whatschat"
/>
            <CardItem
              src='images/img-1.jpg'
              text='Convert your long URLs to short'
              label='View details'
              path='https://url-longto-shortener.netlify.app/'
              git="https://github.com/Nafrisheik/Url-shortener-frontend"
            />
            <CardItem
              src='images/img-4.jpg'
              text='Get Realtime data on CPU and RAM usage'
              label='View details'
              path=''
              git="https://github.com/Nafrisheik/Takvaviya_assignment/tree/master"
            />           
           
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/img-2.jpg'
              text='Have a to-do-list to remember your routines'
              label='View details'
              path='https://advancetodolist.netlify.app/'
              git="https://github.com/Nafrisheik/Todolist-App"
            />
            <CardItem
              src='images/img-3.jpg'
              text='Tic Tac Toe Game'
              label='View details'
              path='https://react-tic-tactoe.netlify.app/'
              git="https://github.com/Nafrisheik/React_tictactoe"
            />
            <CardItem
              src='images/img-5.jpg'
              text='Play the game Sequence Finder'
              path='https://sequence-finder.netlify.app/'
              git="https://github.com/Nafrisheik/SequenceFinder"
            />
           
          </ul>
        </div>
      </div>
    </div>
  );
}
