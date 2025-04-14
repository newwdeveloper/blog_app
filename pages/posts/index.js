import AllPosts from "../../components/posts/all-post";

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

function AllPostPage() {
  return <AllPosts posts={DUMMY_POST} />;
}

export default AllPostPage;
