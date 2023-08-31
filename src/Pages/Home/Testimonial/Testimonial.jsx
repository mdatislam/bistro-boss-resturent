import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import SectionTitle from '../../Components/SectionTitel/SectionTitle';

const Testimonial = () => {
    const [reviews, setReview] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/review")
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <section className='my-10 py-10'>
            <div className='py-2'>
                <SectionTitle
                    heading="testimonials"
                    subHeading=" what our clients say"

                ></SectionTitle>
            </div>
            <div>
                <Swiper

                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper "
                >

                    <div >
                        {
                            reviews.map(review => (
                                <SwiperSlide
                                    key={review._id}>
                                    <div className='flex flex-col items-center'>

                                        <Rating
                                            style={{ maxWidth: 180, }}
                                            value={review.rating}
                                            readOnly
                                        />

                                        <p className='mx-2 text-sm'>{review.details}</p>
                                        <h3 className='text-center text-orange-500'>{review.name}</h3>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </div>

                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;