import { useRef } from "react";
import { useParams, useHistory } from "react-router-dom";

const UpdateForm = () => {
  const titleRef = useRef();
  const bodyRef = useRef();
  const history = useHistory();
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title: titleRef.current.value,
      body: bodyRef.current.value,
    };

    const req = await fetch(`http://127.0.0.1:3001/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (req.status === 200) {
      console.log(await req.json());
      history.push("/posts");
    }
  };

  return (
    <div>
      <div className="mx-auto w-2/5 p-6 text-sm bg-white shadow rounded">
        <h2 className="text-3xl mb-6 font-bold text-center">Update a Post</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block mb-1 text-gray-700 text-xs font-bold"
            >
              Title
            </label>
            <input
              ref={titleRef}
              id="title"
              type="text"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="body"
              className="block mb-1 text-gray-700 text-xs font-bold"
            >
              Body
            </label>
            <textarea
              ref={bodyRef}
              id="body"
              cols="30"
              rows="10"
              className="w-full p-4 border rounded"
            ></textarea>
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full py-2 px-3 text-white font-bold bg-purple-700 rounded"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
