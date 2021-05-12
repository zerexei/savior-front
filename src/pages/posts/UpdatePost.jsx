const UpdateForm = () => {
  return (
    <div>
      <div className="mx-auto w-2/5 p-6 text-sm bg-white shadow rounded">
        <h2 className="text-3xl mb-6 font-bold text-center">Update a Post</h2>
        <form>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block mb-1 text-gray-700 text-xs font-bold"
            >
              Title
            </label>
            <input
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
