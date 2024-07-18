"use client";
import React, { useState } from "react";
import addSocials from "@/backend/Socials/addsocials";
import checkSocialsExist from "@/backend/Socials/checkifexists";
import updateSocials from "@/backend/Socials/updatesocials";
import { useRouter } from "next/navigation";
import getSocialsByEmail from "@/backend/Socials/getSocials";
function SocialForm({
  email,
  githubusername,
  twitterusername,
  linkedinusername,
}) {
  const [github, setGithub] = useState(githubusername || "");
  const [twitter, setTwitter] = useState(twitterusername || "");
  const [linkedin, setLinkedin] = useState(linkedinusername || "");
  const [loading, setLoading] = useState(false); // Add a loading state

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true to disable the button
    try {
      if ((await checkSocialsExist(email)) === false) {
        await addSocials(github, twitter, linkedin, email);
      } else {
        await updateSocials(github, twitter, linkedin, email); // Fixed to pass an object
      }
      setGithub("");
      setTwitter("");
      setLinkedin("");
    } catch (error) {
      console.error("Error handling the socials form:", error);
      alert("Failed to process your request."); // Optionally show an error message
    }
    setLoading(false); // Reset loading state regardless of the outcome
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
            <span className="text-gray-700 font-semibold">GitHub</span>
            <input
              required
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your GitHub username"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
            />
             {githubusername && (
              <p className="text-sm text-gray-600 mt-2 whitespace-pre-wrap break-words">
                Previous: {githubusername}
              </p>
            )}
          </label>
          <label className="block">
            <span className="text-gray-700 font-semibold">Twitter</span>
            <input
              required
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your Twitter Username"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
            />
            {twitterusername && (
              <p className="text-sm text-gray-600 mt-2 whitespace-pre-wrap break-words">
                Previous: {twitterusername}
              </p>
            )}
          </label>
          <label className="block">
            <span className="text-gray-700 font-semibold">LinkedIn</span>
            <input
              required
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your LinkedIn Username"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
            />
            {linkedinusername && (
              <p className="text-sm text-gray-600 mt-2 whitespace-pre-wrap break-words">
                Previous: {linkedinusername}
              </p>
            )}
          </label>
          <button
            disabled={loading}
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SocialForm;
