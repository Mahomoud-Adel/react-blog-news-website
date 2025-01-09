import { Button } from "@/components/ui/button";
import { useState } from "react";
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';


const WritePage = () => {
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState(null);

  const handleTagInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      setTags([...tags, e.target.value.trim()]);
      e.target.value = "";
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid image.");
    }
  };

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div className="mx-auto p-6 bg-white rounded-md">
      <h1 className="text-2xl font-bold mb-4">Create Blog Post</h1>

      {/* Title */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Post Title</label>
        <input
          type="text"
          id="title"
          className="mt-1 block w-full rounded-md border-gray-300 p-2 text-4xl outline-none"
          placeholder="Enter your post title"
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <ReactQuill theme="snow" className="" />

        {/* <textarea
          id="description"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
          placeholder="Write your post description"
          rows="5"
        ></textarea> */}
      </div>


      {/* Tags */}
      <div className="mb-4">
        <label htmlFor="tags" className="block text-sm font-medium text-gray-700">Tags</label>
        <input
          type="text"
          id="tags"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
          placeholder="Add tags and press Enter"
          onKeyDown={handleTagInput}
        />
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full text-sm flex items-center gap-2"
            >
              {tag}
              <button
                type="button"
                className="text-red-500 hover:text-red-700"
                onClick={() => removeTag(index)}
              >
                &times;
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Image Upload */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Upload Image</label>
        <div
          className="mt-2 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer"
          onClick={() => document.getElementById("file-input").click()}
        >
          <p className="text-gray-500">Drag and drop an image here, or click to upload</p>
          <input
            type="file"
            id="file-input"
            className="hidden"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
        {image && (
          <div className="mt-4">
            <img src={image} alt="Preview" className="max-w-full rounded-md" />
            <button
              type="button"
              className="mt-2 text-red-500 hover:text-red-700"
              onClick={() => setImage(null)}
            >
              Remove Image
            </button>
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4">
        <Button
          variant={'secondary'}
        >
          Save as Draft
        </Button>
        <Button
    
        >
          Publish
        </Button>
      </div>
    </div>
  )
}

export default WritePage