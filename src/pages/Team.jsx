import React, { useEffect, useState } from "react";
import TeamCard from "../components/TeamCard";
import { Client, Databases, Query } from "appwrite";

const conf = {
  appwriteURL: import.meta.env.VITE_APPWRITE_ENDPOINT,
  appwriteProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  appwriteDatabaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  appwriteCollectionId: import.meta.env.VITE_APPWRITE_TEAMS_COLLECTION_ID
}

// database Teams
// column names are: 
// $id name designation profileImageUrl isActive dateCreated category $createdAt $updatedAt
//category includes ourPatron, conveyors, studentCouncil

// add env: VITE_APPWRITE_TEAMS_COLLECTION_ID

function Team() {
  const [Data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const client = new Client()
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectId);

    const databases = new Databases(client);

    const fetchTeam = async () => {
      try {
        const response = await databases.listDocuments(
          conf.appwriteDatabaseId,
          conf.appwriteCollectionId,
          [Query.equal("isActive", true)]
        );

        setData(response.documents);
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    };

    fetchTeam();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Appwrite error: {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen text-[#816e8b] px-4 sm:px-6 md:px-8 lg:px-20 box-border flex flex-col w-full bg-[#110019]  py-28 team-main-div">
      <div className="py-24 flex flex-col items-center">
        <h1 className="font-sans text-2xl text-center sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4">
          OUR TEAM
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-center mb-6 sm:mb-8 max-w-3xl">
          Dive into the heart of VIT Bhopal with AdVITYa'25 – an electrifying
          blend of technology and culture. Crafted by the ingenious minds of VIT
          Bhopal students.
        </p>
      </div>

      {/* Our Patron Section */}
      <div className="flex flex-col lg:mb-20 mb-15">
        <span className="font-sans font-extrabold text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-center sm:text-left">
          Our Patron
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 justify-items-center">
          {Data.filter((element) => element.category === "ourPatron").map((element, index) => (
            <TeamCard
              key={`patron-${element.$id || index}`}
              name={element.name}
              designation={element.designation}
              imgurl={element.profileImageUrl}
            />
          ))}
        </div>
      </div>

      {/* Conveyors Section */}
      <div className="flex flex-col mb-8 sm:mb-10">
        <span className="font-sans font-extrabold text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-center sm:text-left">
          Conveyors
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 justify-items-center">
          {Data.filter((element) => element.category === "conveyors").map((element, index) => (
            <TeamCard
              key={`conveyors-${element.$id || index}`}
              name={element.name}
              designation={element.designation}
              imgurl={element.profileImageUrl}
            />
          ))}
        </div>
      </div>

      {/* Student Council Section */}
      <div className="flex flex-col">
        <span className="font-sans font-extrabold text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-center sm:text-left">
          Student Council
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 justify-items-center">
          {Data.filter((element) => element.category === "studentCouncil").map((element, index) => (
            <TeamCard
              key={`council-${element.$id || index}`}
              name={element.name}
              designation={element.designation}
              imgurl={element.profileImageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;