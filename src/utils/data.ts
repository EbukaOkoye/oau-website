import {
  Aid,
  Chat,
  CheckCircle,
  ClipboardCheck,
  Copy,
  Economy,
  Email,
  Emergency,
  Facebook,
  Health,
  Help,
  LifeSupport,
  LifeTap,
  LinkedinIn,
  Location,
  Mission,
  Phone,
  Pinterest,
  Politics,
  PovertyAlleviation,
  ReceiveMoney,
  School,
  Skype,
  Telegram,
  Telescope,
  ThumbsUp,
  Time,
  Twitter,
  Whatsapp,
} from "./icons";
import { images } from "./images";

export const navbarLinks = [
  {
    name: "HOME",
    link: "/",
  },
  {
    name: "BIO",
    link: "/bio",
  },
  {
    name: "THE OAU FOUNDATION",
    link: "/oau-foundation",
  },
  {
    name: "CONTACT US",
    link: "/contact",
  },
];

export const heroImages = [
  images.landscape_oau,
  images.portrait_oau,
];

export const heroTexts = [
  {
    text: 'Onyekwere Akym Uche is a Nigerian entrepreneur, humanitarian, and politician, primarily known for his involvement in Abia State politics. \n \n He is the founder of THE OAU FOUNDATION, a humanitarian platform that works to uplift communities and empower individuals.',
    link: '/bio'
  },
  {
    text: 'The OAU Foundation is a humanitarian non-governmental organization (NGO) dedicated to improving the lives of individuals and communities in need. \n \n Our foundation works tirelessly to promote sustainable development, alleviate poverty, and provide humanitarian assistance to vulnerable populations.',
    link: '/oau-foundation'
  },
];

export const holaSupportList = [
  {
    icon: CheckCircle,
    name: "Registered NDIS Service Provider in Adelaide",
  },
  {
    icon: CheckCircle,
    name: "Well established team",
  },
  {
    icon: CheckCircle,
    name: "We are up to date with the NDIS changes",
  },
  {
    icon: CheckCircle,
    name: "We speak NDIS language",
  },
  {
    icon: CheckCircle,
    name: "Customised services to cater individual needs",
  },
  {
    icon: CheckCircle,
    name: "Wide range of Supported Accommodation options",
  },
  {
    icon: CheckCircle,
    name: "Person-Centred approach",
  },
];

export const happyTestimony = [
  {
    testimony:
      `Uchechukwu S. Ogah, PhD, CON, FCA “Your dedication to touching
            lives, uplifting communities, and setting a standard of excellence
            has made this day more than a personal milestone—it is a celebration
            for everyone blessed by your impact. May the coming years unveil new
            heights of fulfillment, influence, and joy,” High Chief Uche is more
            than just a celebrated personality; he is a beacon of hope, a
            resilient leader, and a man whose dedication to humanity continues
            to touch countless lives. Through his humanitarian platform, The OAU
            Foundation, he has uplifted communities, empowered individuals, and
            set a standard of excellence that speaks volumes of his character.
            An entrepreneur with a passion for humanitarian service, he has
            reportedly lived in developed countries and aimed to implement
            similar developmental changes in Abia State.`,
    pic: images.jacob,
    name: "Jacob",
    county: "Cowandilla, SA",
  },
  {
    testimony:
    `Uchechukwu S. Ogah, PhD, CON, FCA “Your dedication to touching
            lives, uplifting communities, and setting a standard of excellence
            has made this day more than a personal milestone—it is a celebration
            for everyone blessed by your impact. May the coming years unveil new
            heights of fulfillment, influence, and joy,” High Chief Uche is more
            than just a celebrated personality; he is a beacon of hope, a
            resilient leader, and a man whose dedication to humanity continues
            to touch countless lives. Through his humanitarian platform, The OAU
            Foundation, he has uplifted communities, empowered individuals, and
            set a standard of excellence that speaks volumes of his character.
            An entrepreneur with a passion for humanitarian service, he has
            reportedly lived in developed countries and aimed to implement
            similar developmental changes in Abia State.`,
    pic: images.cynthia,
    name: "Cynthia",
    county: "Craigmore, SA",
  },
  {
    testimony:
    `Uchechukwu S. Ogah, PhD, CON, FCA “Your dedication to touching
            lives, uplifting communities, and setting a standard of excellence
            has made this day more than a personal milestone—it is a celebration
            for everyone blessed by your impact. May the coming years unveil new
            heights of fulfillment, influence, and joy,” High Chief Uche is more
            than just a celebrated personality; he is a beacon of hope, a
            resilient leader, and a man whose dedication to humanity continues
            to touch countless lives. Through his humanitarian platform, The OAU
            Foundation, he has uplifted communities, empowered individuals, and
            set a standard of excellence that speaks volumes of his character.
            An entrepreneur with a passion for humanitarian service, he has
            reportedly lived in developed countries and aimed to implement
            similar developmental changes in Abia State.`,
    pic: images.tom,
    name: "Tom",
    county: "Beverly, SA",
  },
];

