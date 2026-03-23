import React from 'react';
import CustomCV from './components/CustomCV';
import Description from './components/Description';

const clippersDescription = `• Engineering Leadership & Vision: Leading the development of innovative features for the LA Clippers staff application, supporting operations for the $2 billion Intuit Dome, the most technologically advanced sports arena in the world.
• High-Scale Ticketing Architecture: Designed and integrated a seat selection and reservation system optimized for extreme traffic scenarios, ensuring seamless management for events with over 17,700 concurrent attendees.
• Modern iOS Tech Stack: Leveraging SwiftUI for high-performance declarative interfaces and architecting complex business logic using Combine and Async/Await for efficient, real-time data synchronization.
• Frictionless User Experience: Collaborated on the integration of high-speed RESTful APIs to facilitate biometric entry and frictionless transaction processes, maintaining the highest security standards for payment and user data.
• Quality & Stability Excellence: Achieved a 99.9% crash-free rate by implementing comprehensive testing suites with XCTest and real-time monitoring via Crashlytics, ensuring stability in mission-critical live event environments.
• Team Mentorship & Agility: Driving technical excellence through rigorous code reviews and agile leadership, mentoring junior and mid-level developers to elevate overall team performance.`;

const App = () => {
  return (
    <CustomCV
      personalData={{
        name: 'Dario Fernando Vallejo Posada',
        title: 'Senior Software Engineer',
        image:
          './IMG_1838.jpg',
        contacts: [
          { type: 'email', value: 'dario.vallejoposada@gmail.com' },
          { type: 'phone', value: '+57 3007394993' },
          { type: 'location', value: 'Medellín' },
          {
            type: 'linkedin',
            value: 'https://www.linkedin.com/in/dariofernandovallejoposada/',
          },
          { type: 'github', value: 'https://github.com/Darius-Vallejo' },
        ],
      }}
      sections={[
        {
          type: 'text',
          title: 'Career Profile',
          icon: 'usertie',
          content:
            'Senior Software Developer & Engineering Leader. Highly innovative Senior Software Developer with over 10 years of experience driving high-impact projects from startup phases to global scale. Proven track record of architecting mobile solutions for 10M+ users and leading technical teams for Fortune 500 companies and professional sports organizations. Former CEO with a unique blend of technical excellence and business acumen, including successfully securing $250K in venture capital. Expert in Swift, SwiftUI, and Reactive frameworks, dedicated to mentoring teams and staying at the forefront of emerging technologies.',
        },
        {
          type: 'experiences-list',
          title: 'Experiences',
          icon: 'archive',
          items: [
            {
              title: 'Senior Software Engineer',
              company: 'Proximus Global',
              companyWebSite: 'https://www.proximusglobal.com/',
              datesBetween: '2025/05 - Present',
              descriptionTags: [
                'Python',
                'gRPC',
                'REST',
                'Docker',
                'Okta',
                'Microservices',
                'AWS SQS',
                'AWS SNS',
                'Redis',
                'iOS',
                'Swift',
                'STAMP Verify',
                'OTP',
              ],
              description:
                `• Python Backend Refactoring: Leading the strategic refactor of the Voice Omnichannel engine using Python, enhancing system modularity and scalability for global communication workflows.
• Asynchronous Messaging & Queueing: Implementing high-throughput event processing using AWS SQS and SNS to decouple microservices and ensure reliable delivery of voice and identity signals.
• Distributed Caching & Performance: Utilizing Redis for efficient session management and caching, significantly reducing latency in omnichannel authentication flows.
• Identity Orchestration: Engineering secure, customized authentication logic by implementing Okta Sign-in hooks, bridging external identity providers with internal service protocols.
• High-Performance Communication: Architecting low-latency service-to-service communication within a Dockerized environment using gRPC and REST.
• Internal Testing Ecosystem: Engineered a comprehensive iOS internal testing application to validate and demonstrate core Mobile SDK capabilities, including STAMP Verify, OTP, and advanced sign-in services.
• Protocol Validation: Developed high-fidelity demos for identity verification protocols, ensuring SDK performance and security standards for global enterprise clients.`,
            },
            {
              title: 'Senior iOS Developer',
              company: 'Los Angels Clippers',
              contractor: 'Globant',
              companyWebSite: 'https://www.globant.com/',
              datesBetween: '2024/01 - 2025/05',
              descriptionTags: [
                'SwiftPackageManager',
                'AsyncAwait',
                'Github',
                'RestApi',
                'Combine',
                'SwiftUI',
              ],
              description: clippersDescription,
            },
            {
              title: 'Senior iOS Developer',
              company: 'Walmart',
              contractor: 'Globant',
              companyWebSite: 'https://www.globant.com/',
              datesBetween: '2023/06 - 2024/01',
              descriptionTags: [
                'Cocoapods',
                'Splunk',
                'Firebase',
                'Github',
                'Graphql',
                'Combine',
                'UIKit',
                'CoreData',
              ],
              description:
                `• Global Scale Engineering: Engineered and optimized critical features for the Walmart shopping app, a platform serving over 600 million monthly sessions and consistently ranked in the Top 5 of the App Store's Shopping category.
• High-Traffic Performance: Optimized checkout and product discovery flows to handle peak traffic of 25 million daily visits during high-demand seasons (Black Friday/Cyber Monday), maintaining seamless performance and high conversion rates.
• Modular Architecture: Improved the app's modularity by implementing Swift Package Manager (SPM) and refining VIPER/MVVM architectures, reducing build times by 15% and facilitating parallel development across global teams.
• Data-Driven UI: Developed dynamic user interfaces using UIKit and SwiftUI, ensuring a consistent and accessible shopping experience for a diverse user base of 50M+ active customers.
• Robust Code Standards: Led the migration of legacy components to modern Swift patterns, utilizing Combine for reactive data streams and ensuring 99.9% crash-free sessions through rigorous unit testing and CI/CD automation.
• Cross-Functional Collaboration: Partnered with Product and UX teams to implement A/B testing strategies that directly contributed to a 4.5% increase in mobile checkout conversion.`,
            },
            {
              title: 'Senior iOS Developer',
              company: 'Walmart',
              contractor: 'Zemoga',
              companyWebSite: 'https://www.zemoga.com/',
              datesBetween: '2022/06 - 2023/04',
              descriptionTags: [
                'Cocoapods',
                'Splunk',
                'Firebase',
                'Github',
                'Graphql',
                'Combine',
                'UIKit',
              ],
              description:
                `• Legacy Modernization & Refactoring: Led the strategic migration of high-impact legacy modules from Objective-C and UIKit to SwiftUI, improving code maintainability and reducing the technical debt of a decades-old codebase.
• Advanced Data Fetching (GraphQL/Apollo): Architected and implemented complex data-driven features using GraphQL with Apollo Client, optimizing network requests and type-safety for Walmart's massive retail API ecosystem.
• High-Traffic Performance: Optimized core shopping flows to sustain peak traffic of 25 million daily visits during high-demand retail events, ensuring 100% uptime for 50M+ active customers.
• Reactive UI Architecture: Developed responsive and dynamic user interfaces by combining Combine with modern Swift patterns, ensuring seamless data flow across the application's core features.
• Quality Engineering & Observability: Maintained a 99.9% crash-free rate through rigorous XCTest implementation (Unit/UI) and deep-dive performance monitoring using Splunk, Firebase, and Crashlytics.
• Technical Leadership: Managed peer code reviews and approved pull requests, establishing engineering guidelines that ensured adherence to global software excellence standards.`,
            },
            {
              title: 'Chief Executive Officer & Senior iOS Developer',
              company: 'Pefpi',
              companyWebSite: 'https://www.linkedin.com/company/pefpi',
              datesBetween: '2020/09 - 2022/06',
              descriptionTags: [
                'Swift',
                'SwiftUI',
                'React',
                'Leadership',
                'Bitbucket',
                'Jira',
                'Asana',
                'Docker',
                'AWS',
                'NodeJS',
                'Express',
                'Digital Ocean',
                'RestApi',
                'Splunk',
                'Firebase',
                'TCA',
                'PostgreSQL',
                'Sequelize',
              ],
              description:
                `• Strategic Technical Leadership: Defined the long-term technology roadmap and successfully secured $250K USD in seed funding from top-tier Angel Investors (Obras Dé and Arconsa).
• Behavioral Analytics & Growth: Spearheaded the implementation of FullStory and Amplitude to track user behavior, conduct granular A/B testing, and optimize the conversion funnel through data-driven experiments.
• User Lifecycle & CRM Integration: Engineered a seamless user management ecosystem by integrating HubSpot, enabling automated onboarding, retention campaigns, and high-fidelity user data synchronization.
• Scalable Full-Stack Architecture: Architected a high-performance environment using The Composable Architecture (TCA) for iOS and a robust backend powered by Node.js, Express, and Sequelize (PostgreSQL).
• Product Observability: Established advanced monitoring and logging strategies using Splunk and Firebase, transforming raw application data into actionable business insights.
• Infrastructure & DevOps Excellence: Orchestrated a cloud-native infrastructure using Docker and Digital Ocean, implementing automated CI/CD pipelines to ensure rapid and reliable deployment cycles.
• Engineering Mentorship: Built and scaled a high-performing engineering team from scratch, establishing coding standards, peer review protocols, and a culture of technical excellence.`,
            },
            {
              title: 'iOS Senior Developer',
              company: 'Rappi',
              companyWebSite: 'https://www.rappi.com',
              datesBetween: '2016/07 - 2020/09',
              description:
                `• Early-Stage Hypergrowth: Joined as the 12th employee, playing a pivotal role in scaling the application from a local startup to a multi-national unicorn serving 10M+ users.
• High-Performance Data Loading: Optimized data loading performance by implementing SQLite to handle highly compressed product databases, significantly improving app responsiveness and ensuring robust offline capabilities.
• Core Module Architecture: Served as the iOS Lead for the Restaurants Module, architecting the foundational features for UI, code distribution, and real-time delivery tracking.
• Infrastructure & CI/CD: Designed and built the Continuous Integration (CI) pipelines using Bitrise, streamlining the deployment process for a rapidly growing engineering team.
• Scale & Stability: Led the iOS development for the flagship delivery app, ensuring stability and performance for a platform that grew to serve millions of users across multiple countries.
• Technical Leadership: Managed task distribution, prioritized requirements, and estimated story points while conducting rigorous code reviews to maintain high development standards.
• Quality & Testing: Implemented comprehensive XCTest suites and Crashlytics integration to ensure robust testing coverage and real-time error monitoring.`,
              descriptionTags: [
                'Objective-C',
                'Cocoapods',
                'Github',
                'Google APIs',
                'Facebook SDK',
                'Swift',
                'Firebase',
                'CoreData',
                'SQLite',
                'Bitrise',
                'RestApi',
              ],
            },
            {
              title: 'iOS Mid Developer',
              company: 'Gravility.Inc',
              description:
                `• Enterprise Retail Solutions: Contributed to the development of high-performance retail applications, implementing complex UI components and business logic for large-scale e-commerce platforms.
• Advanced UI Development: Mastered Auto Layout and programmatic UI constraints to ensure pixel-perfect, responsive designs across all iOS device sizes.
• Network & API Integration: Leveraged Alamofire to architect robust web service integrations, ensuring efficient data synchronization and handling of RESTful API responses.
• Release Management: Spearheaded the build and distribution process, managing TestFlight beta testing and successfully coordinating App Store submissions and releases.
• Collaborative Engineering: Partnered with senior engineers to refactor legacy Objective-C code into Swift, improving overall application stability and performance.`,
              companyWebSite: 'https://www.grability.com/',
              datesBetween: '2016/03 - 2016/07',
              descriptionTags: ['Objective-C', 'Swift'],
            },
            {
              title: 'iOS Junior Developer',
              company: 'Blokwise',
              description:
                '	•	Developed and maintained the iOS versions of BrainFreeze and FormulaCartoon, ensuring optimal performance, stability, and user experience. •	Built iOS apps for TNT, Haceb, and ColombiaModa, while assisting senior team members in resolving complex issues.',
              companyWebSite: 'http://www.bwstudios.co/',
              datesBetween: '2014/07 - 2016/03',
              descriptionTags: ['Objective-C', 'Swift', 'C#', 'Unity'],
            },
          ],
        },
        {
          type: 'projects-list',
          title: 'Projects',
          icon: 'tasks',
          groups: [
            {
              sectionHeader: 'Rappi',
              items: [
                {
                  title: 'iOS App',
                  projectUrl:
                    'https://apps.apple.com/co/app/rappi-s%C3%BAper-y-comida-online/id984044296',
                  description: 'On-demand delivery platform for groceries, food, and essentials.',
                },
              ],
            },
            {
              sectionHeader: 'Zemoga - Walmart',
              items: [
                {
                  title: 'iOS App',
                  projectUrl:
                    'https://apps.apple.com/co/app/lider/id1418000624',
                  description: 'Retail shopping application for Walmart customers.',
                },
              ],
            },
          ],
        },
        {
          type: 'common-list',
          title: 'Education',
          icon: 'graduation',
          items: [
            {
              title: 'Computer Engineering',
              authority: 'IUSH',
              authorityWebSite: 'https://www.iush.edu.co/',
              rightSide: '2015 - 2021',
            },
            {
              title: 'Associate Degree Software Engineering',
              authority: 'CESDE',
              authorityWebSite: 'https://www.cesde.edu.co/',
              rightSide: '2013 - 2014',
            },
          ],
        },
        {
          type: 'common-list',
          title: 'Conferences & Certificates',
          description: '',
          icon: 'comments',
          items: [
            {
              title: 'Hypothesis-Driven Development / 2025',
              authority: 'University of Virginia',
              authorityWebSite:
                'https://www.coursera.org/account/accomplishments/verify/O25VUDY7OAUC',
            },
            {
              title: 'Reactive Programming with Rx Swift / 2017',
              authority: 'Linkedin',
              authorityWebSite:
                'https://www.linkedin.com/learning/reactive-programming-in-ios-with-rxswift',
            },
            {
              title: 'Advanced iOS / 2015',
              authority: 'Tecnalia',
              authorityWebSite: 'https://www.linkedin.com/company/tecnalia/',
            },
          ],
        },
        {
          type: 'common-list',
          title: 'Languages',
          icon: 'language',
          items: [
            {
              authority: 'Spanish',
              authorityMeta: 'Native',
            },
            {
              authority: 'English',
              authorityMeta: 'B2+',
            },
          ],
        },
        {
          type: 'tag-list',
          title: 'Skills Proficiency',
          icon: 'rocket',
          items: [
            'iOS',
            'Swift',
            'Objective-C',
            'React',
            'Javascript',
            'NodeJs',
            'CSS',
            'SQL',
            'RxSwift',
            'Combine',
            'MVVM',
            'Viper',
          ],
        },
        {
          type: 'tag-list',
          title: 'Hobbies & Interests',
          icon: 'cubes',
          items: ['Tennis', 'Gym', 'Self-Growth Books', 'Mindfulness'],
        },
      ]}
      branding={true}
    />
  );
};

export default App;
