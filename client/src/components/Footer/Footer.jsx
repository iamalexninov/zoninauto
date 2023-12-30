import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

import {
  FaFacebookF as Facebook,
  FaLinkedin as Linkedin,
  FaPinterest as Pinterest,
  FaSquareXTwitter as Twitter,
} from "react-icons/fa6";
import {
  FaPhone as Phone,
  FaLocationDot as Location,
  FaArrowRight as Arrow,
  FaArrowUpLong as Up,
} from "react-icons/fa6";
import { MdEmail as Email } from "react-icons/md";

import ContactList from "../ContactList";

const Footer = () => {
  const footerIcons = [
    {
      icon: <Phone size={25} color="#fff" />,
      title: "Phone Number",
      description: "+359 896 35 6891",
    },
    {
      icon: <Email size={25} color="#fff" />,
      title: "Email Address",
      description: "zoninauto@gmail.com",
    },
    {
      icon: <Location size={25} color="#fff" />,
      title: "Address",
      description: "Bul. “Bulgaria” №25, Plovdiv, bulgaria ",
    },
  ];

  const scrollOnTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className={styles.footer}>
      <div className="wrapper">
        <div className={styles.top_footer}>
          <div className={styles.contact}>
            <h4 className={styles.contact_title}>Contact Us</h4>
            <p className={styles.contact_p}>
              Connect with us for personalized service at our dealership.
              Whether you`re exploring our inventory, seeking advice on models,
              or need financing help, our team is here.
            </p>
            <div className={styles.contact_icons}>
              {footerIcons.map((c) => (
                <>
                  <ContactList
                    icon={c.icon}
                    title={c.title}
                    description={c.description}
                  />
                </>
              ))}
            </div>
          </div>
          <ul className={styles.navigation}>
            <li>
              <h4>Navigation</h4>
            </li>
            <li>
              <Link>
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link>
                <p>About Us</p>
              </Link>
            </li>
            <li>
              <Link>
                <p>Dealership</p>
              </Link>
            </li>
            <li>
              <Link>
                <p>Blog</p>
              </Link>
            </li>
            <li>
              <Link>
                <p> Contact Us</p>
              </Link>
            </li>
          </ul>
          <ul className={styles.quick_list}>
            <li>
              <h4>Quick Links</h4>
            </li>
            <li>
              <Link>
                <p>Sign In</p>
              </Link>
            </li>
            <li>
              <Link>
                <p>New Cars</p>
              </Link>
            </li>
            <li>
              <Link>
                <p>Used Cars</p>
              </Link>
            </li>
            <li>
              <Link>
                <p>Shop</p>
              </Link>
            </li>
          </ul>
          <ul className={styles.legal}>
            <li>
              <h4>Legal</h4>
            </li>
            <li>
              <Link>
                <p>Terms & Conditions</p>
              </Link>
            </li>
            <li>
              <Link>
                <p>Privacy Policy</p>
              </Link>
            </li>
          </ul>
          <div className={styles.subscribe}>
            <h4 className={styles.subscribe_title}>Subscribe Us</h4>
            <div className={styles.subscribe_field}>
              <input type="text" placeholder="Your Email..." />
              <button className="btn">
                <Arrow size={20} />
              </button>
            </div>
            <p className={styles.subscribe_text}>Join our community for exclusive updates, insider access, and innovative insights delivered straight to your inbox.</p>
            <ul className={styles.subscribe_icons}>
              <li>
                <Linkedin size={25} color="#fff" />
              </li>
              <li>
                <Facebook size={25} color="#fff" />
              </li>
              <li>
                <Twitter size={25} color="#fff" />
              </li>
              <li>
                <Pinterest size={25} color="#fff" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottom_footer}>
          <p>Copyright © 2023. All rights reserved.</p>
          <button className="btn" onClick={scrollOnTop}>
            <Up size={20} />
          </button>
        </div>
    </footer>
  );
};

export default Footer;
