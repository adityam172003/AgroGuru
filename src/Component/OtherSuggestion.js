import React from 'react';
import { myList } from "../static/crop-list.js";
import '../Styles/Result.css';

const OtherSuggestion = ({ crop, top }) => {
  const cropNames = Array.isArray(crop) ? crop.map(item => item.Crop) : [];
  const matchedCrops = myList.filter(c => cropNames.includes(c.name) && c.name !== top);

  return (
    cropNames.length > 0 && 
    (
    <div style={{ marginBottom: '12rem', backgroundColor: '#186700', width: '100%', height: '400px' }}>
      <h1 style={{ fontFamily: 'sans-serif', display: 'flex', justifyContent: 'center', color: 'white', fontSize: '3rem' }}>
        Other Suggestions
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#186700' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: '20px', padding: '20px' }}>
          {matchedCrops.map((crop, index) => (
            <div
              key={index}
              style={{
                textAlign: 'center',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '10px',
                width: '250px',
                marginInline: '1rem',
              }}
            >
              <img
                src={crop.src}
                alt={crop.name}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',                  
                }}
              />
              <p style={{ marginTop: '10px', fontWeight: 'bold', color: 'white', fontSize: '1.4rem' }}>{crop.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
  );
};

export default OtherSuggestion;
