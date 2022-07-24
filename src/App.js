import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Features from './Components/Features.js'
import Nav from './Components/Nav.js';
import Footer from './Components/Footer.js';



const App = () => {

  const [houses, setHouses] = useState([]);
  const [name, setName] = useState('');
  const [bedrooms, setBedRooms] = useState('');
  const [bathrooms, setBathRooms] = useState('');
  const [squarefootage, setSquareFootage] = useState('');
  const [price, setPrice] = useState('');
  const [newname, setNewName] = useState('');

  // GET with fetch API // GET HOUSES
  useEffect(() => {
    const fetchHouse = async () => {
      const response = await fetch(
          'https://62af76fb3bbf46a352228312.mockapi.io/api/houses'
      );
      const data = await response.json();
      console.log(data);
      setHouses(data);
    };
    fetchHouse();
  }, []);


  // Delete with fetchAPI
  const deleteHouse = async (id) => {
    let response = await fetch(
      `https://62af76fb3bbf46a352228312.mockapi.io/api/houses/${id}`,
      {
          method: 'DELETE',
      }
    );
    if (response.status === 200) {
      setHouses(
          houses.filter((house) => {
            return house.id !== id;
          })
      );
    } else {
      return;
    }
  };


  //PUT 
  const updateHouseStats= async (id) => {
    let response = await fetch(
      `https://62af76fb3bbf46a352228312.mockapi.io/api/houses/${id}`,
      {
        method: 'PUT',
        
        body: JSON.stringify({
          name: newname
          // bedrooms: 'bedrooms',
          // bathrooms:
          // squarefootage:
          // price: 
        }),

        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },  
      }
    );
    
    const fetchHouse = async () => {
      const response = await fetch(
          'https://62af76fb3bbf46a352228312.mockapi.io/api/houses'
      );
      const data = await response.json();
      console.log(data);
      setHouses(data);
    };
    fetchHouse();
    setNewName('');
  };



  // Post with fetchAPI
  const addHouses = async (name, bedrooms, bathrooms, squarefootage, price) => {
    let response = await fetch('https://62af76fb3bbf46a352228312.mockapi.io/api/houses', {
      method: 'POST',
      body: JSON.stringify({
          name: name,
          bedrooms: bedrooms,
          bathrooms: bathrooms,
          squarefootage: squarefootage,
          price: price,
      }),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
    });
    let data = await response.json();
    setHouses((houses) => [data, ...houses]);
    setName('');
    setBedRooms('');
    setBathRooms('');
    setSquareFootage('');
    setPrice('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addHouses(name, bedrooms, bathrooms, squarefootage, price);
  };
 
  const updateName = (value) => {
    setNewName(value)
  }

 return (
    <>
    <Container>
    <Nav />
    <br></br>
    <h1>The House Place</h1>
    <div className="app">
    <div className="add-post-container">
      <br />
      <form onSubmit={handleSubmit}>
          <input type="text" required className="form-control" value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input type="text" required className="form-control" value={bedrooms}
            onChange={(e) => setBedRooms(e.target.value)}
          />
          <input type="text" required className="form-control" value={bathrooms}
            onChange={(e) => setBathRooms(e.target.value)}
          />
          <input type="text" required className="form-control" value={squarefootage}
            onChange={(e) => setSquareFootage(e.target.value)}
          />
          <input type="text" required className="form-control" value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br /><br />
          <Button className='btn-success' type="submit">Add House</Button>
      </form>
    </div>
    <div className="posts-container">
          {houses.map((house) => {
              return (

                <Card className="post-card" key={house.id}>
                    <Card.Header>
                    <br></br>
                    <h2 className="post-title">{house.name}</h2>
                    <br></br>
                    </Card.Header>
                    <br></br>
                    <Card.Body className="post-body">
                    {/* <div>
                    {house.bedrooms} Bed
                    </div>
                    <div>
                    {house.bathrooms} Bath
                    </div>
                    <div>
                    {house.squarefootage} Sq Ft
                    </div>
                    <div>
                    ${house.price}
                    </div> */}
                    <div>
                      <ul>
                          <li>
                            {house.bedrooms} Bed
                          </li>
                          <li>
                          {house.bathrooms} Bath
                          </li>
                          <li>
                          {house.squarefootage} Sq Ft
                          </li>
                          <li>
                          ${house.price}
                          </li>
                        </ul>
                    </div>
                    </Card.Body>
                    <Button className='btn-dark btn-sm post-btn' type='button'>
                      <div className="button">
                        <div className="delete-btn" onClick={() => deleteHouse(house.id)}>
                          Delete
                        </div>
                      </div>    
                    </Button> 
                    <br></br> 

                    <Card.Footer>
                      <div>
                      <br></br>
                      <h4>Update Features</h4>
                      <br></br>
                      <input id="update-name" value={newname} type="text" required className="form-control" 
                      onChange={(e) => updateName(e.target.value)}
                      />
                      <br></br> 
                      <Button className='btn-dark btn-sm' onClick={() => updateHouseStats(house.id)}>Change</Button>
                      <br></br> 
                      <br></br> 
                    </div>
                    <div>

                    </div>
                    </Card.Footer>
                </Card>
              );
          })}
        </div>
    </div>
    {/* <Features />  -- removed for now to test houses  */ }

    
    </Container>
    <Footer />
    </>
    );
};

export default App;