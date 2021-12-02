import React from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import { Link } from 'react-router-dom';
import NoteListImage from "../../assets/images/note.svg";

const Home = () => {

  return (
    <div className="home">
      <Header />
      <main className="hero">
        <section className="hero__left">
          <div className="hero__text-container">
            <h1 className="hero__title">Save all your notes in one place</h1>
            <p className="hero__paragraph">
              Register for an account and starting adding your notes
            </p>
            <div className="hero__buttons">
              <Link to="/register">
                <button className="button button__orange-fill">
                  Get started
                </button>
              </Link>
              <Link to="/login">
                <button className="button button__orange-outline">Login</button>
              </Link>
            </div>
          </div>
        </section>

        <section className="hero__right">
          <div className="hero__image">
            <img src={NoteListImage} alt="note list illustration" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
