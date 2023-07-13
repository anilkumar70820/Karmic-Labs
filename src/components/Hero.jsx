import React from 'react'
import logo from '../assets/images/png/logo_img.png'
import arrow from '../assets/images/svg/arrow.svg'
import hero_img from '../assets/images/png/hero_img.png'
import web_line from '../assets/images/svg/web_line.svg'
import { Container, Row, Col } from 'react-bootstrap'
export const Hero = () => {
  return (
    <section className='bg_img position-relative'>
      <div className='blur_moon_hero'></div>
      <header className='py-3'>
        <Container>
          <nav className='d-flex justify-content-between align-items-center '>
            <a href="#logo"><img src={logo} alt="logo" /></a>
            <input type="checkbox" id="menuIcon" class="d-none" />
            <label for="menuIcon" className='d-lg-none'>
              <span></span>
              <span></span>
              <span></span>
            </label>
            <ul className='d-flex justify-content-center align-items-center p-0 gap-5 mb-0 sm_screen'id='mynav'>
              <li><a className='header_links' href="#Home">Home</a></li>
              <li><a className='header_links' href="#Services">Services</a></li>
              <li><a className='header_links' href="#Projects">Projects</a></li>
              <li><a className='header_links' href="#About">About</a></li>
              <li> <button className='ff_sun_flower fw-bold fs_sm text_040404 connect_wallet_btn d-lg-none'>Connect Wallet</button></li>
            </ul>
            <button className='ff_sun_flower fw-bold fs_sm text_040404 connect_wallet_btn d-none d-lg-block'>Connect Wallet</button>
          </nav>
        </Container>
      </header>
      <div className=' hero_bg pt-5' id='Home'>
        <Container className=' mt-5'>
          <Row className=" align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <h1 data-aos="fade-left" data-aos-duration="800" className='ff_sun_flower fs_xl fw-light text_ffffff mb-3'>We are believers <span className='d-lg-block'>decentralization </span>and <span className='position-relative '> <img className='web_line d-none d-lg-block' src={web_line} alt="line" /> <img className='web_line_2 d-none d-lg-block' src={web_line} alt="line" />Web3.</span> </h1>
              <p data-aos="fade-left" data-aos-duration="800" className='ff_Space_Grotesk fs_sm fw-normal text_ffffff mb-4 pb-3'>Vulputate tristique habitant neque, accumsan. Vitae ultrices nulla erat <span className='d-lg-block'>nibh aliquam, quis tempus volutpat arcu. Leo convallis luctus dis</span> malesuada turpis non consequat ac. </p>
              <div className='d-flex'><button className='ff_sun_flower fs_sm fw-bold text_040404 get_started_btn me-4'>Get Started <span className='ps-2'><svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.495 6.49497C17.7683 6.22161 17.7683 5.77839 17.495 5.50503L13.0402 1.05025C12.7668 0.776886 12.3236 0.776886 12.0503 1.05025C11.7769 1.32362 11.7769 1.76684 12.0503 2.0402L16.01 6L12.0503 9.9598C11.7769 10.2332 11.7769 10.6764 12.0503 10.9497C12.3236 11.2231 12.7668 11.2231 13.0402 10.9497L17.495 6.49497ZM0 6.7H17V5.3H0V6.7Z" fill="black" />
              </svg>
              </span></button>
                <button className='ff_sun_flower fs_sm fw-light text_ffffff read_more_btn ms-2'>Read More</button>
              </div>
            </Col>
            <Col lg={6} data-aos="fade-right" data-aos-duration="800" className='d-flex justify-content-lg-end justify-content-center'>
              <img className='w_sm_100' src={hero_img} alt="cards_img" />
            </Col>
          </Row>
          <div data-aos="fade-down" data-aos-duration="800" className='d-flex justify-content-center mt-5 pb-5'><img src={arrow} alt="arrow" /></div>
        </Container>
      </div>
    </section>
  )
}
