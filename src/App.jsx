import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

function App() {
    const firstName = ''; 

    return (
        <Container className="mt-5 d-flex flex-column align-items-center">
            <Card style={{ width: '20rem', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
                <Card.Body>
                    <Image />
                    <Name />
                    <Price />
                    <Description />
                </Card.Body>
            </Card>

            {/* Message Section */}
            <div className="mt-4 text-center">
                {firstName ? (
                    <>
                        <h2>Hello, {firstName}!</h2>
                        <img 
                            src="https://static.overfuel.com/dealers/bumble-auto/image/Tesla_from_a_Three-quarter_View_in_a_Mountainous_Area.webp" 
                            alt="Welcome"
                            style={{ width: '150px', marginTop: '10px', borderRadius: '50%' }} 
                        />
                    </>
                ) : (
                    <h2>Hello, there!</h2>
                )}
            </div>
        </Container>
    );
}

export default App;
