import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Features from './Components/Features.js'

const App = () => {

  const [houses, setHouses] = useState([]);
  const [name, setName] = useState('');
  const [room, setRoom] = useState([]);

  // GET with fetch API // GET HOUSES
  useEffect(() => {
    const fetchHouse = async () => {
      const response = await fetch(
          'https://ancient-taiga-31359.herokuapp.com/api/houses'
      );
      const data = await response.json();
      console.log(data);
      setHouses(data);
    };
    fetchHouse();
  }, []);


  // Delete with fetchAPI
  const deleteHouse = async (_id) => {
    let response = await fetch(
      `https://ancient-taiga-31359.herokuapp.com/api/houses/${_id}`,
      {
          method: 'DELETE',
      }
    );
    if (response.status === 200) {
      setHouses(
          houses.filter((house) => {
            return house._id !== _id;
          })
      );
    } else {
      return;
    }
  };

  // Post with fetchAPI
  const addHouses = async (name, room) => {
    let response = await fetch('https://ancient-taiga-31359.herokuapp.com/api/houses', {
      method: 'POST',
      body: JSON.stringify({
          name: name,
          room: room,
          // userId: Math.random().toString(36).slice(2),
      }),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
    });
    let data = await response.json();
    setHouses((houses) => [data, ...houses]);
    setName('');
    setRoom('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addHouses(name, room);
  };
 
 return (
    <Container>
    <br></br>
    <h1>The House Place</h1>
    <div className="app">
    <div className="add-post-container">
      <br />
      <form onSubmit={handleSubmit}>
          <input type="text" className="form-control" value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea name="" className="form-control" id="" cols="25" rows="10" 
            value={room} onChange={(e) => setRoom([e.target.value])} 
          ></textarea>
          <br /><br />
          <Button className='btn-success' type="submit">Add House</Button>
      </form>
    </div>
    <div className="posts-container">
          {houses.map((house) => {
              return (

                <Card className="post-card" key={house._id}>
                    <Card.Header>
                    <br></br>
                    <h2 className="post-title">{house.name}</h2>
                    <br></br>
                    </Card.Header>
                    <br></br>
                    <Card.Body className="post-body">
                    {house.rooms?.map(room => {
                      return room.name 
                    })}
                    <br></br>
                    {house.rooms?.map(room => {
                      return room.area
                    })}
                    </Card.Body>
                    <Button className='btn-dark btn-sm post-btn' type='button'>
                      <div className="button">
                        <div className="delete-btn" onClick={() => deleteHouse(house._id)}>
                          Delete
                        </div>
                      </div>    
                    </Button> 
                    <br></br> 
                </Card>

              );
          })}
        </div>
    </div>
    {/* <Features />  -- removed for now to test houses  */ }
    </Container>
    );
};

export default App;