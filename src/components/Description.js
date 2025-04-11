import React from 'react';
import './Description.css';

const technicalKeywords = [
  'SwiftUI', 'Combine', 'RESTful APIs', 'Crashlytics', 'UIKit', 'CoreData',
  'GraphQL', 'Firebase', 'Splunk', 'Bitrise', 'Docker', 'AWS', 'NodeJS',
  'Express', 'Digital Ocean', 'Objective-C', 'Swift', 'C#', 'Unity',
  'UnitTests', 'UITests', 'TCA', 'A/B testing', 'CI', 'Continuous Integration',
  'Sequelize', 'Postgres', 'iOS', 'Bitrise', 'A/B testing', 'XCTest',
  'SQLite'
];

const Description = ({ children }) => {
  const processLine = (line) => {
    let processedLine = line;
    technicalKeywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      processedLine = processedLine.replace(regex, match => `<strong>${match}</strong>`);
    });
    return processedLine;
  };

  const content = typeof children === 'string' ? children.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      <div dangerouslySetInnerHTML={{ __html: processLine(line) }} />
      <br />
    </React.Fragment>
  )) : children;

  return (
    <div className="description-container">
      {content}
    </div>
  );
};

export default Description; 