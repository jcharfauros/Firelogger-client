import React from "react";
import {
    Jumbotron,
    Container
} from 'reactstrap';
import home from '../assets/pexelhome.jpg';
import '../App.css';

const JumboTest = (props) => {
    return (
        <div>
            <Jumbotron fluid>
                <Container className='text-center' fluid>
                    <hr className='hr-1' />
                    <h1 className='display-2 font-test'>Firelogger</h1>
                    <img src={home} alt='home_image' style={{width: 800}} />
                </Container>
            </Jumbotron>
        </div>
    );
};

export default JumboTest;