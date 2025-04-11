import React from 'react';
import CV from 'react-cv';
import Description from './Description';

const CustomCV = ({ personalData, sections, branding }) => {
  const processSections = (sections) => {
    return sections.map(section => {
      if (section.type === 'experiences-list') {
        return {
          ...section,
          items: section.items.map(item => ({
            ...item,
            description: typeof item.description === 'string' ? (
              <Description>{item.description}</Description>
            ) : item.description
          }))
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