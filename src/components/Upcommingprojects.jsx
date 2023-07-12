import React from 'react'
import card_img_1 from '../assets/images/png/upcomming_project_card_1.png'
import card_img_2 from '../assets/images/png/upcomming_project_card_2.png'
import card_img_3 from '../assets/images/png/upcomming_project_card_3.png'
import card_img_4 from '../assets/images/png/upcomming_project_card_4.png'
export const Upcommingprojects = () => {
    return (
        <section className='bg_img py-5'>
            <div className="container">
                <h2 data-aos="fade-left" data-aos-duration="800" className='text_ffffff fw-light ff_sun_flower fs_lg text-center mb-5 position-relative upcomming_project_line'>UPCOMMING PROJECTS</h2>
                <div className="row mb-5 ">
                    <div data-aos="flip-left" data-aos-duration="800" className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5 mb-lg-0">
                        <div className='upcomming_project_card'>
                            <img className='mb-3 w-100' src={card_img_1} alt=" card_img_1" />
                            <div className='d-flex justify-content-between'>
                                <h3 className='ff_sun_flower fs_md fw-medium text_ffffff'>Candle Queen</h3>
                                <p className='ff_sun_flower fs_sm fw-bold text_ffffff'>15 : 54 : 12</p>
                            </div>
                            <h4 className='ff_Space_Grotesk fs_sm fw-light text_ffffff mb-0'>NFT</h4>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-delay="300" data-aos-duration="800" className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5 mb-lg-0">
                        <div className='upcomming_project_card'>
                            <img className='mb-3 w-100' src={card_img_2} alt=" card_img_2" />
                            <div className='d-flex justify-content-between'>
                                <h3 className='ff_sun_flower fs_md fw-medium text_ffffff'>Candle Queen</h3>
                                <p className='ff_sun_flower fs_sm fw-bold text_ffffff'>15 : 54 : 12</p>
                            </div>
                            <h4 className='ff_Space_Grotesk fs_sm fw-light text_ffffff mb-0'>NFT</h4>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-delay="500" data-aos-duration="800" className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5 mb-lg-0">
                        <div className='upcomming_project_card'>
                            <img className='mb-3 w-100' src={card_img_3} alt=" card_img_3" />
                            <div className='d-flex justify-content-between'>
                                <h3 className='ff_sun_flower fs_md fw-medium text_ffffff'>Candle Queen</h3>
                                <p className='ff_sun_flower fs_sm fw-bold text_ffffff'>15 : 54 : 12</p>
                            </div>
                            <h4 className='ff_Space_Grotesk fs_sm fw-light text_ffffff mb-0'>NFT</h4>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-delay="700" data-aos-duration="800" className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className='upcomming_project_card'>
                            <img className='mb-3 w-100' src={card_img_4} alt=" card_img_4" />
                            <div className='d-flex justify-content-between'>
                                <h3 className='ff_sun_flower fs_md fw-medium text_ffffff'>Candle Queen</h3>
                                <p className='ff_sun_flower fs_sm fw-bold text_ffffff'>15 : 54 : 12</p>
                            </div>
                            <h4 className='ff_Space_Grotesk fs_sm fw-light text_ffffff mb-0'>NFT</h4>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <button className='ff_sun_flower fs_sm fw-medium text_ffffff view_all_btn'>View All</button>
                </div>
            </div>
        </section>
    )
}
