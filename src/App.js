import { Routes, Route, Outlet, NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Footer from './Components/Footer.js';
import HalfScreenLeadership from './Components/HalfScreenLeadership';
import HalfScreenProjects from './Components/HalfScreenProjects';
import ContactForm from './Components/ContactForm';
import Hero from './Components/Hero';
import OfficeMap from './Components/OfficeMap';
import HeroAbout from './Components/HeroAbout';
import HeroProjects from './Components/HeroProjects';
import NWAGraph from './Components/NWAGraph';
import ADU from './Components/ADU';
import Leadership from './Components/Leadership';
import StatsProject from './Components/StatsProjects';
import {Accordion} from 'react-bootstrap';
import definition from './Assets/definition.png';
import house1 from './Assets/house-1.png';
import house2 from  './Assets/house-2.png';
import house3 from './Assets/house-3.png';
import house4 from './Assets/house-4.png';
import house5 from  './Assets/house-5.png';
import house6 from './Assets/house-6.png';
import house7 from './Assets/house-7.png';
import house8 from  './Assets/house-8.png';
import house9 from './Assets/house-9.png';
import ORDENlogo from './Assets/ORDEN-logo.svg';
import ORDENHardHat from './Assets/ORDEN_HardHat.png';
import interior1 from './Assets/interior-1.png';
import interior2 from './Assets/interior-2.png'
import interior3 from './Assets/interior-3.png'
import interior4 from './Assets/interior-4.jpg';
import interior5 from './Assets/interior-5.jpg';
import interior6 from './Assets/interior-6.jpg';
import interior7 from './Assets/interior-7.jpg';
import interior8 from './Assets/interior-8.jpg';
import interior9 from './Assets/interior-9.jpg';



const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects/>} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Container fluid style={{backgroundImage: `url(${interior4})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
        paddingBottom: '124px',
        }}><h1 className="animate__animated animate__fadeInUp" style={{paddingTop: '200px'}}>
          There's nothing here: <br></br> 404!
        </h1>
        <div>
          <br></br>
        <a href="/" className="btn btn-primary btn-background-slide animate__animated animate__fadeInUp animate__delay-2s" style={{marginTop: '60px'}}>Go back home</a>
        </div>
        </Container>
        } /> 
      </Route>
    </Routes>
  );
};

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-xxxl navbar-light fixed-top bg-white">
        <div className="container" id="nav-custom">
            <a href="/">
            <img
                src={ORDENlogo}
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
                  activeclassname="active"
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
                  activeclassname="active"
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
                  activeclassname="active"
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
                  activeclassname="active"
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
              <h2>Philosophy</h2>
              <br></br>
              <h3>Buildings that solve human problems can last the test of time and retain the most long-term value.</h3>
              <br></br>
              <p><strong>Design and architectural process are paramount in our work. </strong> We will always choose a methodical and well-researched project over a quick build. The key to good business is starting with a good product. </p>
              <br></br>
              <p>Our problem-solving approach is three-pronged: creating accessible high-quality housing downtown, preserving and embracing our natural landscapes and neighborhoods in our designs, and targeting urban development infill over urban sprawl. </p>
            </div>
            <div className="col-sm definition flex">
              <img draggable='false' border="0" alt="" src={definition}/>
            </div>
          </div>
        </div>
    </Container>
    <div className='why-graph-bg'>
    <div className='container why-nwa-graph-container'>
      <div className='row'>
        <div className='col-lg-6 why-nwa-col'>
          <h2>Why Northwest Arkansas?</h2>
          <br></br>
          <p>Northwest Arkansas is ripe with beautiful greenspaces, historic neighborhoods, and a thriving local economy propelled by small businesses, tech startups, and corporate home offices. </p>
          <br></br>
          <ul>
            <li>
            High population growth (2x the national average)
            </li>
            <li>
            Rank in Top 10 Cities by U.S. World Report (6 years in a row)
            </li>
            <li>
            Corporate home offices of Walmart, Tyson, and J.B. Hunt and other Fortune 500 companies
            </li>
            <li>
            Average home value increase of 175% over 5 years (Zillow Average Home Value Index)
            </li>
            <li>
            Beautiful greenspaces, national parks, and bike trail systems
            </li>
            <li>
            Established, walkable neighborhoods and downtown districts
            </li>
            <li>
            Local small business shopping, entertainment, shopping and farmers' markets  
            </li>
            <li>
            University of Arkansas campus
            </li>
            <li>
            Crystal Bridges and The Momentary Museums
            </li>
          </ul>
        </div>
        <div className='col-lg-6 graph-col'>
          <NWAGraph />
        </div>
      </div>
    </div>
    </div>
    <HalfScreenLeadership />
    <HalfScreenProjects />
    <div className='contact-home-bg'>
    <div className='container contact-home-container'>
      <div className='row'>
        <div className='col-lg '>
          <h2>Contact our team</h2>
          <br></br>
        </div>
        <div className='col-sm contact-home-col'>
          <ContactForm />
        </div>
      </div>
    </div>
    </div>
    <Footer />
    </>
  );
};

const About = () => {
  return (
    <>
    <div className='hero-about-bg'>
        <HeroAbout />
    </div>
        <Container>
          <div className='container vision-container'>
            <div className='row'>
              <div className='col-lg-6 vision-text-col'>
                <h2>Vision</h2>
                <br></br>
                <h3>Orden INV is a real estate investment company located in Fayetteville, Arkansas.</h3>
                <br></br>
                <p>Our focus is on providing high-quality residential rental properties on scattered site locations in established neighborhoods. Orden INV focuses on a single project at a time to assure that construction is being executed properly and that overall project schedules are met. The company has a bias towards assembling a portfolio of properties and holding for the long term. All decisions regarding construction methods, interior finishes, and site selection reflect this focus on the long-term viability of their assets.
                <br></br>
                <br></br>Much attention is paid to the elements of residential design that make a meaningful difference in the comfort, security, and enjoyment of the tenants. Interiors are fresh and clean with excellent interior air quality and durable materials. All units feature high ceilings and large windows that capture views and provide abundant natural light. Building exteriors are timeless, durable, and well-proportioned.
                <br></br>
                <br></br>Orden INV provides in-house management that is responsive to tenant needs. The company is strong in design and placement of its sales message and can penetrate the static of the leasing market.</p>
              </div>
              <div className='col-lg-6'>
                <ADU />
              </div>
            </div>
          </div>
          <Leadership />
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
  const [newbedrooms, setNewBedrooms] = useState('');
  const [newbathrooms, setNewBathrooms] = useState('');
  const [newsquarefootage, setNewSquareFootage] = useState('');
  const [newprice, setNewPrice] = useState('');

  // Elevations
  const HouseElevations =[house1, house2, house3, house4, house5, house6, house7, house8, house9];

  let h = 0;

  // Interior Photos
  const HouseInteriors =[interior1, interior2, interior3, interior4, interior5, interior6, interior8, interior7, interior9];

  let i = 0;




  // GET HOUSES
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


  // DELETE 
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


  // PUT 
  const updateHouseStats= async (id) => {
    let response = await fetch(
      `https://62af76fb3bbf46a352228312.mockapi.io/api/houses/${id}`,
      {
        method: 'PUT',
        
        body: JSON.stringify({
          name: newname
          // bedrooms: newbedrooms
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


  // Update BEDROOMS
  const updateBedroomStats= async (id) => {
    let response = await fetch(
      `https://62af76fb3bbf46a352228312.mockapi.io/api/houses/${id}`,
      {
        method: 'PUT',
        
        body: JSON.stringify({
          // name: name,
          bedrooms: newbedrooms
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
    setNewBedrooms('');
  };

  // Update BATHROOMS
  const updateBathroomStats= async (id) => {
    let response = await fetch(
      `https://62af76fb3bbf46a352228312.mockapi.io/api/houses/${id}`,
      {
        method: 'PUT',
        
        body: JSON.stringify({
          // name: name,
          // bedrooms: newbedrooms
          bathrooms: newbathrooms
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
    setNewBathrooms('');
  };


  // Update SQUAREFOOTAGE
  const updateSquareFootageStats= async (id) => {
    let response = await fetch(
      `https://62af76fb3bbf46a352228312.mockapi.io/api/houses/${id}`,
      {
        method: 'PUT',
        
        body: JSON.stringify({
          // name: name,
          // bedrooms: newbedrooms
          // bathrooms: newbathrooms
          squarefootage: newsquarefootage
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
    setNewSquareFootage('');
  };


  // Update PRICE
  const updatePriceStats= async (id) => {
    let response = await fetch(
      `https://62af76fb3bbf46a352228312.mockapi.io/api/houses/${id}`,
      {
        method: 'PUT',
        
        body: JSON.stringify({
          // name: name,
          // bedrooms: newbedrooms
          // bathrooms: newbathrooms
          // squarefootage: newsquarefootage
          price: newprice
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
    setNewPrice('');
  };


  // POST
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

  const updateBedrooms = (value) => {
    setNewBedrooms(value)
  }

  const updateBathrooms = (value) => {
    setNewBathrooms(value)
  }

  const updateSquareFootage = (value) => {
    setNewSquareFootage(value)
  }

  const updatePrice = (value) => {
    setNewPrice(value)
  }

 return (
    <>
    <div className='hero-projects-bg'>
      <HeroProjects />
    </div>
    <Container style={{ paddingTop: '100px'  }} className="project-container ">
    <div className='row project-intro'>
      <h2>Blair Avenue homes</h2>
        <div className='col-lg-6'>
          <br></br>
          <p>Our Blair Avenue project is located on the south face of Mt. Sequoyah. This provides stunning views looking to the south, great privacy (no dwelling units above or below and no common areas), and Mature trees on all sides of the property.
          <br></br><br></br>
          This project features Modern Farmhouse exteriors with lapped siding, board and batten, and metal roofing. The design utilizes clean, bright interiors inspired by Scandinavian minimalism. Each home features square stock interior baseboards and casing, shaker panel wainscoting in bathrooms, and contemporary styled LED light fixtures. Pine floors are used in living and bedroom areas, pine treads on stairs, and porcelain tile in bathrooms.
          <br></br><br></br>
          The property is close in proximity to the downtown Fayetteville Square, Walker Park, Razorback Greenway bike trail system, University of Arkansas, Fayetteville High School, and the Arts and Entertainment District.</p>
          </div>
        <div className='col-lg-6 blair-map-col'>
          <img className='blair-map'></img>
        </div>
    </div>


    <br></br>
    <div className="app">
    <h5>Create a new listing</h5>
    <div className="add-post-container">
      <br />
      <form onSubmit={handleSubmit}>

        <div className="add-post-container form-floating mb-3">
          <input type="text" required className="form-control" placeholder="House name" value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="floatingInput">House name</label>
        </div>

        <div className="add-post-container form-floating mb-3">  
          <input type="text" required className="form-control" placeholder="Number of bedrooms"value={bedrooms}
            onChange={(e) => setBedRooms(e.target.value)}
          />
          <label htmlFor="floatingInput">Number of bedrooms</label>
        </div>

        <div className="add-post-container form-floating mb-3">
          <input type="text" required className="form-control" placeholder="Number of bathrooms"value={bathrooms}
            onChange={(e) => setBathRooms(e.target.value)}
          />
          <label htmlFor="floatingInput">Number of bathrooms</label>
        </div>

        <div className="add-post-container form-floating mb-3">
          <input type="text" required className="form-control" placeholder="Square footage" value={squarefootage}
            onChange={(e) => setSquareFootage(e.target.value)}
          />
          <label htmlFor="floatingInput">Square footage</label>
        </div>

        <div className="add-post-container form-floating mb-3">
          <input type="text" required className="form-control" placeholder="Rent" value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label htmlFor="floatingInput">Rent</label>
        </div>
        
        <Button className='btn-success btn-background-slide' type="submit">Add House</Button>
      </form>
    </div>
    <div className="posts-container">
          {houses.map((house) => {
              return (

                <Card className="post-card" key={house.id}>
                    <Card.Header>
                          <div className='image-card-bg'  style={{ 
                            backgroundImage: `url(${HouseInteriors[i++]})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat' 
                            }}>
                          </div>
                    </Card.Header>
                    <br></br>
                    <Card.Body className="post-body">
                    <br></br>
                    <h2 className="post-title">{house.name}</h2>
                    <br></br>
                    <div className='row'>
                      <div className='col house-stats'>
                        <div>
                          <ul className='house-stat-list'>
                              <li>
                                {house.bedrooms} Bed
                              </li>
                              <li>
                              {house.bathrooms} Bath
                              </li>
                              <li className='square-footage-text'>
                              {house.squarefootage} Sq Ft
                              </li>
                              <li>
                              ${house.price}
                              </li>
                            </ul>
                        </div>
                      </div>
                      <div className='col elevations-col'>
                        <div>
                          <img src={HouseElevations[h++]} className='house-elevation'/>
                        </div>
                      </div>  
                    </div>
                    </Card.Body>
                    <br></br> 
                    <Card.Footer>
                      <div>
                      <Accordion>
                        <Accordion.Item eventKey="0">
                        <Accordion.Header>Edit details</Accordion.Header>
                         <Accordion.Body>
                            <br></br>
                            <h5>Update Features</h5>
                            <br></br>
                            
                              <input id="update-name" value={newname} type="text" required className="form-control" placeholder="Update name"
                              onChange={(e) => updateName(e.target.value)}
                              />
                            
                            <br></br> 
                            <Button className='btn-dark btn-sm btn-background-slide' onClick={() => updateHouseStats(house.id)}>Change</Button>
                            <br></br> 

                            {/* BEDROOMS UPDATING */}
                            <br></br>
                            <input id="update-bedrooms" value={newbedrooms} type="text" required className="form-control" placeholder="Update bedrooms"
                            onChange={(e) => updateBedrooms(e.target.value)}
                            />
                            <br></br> 
                            <Button className='btn-dark btn-sm btn-background-slide' onClick={() => updateBedroomStats(house.id)}>Change</Button>
                            <br></br> 


                            {/* BATHROOMS UPDATING */}
                            <br></br>
                            <input id="update-bathrooms" value={newbathrooms} type="text" required className="form-control" placeholder="Update Bathrooms"
                            onChange={(e) => updateBathrooms(e.target.value)}
                            />
                            <br></br> 
                            <Button className='btn-dark btn-sm btn-background-slide' onClick={() => updateBathroomStats(house.id)}>Change</Button>
                            <br></br>


                            {/* SQUAREFOOTAGE UPDATING */}
                            <br></br>
                            <input id="update-squarefootage" value={newsquarefootage} type="text" required className="form-control" placeholder="Update square footage"
                            onChange={(e) => updateSquareFootage(e.target.value)}
                            />
                            <br></br> 
                            <Button className='btn-dark btn-sm btn-background-slide' onClick={() => updateSquareFootageStats(house.id)}>Change</Button>
                            <br></br>

                            {/* PRICE UPDATING */}
                            <br></br>
                            <input id="update-price" value={newprice} type="text" required className="form-control" placeholder="Update price"
                            onChange={(e) => updatePrice(e.target.value)}
                            />
                            <br></br> 
                            <Button className='btn-dark btn-sm btn-background-slide' onClick={() => updatePriceStats(house.id)}>Change</Button>
                            <br></br>


                            {/* DELETE HOUSE */}
                            <br></br>
                            <br></br>
                            <h5>Delete House</h5>
                          
                            <Button className='btn-dark btn-sm post-btn btn-background-slide delete-btn' type='button' onClick={() => deleteHouse(house.id)}>
                              
                            Delete house
                        
                            </Button> 
                            <br></br>
                            <br></br>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                    </Card.Footer>
                </Card>
              );
          })}
        </div>
    </div>
    {/* <StatsProject /> */}
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
            <img src={ORDENHardHat} alt="a construction hard hat with the Orden house logomark on the front"/>
          </div>
        </div>
        <div className='row info-map-row'>
          <div className='col-sm  contact-info-container' >
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