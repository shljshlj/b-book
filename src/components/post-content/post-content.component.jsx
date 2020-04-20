import React from 'react';

const TextContent = ({ text }) => (
  <div className="post-text">
    <p>{text}</p>
  </div>
);

const VideoContent = ({ videoUrl }) => (
  <div className="iframe-container">
    <iframe title="video" src={videoUrl} />
  </div>
);

const ImageContent = ({ imageUrl }) => (
  <div className="post-image">
    <img src={imageUrl} />
  </div>
);

const contentType = {
  text: (content) => <TextContent text={content} />,
  video: (content) => <VideoContent videoUrl={content} />,
  image: (content) => <ImageContent imageUrl={content} />,
};

const PostContent = ({ type, content }) => (
  <section className="post-content">
    {contentType[type](content)}
  </section>
);

export default PostContent;