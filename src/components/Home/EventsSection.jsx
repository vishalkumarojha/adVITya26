/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const EventsSection = () => {
    const [isInEventsSection, setIsInEventsSection] = useState(false);

    const events = [
          {
    id: 1,
    title: 'Bike Stunt Show',
    club: 'Student Welfare Office',
    date: 'T.B.A.',
    venue: 'T.B.A.',
    image:
      'https://fra.cloud.appwrite.io/v1/storage/buckets/696f8e35003b8cc96b50/files/696f8eb7002efdc16a5d/view?project=695eb843003ae5a0552b&mode=admin?w=1200',
  },
  {
    id: 2,
    title: 'Live Caricature',
    club: 'Student Welfare Office',
    date: 'T.B.A.',
    venue: 'T.B.A.',
    image:
      'https://fra.cloud.appwrite.io/v1/storage/buckets/696f8e35003b8cc96b50/files/69712d86002cbcaf0f91/view?project=695eb843003ae5a0552b&mode=admin?w=1200',
  },
  {
    id: 3,
    title: 'Mechanical Bull Ride',
    club: 'Student Welfare Office',
    date: 'T.B.A.',
    venue: 'T.B.A.',
    image:
      'https://fra.cloud.appwrite.io/v1/storage/buckets/696f8e35003b8cc96b50/files/69712e48003b4b7a2f3e/view?project=695eb843003ae5a0552b&mode=admin?w=1200',
  },
  {
    id: 4,
    title: 'Soapy Football',
    club: 'Student Welfare Office',
    date: 'T.B.A.',
    venue: 'T.B.A.',
    image:
      'https://fra.cloud.appwrite.io/v1/storage/buckets/696f8e35003b8cc96b50/files/69712faf0012dd594289/view?project=695eb843003ae5a0552b&mode=admin?w=1200',
  },
  {
    id: 5,
    title: 'Photo Booth',
    club: 'Student Welfare Office',
    date: 'T.B.A.',
    venue: 'T.B.A.',
    image:
      'https://fra.cloud.appwrite.io/v1/storage/buckets/696f8e35003b8cc96b50/files/697131a3002c13530de1/view?project=695eb843003ae5a0552b&mode=admin?w=1200',
  },
                  {
    id: 1,
    title: 'Bike Stunt Show',
    club: 'Student Welfare Office',
    date: 'T.B.A.',
    venue: 'T.B.A.',
    image:
      'https://fra.cloud.appwrite.io/v1/storage/buckets/696f8e35003b8cc96b50/files/696f8eb7002efdc16a5d/view?project=695eb843003ae5a0552b&mode=admin?w=1200',
  },
  {
    id: 2,
    title: 'Live Caricature',
    club: 'Student Welfare Office',
    date: 'T.B.A.',
    venue: 'T.B.A.',
    image:
      'https://fra.cloud.appwrite.io/v1/storage/buckets/696f8e35003b8cc96b50/files/69712d86002cbcaf0f91/view?project=695eb843003ae5a0552b&mode=admin?w=1200',
  },
  {
    id: 3,
    title: 'Mechanical Bull Ride',
    club: 'Student Welfare Office',
    date: 'T.B.A.',
    venue: 'T.B.A.',
    image:
      'https://fra.cloud.appwrite.io/v1/storage/buckets/696f8e35003b8cc96b50/files/69712e48003b4b7a2f3e/view?project=695eb843003ae5a0552b&mode=admin?w=1200',
  },
  {
    id: 4,
    title: 'Soapy Football',
    club: 'Student Welfare Office',
    date: 'T.B.A.',
    venue: 'T.B.A.',
    image:
      'https://fra.cloud.appwrite.io/v1/storage/buckets/696f8e35003b8cc96b50/files/69712faf0012dd594289/view?project=695eb843003ae5a0552b&mode=admin?w=1200',
  },
  {
    id: 5,
    title: 'Photo Booth',
    club: 'Student Welfare Office',
    date: 'T.B.A.',
    venue: 'T.B.A.',
    image:
      'https://fra.cloud.appwrite.io/v1/storage/buckets/696f8e35003b8cc96b50/files/697131a3002c13530de1/view?project=695eb843003ae5a0552b&mode=admin?w=1200',
  },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("events");
            if (!section) return;

            const visible =
                window.scrollY >
                section.offsetTop - (window.innerHeight * 3) / 4;

            setIsInEventsSection(visible);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const sectionVariants = {
        hidden: {
            opacity: 0,
            pointerEvents: "none",
        },
        visible: {
            opacity: 1,
            pointerEvents: "auto",
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <div
            id="events"
            className="relative w-full py-20 bg-white overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 0.4, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-6xl md:text-8xl font-bold text-center mb-16 text-[#6F00A0]"
                >
                    EVENTS
                </motion.h2>

                {/* Load Once Transition Always */}
                <motion.div
                    variants={sectionVariants}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInEventsSection ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0.8, y: 30, scale: 0.8 }}
                    transition={{ duration: 0.8 }}
                >
                    <Swiper
                        modules={[EffectCoverflow]}
                        effect="coverflow"
                        grabCursor
                        centeredSlides
                        slidesPerView="auto"
                        loop
                        loopAdditionalSlides={2}
                        watchSlidesProgress
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: false,
                        }}
                        className="events-swiper overflow-visible!"
                    >
                        {events.map((event, index) => (
                            <SwiperSlide key={index} className="w-75! md:w-100!">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                    whileHover={{
                                        y: -10,
                                        transition: { duration: 0.3 },
                                    }}
                                >
                                    <div className="group relative w-full h-100 md:h-125 rounded-2xl overflow-hidden shadow-xl">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-full object-cover"
                                            draggable={false}
                                        />

                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 in-[.swiper-slide-active]:opacity-100 md:group-hover:opacity-100 transition-opacity duration-300">
                                            <p className="text-3xl font-semibold">
                                                {event.title}
                                            </p>
                                            <div className="flex justify-between mt-1">
                                                <span className="text-base">
                                                    {event.club}
                                                </span>
                                                <span className="text-xs flex items-end">
                                                    {event.date}
                                                </span>
                                            </div>
                                            <p className="text-xs text-right">
                                                {event.venue}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>

            <style>{`
                :global(.events-swiper .swiper-slide) {
                    transition: transform 0.3s ease;
                }

                :global(.events-swiper .swiper-slide-active) {
                    transform: scale(1.1);
                    z-index: 2;
                }

                :global(.events-swiper),
                :global(.events-swiper .swiper-wrapper) {
                    overflow: visible !important;
                }
            `}</style>
        </div>
    );
};

export default EventsSection;
