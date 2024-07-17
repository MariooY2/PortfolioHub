import SocialForm from "@/app/_components/Socials";
import { currentUser } from "@clerk/nextjs/server";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import getSocialsByEmail from "@/backend/Socials/getSocials";

async function page() {
  const user = await currentUser();
  const email = user.primaryEmailAddress.emailAddress;
  const Urls= await getSocialsByEmail(email);
  const githubUrl = `https://github.com/${Urls.data.github}`;
  const LinkedinUrl = `https://linkedin.com/in/${Urls.data.twitter}`;
  const twitterUrl = `https://twitter.com/${Urls.data.linkedin}`;
  return (
    <div>
      <SocialForm email={email} />

      <div className="flex justify-around gap-28  mt-44">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size="70" />
        </a>
        <a
          href={LinkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size="70" />
        </a>
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size="70" />
        </a>
      </div>
    </div>
  );
}

export default page;
