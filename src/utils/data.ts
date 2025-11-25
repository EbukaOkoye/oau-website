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
  RightArrow,
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
      `High Chief Uche is more
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
  },
  {
    testimony:
    `Uchechukwu S. Ogah, PhD, CON, FCA “Your dedication to touching
            lives, uplifting communities, and setting a standard of excellence
            has made this day more than a personal milestone—it is a celebration
            for everyone blessed by your impact.`,
    pic: images.cynthia,
    name: "Cynthia",
  },
  {
    testimony:
    `“Your dedication to touching lives, uplifting communities, and setting a standard of excellence has made this day more than a personal milestone—it is a celebration for everyone blessed by your impact. May the coming years unveil new heights of fulfillment, influence, and joy,”`,
    pic: images.uche_ogah,
    name: "Uchechukwu S. Ogah, PhD, CON, FCA",
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

export const contactTexts = [
  {
    icons: Health,
    name: 'Compassionate'
  },
  {
    icons: LifeSupport,
    name: 'Charitable'
  },
  {
    icons: Help,
    name: 'Socially Concerned'
  },
];

export const footerFocusArea = [
{
  icon: RightArrow,
  name: 'Education'
},
{
  icon: RightArrow,
  name: 'Health'
},
{
  icon: RightArrow,
  name: 'Economic Empowerment'
},
{
  icon: RightArrow,
  name: 'Humanitarian Response'
},
];

export const quickLinks = [
  {
    icon: RightArrow,
    name: 'HOME',
    link: '/'
  },
  {
    icon: RightArrow,
    name: 'BIO',
    link: '/bio'
  },
  {
    icon: RightArrow,
    name: 'THE OAU FOUNDATION',
    link: '/oau-foundation'
  },
  {
    icon: RightArrow,
    name: 'CONTACT US',
    link: '/contact'
  },
];