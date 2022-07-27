import { Routes, Route, Outlet, NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from './Components/Nav.js';
import Footer from './Components/Footer.js';
import HalfScreenLeadership from './Components/HalfScreenLeadership';
import HalfScreenProjects from './Components/HalfScreenProjects';
import ContactForm from './Components/ContactForm';
import Hero from './Components/Hero';
import FiftySplit from './Components/FiftySplit';
import OfficeMap from './Components/OfficeMap';


const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects/>} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Route>
    </Routes>
  );
};

const Layout = () => {
  // const style = ({ isActive }) => ({
  //   fontWeight: isActive ? 'bold' : 'normal',
  // });

  return (
    <>
      <nav className="navbar navbar-expand-xxxl navbar-light fixed-top bg-white">
        <div className="container" id="nav-custom">
            <a href="/">
            <img
                src="images/ORDEN-logo.svg"
                className="logo"
                style={{ maxHeight: 60, height: 60 }}
                alt="ORDEN INV Logo"
            />
            </a>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon" />
            </button>
            <div 
                  data-toggle="collapse"
                  data-target="#navbarCollapse"
            className="collapse navbar-collapse" id="navbarCollapse">
            <br />
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <NavLink 
                  data-toggle="collapse"
                  data-target="#navbarCollapse"
                  className="nav-link"
                  activeClassName="active"
                  to="/" 
                  onClick={'data-bs-target="#navbarCollapse"'}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink 
                  data-toggle="collapse"
                  data-target="#navbarCollapse"
                  className="nav-link"
                  activeClassName="active"
                  to="/about" 
                  onClick={'data-bs-target="#navbarCollapse"'}
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink 
                  data-toggle="collapse"
                  data-target="#navbarCollapse"
                  className="nav-link"
                  activeClassName="active"
                  to="/projects" 
                  onClick={'data-bs-target="#navbarCollapse"'}
                  >
                    Projects
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink 
                  data-toggle="collapse"
                  data-target="#navbarCollapse"
                  className="nav-link"
                  activeClassName="active"
                  to="/contact" 
                  onClick={'data-bs-target="#navbarCollapse"'}>
                  Contact
                </NavLink>
                </li>
            </ul>
            </div>
        </div>
        </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

const Home = () => {
  return (
    <>
    <div className='hero-bg'>
    <Hero />
    </div>
    <Container>
      
        <div className="container philosophy">
          <div className="row align-items-start">
            <div className="col-sm philosophy-text">
              <h2>Our philosophy</h2>
              <br></br>
              <p><strong>Amet, consectetuer adipiscing Lorem eorem ipsum dolor sit amet, laoreet dolore magna aliquam volutpat.</strong> Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim nostrud exerci tation ullamcorper suscipit  nisl ut aliquip ex ea commodo consequat. </p>
              <br></br>
              <p>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim nostrud exerci tation ullamcorper suscipit  nisl ut aliquip ex ea commodo consequat. </p>
            </div>
            <div className="col-sm definition flex">
              <img draggable='false' border="0" src='./images/definition.png'/>
            </div>
          </div>
        </div>

        
    </Container>
    <HalfScreenLeadership />

    <HalfScreenProjects />

    {/* <FiftySplit /> */}

    <Footer />
    </>
  );
};

const About = () => {
  return (
    <>
      <Container   
      >
        <div className='about-container contianer'>
          <h2 style={{ marginTop: '200px', marginBottom: '100px' }}>About</h2>
        </div>
      </Container>
    <Footer />
    </>
  );
};

const Projects = () => {
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
    <Container style={{ paddingTop: '100px'  }} >

    <br></br>
    <h1>Projects</h1>
    <div className="app">
    <div className="add-post-container">
      <br />
      <form onSubmit={handleSubmit}>
        <div className="add-post-container form-floating mb-3">
          <input type="text" required className="form-control" placeholder="House name" value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label for="floatingInput">House name</label>
        </div>

        <div className="add-post-container form-floating mb-3">  
          <input type="text" required className="form-control" placeholder="Number of bedrooms"value={bedrooms}
            onChange={(e) => setBedRooms(e.target.value)}
          />
          <label for="floatingInput">Number of bedrooms</label>
        </div>

        <div className="add-post-container form-floating mb-3">
          <input type="text" required className="form-control" placeholder="Number of bathrooms"value={bathrooms}
            onChange={(e) => setBathRooms(e.target.value)}
          />
          <label for="floatingInput">Number of bathrooms</label>
        </div>

        <div className="add-post-container form-floating mb-3">
          <input type="text" required className="form-control" placeholder="Square footage" value={squarefootage}
            onChange={(e) => setSquareFootage(e.target.value)}
          />
          <label for="floatingInput">Square footage</label>
        </div>

        <div className="add-post-container form-floating mb-3">
          <input type="text" required className="form-control" placeholder="Rent" value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label for="floatingInput">Rent</label>
        </div>
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
                      <h5>Update Features</h5>
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

const Contact = () => {
  return (
    <>
      <Container>
        <div className='contianer contact-container'>
        <div className='row contact-row'>
          <div className='col'>
            <h2 style={{ marginTop: '200px' }}>Contact</h2>
            <br></br>
            <h3 >Feel free to reach out with a general inquiry or a specific project or investment you’d like to discuss.</h3>
            <h6 style={{ marginBottom: '60px' }}>Please direct press and media request to ordeninv@gmail.com</h6>
            <ContactForm />
          </div>
          <div className='col hard-hat'>
            <img src='./images/ORDEN_HardHat.png' />
          </div>
        </div>
        <div className='row info-map-row'>
          <div className='col-sm' >
          <h3>Contact info</h3><br></br>
            <div className='row contact-info-row'>
            <div className='col-sm contact-info'> 
              <ul>
                <li>
                Rob Sharp<br></br>
                rob@sharparch.net<br></br>
                479 442 0229
                </li>
                <li>
                Press inquiries<br></br>
                ordeninv@gmail.com
                </li>
              </ul>
            </div>
            <div className='col-sm contact-info'>
              <ul>
                <li>
                100 W. Center Street<br></br>
                Suite 300<br></br>
                Fayetteville, Arkansas<br></br>
                72701
                </li>
              </ul>
            </div>
            </div>
            <br></br>
          </div>
          <div className='col-sm map-holder' >
            <OfficeMap />
          </div>
        </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default App;