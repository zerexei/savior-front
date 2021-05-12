// TODO: create a pages dir to separate components
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();

  console.log(id);
  useEffect(() => {
    (async () => {
      const req = fetch(`http://127.0.0.1:3001/post/${id}`);
      console.log(await req);
    })();
    return () => {};
  }, [id]);

  return (
    <div className="mx-auto w-1/3 p-4 pb-8 bg-white shadow rounded">
      <h2 className="mb-2 text-2xl font-bold text-purple-700">Foo Bar Baz</h2>
      <p className="text-sm tracking-wide">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
        totam nostrum qui. Quibusdam voluptas architecto non dignissimos quos
        ipsa? Consequatur porro sed corrupti animi, labore laborum consectetur
        sint sequi maiores.
      </p>
    </div>
  );
};

export default Post;
