const skills = [
  {
    title: 'JavaScript',
    competency: 5,
    category: ['Web Development', 'Languages', 'JavaScript'],
  },
  {
    title: 'TypeScript',
    competency: 4,
    category: ['Web Development', 'Languages', 'JavaScript'],
  },
  {
    title: 'Node.js',
    competency: 3,
    category: ['Web Development', 'JavaScript'],
  },
  {
    title: 'Express.js',
    competency: 2,
    category: ['Web Development', 'JavaScript'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'JavaScript'],
  },
  {
    title: 'Angular',
    competency: 5,
    category: ['Web Development', 'JavaScript'],
  },
  {
    title: 'Vue.js',
    competency: 3,
    category: ['Web Development', 'JavaScript'],
  },
  {
    title: 'GoJS',
    competency: 5,
    category: ['Web Development', 'JavaScript', 'Visualization'],
  },
  {
    title: 'HTML + CSS (SASS/SCSS)',
    competency: 5,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'C#',
    competency: 3,
    category: ['Languages', 'Backend Development'],
  },
  {
    title: '.NET',
    competency: 3,
    category: ['Backend Development'],
  },
  {
    title: 'Java (J2EE, Spring, Hibernate, JSF)',
    competency: 4,
    category: ['Backend Development', 'Languages'],
  },
  {
    title: 'XSL/XSLT',
    competency: 4,
    category: ['Data Transformation'],
  },
  {
    title: 'SQL (Oracle, MySQL, MS SQL Server)',
    competency: 4,
    category: ['Databases', 'Languages'],
  },
  {
    title: 'MongoDB',
    competency: 2,
    category: ['Databases'],
  },
  {
    title: 'Kubernetes (AKS)',
    competency: 4,
    category: ['Cloud', 'DevOps'],
  },
  {
    title: 'Helm',
    competency: 3,
    category: ['Cloud', 'DevOps'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Cloud', 'DevOps'],
  },
  {
    title: 'Jenkins',
    competency: 3,
    category: ['Cloud', 'DevOps'],
  },
  {
    title: 'Azure DevOps',
    competency: 4,
    category: ['Cloud', 'DevOps'],
  },
  {
    title: 'CI/CD Pipelines',
    competency: 4,
    category: ['Cloud', 'DevOps'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'REST APIs',
    competency: 4,
    category: ['Backend Development'],
  },
  {
    title: 'GraphQL',
    competency: 3,
    category: ['Backend Development'],
  },
  {
    title: 'Testing (Cypress, Jest, Karma, JUnit)',
    competency: 4,
    category: ['Testing & Automation'],
  },
  {
    title: 'AWS (EC2)',
    competency: 1,
    category: ['Cloud'],
  },
  {
    title: 'Python',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Ruby on Rails',
    competency: 1,
    category: ['Web Development', 'Languages'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// Define color categories
const colors = [
  '#6968b3', // Web Development
  '#37b1f5', // Backend Development
  '#40494e', // Databases
  '#515dd4', // Cloud
  '#e47272', // DevOps
  '#cc7b94', // Languages
  '#3896e2', // Data Transformation
  '#c3423f', // Testing & Automation
  '#d75858', // Tools
];

// Generate unique categories
const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index % colors.length],
  }));

export { categories, skills };
