import Image from "next/image";
import Link from "next/link";
import React from "react";
import classes from "./post-item.module.css";

const PostItem = (props) => {
  const { title, image, excerpt, date, slug } = props.post;

  const formattedDates = new Date(date).toLocaleString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/post/${slug}`;
  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image
            src={imagePath}
            alt={title}
            width={300}
            height={200}
            priority
            layout="responsive"
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDates}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
