import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useApiUserSkillsFetch } from "../../../hooks/useApiSkill";
import { useSkillMatching } from "../../../hooks/useSkillMatching";
import { userRoutes } from "../../../constants/RoutesPath.Constants";
import { useAuthenticationStore } from "../../../services/state/AuthenticationStore";

export default function JobSkills({ jobSkills }) {
  const { token: isUserLoggedIn } = useAuthenticationStore();
  const { refetch } = useApiUserSkillsFetch(false);

  const [userSkillArray, setUserSkillArray] = useState([]);
  const { matchedSkills } = useSkillMatching(userSkillArray, jobSkills);

  useEffect(() => {
    if (isUserLoggedIn) {
      refetch().then((result) => {
        setUserSkillArray(result.data);
      });
    } else {
      setUserSkillArray([]);
    }
  }, [isUserLoggedIn]);

  return (
    <div id="job-skill" className="border rounded-md border-border-100">
      <h2 className="p-5 text-lg font-bold border-b border-border-100">
        Job Skills
      </h2>

      <div className="p-5">
        {isUserLoggedIn && (
          <p className="mb-2">{`${
            matchedSkills.length ? matchedSkills.length : "No"
          } ${matchedSkills.length === 1 ? "skill" : "skills"} matched`}</p>
        )}
        {/* refactor to be single resposibility component */}
        <p className="flex flex-wrap gap-1 text-sm">
          {jobSkills.map((skill) => {
            const isMatched = userSkillArray.some(
              (userSkill) => userSkill.name === skill.name
            );
            const skillClass = isMatched
              ? "bg-accent-blue600 text-content-black_inverted font-bold"
              : "";

            return (
              <span
                className={`px-2 rounded-full flex ${skillClass}`}
                key={skill.name}
              >
                {isMatched && (
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-content-black_inverted"
                  >
                    <path
                      d="M7 12L9.89075 14.8907V14.8907C9.95114 14.951 10.049 14.9511 10.1094 14.8907V14.8907L17 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {skill.name}
              </span>
            );
          })}
        </p>
      </div>

      {isUserLoggedIn && (
        <div className="border-t border-border-100">
          <Link
            to={userRoutes.userEditSkillPage}
            className="block w-full py-3 text-xl text-center text-accent-blue500 hover:text-content-black"
          >
            Manage Skills
          </Link>
        </div>
      )}
    </div>
  );
}
