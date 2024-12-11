import React from 'react';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Project from './components/Project.jsx';
import Middle from './components/Middle.jsx';
import Footer from './components/Footer.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import './App.css';

const App = () => {
    const projects = [
        {
            title: 'Project1:chess game',
            description: 'This is a frontend project using the html,css and javascript where the ui is developed in such a way that 2 players can play chess using the app',
            link: 'https://github.com/RohiniShankari/chess.git'
        },
        {
            title: 'Project2:full stack project',
            description:'using the html,css,javascript,bootstrap,node.js,express.js,mongodb.this is app where the people can list there places for rent',
            link: 'https://github.com/RohiniShankari/chess.git'
        },
        {
            title: 'Project 3:sentiment analysis',
            description: 'sentiment analysis is performed on the wine data to predict the quality of the wine',
            link: 'https://colab.research.google.com/drive/1ua1Uy_1z3zQFQg9az6CUMXN7qqtQKvk-'
        }
    ];

    return (
        <div className="App">
            <Header />
           
           <Middle/>

            <About />
            <Skills/>
            <Project title={projects[0].title} description={projects[0].description} link={projects[0].link}/>
            <Project title={projects[1].title} description={projects[1].description} link={projects[1].link}/>
            <Project title={projects[2].title} description={projects[2].description} link={projects[2].link}/>
            <Contact/>
        </div>
    );
};

export default App;