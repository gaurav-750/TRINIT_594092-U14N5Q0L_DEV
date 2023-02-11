import React, { useEffect, useState } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import Preloader from "../components/preloader/Preloader";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    strengths: "",
    weaknesses: "",
    skills: "",
    previousCases: "",
    whyHire: "",
    profilePic: null,
  });
  const [isLoading, setIsLoading] = useState(true);


  const [tags, setTags] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, [])


  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleProfilePicChange = (event) => {
    setFormData({ ...formData, profilePic: event.target.files[0] });
  };

  const handleTagsChange = (newTags) => {
    setTags(newTags);
    setFormData({
      ...formData,
      skills: newTags.map((tag) => tag.text),
    });
  };

  if (isLoading) {
    return <Preloader />
  }

  return (
    <div className="bg-[#340404] min-h-screen p-10 px-64">
      <h1 className="text-white text-3xl font-medium mb-6">Mystery Login</h1>
      <form className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md text-black">
        <div className="flex mb-4">
          <div className="w-full mr-2 md:w-1/2">
            <label className="block text-white font-medium mb-2" htmlFor="name">
              Name:
            </label>
            <input
              className="border border-gray-400 bg-gray-300 p-2 w-full"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="md:w-1/2 ml-2 w-full">
            <label className="block text-white font-medium mb-2" htmlFor="age">
              Age:
            </label>
            <input
              className="border border-gray-400 bg-gray-300 p-2 w-full"
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="flex mb-4">
          <div className="w-full mr-2 md:w-1/2">
            <label className="block text-white font-medium mb-2" htmlFor="name">
              Mail I'd:
            </label>
            <input
              className="border border-gray-400 bg-gray-300 p-2 w-full"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="md:w-1/2 ml-2 w-full">
            <label className="block text-white font-medium mb-2" htmlFor="age">
              Phone Number:
            </label>
            <input
              className="border border-gray-400 bg-gray-300 p-2 w-full"
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="">
          <label
            className="block text-white font-medium mb-2"
            htmlFor="profilePic"
          >
            Profile Picture:
          </label>
          <input
            className="border border-gray-400 bg-gray-300 p-2 w-full text-black text-md font-semibold"
            type="file"
            id="profilePic"
            name="profilePic"
            accept="image/png, image/gif, image/jpeg, image/jpg"
            onChange={handleProfilePicChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white font-medium mb-2"
            htmlFor="strengths"
          >
            Strengths:
          </label>
          <input
            className="border border-gray-400 bg-gray-300 p-2 w-full"
            type="text"
            id="strengths"
            name="strengths"
            value={formData.strengths}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white font-medium mb-2"
            htmlFor="weaknesses"
          >
            Weaknesses:
          </label>
          <input
            className="border border-gray-400 bg-gray-300 p-2 w-full"
            type="text"
            id="weaknesses"
            name="weaknesses"
            value={formData.weaknesses}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white font-medium mb-2" htmlFor="skills">
            Skills:
          </label>
          <ReactTags
            placeholder="Add skills"
            tags={tags}
            handleAddition={(tag) => setTags([...tags, tag])}
            handleDelete={(i) =>
              setTags(tags.filter((tag, index) => index !== i))
            }
            delimiters={[188, 13]}
            classNames={{
              // placeholder: "text-white bg-red-400",
              // tags: "flex flex-wrap p-2",
              tagInputField: "border border-gray-400 bg-gray-300 p-2 w-full",
              // tagInput: "  bg-gray-300 p-2 w-full",
              tag: "bg-red-700 hover:bg-red-800 text-white font-medium px-2 py-1 rounded mr-2 mb-2",
              remove:
                "text-white bg-gray-200 bg-opacity-40 px-[5px] text-sm mb-4 ml-2 hover:text-red-600 hover:bg-gray-100 hover:bg-opacity-90 rounded-full",
              // activeTag: "bg-red-600 text-red-900",
            }}
          />
          {/* <input
            className="border border-gray-400 bg-gray-300 p-2 w-full"
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleInputChange}
            required
          /> */}
        </div>
        <div className="mb-4">
          <label
            className="block text-white font-medium mb-2"
            htmlFor="previousCases"
          >
            Your previous cases solved/assisted:
          </label>
          <input
            className="border border-gray-400 bg-gray-300 p-2 w-full"
            type="text"
            id="previousCases"
            name="previousCases"
            value={formData.previousCases}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white font-medium mb-2"
            htmlFor="whyHire"
          >
            Why should Sherlock hire you?
          </label>
          <input
            className="border border-gray-400 bg-gray-300 p-2 w-full"
            type="text"
            id="whyHire"
            name="whyHire"
            value={formData.whyHire}
            onChange={handleInputChange}
            required
          />
        </div>
        <button
          className="bg-red-700 hover:bg-red-800 text-white font-medium py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
