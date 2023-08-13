import React from "react";
import noteVerseImage from "../../images/NoteVersePic.png";
import Button from "react-bootstrap/Button";

const NoteVerse = () => {
  return (
    <div className="Project">
      <h1 className="projectHead">Project: NoteVerse - React CRUD App</h1>

      <h2 className="Project-h2">Description</h2>
      <p className="projectDescription">
        NoteVerse is a versatile and user-friendly React app designed to help
        you stay organized and boost productivity. Whether you're jotting down
        quick notes, keeping track of your daily tasks, or maintaining a
        collection of thoughts, NoteVerse has you covered. With its simple yet
        powerful features, NoteVerse is a must-have tool for anyone seeking a
        reliable note-taking solution.
      </p>

      <img className="ProjectImage" src={noteVerseImage} alt="NoteVerse" />

      <h3 className="Project-h3">Features</h3>
      <ul>
        <li>
          <strong>Create and Save Notes:</strong> Seamlessly add new notes with
          titles and content, and save them instantly for future reference.
        </li>
        <li>
          <strong>Edit and Update:</strong> Effortlessly update your notes
          whenever you need to revise or modify their content.
        </li>
        <li>
          <strong>Delete Notes:</strong> Easily remove notes you no longer need,
          maintaining a clutter-free workspace.
        </li>
        <li>
          <strong>Organize with Categories:</strong> Group similar notes
          together by creating custom categories for better organization.
        </li>
      </ul>

      <h2 className="Project-h2">Technologies Used</h2>
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

      <p>
        Feel free to use, modify, and expand this project to suit your needs.
        Happy note-taking!
      </p>

      <p>
        Visit the live application:
        <a href="https://tarun1088.github.io/Keeper-app/">
          <Button className="link-btn" variant="outline-dark">
            NoteVerse
          </Button>
        </a>
      </p>
    </div>
  );
};

export default NoteVerse;