export const socialLinks = [
  {
    icon: Facebook,
    href: "/",
  },
  {
    icon: Twitter,
    href: "/",
  },
  {
    icon: LinkedinIn,
    href: "/",
  },
  {
    icon: Whatsapp,
    href: "/",
  },
  {
    icon: Pinterest,
    href: "/",
  },
  {
    icon: Telegram,
    href: "/",
  },
  {
    icon: Skype,
    href: "/",
  },
];

export const contactInfo = [
  {
    icon: Phone,
    label: "(08) 780 90212",
  },
  {
    icon: Email,
    label: "info@hola.support.com.au",
  },
  {
    icon: Time,
    label: "Mon - Fri: 9:00 - 17:00 hrs.",
  },
  {
    icon: Location,
    label: "179B Philip Hwy, Elizabeth South SA 5112",
  },
];

export const faqSteps = [
  {
    title: "Check Eligibility",
    icon: CheckCircle,
    content: [
      "Residence: Australian citizen or hold a permanent visa or a Protected Special Category visa",
      "Disability: Permanent disability that significantly affects your ability to take part in everyday activities",
      "Age: Under 65 years, under 50 years for Aboriginal and Torres Strait Islanders at the time you register",
    ],
    color: "bg-main-purple",
    stepNumber: 1,
  },
  {
    title: "Access Request Questions",
    icon: ClipboardCheck,
    content: [
      "To confirm your identity and/or a person’s authority to act on your behalf",
      "To see if you meet the NDIS access requirements",
      "About providing consent to enter the NDIS",
    ],
    color: "bg-step-green",
    stepNumber: 2,
  },
  {
    title: "Creating Your Plan",
    icon: Copy,
    content: [
      "Preparation for  planning meeting",
      "Setting goals",
      "Planning meeting checklist",
      "Ways to manage your funding Plan budget and rules",
      "Receiving your approved plan",
      "Compensation",
    ],
    color: "bg-step-purple",
    stepNumber: 3,
  },
  {
    title: "Access Request Questions",
    icon: ClipboardCheck,
    content: [
      "To confirm your identity and/or a person’s authority to act on your behalf",
      "To see if you meet the NDIS access requirements",
      "About providing consent to enter the NDIS",
    ],
    color: "bg-step-green",
    stepNumber: 4,
  },
  {
    title: "Using Your Plan",
    icon: ReceiveMoney,
    content: [
      "Help starting your plan",
      "Understanding your plan",
      "Managing your plan",
      "Self-management",
      "Managing your plan",
      "Changing your plan",
    ],
    color: "bg-step-purple",
    stepNumber: 5,
  },
  {
    title: "Using Your Plan",
    icon: ThumbsUp,
    content:
      "Plan review is an opportunity for you to check if your supports are working for you and they are helping you work towards your goals.",
    color: "bg-step-green",
    stepNumber: 6,
  },
];

