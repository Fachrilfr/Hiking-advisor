import React, {useEffect} from 'react'
import './footer.css'
import video2 from '../../Assets/video (2).mp4'
import { FiSend } from "react-icons/fi"
import { GiMountains } from "react-icons/gi"
import { FaXTwitter } from "react-icons/fa6"
import { AiFillYoutube } from "react-icons/ai"
import { AiOutlineInstagram } from "react-icons/ai"
import { FaTripadvisor } from "react-icons/fa"
import { FiChevronRight } from "react-icons/fi";

import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='footer'>
        <div className="videoDiv">
          <video src={video2} loop autoPlay muted type="video/mp4"></video>
        </div>

        <div className="secContent container">
          <div className="contactDiv flex">
            <div data-aos="fade-up" className="text">
              <small>KEEP IN TOUCH</small>
              <h2>Hiking with us</h2>
            </div>

            <div className="inputDiv flex">
              <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
              <button data-aos="fade-up" className='btn flex' type='submit'>
                SEND <FiSend className="icon"/>
              </button>
            </div>

          </div>

          <div className="footerCard flex">
            <div className="footerIntro flex">
              <div className="logoDiv">
                <a href="#" className='logo flex'>
                  <GiMountains className="icon"/> Mountra
                </a>
              </div>

              <div data-aos="fade-up" className="footerParagraph">
                Mountra hadir sebagai solusi inovatif bagi para pendaki gunung di Indonesia.
                Aplikasi ini memungkinkan kamu untuk memesan tiket pendakian secara online dengan mudah dan aman.
                Dengan menggunakan Mountra, kamu dapat fokus pada petualanganmu di gunung tanpa perlu khawatir dengan urusan administratif.
              </div>

              <div data-aos="fade-up" className="footerSocials flex">
                <FaXTwitter className="icon"icon/>
                <AiFillYoutube className="icon"icon/>
                <AiOutlineInstagram className="icon"/>
                <FaTripadvisor className="icon"/>

              </div>
            </div>

            <div className="footerLinks grid">
              
              {/* Group One */}
              <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                <span className='groupTitle'>
                  OUR AGENCY
                </span>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Home
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Porter
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Check Quota
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  News
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Contact
                </li>
              </div>

              {/* Group Two */}
              <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                <span className='groupTitle'>
                  OUR AGENCY
                </span>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Service
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Insurance
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Agency
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Tourism
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Payment
                </li>
              </div>

              {/* Group Three */}
              <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                <span className='groupTitle'>
                  LOCATION
                </span>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Jawa Barat
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Jawa Tengah
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Jawa Timur
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  NTB
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  DLL
                </li>
              </div>

            </div>

            <div className="footerDiv flex">
              <small>COPYRIGHTS RESERVED - FACHRIL 2024</small>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Footer
