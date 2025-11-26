import {
  Aid,
  CheckCircle,
  Economy,
  Email,
  Emergency,
  Facebook,
  Health,
  Help,
  Instagram,
  LifeSupport,
  LifeTap,
  Location,
  Mission,
  Phone,
  Politics,
  PovertyAlleviation,
  RightArrow,
  School,
  Telescope,
  Value,
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
      `OAU is more
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
    `Your dedication to touching
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
    href: "https://web.facebook.com/onyekwereAkym/?_rdc=1&_rdr#",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/ucheakym/",
  },
];

export const contactInfo = [
  {
    icon: Phone,
    label: "09035269615",
  },
  {
    icon: Email,
    label: "info@onyekwereakymuche.com",
  },
  {
    icon: Location,
    label: `Plot 56/58 umuokeyi World Bank Housing\n Estate Annexed. Umuahia, Abia state`,
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

export const foundationMission = [
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
    icon: Value,
    heading: 'Our Approach',
    text: 'We work in partnership with local communities, governments, and international organizations to design and implement effective programs that address the root causes of poverty, inequality, and social injustice.'
  },
  {
    icon: Value,
    heading: 'Our Values',
    text: 'Compassion, integrity, accountability, and commitment to delivering high-quality services that make a lasting impact.'
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

export const foundationCoreValues = [
  {
    icon: School,
    heading: 'Education',
    text: 'Providing access to quality education, promoting literacy, and supporting educational infrastructure development.'
  },
  {
    icon: Health,
    heading: 'Health',
    text: 'Improving healthcare outcomes, increasing access to medical services, and promoting health awareness'
  },
  {
    icon: Economy,
    heading: 'Economic Empowerment',
    text: 'Supporting entrepreneurship, vocational training, and economic opportunities to reduce poverty and promote self-sufficiency.'
  },
  {
    icon: LifeSupport,
    heading: 'Humanitarian Response',
    text: 'Providing emergency assistance, relief, and support to communities affected by crises.'
  },
];