import React from 'react';
import './Description.css';

const technicalKeywords = [
  'Swift Package Manager', 'RESTful APIs', 'Continuous Integration', 'A/B testing',
  'Apollo Client', 'STAMP Verify', 'Digital Ocean', 'Objective-C', 'Async/Await',
  'SwiftUI', 'Combine', 'Crashlytics', 'UIKit', 'CoreData', 'GraphQL', 'Firebase',
  'Splunk', 'Bitrise', 'Docker', 'AWS SQS', 'AWS SNS', 'AWS', 'NodeJS', 'Express',
  'Swift', 'C#', 'Unity', 'UnitTests', 'UITests', 'TCA', 'CI', 'Sequelize',
  'PostgreSQL', 'Postgres', 'iOS', 'XCTest', 'SQLite', 'Python', 'gRPC', 'Okta',
  'Redis', 'AsyncAwait', 'SPM', 'VIPER', 'MVVM', 'Apollo', 'Realm', 'WebSockets',
  'Amplitude', 'FullStory', 'HubSpot', 'OTP', 'MFA', 'Alamofire', 'TestFlight',
  'Microservices', 'REST'
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