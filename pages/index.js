import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/FeaturedPosts";

function HomePage() {
  const DUMMY_POST = [
    {
      title: "getting-started-with 1",
      image: "getting-started-nextjs.png",
      excerpt: "hello how r u hope u r well and i m",
      date: "2025-02-12",
      slug: "getting-started-with",
    },
    {
      title: "getting-started-with 2",
      image: "getting-started-nextjs.png",
      excerpt: "hello how r u hope u r well and i m",
      date: "2025-02-12",
      slug: "getting-started-with",
    },
    {
      title: "getting-started-with 3",
      image: "getting-started-nextjs.png",
      excerpt: "hello how r u hope u r well and i m",
      date: "2025-02-12",
      slug: "getting-started-with",
    },
    {
      title: "getting-started-with 4",
      image: "getting-started-nextjs.png",
      excerpt: "hello how r u hope u r well and i m",
      date: "2025-02-12",
      slug: "getting-started-with",
    },
  ];
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POST} />
    </Fragment>
  );
}

export default HomePage;
