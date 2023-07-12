import React from 'react'
import project_img_1 from '../assets/images/png/projets_img_1.png'
import project_img_2 from '../assets/images/png/projets_img_2.png'
import project_img_3 from '../assets/images/png/projets_img_3.png'
import project_img_4 from '../assets/images/png/projets_img_4.png'
import project_img_5 from '../assets/images/png/projets_img_5.png'
import project_img_6 from '../assets/images/png/projets_img_6.png'
import project_img_7 from '../assets/images/png/projets_img_7.png'
import project_img_8 from '../assets/images/png/projets_img_8.png'
export const Projects = () => {
    return (
        <section className='bg_img'id='Projects'>
            <div className='pb-5 project_bg'>
                <div className="container pt-5">
                    <h2 data-aos="fade-left" data-aos-duration="800" className='ff_sun_flower fs_lg text_040404 fw-light text-center position-relative project_line pt-5 mb-4 mt-5 mt-sm-0'>PROJETS</h2>
                    <p data-aos="fade-right" data-aos-duration="800" className='ff_Space_Grotesk fw-normal fs_sm text_040404 text-center mb-5'>Id nam massa sit ut purus tortor est ultrices nunc. Ipsum, nibh <span className='d-lg-block'>egestas vehicula tellus. Molestie adipiscing diam nibh lectus. Magna</span> id nisl quis vestibulum rhoncus.</p>
                    <div className="row mb-5">
                        <div className="col-lg-3 col-md-4 col-sm-6 tokyo mb-4">
                            <div  data-aos="zoom-in" data-aos-duration="800" className='position-relative'>
                                <img className='w-100' src={project_img_1} alt="project_img" />
                                <div className='project_heading'>
                                    <h3 className='ff_sun_flower fs_md fw-bold text_ffffff text-center mb-0  py-3'>The Tokyo  Tem</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 tokyo mb-4">
                            <div  data-aos="zoom-in" data-aos-delay="100" data-aos-duration="800" className='position-relative'>
                                <img className='w-100' src={project_img_2} alt="project_img" />
                                <div className='project_heading'>
                                    <h3 className='ff_sun_flower fs_md fw-bold text_ffffff text-center mb-0 py-3'>The Tokyo  Tem</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 tokyo mb-4">
                            <div  data-aos="zoom-in" data-aos-delay="200" data-aos-duration="800" className='position-relative'>
                                <img className='w-100' src={project_img_3} alt="project_img" />
                                <div className='project_heading'>
                                    <h3 className='ff_sun_flower fs_md fw-bold text_ffffff text-center mb-0 py-3'>The Tokyo  Tem</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 tokyo mb-4">
                            <div  data-aos="zoom-in" data-aos-delay="300" data-aos-duration="800" className='position-relative'>
                                <img className='w-100' src={project_img_4} alt="project_img" />
                                <div className='project_heading'>
                                    <h3 className='ff_sun_flower fs_md fw-bold text_ffffff text-center mb-0 py-3'>The Tokyo  Tem</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 tokyo  mb-4 mb-lg-0">
                            <div data-aos="zoom-in" data-aos-delay="300" data-aos-duration="800" className='position-relative '>
                                <img className='w-100' src={project_img_5} alt="project_img" />
                                <div className='project_heading'>
                                    <h3 className='ff_sun_flower fs_md fw-bold text_ffffff text-center mb-0 py-3'>The Tokyo  Tem</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 tokyo mb-4 mb-lg-0">
                            <div data-aos="zoom-in" data-aos-delay="500" data-aos-duration="800" className='position-relative'>
                                <img className='w-100' src={project_img_6} alt="project_img" />
                                <div className='project_heading'>
                                    <h3 className='ff_sun_flower fs_md fw-bold text_ffffff text-center mb-0 py-3'>The Tokyo  Tem</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 tokyo mb-4 mb-lg-0">
                            <div data-aos="zoom-in" data-aos-delay="600" data-aos-duration="800" className='position-relative'>
                                <img className='w-100' src={project_img_7} alt="project_img" />
                                <div className='project_heading'>
                                    <h3 className='ff_sun_flower fs_md fw-bold text_ffffff text-center mb-0 py-3'>The Tokyo  Tem</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 tokyo">
                            <div data-aos="zoom-in" data-aos-delay="700" data-aos-duration="800" className='position-relative'>
                                <img className='w-100' src={project_img_8} alt="project_img" />
                                <div className='project_heading'>
                                    <h3 className='ff_sun_flower fs_md fw-bold text_ffffff text-center mb-0 py-3'>The Tokyo  Tem</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="800" className='d-flex justify-content-center pt-2 mb-5 pb-4'>
                        <button className='ff_sun_flower fs_sm fw-medium text_040404 project_view_all_btn mb-4'>View All</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
