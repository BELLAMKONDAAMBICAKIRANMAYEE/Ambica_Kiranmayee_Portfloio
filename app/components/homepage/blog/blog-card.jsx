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
      title: "Next.js SEO Best Practices",
      cover_image: "/images/blog1.jpg",
      published_at: "2025-07-29",
      public_reactions_count: 12,
      comments_count: 3,
      url: "https://yourblog.com/nextjs-seo",
      reading_time_minutes: 5,
      description: "Learn how to optimize your Next.js site for SEO."
    },
    {
      title: "React Performance Tips",
      cover_image: "/images/blog2.jpg",
      published_at: "2025-07-20",
      public_reactions_count: 25,
      comments_count: 8,
      url: "https://yourblog.com/react-performance",
      reading_time_minutes: 7,
      description: "Improve your React app performance with these tips."
    },
    {
      title: "JavaScript Debugging Techniques",
      cover_image: "/images/blog3.jpg",
      published_at: "2025-07-18",
      public_reactions_count: 18,
      comments_count: 5,
      url: "https://yourblog.com/js-debugging",
      reading_time_minutes: 6,
      description: "Master the art of debugging JavaScript like a pro."
    },
    {
      title: "CSS Animation Tricks",
      cover_image: "/images/blog4.jpg",
      published_at: "2025-07-15",
      public_reactions_count: 14,
      comments_count: 4,
      url: "https://yourblog.com/css-animations",
      reading_time_minutes: 5,
      description: "Make your websites come alive with CSS animations."
    },
    {
      title: "Node.js API Security",
      cover_image: "/images/blog5.jpg",
      published_at: "2025-07-10",
      public_reactions_count: 22,
      comments_count: 6,
      url: "https://yourblog.com/nodejs-security",
      reading_time_minutes: 8,
      description: "Secure your Node.js APIs with best practices."
    },
    {
      title: "TypeScript for Beginners",
      cover_image: "/images/blog6.jpg",
      published_at: "2025-07-05",
      public_reactions_count: 30,
      comments_count: 10,
      url: "https://paytm-clone-alpha-eosin.vercel.app/",
      reading_time_minutes: 9,
      description: "Learn TypeScript fundamentals step-by-step."
    }
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
