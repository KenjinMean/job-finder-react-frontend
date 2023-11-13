import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

export default function FilterDropdown({
  filters,
  jobTypes,
  filterName,
  handleFilterSelect,
}) {
  const [filterActive, setFilterActive] = useState(false);
  const handleFilterClick = () => {
    setFilterActive((prev) => !prev);
  };

  return (
    <Menu as="div" className="relative">
      <Fragment>
        <div>
          <Menu.Button
            onClick={handleFilterClick}
            className="px-4 py-1 border rounded-md"
          >
            {filters.job_type ? filters.job_type : filterName}
          </Menu.Button>
        </div>
        <Transition show={filterActive}>
          <Menu.Items
            static
            className="small-thumb-scrollbar max-h-72 overflow-y-scroll absolute flex flex-col left-0 top-[120%] w-56 text-left bg-white border rounded-md mt2 z-10 overflow-hidden outline-none"
          >
            {jobTypes.map((jobType, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <a
                    onClick={() => handleFilterSelect(jobType.value)}
                    className={`px-4 py-2 text-sm
                      
                      ${
                        active ? "bg-indigo-500  text-white" : "text-gray-700 "
                      }`}
                  >
                    {jobType.name}
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Fragment>
    </Menu>
  );
}
