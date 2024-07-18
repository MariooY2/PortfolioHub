"use client";
import React, { useState } from "react";
import addUserInfo from "@/backend/Userinfo/AddAbout";
import checkAbout from "@/backend/Userinfo/CheckAbout";
import updateAbout from "@/backend/Userinfo/UpdateAb";
import { useRouter } from "next/navigation"; // Correct import for Next.js routing
function UserProfileForm({ email, Subject, About }) {
  //const [studySubject, setStudySubject] = useState(Subject || "");
  // const [aboutMe, setAboutMe] = useState(About || "");
  const [studySubject, setStudySubject] = useState(Subject || "");
  const [aboutMe, setAboutMe] = useState(About || "");
  const Router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to your API or database
    if ((await checkAbout(email)) === false) {
      await addUserInfo(studySubject, aboutMe, email);
    } else {
      await updateAbout(studySubject, aboutMe, email);
    }

    // Reset form fields
    setStudySubject("");
    setAboutMe("");
    Router.refresh();
  };

  return (
    <div className="container mx-auto px-4 py-6 min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">User Profile</h1>
        <div className="grid grid-cols-1 gap-6">
          <label className="block">
            <span className="text-gray-700 font-semibold">
              What Did You Study?
            </span>
            <input
              type="text"
              className="resize-none mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter what you studied"
              value={studySubject}
              onChange={(e) => setStudySubject(e.target.value)}
              required
            />
            {Subject && (
              <p className="text-sm text-gray-600 mt-2 whitespace-pre-wrap break-words">
                Previous: {Subject}
              </p>
            )}
          </label>
          <label className="block">
            <span className="text-gray-700 font-semibold">About Me</span>
            <textarea
              className="resize-none mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              rows="5"
              placeholder="Tell us about yourself"
              value={aboutMe}
              onChange={(e) => setAboutMe(e.target.value)}
              required
            ></textarea>
            {About && (
              <p className="text-sm text-gray-600 mt-2 whitespace-pre-wrap break-words">
                Previous: {About}
              </p>
            )}
          </label>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserProfileForm;
