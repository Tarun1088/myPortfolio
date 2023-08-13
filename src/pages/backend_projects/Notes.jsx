import React from "react";
import Notes from "../../images/Notes.png";
import Button from "react-bootstrap/Button";

const SecureNotes = () => {
  return (
    <div className="Project">
      <h1 className="projectHead">Project: Notes</h1>

      <h2 className="Project-h2">Description</h2>
      <p className="projectDescription">
        "Notes" is a robust backend project tailored for efficient and secure
        management of personal notes. The project's core focus lies in granting
        users exclusive access to their data while facilitating seamless CRUD
        (Create, Read, Update, Delete) operations. This API-driven application
        ensures that users can manage their notes with confidence and privacy.
      </p>

      <img className="ProjectImage" src={Notes} alt="Notes" />

      <h3 className="Project-h3">Key Features</h3>
      <ul>
        <li>
          <strong>User-Centric Data Management:</strong> "Notes" prioritizes
          data isolation, ensuring that each user accesses only their own notes.
          This is achieved through meticulous backend design and user-specific
          database structures.
        </li>
        <li>
          <strong>Fine-Grained CRUD Operations:</strong> Users enjoy the
          flexibility to create, read, update, and delete their notes with
          precision. The project's API endpoints are tailored to enable these
          operations seamlessly.
        </li>
        <li>
          <strong>Authentication and Data Privacy:</strong> "Notes" employs
          token-based authentication, granting secure and authorized access to
          sensitive user data. This prevents unauthorized access and ensures
          data privacy. The user authentication logic is seamlessly managed
          through Passport.js and Google OAuth2.
        </li>
        <li>
          <strong>Powerful Data Manipulation:</strong> The application leverages
          MongoDB's capabilities to efficiently store and retrieve user-specific
          notes.
        </li>
        <li>
          <strong>Session Management:</strong> User sessions are efficiently
          managed using `express-session` and `connect-mongo`, enhancing
          security and user experience.
        </li>
        <li>
          <strong>Custom Middleware:</strong> Custom middleware ensures that
          only authenticated users can access the relevant API endpoints.
        </li>
        <br></br>
        <li>
          The project's modular architecture ensures clean separation of
          concerns. Routes, controllers, and models are neatly organized to
          optimize development and maintenance. The API endpoints are secured
          through token-based authentication, and the backend intricacies
          guarantee that users can only access their respective notes.
        </li>

        <li>
          "Notes" underscores my expertise in crafting robust backend solutions
          with a focus on user data security. The application demonstrates my
          ability to create efficient APIs that enable secure, personalized data
          management and CRUD operations.
        </li>

        <li>
          "Notes" highlights my skills in backend development, showcasing my
          proficiency in architecting secure, user-centric applications that
          prioritize data isolation and secure operations.
        </li>
      </ul>
      <p>
        Visit the live application:
        <a href="https://tame-lime-cockatoo-suit.cyclic.app/">
          <Button className="link-btn" variant="outline-dark">
            Notes
          </Button>
        </a>
      </p>
    </div>
  );
};

export default SecureNotes;
