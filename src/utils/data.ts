import {
  CheckCircle,
  DoubleRight,
  Email,
  Facebook,
  LinkedinIn,
  Location,
  Phone,
  Pinterest,
  Skype,
  Telegram,
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
    link: "/",
  },
  {
    name: "CONTACT",
    link: "/",
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
    title: 'Our Mission',
    text: 'Our Mission is to ensure an inclusive community where dignity, rights and social justice of all citizens are guaranteed through appropriate support, specific individualized intervention and working alongside relevant stakeholders.'
  },
  {
    img: images.vision,
    title: 'Our Vision',
    text: 'Our Vision is to ensure an inclusive community where dignity, rights and social justice of all citizens are guaranteed.'
  },
  {
    img: images.srum_board,
    title: 'Our Values',
    text: '',
    description: [
      'Integrity in Service Delivery',
      'Dignity in Care Services',
      'Respect your privacy and confidentiality',
      'Accountability in everything we do',
      'Inclusion by giving equal opportunity and embracing diversity',
    ],
  }
];