export const faqs_one = [
  {
    question: "What is the NDIS?",
    answer:
      "The National Disability Insurance Scheme (NDIS) is a federally managed and funded scheme that provides support and funding to people with permanent disability, their families and carers. We work with you to figure out a plan that is suitable to your needs and aspirations.",
  },
  {
    question: "What is the purpose of NDIS?",
    answer:
      "The NDIS aims to support people with disabilities to achieve their goals, improve their independence and participate in the community.",
  },
  {
    question: "Who is the NDIA?",
    answer:
      "The NDIA (National Disability Insurance Agency) is the organization responsible for implementing the NDIS.",
  },
  {
    question: "What is the eligibility criteria for NDIS?",
    answer:
      "You must be under 65 years of age, live in Australia, and have a permanent and significant disability.",
  },
  {
    question: "What happens if I am over 65 years old?",
    answer:
      "If you are over the age of 65 years, you will not be eligible to participate in the NDIS. You might be eligible for funding by the Aged Care System, instead.",
  },
];

export const faqs_two = [
  {
    question: "What support can I receive under the NDIS?",
    answer: [
      "Daily Personal Activities",
      "Transport facilities to enable participation in community, social, economic and daily life activities",
      "Therapeutic Support",
      "Home modification design and construction",
      "Help with household tasks to maintain their home environment",
      "Vehicle and mobility equipment modifications",
      "Workplace help and training",
    ],
  },
  {
    question: "Does the NDIS affect the DSP?",
    answer:
      "The NDIS is not means-tested and has no impact on your Disability Support Pension (DSP).",
  },
  {
    question: "Will the NDIS cost me anything?",
    top: "The NDIS does not provide funding for support if it is: ",
    answer: [
      "Not related to a person’s disability.",
      "A duplicate of another support within a participants personal support plan.",
      "Related to daily living expenses not tied to a participants disability (e.g. rent, groceries).",
      "The responsibility of another government system or community service.",
      "Likely to cause harm to a participant or pose a risk to others.",
      "Related to income replacement.",
    ],
  },
  {
    question: "Who is Carer?",
    answer: [
      "A carer is a person who provides unpaid care and support to family members or friends with a disability, a serious long-term illness, a terminal illness, a drug or alcohol issue or who are frail and aged.",
      "Do Carers receive support outside of the NDIS? Carers receive a range of supports including respite support, counselling, education and training, peer support and advocacy.",
      "The Carer Advisory Service provides information and advice to carers and their families about carer supports and services.",
    ],
  },
];

export const bottomContact = [
  {
    icon_img: Chat,
    text: "NDIS Feedback & Complaints",
  },
  {
    icon_img: Phone,
    text: "1800 800 110",
  },
  {
    icon_img: Copy,
    text: "Contact & Feedback",
  },
];

export const whatWeOffer = [
  "Professional development",
  "Networking Opportunities",
  "A friendly working environment",
  "Good Orientation and Induction process",
  "Work-Life balance",
  "Training opportunities",
  "Safe workplace",
];

export const importantToHave = [
  "A current South Australian driver’s licence",
  "A current Senior First Aid Certificate",
  "Screening clearance to work with children and vulnerable people (DHS Screening Clearance)",
  "Person-Centerd approach",
  "In-depth understanding of Disability and Human Rights",
];

export const qualifications = [
  "Cert III in Disability Care",
  "Proof of First Aid Training",
  "Recent, related experience working as a Support Worker",
  "Ability to read, write, comprehend and communicate effectively in English",
  "Must be able to meet the physical requirements of the position",
  "Excellent communication abilities and interpersonal skills to interact positively and effectively with participants, staff and the general public",
  "Demonstrated ability to prioritise multiple and changing tasks that require attention to detail",
  "Demonstrated ability to work effectively as a member of a team",
  "Commitment to Person-Centred care with a Service-Oriented attitude",
  "Basic computer skills",
  "Ability to problem solve",
  "Demonstrate initiative within appropriate scope of practice",
  "Demonstrated knowledge of protocol to escalate concerns",
  "Must be self-directed and show initiative",
  "Demonstrated ability to work independently with minimal supervision",
  "Demonstrated ability to attend work on a regular basis",
];

