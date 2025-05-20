"use client";
import Link from "next/link";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { usePathname } from "next/navigation";
const Footer = () => {
  const pathname = usePathname();
  const footerRef = useRef(null);

  useGSAP(() => {
    gsap.from(footerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  }, []);
  if (pathname.includes("login") || pathname.includes("register")) {
    return null;
  }
  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-[#00026e] p-5"
    >
      <div className="absolute w-[200px] h-[200px] bg-white/10 rounded-full top-[-100px] left-[-100px] z-0"></div>
      <div className="relative  w-11/12 mx-auto">
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <h1 className="text-white text-4xl font-bold mb-3">E-TicketBD</h1>
            <p className="text-sm text-gray-300">
              E-TicketBD – Your trusted platform for booking bus, train, and
              event tickets online. Secure, fast, and hassle-free ticketing
              anytime, anywhere.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline  text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline text-gray-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline text-gray-300">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Service</h3>

            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline  text-gray-300">
                  Bus Tickets
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline text-gray-300">
                  Air Tickets
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline text-gray-300">
                  Train Tickets
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline text-gray-300">
                  Launch Tickets
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Contact</h3>
            <div className="flex items-center gap-3">
              <MdEmail className="text-xl text-white " />
              <a
                href=" info@e-ticketbd.com"
                className="hover:underline text-gray-300"
              >
                info@e-ticketbd.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MdPhone className="text-xl text-white 0" />
              <a
                href="tel:09642080808"
                className="hover:underline text-gray-300"
              >
                09642080808
              </a>
            </div>

            <div className="flex items-start gap-3">
              <MdLocationOn className="text-xl text-white mt-1" />
              <p className="text-gray-300">Road 24, House 15, Dhaka 1212</p>
            </div>
          </div>
        </div>
        <hr className="my-3" />
        <div className="flex justify-between items-center gap-5">
          <p className="text-sm text-white">
            &copy; All rights reserved, E-Ticketbd Limited. 2025
          </p>
          <div className="flex items-center gap-4 justify-center mt-6">
            <Link href="/facebook" className="text-white  text-xl ">
              <FaFacebookF />
            </Link>
            <Link href="/linkedin" className="text-white 0 text-xl ">
              <FaLinkedinIn />
            </Link>
            <Link href="/twitter" className="text-white  text-xl ">
              <FaXTwitter />
            </Link>
            <Link href="/whatsapp" className="text-white 0 text-xl ">
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute w-[200px] h-[200px] bg-white/10 rounded-full bottom-[-100px] right-[-100px] z-0"></div>
    </footer>
  );
};

export default Footer;
