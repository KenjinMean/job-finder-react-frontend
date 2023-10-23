// import React, { useState, useEffect, useRef, Fragment } from "react";
// import { Link } from "react-router-dom";
// import axiosClient from "../../axios-client";
// import { PageTitleUtil } from "../utils/PageTitle.Util";
// import InfiniteScroll from "react-infinite-scroll-component";
// import LoadingSpinnerUtil from "../utils/LoadingSpinnder.Util";
// import JobContainerView from "../views/JobContainer.View";
// import menuIcon from "../../assets/icons/option.png";

// export default function JobsListingOld() {
//   const [page, setPage] = useState(1);
//   const [jobs, setJobs] = useState([]);
//   const [error, setError] = useState(null);
//   const [hasMore, setHasMore] = useState(true);
//   const isMounted = useRef(false);

//   const fetchJobs = () => {
//     axiosClient
//       .get(`/jobs/get-job-posting?page=${page}`)
//       .then(({ data }) => {
//         if (data.data.length === 0) {
//           setHasMore(false);
//         } else {
//           setPage((prev) => prev + 1);
//           setJobs((prevJobs) => [...prevJobs, ...data.data]);
//         }
//       })
//       .catch((e) => {
//         setError(e.messages);
//       });
//   };

//   useEffect(() => {
//     if (!isMounted.current) {
//       isMounted.current = true;
//       fetchJobs();
//     }
//   }, []);

//   return (
//     <Fragment>
//       <PageTitleUtil title="Job Listings" />
//       <div id="job-listing-container" className="flex flex-col mx-auto ">
//         <>
//           {error ? (
//             <div>{error}Error</div>
//           ) : (
//             <>
//               <InfiniteScroll
//                 dataLength={jobs.length}
//                 next={fetchJobs}
//                 hasMore={hasMore}
//                 loader={
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "center",
//                       padding: "30px",
//                     }}
//                   >
//                     <LoadingSpinnerUtil size={8} />
//                   </div>
//                 }
//                 endMessage={<div>No More Jobs Available</div>}
//                 scrollThreshold={1}
//               >
//                 {jobs.map((job) => {
//                   return (
//                     <div key={job.id} className="relative">
//                       <button
//                         onClick={() => console.log("clicked")}
//                         className="absolute z-10 p-1 transition-all duration-300 border rounded-full right-5 top-5 hover:bg-background-200 "
//                       >
//                         <img
//                           src={menuIcon}
//                           alt="Menu icon"
//                           className="w-5 h-5"
//                         />
//                       </button>
//                       <Link to={`/jobs/view/${job.slug}`}>
//                         <JobContainerView job={job} />
//                       </Link>
//                     </div>
//                   );
//                 })}
//               </InfiniteScroll>
//             </>
//           )}
//         </>
//       </div>
//     </Fragment>
//   );
// }
