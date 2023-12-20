// ScrollableContainer.js
import React, { useState } from 'react';
import './ScrollableContainer.scss';

const ScrollableContainer = () => {
  const sections = [
    { id: 1, title: 'Yoga For Beginners', images: ['class-yoga8.jpg',]},
    { id: 2, title: 'Pranayama', images: ['class-yoga9.jpg', ] },
    { id: 3, title: 'Asanas in Yoga', images: ['class-yoga10.jpg',] },
    // Add more sections as needed
  ];

  const category =[{
    id:1,
    title:'Yoga For Beginners',
   
  },
  {
    id:2,
    title:'Pranayama',
  },
  {
    id:3,
    title:'Asanas in Yoga',
  }
];

  const [selectedSection, setSelectedSection] = useState(sections[0]);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="scrollable-container">
      <div className="sections">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`section ${selectedSection.id === section.id && 'active'}`}
            onClick={() => handleSectionClick(section)}
          >
            
            {section.title}
          </div>
        ))}
      </div>
      <div>

      {/* <p>Yoga For Beginners</p> */}
      <div className="content">
        {selectedSection.images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
          
        ))}
      </div>
      </div>
    </div>
  );
};

export default ScrollableContainer;

