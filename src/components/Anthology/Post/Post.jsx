import "./Post.css"


function Post(content) {
    return (
        <div className="post-content">
          <h1 className="post-title">{content.title}</h1>
          <div className="post-body">{content.body}</div>
        </div>
    );
}

export default Post;