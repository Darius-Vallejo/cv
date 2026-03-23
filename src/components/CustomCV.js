import React from 'react';
import CV from 'react-cv';
import Description from './Description';
import './CustomCV.css';

const CustomCV = ({ personalData, sections, branding }) => {
  const processSections = (sections) => {
    return sections.map(section => {
      if (section.type === 'experiences-list') {
        return {
          ...section,
          items: section.items.map(item => {
            const processedItem = {
              ...item,
              description: typeof item.description === 'string' ? (
                <Description>{item.description}</Description>
              ) : item.description
            };
            
            // If contractor exists, modify company to include it
            if (item.contractor) {
              processedItem.company = (
                <div className="company-with-contractor">
                  <div className="company-name">{item.company}</div>
                  <div className="contractor-name">via {item.contractor}</div>
                </div>
              );
            }
            
            return processedItem;
          })
        };
      }
      return section;
    });
  };

  return (
    <CV
      personalData={personalData}
      sections={processSections(sections)}
      branding={branding}
    />
  );
};

export default CustomCV; 