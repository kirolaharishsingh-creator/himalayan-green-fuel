import "./App.css";
import { Folder } from "lucide-react";

import { galleryData } from "./galleryData";
import {
  Trees,
  Factory,
  Flame,
  TrendingUp,
  Users,
  Recycle,
  Zap,
  Globe,
  Truck,
  Cog,
  BadgeCheck
} from "lucide-react";

import { useState } from "react";

function App() {
  const [activeGallery, setActiveGallery] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  const processSteps = [

    {
      id: "01",
      title: "Collection",
      icon: <Trees size={28} />,
      image: "/gallery/collection.png",
      description:
        "Pine needles are sustainably collected from nearby forests by local Self Help Groups."
    },

    {
      id: "02",
      title: "Transportation",
      icon: <Truck size={28} />,
      image: "/gallery/transport.png",
      description:
        "Collected pine needles are transported to our manufacturing facility."
    },

    {
      id: "03",
      title: "Cleaning & Drying",
      icon: <Factory size={28} />,
      image: "/gallery/cleaning.png",
      description:
        "Raw material is cleaned and dried before pellet production."
    },

    {
      id: "04",
      title: "Pellet Manufacturing",
      icon: <Cog size={28} />,
      image: "/gallery/3.png",
      description:
        "Biomass is compressed into high-density pellets."
    },

    {
      id: "05",
      title: "Quality Testing",
      icon: <BadgeCheck size={28} />,
      image: "/gallery/testing.jpeg",
      description:
        "Each batch is tested before dispatch."
    },

    {
      id: "06",
      title: "Clean Energy",
      icon: <Flame size={28} />,
      image: "/gallery/pelletizing.png",
      description:
        "Finished pellets replace coal and fossil fuels."
    }

  ];

  const [activeProcess, setActiveProcess] = useState(processSteps[0]);
  const [showVideo, setShowVideo] = useState(false);
  
  const galleries = {

  inauguration: [
    "/gallery/inauguration/1.jpeg",
    "/gallery/inauguration/2.jpeg",
    "/gallery/inauguration/3.jpeg",
    "/gallery/inauguration/4.jpeg",
    "/gallery/inauguration/5.jpeg",
    "/gallery/inauguration/6.jpeg",
  ],

  plant: [
    "/gallery/plant/1.png",
    "/gallery/plant/2.png",
    "/gallery/plant/3.jpg",
    "/gallery/plant/4.png",
    "/gallery/plant/5.png",
    "/gallery/plant/6.png",
  ],

  events: [
    "/gallery/events/1.jpg",
    "/gallery/events/2.jpg",
    "/gallery/events/3.jpg",
  ],

  shg: [
    "/gallery/shg/1.jpg",
    "/gallery/shg/2.jpeg",
    "/gallery/shg/3.jpeg",
    "/gallery/shg/4.jpeg",
    "/gallery/shg/5.jpeg",
    "/gallery/shg/6.jpeg",
  ]

};

const photos = [

  "/gallery/gallery1.jpeg",
  "/gallery/gallery2.jpeg",
  "/gallery/gallery3.jpeg",
  "/gallery/gallery4.jpeg",
  "/gallery/gallery5.jpeg",
  "/gallery/gallery6.jpeg",
  "/gallery/gallery7.jpeg",
  "/gallery/gallery8.jpeg"

]; 

const plantVideo =
  "https://youtu.be/eibS_CytZzc?si=j3d2TuOehE4wcIuJ";

const handleContactSubmit = (e) => {

  e.preventDefault();

  const form = e.target;

  const name = form.name.value;
  const email = form.email.value;
  const phone = form.phone.value;
  const company = form.company.value;
  const message = form.message.value;

  const subject = "Inquiry from Himalayan Green Fuel Website";

  const body = `
Name: ${name}

Email: ${email}

Phone: ${phone}

Company: ${company}

Message:

${message}
`;

  window.location.href =
    `mailto:xuttarakhand@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

};

const openGallery = (gallery) => {

  console.log("Opening:", gallery);

  setGalleryImages(galleries[gallery]);

  setCurrentImage(0);

  setGalleryOpen(true);

};

return (
    <>
      <header className="header">

  <div className="container">

    <div className="header-wrapper">

      {/* Brand */}

      <a href="#home" className="header-brand">

  <img
    src="/logo.png"
    alt="Himalayan Green Fuel"
    className="header-logo"
  />

  <div className="header-info">
    <h2>Himalayan Green Fuel LLP</h2>
  </div>

</a>

      {/* Mobile Button */}

      <button
        className="header-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Navigation */}

      <nav className={`header-nav ${menuOpen ? "open" : ""}`}>

        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>

        <a href="#product" onClick={() => setMenuOpen(false)}>
          Product
        </a>

        <a href="#manufacturing" onClick={() => setMenuOpen(false)}>
          Process
        </a>

        <a href="#gallery" onClick={() => setMenuOpen(false)}>
          Gallery
        </a>

        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>

      </nav>

    </div>

  </div>

</header>

{/* ==========================================
   HERO
========================================== */}

<section id="home" className="hero">

  <div className="container">

    <div className="hero-wrapper">

      <div className="hero-content">

        <h1 className="hero-title">
          Reducing Forest Fires.
          <br />
          Delivering Renewable Fuel.
        </h1>

        <p className="hero-description">
          Premium biomass pellets manufactured in Uttarakhand for boilers,
          furnaces and industrial energy applications.
        </p>

        <div className="hero-buttons">

          <a
            href="mailto:himalayangreenfuel@gmail.com"
            className="primary-btn"
          >
            Request Quote
          </a>

          <a
            href="#plant-tour"
            className="secondary-btn"
          >
            View Plant
          </a>

        </div>

      </div>

    </div>

  </div>

</section>

<section className="stats">

  <div className="container">
     <div className="section-heading">
  <div className="section-tag">
    KEY HIGHLIGHTS
  </div>

  <h2 className="section-title">
    Production Capacity & Sustainability Impact
  </h2>

  <div className="section-line"></div>
</div>

    <div className="stats-grid">

      <div className="stat-card">
  <div className="stat-icon">
    <Factory size={32} strokeWidth={2} />
  </div>

  <div className="stat-content">
    <h3>1.5 TPH</h3>
    <p>Production Capacity</p>
  </div>
</div>

     <div className="stat-card">
  <div className="stat-icon">
    <Flame size={32} strokeWidth={2} />
  </div>

  <div className="stat-content">
    <h3>4603</h3>
    <p>Kcal/kg GCV</p>
  </div>
</div>

<div className="stat-card">
  <div className="stat-icon">
    <TrendingUp size={32} strokeWidth={2} />
  </div>

<div className="stat-content">
    <h3>5616 MT</h3>
    <p>Annual Capacity</p>
  </div>
</div>

<div className="stat-card">
  <div className="stat-icon">
    <Users size={32} strokeWidth={2} />
  </div>
  
<div className="stat-content">
    <h3>30+</h3>
    <p>SHGs Engaged</p>
  </div>
</div>

    </div>

  </div>

</section>

<section id="about" className="about-section">
  <div className="container">

    <div className="about-layout">

    <div className="about-bg">
          <img
            src="/gallery/5.png"
            alt="Factory"
          />
        </div>

      {/* LEFT IMAGE */}

      <div className="about-image">
        <img
          src="/gallery/machine.png"
          alt="Biomass Pellet Plant"
        />
      </div>

      {/* RIGHT CONTENT */}

      <div className="about-content">

        <div className="about-tag">
          ABOUT US
        </div>

        <h2>
          Converting Forest Waste Into
          Clean Industrial Energy
        </h2>

        <div className="about-line"></div>

        <p>
          Himalayan Green Fuel LLP is a biomass pellet manufacturing
          company based in Someshwar, Almora, Uttarakhand.
        </p>

        <p>
          We transform pine needles into high-quality industrial fuel
          pellets, helping industries reduce fossil fuel dependence
          while mitigating forest fire risks and generating sustainable
          livelihoods for rural communities.
        </p>

      </div>

    </div>

  </div>
</section>

<section className="esg-section">
  <div className="container">

    <div className="esg-layout">

      {/* LEFT SIDE CARDS */}

      <div className="esg-cards">

        <div className="esg-card">
          <div className="icon-circle">
            <Trees size={34} strokeWidth={2} />
          </div>

          <div className="esg-card-content">
            <h3>Forest Fire Mitigation</h3>
            <span></span>
            <p>
              Reducing combustible pine needle
              accumulation across forest landscapes.
            </p>
          </div>
        </div>

        <div className="esg-card">
          <div className="icon-circle">
            <Users size={34} strokeWidth={2} />
          </div>

          <div className="esg-card-content">
            <h3>Rural Employment</h3>
            <span></span>
            <p>
              Generating sustainable income
              opportunities through Self Help Groups.
            </p>
          </div>
        </div>

        <div className="esg-card">
          <div className="icon-circle">
            <Recycle size={34} strokeWidth={2} />
          </div>

          <div className="esg-card-content">
            <h3>Circular Economy Loop</h3>
            <span></span>
            <p>
              Converting forest waste into
              valuable industrial fuel.
            </p>
          </div>
        </div>

        <div className="esg-card">
          <div className="icon-circle">
            <Zap size={34} strokeWidth={2} />
          </div>

          <div className="esg-card-content">
            <h3>Renewable Energy Replacement</h3>
            <span></span>
            <p>
              Reducing dependency on coal and fossil fuels.
            </p>
          </div>
        </div>

        <div className="esg-card esg-card-wide">
          <div className="icon-circle">
            <Globe size={34} strokeWidth={2} />
          </div>

          <div className="esg-card-content">
            <h3>Carbon Emission Reduction</h3>
            <span></span>
            <p>
              Committed to reducing carbon emissions through the production of sustainable pine needle biomass pellets. We create environmental impact while advancing a circular economy.
            </p>
          </div>
        </div>

      </div>

      {/* RIGHT SIDE SHOWCASE */}

      <div className="esg-showcase">

        <img
          src="/gallery/6.jpg"
          alt="Environmental Impact"
          className="esg-bg"
        />

        <div className="esg-overlay"></div>

        <div className="esg-content">

          <div className="esg-tag">
            ENVIRONMENTAL & ESG IMPACT
          </div>

          <h2>
            Creating Measurable
            <br />
            Environmental and
            <br />
            Social Impact
          </h2>

          <div className="esg-line"></div>

          <p>
            Our pine needle collection model not only creates
            renewable industrial fuel but also reduces forest fire
            hazards, strengthens rural livelihoods, promotes
            circular resource utilization, and supports India's
            transition toward sustainable energy.
          </p>

        </div>

      </div>

    </div>

  </div>
</section>

<section id="product"className="product-section">

  <div className="container">

    <div className="product-layout">

      {/* LEFT IMAGE */}

      <div className="product-image">
        <img
          src="/gallery/pine-needle-bg.png"
          alt="Pine Needle Biomass Pellets"
        />
      </div>

      {/* RIGHT CONTENT */}

      <div className="product-content">

        <div className="product-tag">
          PRODUCT
        </div>

        <h2>
          Pine Needle Biomass Pellets
        </h2>

        <div className="product-line"></div>

        <p>
          Manufactured from sustainably collected pine needles,
          our biomass pellets provide a cleaner alternative to
          conventional fossil fuels. With high calorific value,
          low moisture content and low ash generation, they are
          ideal for industrial boilers, furnaces and thermal
          energy applications.
        </p>

        <div className="product-spec-grid">

          <div className="product-spec-card">
            <h3>4603</h3>
            <span>Kcal/kg GCV</span>
          </div>

          <div className="product-spec-card">
            <h3>5.3%</h3>
            <span>Moisture Content</span>
          </div>

          <div className="product-spec-card">
            <h3>3.1%</h3>
            <span>Ash Content</span>
          </div>

          <div className="product-spec-card">
            <h3>6mm & 8mm</h3>
            <span>Available Sizes</span>
          </div>

        </div>

      </div>

    </div>

  </div>


</section>

{/* ===========================
MANUFACTURING PROCESS
=========================== */}

<section 
id="manufacturing"
  className="process-section">

  <div className="container">

    <div className="section-heading">

      <div className="section-tag">
        HOW WE WORK
      </div>

      <h2 className="section-title">
        Manufacturing Process
      </h2>

      <p className="process-subtitle">
        From Forest to Sustainable Energy
      </p>

    </div>

    {/* Process Navigation */}

    <div className="process-navigation">

      {processSteps.map((step) => (

        <div
          key={step.id}
          className={`process-item ${
            activeProcess.id === step.id ? "active" : ""
          }`}
          onMouseEnter={() => setActiveProcess(step)}
        >

          <div className="process-icon">

            {step.icon}

          </div>

          <div className="process-text">

            <span className="process-number">
              {step.id}
            </span>

            <h4>
              {step.title}
            </h4>

          </div>

        </div>

      ))}

    </div>

    {/* Dynamic Image */}

    <div className="process-showcase">

      <div className="process-image">

        <img
          src={activeProcess.image}
          alt={activeProcess.title}
        />

        <div className="process-overlay">

          <span>

            STEP {activeProcess.id}

          </span>

          <h3>

            {activeProcess.title}

          </h3>

          <p>

            {activeProcess.description}

          </p>

        </div>

      </div>

    </div>

  </div>

</section>

{/* ==========================================
   GALLERY
========================================== */}

<section id="gallery" className="gallery-section">

  <div className="container">

    <div className="section-heading">

      <div className="section-tag">
        GALLERY
      </div>

      <h2 className="section-title">
        Media Center
      </h2>

    </div>

    <div className="gallery-folders">

      {/* Inauguration */}

      <div
        className="gallery-folder"
        onClick={() => openGallery("inauguration")}
      >
        <div className="folder-icon">📁</div>
        <h3>Inauguration</h3>
      </div>

      {/* Plant */}

      <div
  className={`gallery-folder ${
    activeGallery === "plant" ? "active" : ""
  }`}
  onClick={() => openGallery("plant")}
>
        <div className="folder-icon">📁</div>
        <h3>Plant</h3>
      </div>

      {/* Events */}

      <div
        className="gallery-folder"
        onClick={() => openGallery("events")}
      >
        <div className="folder-icon">📁</div>
        <h3>Events</h3>
      </div>

      {/* SHG */}

      <div
        className="gallery-folder"
        onClick={() => openGallery("shg")}
      >
        <div className="folder-icon">📁</div>
        <h3>Self Help Groups (SHG)</h3>
      </div>

    </div>

    {/* ===============================
        INAUGURATION IMAGES
    ================================ */}

    {activeGallery === "inauguration" && (

      <div id="gallery-images" className="gallery-images">

        <img src="/gallery/inauguration/1.jpeg" alt="" />
        <img src="/gallery/inauguration/2.jpeg" alt="" />
        <img src="/gallery/inauguration/3.jpeg" alt="" />
        <img src="/gallery/inauguration/4.jpeg" alt="" />
        <img src="/gallery/inauguration/5.jpeg" alt="" />
        <img src="/gallery/inauguration/6.jpeg" alt="" />

      </div>

    )}

    {/* ===============================
        PLANT IMAGES
    ================================ */}

    {activeGallery === "plant" && (

      <div id="gallery-images" className="gallery-images">

        <img src="/gallery/plant/1.png" alt="" />
        <img src="/gallery/plant/2.png" alt="" />
        <img src="/gallery/plant/3.jpg" alt="" />
        <img src="/gallery/plant/4.png" alt="" />
        <img src="/gallery/plant/5.png" alt="" />
        <img src="/gallery/plant/6.png" alt="" />
      </div>

    )}

    {/* ===============================
        EVENT IMAGES
    ================================ */}

    {activeGallery === "events" && (

      <div id="gallery-images" className="gallery-images">

        <img src="/gallery/events/1.jpg" alt="" />
        <img src="/gallery/events/2.jpg" alt="" />
        <img src="/gallery/events/3.jpg" alt="" />

      </div>

    )}

    {/* ===============================
        SHG IMAGES
    ================================ */}

    {activeGallery === "shg" && (

      <div id="gallery-images" className="gallery-images">

        <img src="/gallery/shg/1.jpg" alt="" />
        <img src="/gallery/shg/2.jpeg" alt="" />
        <img src="/gallery/shg/3.jpeg" alt="" />
        <img src="/gallery/shg/4.jpeg" alt="" />
        <img src="/gallery/shg/5.jpeg" alt="" />
        <img src="/gallery/shg/6.jpeg" alt="" />
      </div>

    )}

  </div>

</section>

{/* =========================
        PLANT TOUR
========================= */}

<section id="plant-tour" className="plant-tour-section">

  <div className="container">

    <div className="section-heading">

      <div className="section-tag">
        PLANT TOUR
      </div>

      <h2 className="section-title">
        Experience Our Manufacturing Facility
      </h2>

    </div>

    <div
      className="plant-video-card"
      onClick={() => setShowVideo(true)}
    >

      <img
        src="/gallery/plant-tour.png"
        alt="Plant Tour"
      />

      <div className="plant-overlay">

        <div className="play-circle">
          ▶
        </div>

      </div>

    </div>

  </div>

</section>

{showVideo && (

<div
    className="video-modal"
    onClick={() => setShowVideo(false)}
>

<div
    className="video-content"
    onClick={(e)=>e.stopPropagation()}
>

<button
className="close-video"
onClick={()=>setShowVideo(false)}
>

✕

</button>

<iframe

width="100%"

height="100%"

src="https://www.youtube.com/embed/eibS_CytZzc?autoplay=1"

title="Plant Tour"

allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

allowFullScreen

></iframe>

</div>

</div>

)}

{/* ===========================
        CONTACT
=========================== */}

<section id="contact" className="contact-section">

  <div className="container">

    <div className="section-heading">

      <div className="section-tag">
        CONTACT US
      </div>

      <h2 className="section-title">
        Let's Build a Greener Future
      </h2>

    </div>

    <div className="contact-wrapper">

      {/* LEFT */}

      <div className="contact-info">

        <div className="contact-card">

          <h3>📍 Factory Address</h3>

          <p>
            Himalayan Green Fuel LLP
            <br />
            Gram – Bamnigaad
            <br />
            Post – Manan
            <br />
            Tehsil – Someshwar
            <br />
            District – Almora
            <br />
            Uttarakhand – 263638
            <br />
            India
          </p>

        </div>

        <div className="contact-card">

          <h3>☎ Call Us</h3>

          <p>
            +91 99900 15363
          </p>

        </div>

        <div className="contact-card">

          <h3>✉ Email</h3>

          <p>
            himalayangreenfuel@gmail.com
          </p>

        </div>

      </div>

      {/* RIGHT */}

      <form
  className="contact-form"
  onSubmit={handleContactSubmit}
>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
        />

        <input
          type="text"
          name="company"
          placeholder="Company Name"
        />

        <textarea
          rows="6"
          name="message"
          placeholder="Write your message..."
        ></textarea>

        <button type="submit">

          Send Your Inquiry

        </button>

      </form>

    </div>

  </div>

</section>

{/* ===========================
        GOOGLE MAP
=========================== */}

<section className="map-section">

  <div className="container">

    <div className="section-heading">

      <div className="section-tag">
        OUR LOCATION
      </div>

      <h2 className="section-title">
        Visit Our Manufacturing Facility
      </h2>

    </div>

    <div className="map-wrapper">

      <iframe
        title="Himalayan Green Fuel LLP"
        src="https://www.google.com/maps?q=Gram+Bamnigaad,+Manan,+Someshwar,+Almora,+Uttarakhand+263638&output=embed"
        loading="lazy"
        allowFullScreen
      ></iframe>

    </div>

  </div>

</section>

{/* ===========================
            FOOTER
=========================== */}

<footer className="footer">

  <div className="container">

    <img
      src="/logo.png"
      alt="Himalayan Green Fuel"
      className="footer-logo"
    />

    <h3>
      Himalayan Green Fuel LLP
    </h3>

    <p className="footer-description">
      Transforming Pine Needles into Sustainable Biomass Energy
      while reducing forest fire risks and empowering rural communities.
    </p>

    <nav className="footer-nav">

      <a href="#home">Home</a>

      <a href="#about">About</a>

      <a href="#product">Product</a>

      <a href="#manufacturing">Process</a>

      <a href="#gallery">Gallery</a>

      <a href="#contact">Contact</a>

    </nav>

    <div className="footer-contact">

      <span>📞 +91 99900 15636</span>

      <span>✉ himalayngreenfuel@gmail.com</span>

      <span>
        📍 Gram Bamnigaad, Someshwar, Almora,
        Uttarakhand – 263638
      </span>

    </div>

    <div className="footer-social">

      <a href="#">Facebook</a>

      <a href="#">Instagram</a>

      <a href="#">LinkedIn</a>

      <a href="#">YouTube</a>

    </div>

    <div className="footer-bottom">

      © 2026 Himalayan Green Fuel LLP • All Rights Reserved

    </div>

  </div>

  {/* ==========================
    GALLERY POPUP
========================== */}

{galleryOpen && (

<div
  className="gallery-modal"
  onClick={() => setGalleryOpen(false)}
>

  <div
    className="gallery-modal-content"
    onClick={(e) => e.stopPropagation()}
  >

    <button
      className="gallery-close"
      onClick={() => setGalleryOpen(false)}
    >
      ✕
    </button>

    <img
      src={galleryImages[currentImage]}
      alt="Gallery"
      className="gallery-modal-image"
    />

    <button
  className="gallery-prev"
  onClick={() =>
    setCurrentImage(
      currentImage === 0
        ? galleryImages.length - 1
        : currentImage - 1
    )
  }
>
  ❮
</button>

<button
  className="gallery-next"
  onClick={() =>
    setCurrentImage(
      currentImage === galleryImages.length - 1
        ? 0
        : currentImage + 1
    )
  }
>
  ❯
</button>

  </div>

</div>

)}

</footer>

    </>
  );
}

export default App;