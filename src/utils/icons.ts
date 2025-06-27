import {
  FaPhoneAlt,
  FaArrowCircleRight,
  FaCheckCircle,
  FaAngleDoubleRight,
  FaAngleRight,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaPinterest,
  FaTelegram,
  FaSkype,
  FaClipboardCheck,
  FaCopy,
  FaThumbsUp,
  FaPlus,
  FaMinus,
  FaCalendarCheck,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoTimeSharp, IoCloseSharp } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { GiReceiveMoney } from "react-icons/gi";
import { BsChatDotsFill } from "react-icons/bs";
import { RiMenu2Fill } from "react-icons/ri";


export const Phone = FaPhoneAlt;
export const CircleArrow = FaArrowCircleRight;
export const CheckCircle = FaCheckCircle;
export const Location = FaLocationDot;
export const RightArrow = FaAngleRight;
export const Facebook = FaFacebook;
export const Twitter = FaTwitter;
export const LinkedinIn = FaLinkedinIn;
export const Whatsapp = FaWhatsapp;
export const Pinterest = FaPinterest;
export const Telegram = FaTelegram;
export const Skype = FaSkype;
export const DoubleRight = FaAngleDoubleRight;
export const ClipboardCheck = FaClipboardCheck;
export const Copy = FaCopy;
export const ThumbsUp = FaThumbsUp;
export const Plus = FaPlus;
export const Minus = FaMinus;
export const CalendarCheck = FaCalendarCheck;
export const Email = MdEmail;
export const Send = IoIosSend;
export const Time = IoTimeSharp;
export const CloseX = IoCloseSharp;
export const ReceiveMoney = GiReceiveMoney;
export const Chat = BsChatDotsFill;
export const Menu = RiMenu2Fill;




// open={open}
          // onClose={closeDrawer}
          // className={`p-4 bg-white z-[1000] translate-x-full ${
          //   !open ? "!-translate-x-full" : "!translate-x-[1000%]"
          // } lg:hidden `}
          // placement="left"
          // size={300}



      //     <Nav className="bg-gradient-to-r from-main-purple to-main-pink rounded-none border-0">
      //   <div className="flex justify-between px-4 py-3 md:px-8">
      //     <div className="hidden lg:flex w-full lg:justify-between gap-6 text-sm font-semibold">
      //       {navbarLinks.map((_link) => (
      //         <Link
      //           key={_link.name}
      //           href={_link.link}
      //           className={`hover:bg-white hover:text-main-purple p-3 ${
      //             _link.link === pathname
      //               ? "bg-white text-main-purple"
      //               : "text-white"
      //           }`}
      //         >
      //           {_link.name}
      //         </Link>
      //       ))}
      //     </div>

      //     <div className="lg:hidden mb-3">
      //       <IconButton
      //         variant="text"
      //         // onClick={() => setOpen(true)}
      //         onClick={() => setOpenNav(!openNav)}
      //         className="mb-3"
      //       >
      //         <Menu className="h-6 w-6 text-white my-auto mb-3" />
      //       </IconButton>
      //     </div>
      //   </div>

      //   <Collapse open={openNav}>
      //     <div className="flex justify-between items-center mb-4">
      //       <span className="font-bold text-lg text-deep-orange">Menu</span>
      //       {/* <IconButton variant="text" onClick={closeDrawer}> */}
      //       <CloseX
      //         className="h-6 w-6 text-deep-orange cursor-pointer"
      //         // onClick={closeDrawer}
      //         onClick={() => setOpenNav(!openNav)}
      //       />
      //       {/* </IconButton> */}
      //     </div>
      //     <div className="flex flex-col gap-4">
      //       {navbarLinks.map((_link) => (
      //         <a
      //           key={_link.name}
      //           href={_link.link}
      //           onClick={() => setOpenNav(!openNav)}
      //           className={`text-main-pink hover:text-main-purple ${
      //             _link.link === pathname && "!text-main-pink"
      //           } text-sm font-medium`}
      //         >
      //           {_link.name}
      //         </a>
      //       ))}
      //     </div>
      //   </Collapse>
      // </Nav>