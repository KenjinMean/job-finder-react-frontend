/**
 * Custom hook to filter and separate matched and unmatched skills.
 *
 * @param {Array<{ id: number, name: string }>} skillsToMatch - The skills to match against.
 * @param {Array<{ id: number, name: string }>} skillsToBeMatched - The skills to be matched.
 * @returns {{
 *   matchedSkills: Array<{ name: string }>,
 *   unmatchedSkills: Array<{ name: string }>,
 *   matchedCount: number,
 *   unmatchedCount: number,
 * }}
 */
import { useEffect, useState } from "react";

export function useSkillMatching(sourceSkills, targetSkills) {
  const [matchedSkills, setMatchedSkills] = useState([]);
  const [unmatchedSkills, setUnmatchedSkills] = useState([]);

  useEffect(() => {
    // Extract skill names from targetSkills
    const targetSkillNames = targetSkills.map((skill) => skill.name);

    // Filter and map matching skills
    const matchedSkills = sourceSkills
      .filter((userSkill) => targetSkillNames.includes(userSkill.name))
      .map((matchedSkill) => ({ name: matchedSkill.name }));

    // Filter and map unmatched skills
    const unmatchedSkills = sourceSkills
      .filter((userSkill) => !targetSkillNames.includes(userSkill.name))
      .map((unmatchedSkill) => ({ name: unmatchedSkill.name }));

    // Update state
    setMatchedSkills(matchedSkills);
    setUnmatchedSkills(unmatchedSkills);
  }, [sourceSkills, targetSkills]);

  return {
    matchedSkills,
    unmatchedSkills,
    matchedSkillsLength: matchedSkills.length,
    unmatchedSkillsLength: unmatchedSkills.length,
  };
}

// Usage
// const {
//   matchedSkills,
//   unmatchedSkills,
//   matchedSkillsLength,
//   unmatchedSkillsLength,
// } = useSkillMatching(userSkillsArray, jobSkillsArray);

// Now you have access to the length of matchedSkills and unmatchedSkills.
