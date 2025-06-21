'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import { images } from '@/utils/images';
import { heroImages } from '@/utils/data';

export default function Hero() {
    return (
        <section className=''>
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 4000 }}
                className="h-screen w-full"
            >
                <SwiperSlide>
                    {heroImages.map((_images, id) => (
                        <div key={id} className="h-full w-full">
                            <Image
                                src={images.about_img}
                                alt="Hero Slide 1"
                                layout="fill"
                                objectFit="cover"
                                className="brightness-75"
                            />
                        </div>
                    ))}
                </SwiperSlide>

                {/* Add more SwiperSlides as needed */}
            </Swiper>

        </section>
    )
}