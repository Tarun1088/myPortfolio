import React from "react";
import Todolist from "../../images/Todolist.png";
import Button from "react-bootstrap/Button";

const DrumKit = () => {
  return (
    <div className="Project">
      <h1 className="projectHead">Project: To-Do List</h1>

      <h2 className="Project-h2">Description</h2>
      <p className="projectDescription">
        This web application provides a straightforward solution for managing
        tasks and responsibilities. Designed with simplicity in mind, the app
        allows users to maintain and organize their to-do list efficiently.
      </p>

      <img className="ProjectImage" src={Todolist} alt="Drum Kit" />

      <h3 className="Project-h3">Features</h3>
      <ul>
        <li>
          <strong>Task Management:</strong> Users can add tasks to their to-do
          list, providing a clear overview of what needs to be accomplished.
        </li>
        <li>
          <strong>Easy Deletion:</strong> Completed tasks can be easily removed
          from the list, helping users declutter and stay focused.
        </li>
        <li>
          <strong>Task Tracking:</strong> The checkbox feature enables users to
          mark tasks as complete, aiding in progress tracking.
        </li>
        <li>
          <strong>List Customization:</strong> Users can manage multiple task
          lists, tailoring them to various aspects of their lives.
        </li>
      </ul>

      <h2 className="Project-h2">Technologies Used</h2>
      <ul>
        <li>
          <strong>Node.js:</strong> The app's backend is built on the Node.js
          runtime environment, facilitating server-side operations.
        </li>
        <li>
          <strong>Express:</strong> Express.js is employed as the backend web
          application framework, handling routing and requests effectively.
        </li>
        <li>
          <strong>MongoDB:</strong> A NoSQL database, MongoDB, is used for
          storing task-related data, ensuring persistence across sessions.
        </li>
        <li>
          <strong>Mongoose:</strong> Mongoose, an ODM library, simplifies
          interactions with MongoDB by providing a structured schema.
        </li>
        <li>
          <strong>Embedded JavaScript (EJS):</strong> EJS templating engine
          generates dynamic HTML content for task visualization.
        </li>
      </ul>

      <p className="projectDescription" style={{ paddingBottom: "40px" }}>
        This to-do list application underscores my capacity to develop practical
        web solutions and showcases proficiency in backend technologies like
        Node.js, Express, and MongoDB.
      </p>
      <p>
        Visit the live application:
        <a href=" https://good-cyan-horse-kit.cyclic.app/">
          <Button className="link-btn" variant="outline-dark">
            Todolist
          </Button>
        </a>
      </p>
    </div>
  );
};

export default DrumKit;