export const skillsAbilities = [
  "Ability to provide a Person-Centered holistic approach to care",
  "Ability to communicate effectively both verbally and in writing.",
  "Ability to work independently, organize workload and establish priorities.",
  "Ability to work effectively as part of an inter-disciplinary team.",
  "Knowledge of community dynamics, agencies and resources.",
  "Physical ability to perform the duties of the position.",
  "Ability to operate related equipment.",
  "Ability to work independently and show initiative",
  "Ability to deal effectively with a wide range of community and facility contacts.",
  "Ability to demonstrate sound professional judgment, empathy, tact and integrity.",
  "Excellent assessment, care planning and coordination skills.",
];

export const specificSkills = [
  "Select appropriate exercises, apparatus and manipulations",
  "Plan physiotherapy programs",
  "Maintain clinical and progress reports",
  "Confer with other health professionals",
  "Assess patients’ physical abilities",
  "Teach and/or supervise exercises to patients",
  "Security and Safety",
];

export const workConditions = [
  "Fast-paced environment",
  "Work under pressure",
  "Attention to detail",
  "Combination of sitting, standing, walking",
  "Standing for extended periods",
];

export const personalSuitability = [
  "Effective interpersonal skills",
  "Excellent oral communication",
  "Client focus",
  "Interpersonal awareness",
  "Judgement",
  "Punctuality",
];

export const keySkills = [
  "Reliability and discretion",
  "Adaptability",
  "Communication, negotiation and relationship-building skills",
];

export const oSkills = [
  "IT skills",
  "Problem solving skills",
  "Initiative",
  "Leadership and the ability to make things happen",
  "Budgeting skills",
  "Attention to detail",
];

export const responsibilities = [
  "organising meetings and managing databases",
  "organising company events or conferences",
  "ordering stationery and furniture",
  "dealing with correspondence, complaints and queries",
  "preparing letters, presentations and reports",
  "supervising and monitoring the work of administrative staff",
  "managing office budgets",
  "liaising with Staff and Participants",
  "implementing and maintaining procedures/office administrative systems",
  "organising induction programmes for new employees",
  "ensuring that health and safety policies are up to date",
  "using a range of software packages",
  "attending meetings with senior management",
  "assisting the organisation’s HR function by keeping personnel records up to date, arranging interviews.",
];

export const includedSil = [
  "Support with supervision, safety and security",
  "Assistance with personal care tasks",
  "Assistance with capacity building tasks (for example, meal prep and cooking, cleaning, routine development)",
  "Behaviour support and social skill development",
  "Administration of medication",
  "Support for medical appointments",
  "Community access that is not routine or regular (for example, support to complete personal tasks)",
  "Support to get to and from community access activities (where this is the participant’s preference)",
];

export const notIncludedSil = [
  "Cost of groceries",
  "Rent, board or lodging costs",
  "Utilities – gas, electricity, water, telephone, internet",
  "Household budgeting/bill paying activities",
  "Expenses related to holidays, including travel costs",
  "Personal care supports while the participant is in hospital",
  "Specialist Disability Accommodation (SDA) related costs (such as property maintenance costs, repairs, vacancy costs)",
  "Ongoing costs and supports for vacancies (which is built into the price limit)",
  "Regular community access",
  "Specific funding for staff to attend training for the participant’s support needs (which is built into the price limit)",
  "Shadow shifts",
  "Organisational management costs",
  "Allied Health staff, including those employed by SIL provider",
  "Vehicle costs",
  "Temporary Transformation Payment (TTP) pricing",
  "Justice related supports",
  "Community supervision orders",
  "Nursing, medical care and other health related supports",
  "Items covered in other sections of the NDIS Pricing Arrangements and Price Limits (such as transport costs, assistive technology, personal care while in the workplace, plan management, financial intermediary supports, clinical or allied health services)",
];

export const provisions = [
  "General Household cleaning and laundry",
  "Meal preparation",
  "Assistance with catching Public Transport",
  "New Hobby Assistance",
  "Transport assistance to appointments",
  "Assistance with administration of medication",
  "Personal Care such as showering and dressing",
];

export const stac = [
  "the need for Short Term Accommodation is related to your disability",
  "it helps you pursue your goals",
  "it helps you to participate in the community",
  "it’s value for money",
  "how much support your family and other informal supports provide",
];

export const supportFunding = [
  "support a child in the long term",
  "maintain your family situation.",
];

