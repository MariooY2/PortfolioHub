"use client"
import getSocialsByEmail from "@/backend/Socials/getSocials"
import GetProjects from "@/backend/Projects/GetProjects"
import checkUserExistsByEmail from "@/backend/user/CheckUser"
import { useRouter } from 'next/navigation';

function decodeUpToFirstPercent(encodedString) {
    let result = '';
    for (let i = 0; i < encodedString.length; i++) {
        if (encodedString[i] === '%') {
            // Assume that the '%' is followed by two hexadecimal digits
            if (i + 2 < encodedString.length) {
                const hex = encodedString.substring(i + 1, i + 3);
                const decodedChar = String.fromCharCode(parseInt(hex, 16));
                result += decodedChar;
                i += 2; // Move past the hex digits
            }
        } else {
            result += encodedString[i];
        }
    }
    return result;
}


async function page({params}) {
   
    const router = useRouter();
    const email = params.PortfolioEmail;
    //console.log(email)
   const decodedemail=decodeUpToFirstPercent(email);
   console.log(decodedemail)

   const navigateToHome = () => {
    router.push('/');
  };

   if (await checkUserExistsByEmail(decodedemail) === false) {
    return (
        <>
            <h1 className="text-red-600 text-2xl text-center mt-8">
                Your username doesn't exist. Please create an account.
            </h1>
            <div className="flex items-center justify-center">
            <button
          onClick={navigateToHome}
          className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Go to Home
        </button>
        </div>
        </>
    );
}


    return (
        <div>
            
        </div>
    )
}

export default page
