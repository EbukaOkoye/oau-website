import {
  Chat,
  CheckCircle,
  ClipboardCheck,
  Copy,
  DoubleRight,
  Email,
  Facebook,
  LinkedinIn,
  Location,
  Phone,
  Pinterest,
  ReceiveMoney,
  Skype,
  Telegram,
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
    name: "ABOUT US",
    link: "/about-us",
  },
  {
    name: "FAQS",
    link: "/faqs",
  },
  {
    name: "CONTACT",
    link: "/contact",
  },
  {
    name: "CAREERS",
    link: "/careers",
  },
];

export const subLinks = [
  {
    name: "Supported Independent Living",
    link: "/supported-independent-living",
  },
  {
    name: "Short Term Accommodation",
    link: "/short-term-accomodation",
  },
  {
    name: "Life Skills Assistance",
    link: "/assistance-with-daily-living-life-skills",
  },
  {
    name: "Personal Activities Assistance",
    link: "/assistance-with-daily-personal-activities",
  },
  {
    name: "Community Participation",
    link: "/",
  },
  {
    name: "Support Coordination",
    link: "/",
  },
  {
    name: "Community Nursing",
    link: "/",
  },
  {
    name: "Household Tasks",
    link: "/",
  },
  {
    name: "Psychosocial Recovery Coach",
    link: "/",
  },
];

