// SOURCE: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/modals/regular
import React from "react";

import { useNavigate } from "react-router-dom";

import { useUpdateUserStore } from "../../../services/state/UpdateUserStore";

import AddSkillSpinnerUtil from "../../../components/utils/LoadersSpinners/AddSkillSpinner.Util";

import SkillSuggestionsUiComponent from "../../UI/SkillSuggestions.Ui.Component";
import DebouncedSearchSkillUiComponent from "../../UI/DebouncedSearchSkill.Ui.Component";

export default function AddUserSkillModalComponent() {
  const navigate = useNavigate();

  const { isAddingSkill } = useUpdateUserStore();

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-full max-w-3xl mx-auto my-6 ">
          {isAddingSkill && <AddSkillSpinnerUtil />}
          {/*content*/}
          <div className="relative flex flex-col w-full p-5 bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
              <h3 className="text-3xl font-semibold">Add User Skill</h3>
              <button
                className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none focus:outline-none"
                onClick={() => navigate(-1)}
              >
                <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none focus:outline-none hover:text-red-500">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <DebouncedSearchSkillUiComponent />
            <SkillSuggestionsUiComponent />
          </div>
        </div>

        {/* <div>loading overlay</div>
        <div>success view</div>
        <div>error view</div> */}
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  );
}
