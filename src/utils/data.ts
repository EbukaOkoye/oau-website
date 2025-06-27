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
];

export const heroImages = [
  images.about_img,
  images.about_img,
  images.about_img,
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
      "Transitioning to a new stage of life is daunting for anyone, and we understand that it can be even harder if you have a disability. We at Hola Support excel at supporting NDIS participants through life's transitions and help...",
    mainImage: images.thumbnail_one,
    thumbnail: images.thumbnail_one,
  },
  {
    id: "daily-life",
    title: "Daily Life",
    category: "NDIS Services",
    description:
      "Assistance with daily personal activities, including showering, dressing, and meal preparation, to help you live independently.",
    mainImage: images.thumbnail_two,
    thumbnail: images.thumbnail_two,
  },
  {
    id: "community-access",
    title: "Community Access",
    category: "NDIS Services",
    description:
      "Support to participate in community activities, social events, and recreational programs, fostering inclusion and connection.",
    mainImage: images.thumbnail_three,
    thumbnail: images.thumbnail_three,
  },
  {
    id: "therapy",
    title: "Therapy & Allied Health",
    category: "NDIS Services",
    description:
      "Access to various therapies like occupational therapy, physiotherapy, and speech pathology to improve functional abilities.",
    mainImage: images.thumbnail_four,
    thumbnail: images.thumbnail_four,
  },
  {
    id: "employment",
    title: "Employment Support",
    category: "NDIS Services",
    description:
      "Guidance and support to find and maintain employment, including job coaching, resume building, and workplace assistance.",
    mainImage: images.thumbnail_five,
    thumbnail: images.thumbnail_five,
  },
  {
    id: "respite",
    title: "Respite Care",
    category: "NDIS Services",
    description:
      "Short-term care options to provide a break for carers, ensuring participants receive continuous support in a safe environment.",
    mainImage: images.thumbnail_six,
    thumbnail: images.thumbnail_six,
  },
];

export const happyTestimony = [
  {
    testimony:
      "I was happy with the NDIS plan I received but I was overwhelmed with the process of organising my supports. My friend suggested to contact Hola Support, in a couple of days I was at so easy as all my support needs were organised with my choice. Quite happy with the services I have been receiving from Hola Support.",
    pic: images.jacob,
    name: "Jacob",
    county: "Cowandilla, SA",
  },
  {
    testimony:
      "I am so thankful to Hola Support team for assisting me to understand my daughter's NDIS plan, I work full-time work and I was unable to spend much time to organise supports but since I started receiving services from Hola Support my daughters is fully utilising her NDIS plan. I highly recommend Hola Support and would like to thank everyone in the team for their support and services.",
    pic: images.cynthia,
    name: "Cynthia",
    county: "Craigmore, SA",
  },
  {
    testimony:
      " I was supported by my Support Coordinator and staff in my NDIS plan reviews, it really helped me to get the right plan for my required supports. Support Coordinator assisted to draft my goals for the new plan, I was so much in control of my NDIS review meeting. Thank you Hola Support.",
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
    href: "/",
  },
  {
    label: "What is NDIS",
    href: "/",
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
    text: "We at Hola Support are dedicated to your personal needs and aspirations and we offer Short Term Accommodation…",
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
