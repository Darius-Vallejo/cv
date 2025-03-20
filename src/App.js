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
          content:
            'A driven and innovative professional constantly seeking new challenges in emerging technologies. I thrive on both mentoring colleagues and learning from diverse perspectives. My ideal work environment is one with an exceptional team committed to continuous improvement and growth. My career aspirations include deepening my expertise in both leadership and cutting-edge technologies, with the goal of driving my team and projects to new levels of success and innovation.',
          icon: 'usertie',
        },
        {
          type: 'experiences-list',
          title: 'Experiences',
          description: '',
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
                `
                LAClippers
                Senior iOS Developer:
                * Spearheading the development of new features for the LAClippers staff app, focusing on innovative ticketing solutions for concerts and games in the brand-new LA stadium.
                * Leveraging SwiftUI to create modern, responsive user interfaces that enhance the ticket purchasing experience for both staff and end-users.
                * Implementing complex business logic using Combine framework, ensuring efficient and reactive data flow throughout the application.
                * Architecting and integrating robust seat selection and reservation systems, optimizing for high-traffic scenarios during popular events.
                * Utilizing Swift's latest features to write clean, maintainable, and performant code.
                Collaborating with backend teams to design and consume RESTful APIs, ensuring seamless data synchronization.
                * Implementing state-of-the-art security measures to protect sensitive user and payment information.
                * Optimizing app performance and reducing load times to enhance user satisfaction and increase conversion rates.
                * Conducting code reviews and mentoring junior developers to maintain high code quality standards.
                * Participating in agile development processes, including sprint planning, daily stand-ups, and retrospectives.
                * Continuously researching and adopting best practices in iOS development to keep the app at the cutting edge of technology.`,
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
              ],
              description:
                `Walmart (Same client as the previous contractor) * Developing new features for Walmart, using UIKit and Combine, and supporting and correcting current ones on news sector applications using MVVM.          * Giving support to other teams, and approving the PRs after code review. 
                *Creation of UITests and UnitTests to the features already released in production. 
                * Co-lead the development team managing the
                distribution of tasks ensuring delivery to the client complying with quality standards and best practices.`,
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
                '* Developing new features for Walmart, using UIKit and Combine, and supporting and correcting current ones on news sector applications using MVVM. \n * Giving support to other teams, and approving the PRs after code review.\n *Creation of UITests and UnitTests to the features already released in production. * Co-lead the development team managing the distribution of tasks ensuring delivery to the client complying with quality standards and best practices.',
            },
            {
              title: 'iOS Developer',
              company: 'Likemetric',
              companyWebSite: 'https://www.linkedin.com/company/unopuntoseis',
              datesBetween: '2021/03 - 2022/06',
              description:
                "As the lead developer, he was responsible for optimizing the code and flow of his team's applications, analyzing the market using methodologies that generate permanent value, such as A/B testing with Firebase and logging events with Splunk. Additionally, he led the creation of the architecture and guidelines that served as the foundation for the team's work.\n *As an iOS Developer for the app, he actively participated in the creation of Continuous Integration (CI) pipelines into Digital Ocean",
              descriptionTags: [
                'Bitbucket',
                'SwiftUI',
                'Jira',
                'digital ocean',
                'Docker',
                'Splunk',
                'VIPER',
              ],
            },
            {
              title: 'Chief Executive Officer',
              company: 'Pefpi',
              companyWebSite: 'https://www.linkedin.com/company/pefpi',
              datesBetween: '2020/09 - 2021/03',
              description:
                '* Responsible for prioritizing requirements and distributing them among the team, planning development tickets, assigning priorities to a manager, and bridging the gap between business and technology. \n* Built and led a high-performing technology team, involving recruiting, mentoring, and developing team members. \n* Successfully raised $250k USD from Angel Investors, including ObrasDé and Arconsa, through fundraising efforts.',
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
            },
            {
              title: 'iOS Developer',
              company: 'Rappi',
              companyWebSite: 'https://www.rappi.com',
              datesBetween: '2016/07 - 2020/09',
              description:
                '* Actively participated in designing and architecting iOS features for the app, including user interfaces, code distribution, and creating Continuous Integration (CI) pipelines with Bitrise. \n* Prioritized requirements and distributed them among the team, planning development tickets and assigning priorities and story points. \n * Provided support as an iOS Developer Lead for the Restaurants Module, reviewing and approving contributions, ensuring overall functionality, stability, and measuring success through various metrics and A/B testing.',
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
                '* Assisted senior team members in resolving complex features using UIKit, including auto layout and Alamofire for web service connections. \n * Managed the build process for TestFlight and released versions on the App Store.',
              companyWebSite: 'https://www.grability.com/',
              datesBetween: '2016/03 - 2016/07',
              descriptionTags: ['Objective-C', 'Swift'],
            },
            {
              title: 'iOS Developer',
              company: 'Blokwise',
              description:
                '* Developed and maintained the iOS versions of BrainFreeze and FormulaCartoon, focusing on optimal performance, stability, and user experience. \n * Created iOS apps for TNT, Haceb, and ColombiaModa, while supporting senior team members in resolving complex issues.',
              companyWebSite: 'http://www.bwstudios.co/',
              datesBetween: '2014/07 - 2016/03',
              descriptionTags: ['Objective-C', 'Swift', 'C#', 'Unity'],
            },
          ],
        },
        {
          type: 'projects-list',
          title: 'Projects',
          description: '',
          icon: 'tasks',
          groups: [
            {
              sectionHeader: 'Rappi',
              items: [
                {
                  title: 'iOS App',
                  projectUrl:
                    'https://apps.apple.com/co/app/rappi-s%C3%BAper-y-comida-online/id984044296',
                  description: 'Delivery',
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
                  description: 'Delivery',
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
              authorityMeta: 'Professional',
            },
            {
              authority: 'English',
              authorityMeta: 'Middle',
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
          items: ['Poetry', 'Tennis', 'Gym', 'Nutrition'],
        },
      ]}
      branding={true} // or false to hide it.
    />
  );
};

export default App;
