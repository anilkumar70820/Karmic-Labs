import React from 'react'
import contract from '../assets/images/svg/contract.svg'
import moon from '../assets/images/png/moon.png'
import nft from '../assets/images/svg/nft.svg'
import proof from '../assets/images/svg/proof.svg'
import support from '../assets/images/svg/support.svg'
import { Container, Row,Col } from 'react-bootstrap'
export const Services = () => {
    return (
        <section className='bg_img position-relative'id='Services'>
                  <div className='blur_moon_services'></div>
                  <div className='blur_moon_services_2'></div>
            <Container className='py-5'>
                <h2 data-aos="fade-right" data-aos-duration="800" className='text_ffffff fw-light ff_sun_flower fs_lg text-center mb-5 pb-4 mt-lg-5 position-relative service_line'>SERVICES</h2>
                <Row className='mb-lg-5 pb-lg-5'>
                    <Col lg={3} md={4} sm={6} xs={12} data-aos="fade-down" data-aos-duration="800" className="mb-4 mb-lg-0 position-relative col_hover">
                        <img className="moon_absoulte moon" src={moon} alt="moon" />
                        <div className="card_box p-3 card_box_border opacity-75">
                            <img className="mb-4" src={contract} alt="contract" />
                            <h2 className="mb-2 ff_Space_Grotesk fs_md fw-bold text_ffffff">Smart Contract </h2>
                            <p className="ff_Space_Grotesk fw-normal fs_sm text_ffffff mb-0">Eu faucibus libero leo,
                                malesuada justo,
                                tortor
                                pellentesque
                                quis sit. Dui
                                viverra at odio
                                sodales duis integer rhoncus pulvinar. Commodo massa aliquam.
                            </p>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12} data-aos="fade-up"data-aos-delay="300" data-aos-duration="800" className="mb-4 mb-lg-0 position-relative col_hover">
                        <img className="moon_absoulte moon" src={moon} alt="moon" />
                        <div className="card_box p-3 card_box_border opacity-75">
                            <img className="mb-4" src={proof} alt="proof" />
                            <h2 className="mb-2 ff_Space_Grotesk fs_md fw-bold text_ffffff">Proof </h2>
                            <p className="ff_Space_Grotesk fw-normal fs_sm text_ffffff mb-0">Nisl, sed morbi porta orci nunc. Curabitur vitae hendrerit justo ultricies quam vitae pellentesque tellus felis. Elementum tortor quis est morbi ullamcorper.
                            </p>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12} data-aos="fade-down"data-aos-delay="500" data-aos-duration="800" className="mb-4 mb-lg-0 position-relative col_hover">
                        <img className="moon_absoulte moon" src={moon} alt="moon" />
                        <div className="card_box p-3 card_box_border opacity-75">
                            <img className="mb-4" src={nft} alt="nft" />
                            <h2 className="mb-2 ff_Space_Grotesk fs_md fw-bold text_ffffff">NFT solutions</h2>
                            <p className="ff_Space_Grotesk fw-normal fs_sm text_ffffff mb-0">Id nam massa sit ut purus tortor est ultrices nunc. Ipsum, nibh egestas vehicula tellus. Molestie adipiscing diam nibh lectus. Magna id nisl quis vestibulum rhoncus.
                            </p>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12} data-aos="fade-up"data-aos-delay="600" data-aos-duration="800" className="position-relative col_hover">
                        <img className="moon_absoulte moon" src={moon} alt="moon" />
                        <div className="card_box p-3 card_box_border opacity-75">
                            <img className="mb-4" src={support} alt="support" />
                            <h2 className="mb-2 ff_Space_Grotesk fs_md fw-bold text_ffffff">Support</h2>
                            <p className="ff_Space_Grotesk fw-normal fs_sm text_ffffff mb-0">Tellus id et fringilla auctor. Ac viverra ullamcorper nec, senectus at nulla. Metus sem egestas volutpat cras phasellus cursus augue sagittis, enim. Sit et cras.
                            </p>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}
