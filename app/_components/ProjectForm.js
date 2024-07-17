"use client";
import React, { useState } from "react";
import addProject from "@/backend/Projects/AddProject";
import { useRouter } from "next/navigation";
import DeleteProject from "@/backend/Projects/DeleteProject";

export function DeleteButton({ ID }) {
  const router = useRouter();
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        const response = await DeleteProject(ID);
        console.log("Project deleted successfully:", response);
        alert("Project has been deleted.");
        router.refresh();
      } catch (error) {
        console.error("Failed to delete project:", error);
        alert("Failed to delete project.");
      }
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out"
    >
      Delete
    </button>
  );
}

export default function ProjectForm({ email }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Project Added:", { title, description });
    await addProject(title, description, email);
    setTitle("");
    setDescription("");
    router.refresh();
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <form
        onSubmit={handleSubmit}
        className="mt-8 max-w-md mx-auto bg-white shadow-lg rounded-lg p-6"
      >
        <div className="grid grid-cols-1 gap-6">
          <label className="block">
            <span className="text-gray-700 font-semibold">Project Title</span>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter project title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className="block">
            <span className="text-gray-700 font-semibold">Description</span>
            <textarea
              className="resize-none mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows="3"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </label>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
          >
            Add Project
          </button>
        </div>
      </form>
    </div>
  );
}