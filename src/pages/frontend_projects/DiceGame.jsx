import React from "react";
import Button from "react-bootstrap/Button";
import DicePic from "../../images/Dicepic.png";

const DiceGame = () => {
  return (
    <div className="Project">
      <h1 className="projectHead">Dice Game: Mystical Dice Duel</h1>

      <p className="projectDescription">
        Welcome to the Mystical Dice Duel, a magical and thrilling game where
        two players clash in a dice-rolling battle for supremacy! Will you
        embrace the radiant powers of the "Player of Light," or delve into the
        shadowy arts of the "Player of Shadows"? Roll the dice and let destiny
        unfold!
      </p>
      <img className="ProjectImage" src={DicePic} alt="NoteVerse" />
      <h2 className="Project-h2">How to Play</h2>
      <ol>
        <li>Click the "Unleash the Dice" button to start the duel.</li>
        <li>Two mystical dice will be rolled, one for each player.</li>
        <li>The player with the higher roll shall be victorious!</li>
        <li>In the event of a tie, the battle shall be deemed a draw.</li>
      </ol>

      <h2 className="Project-h2">Game Rules</h2>
      <ul>
        <li>Each player is represented by their respective dice.</li>
        <li>
          The "Player of Light" is characterized by the dice of vibrant energy,
          while the "Player of Shadows" wields the dice of enigmatic darkness.
        </li>
        <li>The dice have six faces, numbered from 1 to 6.</li>
        <li>The fate of the duel is determined by the numbers rolled.</li>
      </ul>

      <p className="project-p">
        Let the mystical forces guide your fate in the Mystical Dice Duel. The
        ethereal powers of chance and strategy are entwined in every roll.
        Prepare for an exciting adventure of triumphs and draws!
      </p>

      <h2 className="Project-h2">Technology Used</h2>

      <ul>
        <li>
          <strong>HTML5:</strong> For structuring the content.
        </li>
        <li>
          <strong>CSS3:</strong> For styling and layout design.
        </li>
        <li>
          <strong>JavaScript:</strong> For the game logic and interactivity.
        </li>
      </ul>

      <p className="project-p">
        Embark on an exhilarating journey of dice-rolling rivalry! Are you
        destined to be the "Player of Light" basking in glory, or will the
        shadows be your ally, guiding you to victory as the "Player of Shadows"?
        Click the button below to unleash the dice and discover your fate!
      </p>

      <p>
        Visit the live application:
        <a href="https://tarun1088.github.io/DiceDuel/">
          <Button className="link-btn" variant="outline-dark">
            DiceGame
          </Button>
        </a>
      </p>
    </div>
  );
};

export default DiceGame;
