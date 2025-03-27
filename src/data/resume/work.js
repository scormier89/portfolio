/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'WTW',
    position: 'Senior Software Engineer',
    url: 'https://www.wtwco.com/',
    startDate: '2014-10-01',
    endDate: '2024-01-05',
    summary: `Led multiple enterprise software projects in the insurance sector, focusing on 
    workflow automation, UI-heavy applications, and cloud infrastructure.`,
    highlights: [
      'Developed an enterprise NPM package for workflow visualization using GoJS in Angular, enabling customers to edit workflows visually.',
      'Took over the GoJS project as the sole developer after the initial team downsized, maintaining and expanding it for 5 years.',
      'Built and maintained REST APIs in C# to support the workflow automation system.',
      'Dockerized and deployed BrovadaOne, later transitioning it into an Azure Kubernetes Service (AKS) cluster.',
      'Designed Helm charts to simplify deployment and versioning of BrovadaOne in Kubernetes.',
      'Worked on policy data transformation, maintaining XSL/XSLT scripts to convert broker policy data into CSIO (ACORD) standards.',
    ],
  },
  {
    name: 'Brovada',
    position: 'Software Developer',
    url: 'https://www.brovada.com', // Not active anymore, but still relevant historically
    startDate: '2013-09-01',
    endDate: '2014-10-01',
    summary: 'Developed and maintained insurance software solutions focused on broker-to-insurer data transformation.',
    highlights: [
      'Started with maintenance and bug-fixing for Pembridge’s insurance software.',
      'Led a project to create a custom markup language that allowed brokers to manage transformation rules for policy data.',
      'Developed a Node.js backend with a vanilla HTML/jQuery frontend to edit transformation files and maintain version history.',
      'Worked on BrovadaOne, maintaining and optimizing XSL/XSLT transformations that converted broker policy data into CSIO (ACORD) formats.',
    ],
  },
  {
    name: 'Medavie Blue Cross',
    position: 'Software Developer',
    url: 'https://www.medaviebc.ca/en/',
    startDate: '2010-05-15',
    endDate: '2013-09-01',
    summary: 'Developed and maintained insurance software applications, focusing on hybrid mobile apps and UI-heavy enterprise applications.',
    highlights: [
      'Built PharmacyValueFinder, a web-based app to help users find pharmacies based on pricing and location.',
      'Developed a hybrid mobile application for internal Medavie teams.',
      'Worked on UI-heavy applications using JSF, IceFaces, and Java EE technologies.',
      'Collaborated with backend teams on database integrations using Oracle PL/SQL.',
    ],
  },
];

export default work;