export const heroImages = [
  images.home_hero,
  images.home_hero_two,
  images.home_hero_three,
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

export const services = [
  {
    id: "support-coordination",
    title: "Support Coordination",
    category: "NDIS Services",
    description:
      "Transitioning to a new stage of life is daunting for anyone, and we understand that it can be even harder if you have a disability. We at Sunflower Care excel at supporting NDIS participants through life's transitions and help...",
    mainImage: images.thumbnail_one.src,
    thumbnail: images.thumbnail_one.src,
  },
  {
    id: "daily-life",
    title: "Daily Life",
    category: "NDIS Services",
    description:
      "Assistance with daily personal activities, including showering, dressing, and meal preparation, to help you live independently.",
    mainImage: images.thumbnail_two.src,
    thumbnail: images.thumbnail_two.src,
  },
  {
    id: "community-access",
    title: "Community Access",
    category: "NDIS Services",
    description:
      "Support to participate in community activities, social events, and recreational programs, fostering inclusion and connection.",
    mainImage: images.thumbnail_three.src,
    thumbnail: images.thumbnail_three.src,
  },
  {
    id: "therapy",
    title: "Therapy & Allied Health",
    category: "NDIS Services",
    description:
      "Access to various therapies like occupational therapy, physiotherapy, and speech pathology to improve functional abilities.",
    mainImage: images.thumbnail_four.src,
    thumbnail: images.thumbnail_four.src,
  },
  {
    id: "employment",
    title: "Employment Support",
    category: "NDIS Services",
    description:
      "Guidance and support to find and maintain employment, including job coaching, resume building, and workplace assistance.",
    mainImage: images.thumbnail_five.src,
    thumbnail: images.thumbnail_five.src,
  },
  {
    id: "respite",
    title: "Respite Care",
    category: "NDIS Services",
    description:
      "Short-term care options to provide a break for carers, ensuring participants receive continuous support in a safe environment.",
    mainImage: images.thumbnail_six.src,
    thumbnail: images.thumbnail_six.src,
  },
];

export const happyTestimony = [
  {
    testimony:
      "I was happy with the NDIS plan I received but I was overwhelmed with the process of organising my supports. My friend suggested to contact Sunflower Care, in a couple of days I was at so easy as all my support needs were organised with my choice. Quite happy with the services I have been receiving from Sunflower Care.",
    pic: images.jacob,
    name: "Jacob",
    county: "Cowandilla, SA",
  },
  {
    testimony:
      "I am so thankful to Sunflower Care team for assisting me to understand my daughter's NDIS plan, I work full-time work and I was unable to spend much time to organise supports but since I started receiving services from Sunflower Care my daughters is fully utilising her NDIS plan. I highly recommend Sunflower Care and would like to thank everyone in the team for their support and services.",
    pic: images.cynthia,
    name: "Cynthia",
    county: "Craigmore, SA",
  },
  {
    testimony:
      " I was supported by my Support Coordinator and staff in my NDIS plan reviews, it really helped me to get the right plan for my required supports. Support Coordinator assisted to draft my goals for the new plan, I was so much in control of my NDIS review meeting. Thank you Sunflower Care.",
    pic: images.tom,
    name: "Tom",
    county: "Beverly, SA",
  },
];

export const approachList = [
  {
    icon: DoubleRight,
    text: "We support our participants to be involved in making decisions about their life",
  },
  {
    icon: DoubleRight,
    text: "We take into account your life experience, age, gender, culture, heritage, language, beliefs and identity",
  },
  {
    icon: DoubleRight,
    text: "We provide flexible services and support to suit your needs and priorities",
  },
  {
    icon: DoubleRight,
    text: "We believe and acknowledged you as the experts in your life, we work with you to provide the right support you need and emphasize on maintaining and improving your personal independence.",
  },
  {
    icon: DoubleRight,
    text: "We include our Participant’s support networks as partners.",
  },
];

export const usefulLinks = [
  {
    label: "RHDP",
    href: "/",
  },
  {
    label: "Start Career",
    href: "/careers",
  },
  {
    label: "What is NDIS",
    href: "/faqs",
  },
  {
    label: "Refer Someone",
    href: "/",
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

export const missionVisionValues = [
  {
    img: images.space,
    title: "Our Mission",
    text: "Our Mission is to ensure an inclusive community where dignity, rights and social justice of all citizens are guaranteed through appropriate support, specific individualized intervention and working alongside relevant stakeholders.",
  },
  {
    img: images.vision,
    title: "Our Vision",
    text: "Our Vision is to ensure an inclusive community where dignity, rights and social justice of all citizens are guaranteed.",
  },
  {
    img: images.srum_board,
    title: "Our Values",
    text: "",
    description: [
      "Integrity in Service Delivery",
      "Dignity in Care Services",
      "Respect your privacy and confidentiality",
      "Accountability in everything we do",
      "Inclusion by giving equal opportunity and embracing diversity",
    ],
  },
];

export const aboutServices = [
  {
    img: images.supported,
    title: "Supported Independent Living",
    text: "Supported Independent Living is an assistance provided to NDIS participants, where a person with disability is supported…",
    btn_link: "Read More",
  },
  {
    img: images.short_term,
    title: "Short Term Accommodation",
    text: "We at Sunflower Care are dedicated to your personal needs and aspirations and we offer Short Term Accommodation…",
    btn_link: "Read More",
  },
  {
    img: images.asstistance,
    title: "Assistance with Daily Living Life Skills",
    text: "Our Daily-Living Life Skills Program provides our participants with assistance in developing life skills…",
    btn_link: "Read More",
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

export const assistSupport = [
  "Bathing, dressing, toileting and grooming up to 2 hours per day – including bowel management, skin care, bladder management, menstrual care;",
  "Assistance with eating up to 2 hours per day which may include assistance with medication;",
  "Mobility including exercise, positioning, moving up to 1 hour per day; and",
  "Where toileting assistance alone is required, up to 1 hour a day.",
];

export const circumstance = [
  "Whether the participant has high care needs, for example unstable seizure activity or respiratory support;",
  "The weight (and other physical aspects) of the participant;",
  "The medical condition of the participant, including any medication required;",
  "Whether the need for a higher level of support is of a temporary nature. For example, due to waiting for a suitable home modification (for example, a bathroom modification) to be completed;",
  "Whether two people are required for transfers;",
  "Whether there are behavioural concerns which require more intensive assistance with personal care activities and there are no other options, for example behavioural support intervention; and",
  "Whether additional time limited funding is likely to reduce a participant’s longer term support costs by building their capacity to independently perform personal care activities.",
  "The NDIA will also consider whether assistive technology, home modifications or other supports can be used to reduce the level of assistance with daily personal activities.",
];

export const personalSupport = [
  "Maximise the independence and functional skills of the participant;",
  "Are appropriate to the participant’s age and circumstances; and",
  "Whether alternative arrangements or supports could meet a participant’s needs in a less intrusive manner. For example, aids and equipment may enable a participant to complete tasks for themselves or the provision of training may increase the participant’s independence in the tasks.",
];

export const servicesInclude = [
  "Assistance with shopping and meal preparation",
  "Assistance with personal care",
  "Personal hygiene, including showering, bathing, oral hygiene, dressing and grooming;",
  "Assistance with household management skills",
  "Bladder and bowel management and menstrual care",
  "Assistance with appointments",
  "Developing your hobbies and interests",
  "Using aids and appliances, hearing and communication devices;",
];
