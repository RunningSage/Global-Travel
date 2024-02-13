import React from 'react';

const Post = ({ imageSrc, date, author, comments, likes, title, content }) => {
  return (
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <div className="blog-box">
        <figure><img src={imageSrc} alt="#" />
          <span>{date}</span>
        </figure>
        <div className="travel">
          <span>Post By: {author}</span>
          <p><strong className="Comment">{comments}</strong> Comment</p>
          <p><strong className="like">{likes}</strong> Like</p>
        </div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Post;
