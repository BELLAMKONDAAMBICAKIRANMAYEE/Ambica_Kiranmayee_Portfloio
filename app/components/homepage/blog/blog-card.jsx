// @flow strict
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';

function BlogCard() {
  // ✅ Local array of blog data
  const blogs = [
    {
      title: "Doctors Olympiad 2023 | IMA National Sports Meet",
      cover_image: "https://res.cloudinary.com/digdliiab/image/upload/v1753838078/WhatsApp_Image_2025-07-30_at_05.59.35_3d0b1fda_qv2j4c.jpg",
      published_at: "2025-07-29",
      public_reactions_count: 12,
      comments_count: 3,
      url: "https://doctorsolympiad.com",
      reading_time_minutes: 5,
      description: "Developed a dedicated platform enabling doctors to receive professional sports training. Focused on preparing them for major sports events, including the Olympics."
    },
    {
      
      title: "Sai Manikanta Constructions",
      cover_image: "https://res.cloudinary.com/digdliiab/image/upload/v1753838025/WhatsApp_Image_2025-07-30_at_06.13.09_923484e8_zxeg3w.jpg",
      published_at: "2025-07-10",
      public_reactions_count: 22,
      comments_count: 6,
      url: "https://saimanikantaconstructions.com",
      reading_time_minutes: 8,
      description: "Built business websites tailored for local enterprises with a focus on performance, clarity, and mobile compatibility.Designed clean and responsive websites to showcase services and projects clearly."
    },
    {
      title: "Hospital Management System",
      cover_image: "https://res.cloudinary.com/digdliiab/image/upload/v1753838059/WhatsApp_Image_2025-07-30_at_06.04.37_0093f8e7_p6lqpb.jpg",
      published_at: "2025-07-20",
      public_reactions_count: 25,
      comments_count: 8,
      url: "https://frontend-doctor-gamma.vercel.app/",
      reading_time_minutes: 7,
      description: "Developed a Hospital Management System to streamline patient records, appointments, billing, and staff management, improving overall operational efficiency."
    
    },
    {
   
            title: "Foodpanda Replica",
      cover_image: "https://res.cloudinary.com/digdliiab/image/upload/v1753839178/Screenshot_2025-07-30_065739_nebq7x.png",
      published_at: "2025-07-05",
      public_reactions_count: 30,
      comments_count: 10,
      url: "https://foodpanda-eight.vercel.app/",
      reading_time_minutes: 9,
      description: "Developed a food delivery platform inspired by Foodpanda, featuring restaurant listings, online ordering, real-time tracking, and a user-friendly interface."
    },
    {
        title: "Quizz App",
      cover_image: "https://res.cloudinary.com/digdliiab/image/upload/v1753838071/WhatsApp_Image_2025-07-30_at_06.03.07_d70d22b3_jrtyzb.jpg",
      published_at: "2025-07-18",
      public_reactions_count: 18,
      comments_count: 5,
      url: "https://github.com/BELLAMKONDAAMBICAKIRANMAYEE/MERN-Quizz.git",
      reading_time_minutes: 6,
      description: "Built a Quiz App using the MERN stack with features like dynamic question rendering, real-time scoring, and user authentication for an engaging learning experience."
    },
    {
      title: "BlackBean Constructions",
      cover_image: "https://res.cloudinary.com/digdliiab/image/upload/v1753838038/WhatsApp_Image_2025-07-30_at_06.14.03_bab7daad_e9jd8i.jpg",
      published_at: "2025-07-05",
      public_reactions_count: 30,
      comments_count: 10,
      url: "https://blackbeanhealth.vercel.app/crm-service.html",
      reading_time_minutes: 9,
      description: "Website for an innovative company that specializes in healthcare construction . Spearheaded the development of an informative website for Blackbean Construction."
    },
     {
      title: "iAdopt Replica",
      cover_image: "https://res.cloudinary.com/digdliiab/image/upload/v1753838738/Screenshot_2025-07-30_064838_rfqcce.png",
      published_at: "2025-07-05",
      public_reactions_count: 30,
      comments_count: 10,
      url: "https://myproject-green-xi.vercel.app/",
      reading_time_minutes: 9,
      description: "Developed a recreated version of the iAdopt website with pet listings, adoption forms, and a user-friendly interface"
    },
     {
   title: "Beats 3",
      cover_image: "https://res.cloudinary.com/digdliiab/image/upload/v1753838099/WhatsApp_Image_2025-07-30_at_06.19.52_4d7989a4_cvkiie.jpg",
      published_at: "2025-07-15",
      public_reactions_count: 14,
      comments_count: 4,
      url: "https://ecommerce-flame-alpha.vercel.app",
      reading_time_minutes: 5,
      description: "Built an e-commerce website for Beats 3 earphones with product listings, cart functionality, and a responsive design for a smooth shopping experience."
    },
     {
      title: "CrunchyRoll Replica",
      cover_image: "https://res.cloudinary.com/digdliiab/image/upload/v1753839584/Screenshot_2025-07-30_070435_gwfniv.png",
      published_at: "2025-07-05",
      public_reactions_count: 30,
      comments_count: 10,
      url: "https://crunchrolls.vercel.app/",
      reading_time_minutes: 9,
      description: "Created a streaming platform inspired by Crunchyroll, featuring anime catalogs, user profiles, watchlists, and a seamless viewing experience"
    },
  ];

  return (
    <>
      {blogs.map((blog, index) => (
        <div
          key={index}
          className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group"
        >
          <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
            <Image
              src={blog.cover_image}
              height={1080}
              width={1920}
              alt={blog.title}
              className="h-full w-full group-hover:scale-110 transition-all duration-300"
            />
          </div>
          <div className="p-2 sm:p-3 flex flex-col">
            <div className="flex justify-between items-center text-[#16f2b3] text-sm">
              {/* <p>{timeConverter(blog.published_at)}</p> */}
              <div className="flex items-center gap-3">
                <p className="flex items-center gap-1">
                  {/* <BsHeartFill /> <span>{blog.public_reactions_count}</span> */}
                </p>
                <p className="flex items-center gap-1">
                  {/* <FaCommentAlt /> <span>{blog.comments_count}</span> */}
                </p>
              </div>
            </div>
            <Link target="_blank" href={blog.url}>
              <p className="my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500">
                {blog.title}
              </p>
            </Link>
            <p className="mb-2 text-sm text-[#16f2b3]">
              {/* {blog.reading_time_minutes} Min Read */}
            </p>
            <p className="text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3">
              {blog.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default BlogCard;
