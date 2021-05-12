import { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const req = await fetch("http://127.0.0.1:3001/posts");
      if (req.status === 200) return setPosts(await req.json());
    })();
  }, [posts]);

  return (
    <div className="pb-6 bg-white shadow rounded">
      <h2 className="py-6 text-4xl font-bold text-purple-700 text-center underline">
        All Posts
      </h2>
      <div className="flex justify-center flex-wrap">
        {posts.length > 0 ? "" : <p>No post exists</p>}
        {posts.map((post) => {
          return (
            <div key={post.id} className="w-1/4 p-4">
              <h2 className="mb-2 text-xl font-bold text-purple-700">
                {post.title}
              </h2>
              <p className="text-xs">{post.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
