import * as React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import './Home.css'

export const Home: React.FC = () => {
    return (
        <>
            <Jumbotron fluid>
                <div className="homeImage position-relative overflow-hidden text-center bg-dark text-light">
                    <div className="layer col-md-5 mx-auto my-5">
                        <h1 className="display-4 font-weight-normal">Punny headline</h1>
                        <p className="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your
                            marketing
                            efforts with this example based on Apple’s marketing pages.</p>
                        <a className="btn btn-outline-secondary" href="#">Coming soon</a>
                    </div>
                </div>
            </Jumbotron>
        </>
    )
}