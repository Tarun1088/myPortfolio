import React from "react";
import DrumImage from "../../images/DrumKit.png";
import Button from "react-bootstrap/Button";

const DrumKit = () => {
  return (
    <div className="Project">
      <h1 className="projectHead">
        Project: Drum Kit - A Fun Drumming Experience
      </h1>

      <h2 className="Project-h2">Description</h2>
      <p className="projectDescription">
        Drum Kit is an interactive and enjoyable drumming experience built with
        React. Get ready to unleash your inner musician and create captivating
        beats with just a keyboard or by clicking the buttons on the screen.
        Whether you're a music enthusiast or simply looking for some rhythmic
        fun, the Drum Kit offers an engaging way to express yourself musically.
      </p>

      <img className="ProjectImage" src={DrumImage} alt="Drum Kit" />

      <h3 className="Project-h3">Features</h3>
      <ul>
        <li>
          <strong>Play Drums:</strong> Enjoy playing drum sounds by pressing the
          corresponding keys on your keyboard or clicking the drum buttons on
          the screen.
        </li>
        <li>
          <strong>Realistic Drum Sounds:</strong> Experience high-quality and
          realistic drum sounds that mimic an actual drum kit.
        </li>
        <li>
          <strong>Visual Feedback:</strong> Each drum button provides visual
          feedback with a pressed effect, making the drumming experience more
          interactive and enjoyable.
        </li>
      </ul>

      <h2 className="Project-h2">Technologies Used</h2>
      <ul>
        <li>
          <strong>jQuery:</strong> jQuery is used to simplify DOM manipulation
          and event handling, enabling seamless drum sound playback.
        </li>
        <li>
          <strong>HTML and CSS:</strong> The project uses HTML for structuring
          the drum buttons and CSS for styling, making it visually engaging and
          user-friendly.
        </li>
      </ul>

      <h2 className="Project-h2">How to Use</h2>
      <p className="ProjectDescription">
        To play the Drum Kit, follow these simple steps:
      </p>
      <ol>
        <li>
          Use your keyboard keys: <strong>w</strong>, <strong>a</strong>,{" "}
          <strong>s</strong>, <strong>d</strong>, <strong>j</strong>,{" "}
          <strong>k</strong>, <strong>l</strong> to play the corresponding drum
          sounds.
        </li>
        <li>
          Alternatively, you can click on the drum buttons on the screen using
          your mouse.
        </li>
        <li>Enjoy creating your beats and feel the rhythm!</li>
      </ol>

      <p className="ProjectDescription">
        Have fun drumming and exploring your musical talents!
      </p>

      <p className="ProjectDescription">
        Visit the live application:
        <a href="https://tarun1088.github.io/Drumkit/">
          <Button className="link-btn" variant="outline-dark">
            Drum Kit
          </Button>
        </a>
      </p>
    </div>
  );
};

export default DrumKit;
