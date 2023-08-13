import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import profilePic from "../images/profile-pic.png";
import sentenceImage from "../images/sentense.png";
import niImage from "../images/ni.png";
import katanaImage from "../images/katana.png";
import smokebomb from "../images/smokebomb.png";

function Content() {
  return (
    <div>
      <div className="container top-container">
        <div className="row">
          <div className="col-12">
            <h1>Hello, I'm Tarun.</h1>
            <h2>
              A <span className="pro">pro</span>grammer
            </h2>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <img className="profile-pic" src={profilePic} alt="profile" />
          </div>
          <div className="col-md-7 d-flex justify-content-center align-items-center">
            <img className="sentense" src={sentenceImage} />
          </div>
          <i className="bi bi-chevron-compact-down" />
        </div>
      </div>

      <hr />
      <div className="skills">
        <h2>My Skills.</h2>

        <div className="skill-row">
          <img className="skill-pic" src={katanaImage} alt="skill" />
          <h3>Front-end Development</h3>
          <p>
            I specialize in crafting captivating and user-friendly web
            experiences using HTML5, CSS3, Flexbox, Bootstrap 5, JavaScript ES6,
            DOM Manipulation, and jQuery. I am also skilled in web design using
            React.js and React Hooks. Check out some of my front-end projects
            below:
          </p>
          <Link to="/NoteVerse">
            <Button className="link-btn" variant="outline-dark">
              NoteVerse
            </Button>
          </Link>

          <Link to="/DiceGame">
            <Button className="link-btn" variant="outline-dark">
              Dice Game
            </Button>
          </Link>

          <Link to="/DrumKit">
            <Button className="link-btn" variant="outline-dark">
              DrumKit
            </Button>
          </Link>
          <Link to="/SimonGame">
            <Button className="link-btn" variant="outline-dark">
              SimonGame
            </Button>
          </Link>
        </div>
        <div className="skill-row">
          <img className="skill-pic-2" src={niImage} alt />
          <h3>Back-end Development</h3>
          <p>
            I specialize in developing robust server-side applications using
            technologies such as Node.js, NPM, Express.js, EJS, and REST APIs.
            My proficiency extends to working with databases like MongoDB and
            Mongoose-Nosql, enabling seamless data management. To ensure secure
            user interactions, I have substantial experience in authentication
            using Passport for a streamlined and secure user experience. Take a
            look at some of my noteworthy back-end projects below:
          </p>

          <Link to="/Notes">
            <Button className="link-btn" variant="outline-dark">
              Notes
            </Button>
          </Link>

          <Link to="/Todolist">
            <Button className="link-btn" variant="outline-dark">
              Todolist
            </Button>
          </Link>

          <Link to="/DailyJournal">
            <Button className="link-btn" variant="outline-dark">
              Daily Journal
            </Button>
          </Link>
        </div>
        <div className="skill-row">
          <img className="skill-pic" src={smokebomb} alt="skill" />

          <h3>Full-Stack Ecommerce App</h3>
          <p>
            I'm currently working on an exciting full-stack Ecommerce
            application using technologies like React.js for the front-end and
            Node.js, Express.js, and MongoDB for the back-end. This app aims to
            provide users with a seamless shopping experience, featuring product
            browsing, cart management, and secure payment processing.
          </p>
          <Link to="/Ecommerce">
            <Button className="link-btn" variant="outline-dark">
              Ecommerce
            </Button>
          </Link>
        </div>
      </div>

      <h2>Get In Touch</h2>
      <div className="contact-me">
        <h3>Have a project in mind or want to collaborate?</h3>
        <p className="contact-message">
          Feel free to reach out to me if you have any questions or need any
          assistance. I'm always open to discussing new opportunities and ideas.
          Let's create something amazing together!
        </p>
        <a className="contactme-btn" href="mailto:Tarunrawal03@gmail.com">
          CONTACT ME
        </a>
      </div>
    </div>
  );
}

export default Content;
