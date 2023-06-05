import "./PostList.css"

const orderedPosts = [
  {
    title: "The Pauper's Daughter",
    content: "",
  },
  {
    title: "Smoke and Mirrors",
    content: fetch("../Posts/smoke_and_mirrors.html").text,
  },
  {
    title: "Leprechaun Hunt",
    content: "",
  },
]

function PostList() {
    return (
        <div className="posts">
          <ul>
            {
              orderedPosts.map((post) => (
                <li>
                  <a>{post.title}</a>
                </li>
              ))
            }
          </ul>
        </div>
    );
}

export default PostList;