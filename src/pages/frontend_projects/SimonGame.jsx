import React from "react";
import simonImage from "../../images/simon.png";
import Button from "react-bootstrap/Button";

const SimonGame = () => {
  return (
    <div className="Project">
      <h1 className="projectHead">Simon's Memory Game</h1>

      <h2 className="Project-h2">Description</h2>
      <p className="projectDescription">
        Simon's Memory Game is a classic and addictive memory skill game that
        puts your cognitive abilities to the test. The game is inspired by the
        iconic electronic game "Simon," which challenges players to remember and
        replicate a sequence of colored buttons.
      </p>

      <img
        className="ProjectImage"
        src={simonImage}
        alt="Simon's Memory Game"
      />

      <h3 className="Project-h3">How to Play</h3>
      <ul>
        <li>Press any key on your keyboard to start the game.</li>
        <li>
          Observe the sequence of colored buttons highlighted by the computer.
        </li>
        <li>
          Try to repeat the exact sequence by clicking on the corresponding
          buttons.
        </li>
        <li>
          As you progress through the levels, the sequences will become more
          challenging and longer.
        </li>
        <li>Successfully repeat the sequence to advance to the next level.</li>
        <li>
          If you make a mistake, the game will end, and you can restart by
          pressing any key.
        </li>
      </ul>

      <h2 className="Project-h2">Technology Used</h2>
      <ul>
        <li>
          <strong>React:</strong> The project leverages React, a popular
          JavaScript library for building user interfaces, to create a dynamic
          and interactive app.
        </li>
        <li>
          <strong>useState Hook:</strong> React's `useState` hook is used to
          manage the app's state, enabling real-time updates and rendering of
          notes.
        </li>
        <li>
          <strong>Material-UI:</strong> The app utilizes Material-UI, a React UI
          framework, to enhance the overall user experience with visually
          appealing components.
        </li>
        <li>
          <strong>HTML and CSS:</strong> The project uses HTML for structuring
          the app and CSS for styling, making it visually engaging and
          user-friendly.
        </li>
      </ul>

      <h3 className="Project-h3">Features</h3>
      <ul>
        <li>
          <strong>Intuitive and user-friendly interface:</strong> Get started
          easily and enjoy a seamless gaming experience.
        </li>
        <li>
          <strong>Responsive design:</strong> Play the game on various devices
          with smooth gameplay.
        </li>
        <li>
          <strong>Dynamic button animations:</strong> Enjoy visually appealing
          animations that guide players through the sequence.
        </li>
        <li>
          <strong>Randomly generated sequences:</strong> Keep the game
          challenging and exciting with new sequences in each round.
        </li>
        <li>
          <strong>Audio feedback:</strong> Enhance the gaming experience with
          audio cues for each button press.
        </li>
      </ul>

      <h2 className="Project-h2">Purpose</h2>
      <p className="projectDescription">
        Simon's Memory Game is not only a fun pastime but also a valuable tool
        for improving memory and cognitive skills. It challenges players to
        focus, concentrate, and recall sequences accurately, making it a great
        exercise for the brain. Whether you're looking for a quick mental
        workout or just some entertainment, this game has something to offer for
        everyone.
      </p>

      <p>
        Visit the live application:
        <a href=" https://tarun1088.github.io/SimonsGame">
          <Button className="link-btn" variant="outline-dark">
            Simon's Memory Game
          </Button>
        </a>
      </p>
    </div>
  );
};

export default SimonGame;
