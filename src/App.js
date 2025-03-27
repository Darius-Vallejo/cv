import React from 'react';
import CV from 'react-cv';

const App = () => {
  return (
    <CV
      personalData={{
        name: 'Dario Fernando Vallejo Posada',
        title: 'Senior Software Developer',
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
            'A highly motivated and innovative Senior Software Developer with a passion for emerging technologies and a proven track record of driving projects to success. Skilled in mentoring teams, optimizing workflows, and delivering high-quality applications. Thrives in collaborative environments that prioritize continuous improvement and technical excellence. Seeking to further enhance leadership capabilities and stay at the forefront of cutting-edge technologies to drive impactful innovation.',
        },
        {
          type: 'experiences-list',
          title: 'Experiences',
          icon: 'archive',
          items: [
            {
              title: 'iOS Developer',
              company: 'Globant',
              companyWebSite: 'https://www.globant.com/',
              datesBetween: '2024/01 - Present',
              descriptionTags: [
                'SwiftPackageManager',
                'AsyncAwait',
                'Github',
                'RestApi',
                'Combine',
                'SwiftUI',
              ],
              description:
                `LAClippers
      Senior iOS Developer:
      • Leading the development of innovative features for the LAClippers staff app, focusing on ticketing solutions for concerts and sports events in a cutting-edge stadium.
      • Utilizing SwiftUI to build modern, dynamic user interfaces, enhancing the ticketing experience for both staff and customers.
      • Implementing complex business logic with Combine framework to ensure efficient, responsive data management.
      • Architecting and integrating seat selection and reservation systems optimized for high-traffic scenarios.
      • Collaborating with backend teams to design and consume RESTful APIs for seamless data synchronization.
      • Ensuring high-security standards to protect user and payment information.
      • Conducting rigorous performance optimizations to reduce load times and enhance user satisfaction.
      • Providing mentorship and conducting code reviews to maintain high development standards.
      • Actively participating in agile ceremonies, including sprint planning, daily stand-ups, and retrospectives.
      • Staying up-to-date with industry trends and best practices to drive continuous innovation in iOS development.`,
            },
            {
              title: 'iOS Developer',
              company: 'Globant',
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
                `Walmart (Same client as the previous contractor)
      • Developed and maintained new features for Walmart's iOS applications using UIKit and Combine, ensuring smooth performance and scalability.
      • Provided ongoing support for existing applications, debugging and improving functionality.
      • Conducted rigorous code reviews, ensuring high-quality standards and best practices.
      • Designed and implemented UnitTests and UITests to improve application reliability and catch potential issues before production releases.
      • Co-led the development team, managing task distribution and ensuring timely and high-quality deliverables.`,
            },
            {
              title: 'iOS Developer',
              company: 'Zemoga',
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
                `• Developed new features for Walmart, focusing on UIKit and Combine to improve the user experience.
      • Provided support and maintenance for existing applications, ensuring continued stability and performance.
      • Led peer code reviews and approved pull requests to ensure adherence to best practices.
      • Designed and implemented UnitTests and UITests to strengthen application reliability.
      • Co-managed development tasks and collaborated with cross-functional teams to meet project deadlines and deliver high-quality software.`,
            },
            {
              title: 'iOS Developer',
              company: 'Likemetric',
              companyWebSite: 'https://www.linkedin.com/company/unopuntoseis',
              datesBetween: '2021/03 - 2022/06',
              descriptionTags: [
                'Bitbucket',
                'SwiftUI',
                'Jira',
                'Digital Ocean',
                'Docker',
                'Splunk',
                'VIPER',
              ],
              description:
                `• Led application architecture and code optimization efforts to enhance overall performance.
      • Conducted in-depth market analysis using A/B testing with Firebase and logging events with Splunk to drive data-driven decisions.
      • Developed and maintained Continuous Integration (CI) pipelines for seamless deployment using Digital Ocean.
      • Established guidelines and best practices to ensure consistency across development teams.`,
            },
            {
              title: 'Chief Executive Officer',
              company: 'Pefpi',
              companyWebSite: 'https://www.linkedin.com/company/pefpi',
              datesBetween: '2020/09 - 2021/03',
              descriptionTags: [
                'Swift',
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
              ],
              description:
                `• Managed and prioritized development tasks, ensuring seamless collaboration between business and technology teams.
      • Built and led a high-performing development team, including recruiting, mentoring, and technical oversight.
      • Successfully secured $250K USD from Angel Investors, including ObrasDé and Arconsa, to drive company growth.`,
            },
            {
              title: 'iOS Developer',
              company: 'Rappi',
              companyWebSite: 'https://www.rappi.com',
              datesBetween: '2016/07 - 2020/09',
              description:
                'Actively participated in designing and architecting iOS features for the app, including user interfaces, code distribution, and the creation of Continuous Integration (CI) pipelines with Bitrise. •	Prioritized requirements and managed task distribution within the team, planning development tickets, assigning priorities, and estimating story points. •	Served as the iOS Developer Lead for the Restaurants Module, reviewing and approving contributions, ensuring functionality and stability, and measuring success through key metrics and A/B testing.',
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
              ],
            },
            {
              title: 'iOS Developer',
              company: 'Gravility.Inc',
              description:
                'Assisted senior team members in implementing complex features using UIKit, including Auto Layout and Alamofire for web service integration. •	Managed the build process for TestFlight and handled App Store releases.',
              companyWebSite: 'https://www.grability.com/',
              datesBetween: '2016/03 - 2016/07',
              descriptionTags: ['Objective-C', 'Swift'],
            },
            {
              title: 'iOS Developer',
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
