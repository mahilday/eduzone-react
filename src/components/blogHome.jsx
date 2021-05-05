import React from "react";
const blogs = [
  {
    image: `${process.env.PUBLIC_URL}/images/pic1.jpg`,
    author: "Harry",
    category: "Knowledge",
    title: "Here's What People Are Saying",
    snapshot:
      "Laborum et enim non ex irure aute labore sint ut ad esse enim cupidatat esse. Id officia reprehenderit amet nulla fugiat .",
    date: "01 June",
    year: 2020,
  },
  {
    image: `${process.env.PUBLIC_URL}/images/pic1.jpg`,
    author: "Reuben",
    category: "Event",
    title: "Here's What People Are Saying",
    snapshot:
      "Laborum et enim non ex irure aute labore sint ut ad esse enim cupidatat esse. Id officia reprehenderit amet nulla fugiat .",
    date: "01 June",
    year: 2020,
  },
  {
    image: `${process.env.PUBLIC_URL}/images/pic1.jpg`,
    author: "Harry",
    category: "Knowledge",
    title: "Here's What People Are Saying",
    snapshot:
      "Laborum et enim non ex irure aute labore sint ut ad esse enim cupidatat esse. Id officia reprehenderit amet nulla fugiat .",
    date: "01 June",
    year: 2020,
  },
  {
    image: `${process.env.PUBLIC_URL}/images/pic1.jpg`,
    author: "Harry",
    category: "Knowledge",
    title: "Here's What People Are Saying",
    snapshot:
      "Laborum et enim non ex irure aute labore sint ut ad esse enim cupidatat esse. Id officia reprehenderit amet nulla fugiat .",
    date: "01 June",
    year: 2020,
  },
  {
    image: `${process.env.PUBLIC_URL}/images/pic1.jpg`,
    author: "Harry",
    category: "Knowledge",
    title: "Here's What People Are Saying",
    snapshot:
      "Laborum et enim non ex irure aute labore sint ut ad esse enim cupidatat esse. Id officia reprehenderit amet nulla fugiat .",
    date: "01 June",
    year: 2020,
  },
  {
    image: `${process.env.PUBLIC_URL}/images/pic1.jpg`,
    author: "Harry",
    category: "Knowledge",
    title: "Here's What People Are Saying",
    snapshot:
      "Laborum et enim non ex irure aute labore sint ut ad esse enim cupidatat esse. Id officia reprehenderit amet nulla fugiat .",
    date: "01 June",
    year: 2020,
  },
];
const BlogComponent = () => {
  return (
    <div
      class="section-full content-inner bg-gray wow fadeIn"
      data-wow-duration="2s"
      data-wow-delay="0.4s"
    >
      <div class="container">
        <div class="section-head text-center">
          <h2 class="title">Latest blog post</h2>
          <p>
            There are many variations of passages of Lorem Ipsum typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        <div class="blog-carousel owl-none owl-carousel">
            {blogs.map(blog=>(
                <div class="item" style ={{textAlign: "left"}}>
                <div class="blog-post blog-grid blog-rounded blog-effect1 post-style-1">
                    <div class="dlab-post-media dlab-img-effect"> 
                        <a href="blog-single.html"><img src={blog.image} alt=""/></a> 
                    </div>
                    <div class="dlab-info p-a20">
                        <div class="dlab-post-meta">
                            <ul>
                                <li class="post-author"> <i class="la la-user-circle"></i> By <a href="https://www.google.com">{blog.author}</a> </li>
                                <li class="post-tag"> <a href="https://www.google.com">{blog.category}</a> </li>
                            </ul>
                        </div>
                        <div class="dlab-post-title">
                            <h4 class="post-title"><a href="blog-single.html">{blog.title}</a></h4>
                        </div>
                        <div class="dlab-post-text">
                            <p>{blog.snapshot}</p>
                        </div>
                        <div class="post-footer">
                            <div class="dlab-post-meta">
                                <ul>
                                    <li class="post-date"> <i class="la la-clock"></i> <strong>{blog.date}</strong> <span> {blog.year}</span> </li>
                                </ul>
                            </div>
                            <ul class="dlab-social-icon dez-border">
                                 {/*eslint-disable-next-line*/}
                                <li><a class="site-button facebook circle-sm fa fa-facebook" href="https://www.google.com"></a></li>
                                 {/*eslint-disable-next-line*/}
                                <li><a class="site-button twitter circle-sm fa fa-twitter " href="https://www.google.com"></a></li>
                                 {/*eslint-disable-next-line*/}
                                <li><a class="site-button linkedin circle-sm fa fa-linkedin " href="https://www.google.com"></a></li>
                                 {/*eslint-disable-next-line*/}
                                <li><a class="site-button instagram circle-sm fa fa-instagram  " href="https://www.google.com"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>						
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
