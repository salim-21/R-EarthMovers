// import React, { useState, useEffect } from 'react';
// import './App.css'; // Add the CSS below to this file

// function App() {
//   // State for carousel
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [
//     "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // JCB excavator
//     "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // JCB construction machine (loader)
//     "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Demolition with JCB
//   ];

//   // Auto-slide carousel
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change slide every 3 seconds
//     return () => clearInterval(interval);
//   }, [images.length]);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   // State for navbar toggle
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="landing-page">
//       {/* Navigation Bar with Toggle */}
//       <nav className="navbar">
//         <div className="logo">JCB Construction</div>
//         <div className="hamburger" onClick={toggleMenu}>
//           <span className="bar"></span>
//           <span className="bar"></span>
//           <span className="bar"></span>
//         </div>
//         <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
//           <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
//           <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
//           <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
//           <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
//           <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
//         </ul>
//       </nav>

//       {/* Hero Section */}
//       <header id="home" className="hero-section">
//         <div className="hero-content">
//           <h1>Welcome to JCB Construction Services</h1>
//           <p>Experts in Earth Moving, Demolition, and Heavy Machinery. Building the future with precision and power.</p>
//           <button className="cta-button">Get a Quote</button>
//         </div>
//         <img 
//           src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" // JCB excavator
//           alt="JCB Excavator in Action" 
//           className="hero-image" 
//         />
//       </header>

//       {/* Services Section */}
//       <section id="services" className="services">
//         <h2>Our Services</h2>
//         <div className="services-grid">
//           <div className="service-item">
//             <img 
//               src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" // JCB earth mover/loader
//               alt="JCB Earth Movers Equipment" 
//             />
//             <h3>Earth Moving</h3>
//             <p>We provide top-notch earth moving solutions using advanced JCB machinery for efficient site preparation.</p>
//           </div>
//           <div className="service-item">
//             <img 
//               src="https://images.unsplash.com/02-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" // JCB demolition machine
//               alt="JCB Demolition Work" 
//             />
//             <h3>Demolition</h3>
//             <p>Safe and efficient demolition services for resid
//               ential, commercial, and industrial projects.</p>
//           </div>
//           <div className="service-item">
//             <img 
//               src='https://www.constructionequipmentguide.com/jcb-launches-biggest-x-series-crawler-excavator-with-370x/66141' // JCB heavy machinery
//               alt="JCB Heavy Machinery" 
//             />
//             <h3>Heavy Machinery Rental</h3>
//             <p>Rent our fleet of JCB equipment for your construction needs, with expert operators available.</p>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="about">
//         <h2>About Us</h2>
//         <div className="about-content">
//           <img 
//             src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" // Construction team/site
//             alt="Our Team" 
//             className="about-image"
//           />
//           <div className="about-text">
//             <p>With over 20 years of experience, JCB Construction is your trusted partner for all earth-moving and demolition projects. Our team uses state-of-the-art JCB machinery to deliver results on time and within budget.</p>
//             <ul>
//               <li>Licensed and insured professionals</li>
//               <li>Environmentally friendly practices</li>
//               <li>24/7 support for urgent projects</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section with Carousel */}
//       <section id="projects" className="projects">
//         <h2>Recent Projects</h2>
//         <div className="carousel">
//           <button className="carousel-btn prev" onClick={prevSlide}>&lt;</button>
//           <div className="carousel-container">
//             <img src={images[currentIndex]} alt={`JCB Project ${currentIndex + 1}`} className="carousel-image" />
//           </div>
//           <button className="carousel-btn next" onClick={nextSlide}>&gt;</button>
//         </div>
//         <div className="carousel-indicators">
//           {images.map((_, index) => (
//             <span
//               key={index}
//               className={`indicator ${index === currentIndex ? 'active' : ''}`}
//               onClick={() => setCurrentIndex(index)}
//             ></span>
//           ))}
//         </div>
//         <div className="projects-grid">
//           <div className="project-item">
//             <h4>Urban Site Preparation</h4>
//             <p>Completed earth moving for a new residential complex in the city using JCB excavators.</p>
//           </div>
//           <div className="project-item">
//             <h4>Industrial Demolition</h4>
//             <p>Safely demolished an old warehouse for redevelopment with JCB demolition equipment.</p>
//           </div>
//           <div className="project-item">
//             <h4>Road Construction</h4>
//             <p>Used JCB equipment for grading and paving a new highway section.</p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="contact">
//         <h2>Contact Us</h2>
//         <form className="contact-form">
//           <input type="text" placeholder="Your Name" required />
//           <input type="email" placeholder="Your Email" required />
//           <textarea placeholder="Your Message" required></textarea>
//           <button type="submit">Send Message</button>
//         </form>
//         <div className="contact-info">
//           <p>Phone: (123) 456-7890</p>
//           <p>Email: info@jcbconstruction.com</p>
//           <p>Address: 123 Construction Ave, City, State 12345</p>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer>
//         <p>&copy; 2023 JCB Construction Services. All rights reserved.</p>
//         <div className="social-links">
//           <a href="#">Facebook</a>
//           <a href="#">Twitter</a>
//           <a href="#">LinkedIn</a>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
import "./App.css"; // Ensure you import your styles
import emailjs from "@emailjs/browser";

export default function App() {
  // State for mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  // State for carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // JCB excavator
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // JCB construction machine (loader)
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Demolition with JCB
  ];

  // Auto-slide carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // EmailJS function to send form data
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9hukuio", // Your Service ID (replace with actual)
        "template_8kkqahy", // Your Template ID (replace with actual)
        e.target, // The form data
        "_ssnCmDJ0nIKu8XJ7" // Your Public Key (replace with actual)
      )
      .then(
        (result) => {
          console.log(result.text); // Success message
          alert("Message sent successfully!");
        },
        (error) => {
          console.error(error.text); // Display error
          alert("Failed to send message.");
        }
      );

    e.target.reset(); // Resets the form fields after submission
  };

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">R EarthMovers</div>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <h1>Building Your Dreams To Reality</h1>
        <p>Professional R EarthMovers & JCB Services</p>
        <div className="hero-btns">
          <a href="#contact"><button className="btn">Book Now</button></a>
          <button className="btn outline">View Work</button>
        </div>
        <div className="carousel">
          <button className="carousel-btn prev" onClick={prevSlide}>&lt;</button>
          <div className="carousel-container">
            <img
              src={images[currentIndex]}
              alt={`JCB Project ${currentIndex + 1}`}
              className="carousel-image"
            />
          </div>
          <button className="carousel-btn next" onClick={nextSlide}>&gt;</button>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <h2>Our R EarthMovers Services</h2>
        <div className="service-grid">
          <div className="service">
            <img src="https://t3.ftcdn.net/jpg/16/34/34/16/360_F_1634341673_aY37OBTX8AWoOHFQEhy3EI1eBj1MeNO0.jpg" alt="JCB Excavation work" />
            <h4>JCB Excavation</h4>
          </div>

          <div className="service">
            <img src="https://t3.ftcdn.net/jpg/09/89/25/14/360_F_989251404_aqQRi6zrKX30s3M69ZecK5sKKZKimiEn.jpg" alt="Road Construction" />
            <h4>Road Construction</h4>
          </div>

          <div className="service">
            <img src="https://as2.ftcdn.net/v2/jpg/02/92/28/03/1000_F_292280346_jhRZyIQx3aWllg5CGeRZPSKRKkZBe1ND.jpg" alt="Building Construction" />
            <h4>Building Construction</h4>
          </div>

          <div className="service">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="Commercial Project Site" />
            <h4>Commercial Projects</h4>
          </div>

          <div className="service">
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd" alt="Site Development" />
            <h4>Site Development</h4>
          </div>

          <div className="service">
            <img src="https://img.freepik.com/free-photo/heavy-machinery-used-construction-industry-engineering_23-2151307734.jpg?semt=ais_hybrid&w=740&q=80" alt="Heavy Machinery Work" />
            <h4>Heavy Machinery Work</h4>
          </div>
        </div>
      </section>


      {/* ABOUT */}
      <section className="about" id="about">
        <h2>Trusted R EarthMovers Partner</h2>
        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e" alt="Construction site overview" />
        <div>
          <p>We provide reliable building, road, and JCB construction services.</p>
          <ul>
            <li>✔ Residential & Commercial</li>
            <li>✔ Road Construction</li>
            <li>✔ JCB Excavation</li>
            <li>✔ Renovation</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <p>Phone: +91 9711506540</p>
          <p>Email: choudhurysameer59@gmail.com</p>
          <p>Address: UP Delhi Ave, City</p>
        </div>

        <form onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="phone" placeholder="Your Phone" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button className="btn">Send Message</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer>
        <p>&copy; 2026 JCB Construction Services. All rights reserved.</p>
        <div className="social-links">
<a 
  href="https://www.instagram.com/samir_aashu.5673" 
  target="_blank" 
  rel="noopener noreferrer"
>
  Instagram
</a>
<a 
  href="https://www.instagram.com/samir_aashu.5673" 
  target="_blank" 
  rel="noopener noreferrer"
>
  Facebook
</a>
<a 
  href="https://www.instagram.com/samir_aashu.5673" 
  target="_blank" 
  rel="noopener noreferrer"
>
  LinkedIn
</a>
         
        </div>
      </footer>
    </div>
  );
}