export const supportInclude = [
  "support in your home",
  "training to implement a behaviour support plan or build capacity in other areas. For example, this might help parents support their child in creating a sleep routine",
  "community access to help you socialise and interact with your community",
  "help to supervise behaviours of concern or support positive behaviour strategies.",
];

export const professionalAssist = [
  "We provide assistance with developing independent living and social skills.",
  "We provide assistance with personal care.",
  "We provide opportunities to socialize and to get involved in recreational activities in the community.",
  "We cater to the needs of the individual and provide assistance with personal care.",
  "We also provide our services in the comfort of your own home if that is your preference.",
  "Our service is available for both children and adults.",
];

export const trainingDevelopment = [
  "Nutrition: such as grocery shopping and meal-planning",
  "Personal Hygiene: such as personal care, toileting",
  "Household Tasks",
  "Public Transport Training",
  "Problem solving",
  "Job readiness- including resume and interview prep",
  "Liaising with Public Trustee",
  "Time Management and Problem Solving",
  "Budgeting",
  "Communication and Social Skills development",
];



export const missionVision = [
  {
    icon: Aid,
    heading: 'Providing Aid and Saving Lives',
    text: 'Humanitarian efforts make a difference in times of crisis. Learn how we\'re making an impact.'
  },
  {
    icon: Help,
    heading: 'Relief for Those in Need',
    text: 'Dedicated to providing humanitarian assistance and support to vulnerable communities worldwide.'
  },
  {
    icon: LifeTap,
    heading: 'Empowering Communities, Saving Lives',
    text: 'Discover how our humanitarian work is transforming lives and bringing hope to those who need it most.'
  },
  {
    icon: LifeSupport,
    heading: 'Humanitarian Support When It Matters Most',
    text: 'Learn about our emergency response efforts and how we\'re helping those affected by crisis.'
  },
  // {
  //   icon: LifeTap,
  //   heading: 'Making a Difference, One Life at a Time',
  //   text: 'Explore our humanitarian initiatives and see how you can be part of creating positive change in the world.'
  // },
  // {
  //   icon: Impact,
  //   heading: 'Dedicated to impacting humanity through humanitarian efforts.',
  //   text: 'Learn about our emergency response efforts and how we\'re helping those affected by crisis.'
  // },
];

export const focusAreas = [
  {
    icon: School,
    name: 'Education'
  },
  {
    icon: Health,
    name: 'Health'
  },
  {
    icon: Economy,
    name: 'Economic Empowerment'
  },
  {
    icon: LifeSupport,
    name: 'Humanitarian Response'
  },
  {
    icon: Emergency,
    name: 'Emergency assistance'
  },
  {
    icon: PovertyAlleviation,
    name: 'Poverty Alleviation'
  },

];

export const accomplishmentCarousel = [
  {
    icon: LifeTap,
    heading: 'Humanitarian',
    text: 'With every project, outreach, and partnership, we remain committed to restoring hope, improving lives, and building a future where no one is left behind.'
  },
  {
    icon: Economy,
    heading: 'Generous',
    text: 'Our generous services are built on a commitment to giving, compassion, and meaningful impact. We focus on providing support, resources, and opportunities that help individuals and communities grow stronger.'
  },
  {
    img: images.portrait_oau,
    heading: 'OAU',
    text: 'As a transformative leader, OAU\'s legacy is built on determination, service, and a pursuit of positive change. He\'s an advocate of prosperity, which describes the objectives of his foundation as delivering positivity to humanity.'
  },
  {
    icon: Mission,
    heading: 'Our Mission',
    text: 'To empower communities and promote human well-being through sustainable development programs, emergency response, and advocacy.'
  },
  {
    icon: Telescope,
    heading: 'Our Vision',
    text: 'A world where every individual has access to basic necessities, opportunities, and rights, enabling them to live a dignified and fulfilling life.'
  },
  {
    icon: Politics,
    heading: 'politics',
    text: 'In politics, OAU was a 2023 gubernatorial candidate in Abia State under the umbrella of Action Alliance (AA) party, advocating for a leadership that\'s transparent, developmental, and accountable to the people of his state'
  },
];