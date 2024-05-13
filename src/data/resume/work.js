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
    name: 'TD Synnex',
    position: 'Computer Technician',
    url: 'https://www.tdsynnex.com/na/ca/',
    startDate: '2023-09-05',
    endDate: '',
    highlights: [
      'Collaborated with product testing team by setting up DHCP, FTP servers, leading to testing Firmware version and custom URL on Business IP Phone. Shipped products on daily basis by adhering to Turn Around Time of 10 Days.',
      'Performed basic set-up, calibration and testing, computer assembly, component insertion, and custom windows imaging for HP Laptops.',
      'Utilized Python script automation to speed up the process of capturing data. Collected Data in MS – Excel and Uploaded to SharePoint.',
      'Managed more than 150 daily Units, with different complexity and strong attention to detail.',
      'Executed bitlocker drive encryption on more than 5000 Lenovo laptops by utilizing powershell script.',
      'Assembled and configured HP A4 and A3 printer as per customization request from client.',
      'Participated in meetings every Tuesday, discussed problem faced, requirement and achievement leading to effective team bonding.',
    ],
  },
  {
    name: 'Tata Consultancy Services',
    position: 'Systems Engineer (Cyber Security Analyst)',
    url: 'https://www.tcs.com/',
    startDate: '2021-07-01',
    endDate: '2022-05-09',
    highlights: [
      'Collaborated with SOC-1 team, involving monitoring, management, administration of potential security threats on the application hosted with AWS which increased customer satisfaction by 25%.',
      'Utilized SIEM-App tools like Splunk-ES, MX toolbox, and Service Now for monitoring threats, resulted in decreasing time for resolution by 30%.',
      'Managed 40-50 daily incidents, leveraging over 10 use cases to ensure swift resolution.',
      'Recognized with an On-The-Spot award for exceptional adherence to SLA, without any breaches.',
    ],
  },
  {
    name: 'Exxat',
    position: 'Intern (Technical Support)',
    url: 'https://exxat.com/',
    startDate: '2019-06-01',
    endDate: '2019-07-01',
    highlights: [
      'Contributed to support team, handling 10 on an average customer request and collaborating on an innovative SAAS project.',
      'Tailored customer certificates with HTML, CSS, and JSON parsing, delivering exceptional user experiences as a Team Player.',
      'Executed SQL CRUD operations seamlessly on live databases, enabling efficient data management.',
      'Excelled in a summer internship during 2nd year B. Tech studies, delivering valuable contributions with excellent communication skills.',
    ],
  },
];

export default work;
