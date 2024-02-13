import React from 'react';
import Post from '../Components/Post';

function Blog() {
  return (
    <>
      <div id="blog" className="blog">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Our Blog</h2>
                <span>Lorem Ipsum is that it has a more-or-less normal distribution of letters,</span>
              </div>
            </div>
          </div>
          <div className="row">
            <Post
              imageSrc="assets/images/blog-image0.jpg"
              date="16 July 2024"
              author="Nisha Sharma"
              comments={6}
              likes={5}
              title="More Places To Explore"
              content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, laborum maxime eveniet neque dolore nihil blanditiis, quos aspernatur reprehenderit et voluptate. Quae recusandae rem, ad natus beatae nam sapiente suscipit ipsum repellendus aperiam ratione minima sint voluptates laboriosam, cum iste! Quam aspernatur in nulla accusantium sint dolorum nesciunt officiis odio."
            />
            <Post
              imageSrc="assets/images/blog-image.jpg"
              date="21 August 2024"
              author="Nisha Sharma"
              comments={6}
              likes={5}
              title="More Places To Explore"
              content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, voluptatibus veniam. Commodi temporibus tempore consequuntur illo explicabo cumque autem, aliquam omnis ipsum, possimus dignissimos nemo sint odio. Illo, quisquam asperiores reprehenderit, animi natus, expedita iste iure quas accusamus voluptatum commodi perspiciatis. Obcaecati vero aperiam voluptatibus placeat, explicabo sed? Odio, exercitationem."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
