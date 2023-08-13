import React from "react";
import DailyJournalImage from "../../images/DailyJournal.png";
import Button from "react-bootstrap/Button";

const DailyJournalApp = () => {
  return (
    <div className="Project">
      <h1 className="projectHead">
        Project: Daily Journal - Express.js and EJS
      </h1>

      <h2 className="Project-h2">Description</h2>
      <p className="projectDescription">
        Discover the art of journaling like never before with the Daily Journal
        app! Crafted as a learning project, this application showcases the
        potential of the EJS templating engine and transactional functionality.
        Daily Journal is a platform that encourages self-expression and personal
        growth through digital journaling. Whether you're capturing daily
        musings, preserving cherished moments, or jotting down your thoughts,
        this app offers a seamless and user-friendly interface to help you
        embark on your journaling journey.
      </p>

      <img
        className="ProjectImage"
        src={DailyJournalImage}
        alt="Daily Journal App"
      />

      <h2 className="Project-h2">Technologies Used</h2>
      <ul>
        <li>
          <strong>Express.js:</strong> The backbone of the app, Express.js is
          used to create a robust and efficient server for handling HTTP
          requests and responses.
        </li>
        <li>
          <strong>EJS Templating Engine:</strong> Daily Journal leverages the
          EJS templating engine to dynamically generate HTML content. EJS
          templates allow for the easy inclusion of variables, logic, and
          partials, enhancing the app's flexibility and maintainability.
        </li>
        <li>
          <strong>Lodash:</strong> The app utilizes Lodash, a JavaScript utility
          library, to simplify working with arrays, objects, and strings. For
          example, Lodash's _.lowerCase function aids in consistent route
          handling by converting route parameters to lowercase.
        </li>
        <li>
          <strong>Static File Handling:</strong> Express.js serves static files
          (such as CSS and images) from the "public" directory, enhancing the
          app's performance and aesthetics.
        </li>
        <li>
          <strong>Server-side Routing:</strong> Express.js's routing
          capabilities enable seamless navigation between different sections of
          the app, such as the homepage, about page, contact page, and
          individual journal entries.
        </li>
        <li>
          <strong>Form Handling:</strong> The app employs Express.js's
          express.urlencoded middleware to handle form submissions. This enables
          users to compose new journal entries with titles and content
          effortlessly.
        </li>
        <li>
          <strong>Partial Views:</strong> The app uses EJS partials to
          modularize the codebase, promoting code reusability and
          maintainability.
        </li>
      </ul>

      <p className="projectDescription" style={{ textDecoration: "underline" }}>
        Embracing the authenticity of a traditional journal, deliberate
        decisions were made not to include update and delete functionality. Just
        as with a physical journal, where each entry is a permanent record, the
        Daily Journal app reflects this essence by encouraging thoughtful
        expression without the option to edit or remove entries. This choice
        aims to preserve the genuine nature of personal reflection and
        storytelling.
      </p>
      <p className="projectDescription">
        Visit the live application:
        <a
          href="https://www.drumkitapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="link-btn" variant="outline-dark">
            Daily Journal
          </Button>
        </a>
      </p>
    </div>
  );
};

export default DailyJournalApp;
