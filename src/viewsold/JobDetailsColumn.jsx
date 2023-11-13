import React, { useEffect, useState } from "react";
import axiosClient from "../axios-client";
import LoadingSpinner from "./loading/LoadingSpinner";

export default function JobDetailsColumn({ jobSlug }) {
  const [loading, setLoading] = useState(false);
  const [jobDetails, setJobDetails] = useState({});

  const getJobDetails = () => {
    setLoading(true);

    axiosClient
      .get(`/jobs/view/${jobSlug}`)
      .then(({ data }) => {
        setJobDetails(data.job);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (jobSlug) {
      getJobDetails();
    }
  }, [jobSlug]);
  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          {jobDetails.company && (
            <>
              <div>
                <h2 className="mb-2 text-lg font-semibold">
                  {jobDetails.title}
                </h2>
                <p>{jobDetails.company.name}</p>
                <p>{jobDetails.location}</p>
              </div>
              <div className="mt-4">
                <h3 className="mb-1 font-semibold text-md">Description</h3>
                <p className="text-sm text-gray-600">
                  {jobDetails.description}
                </p>
              </div>
              <div className="mt-4">
                <h3 className="mb-1 font-semibold text-md">Requirements</h3>
                <ul className="text-sm list-disc list-inside">
                  {jobDetails.requirements}
                </ul>
                <p className="font-semibold">Salary: P{jobDetails.salary}</p>
                <p className="font-semibold">Skills:</p>
                <p>
                  {jobDetails.skills.map((skill) => (
                    <span key={skill.id}>{skill.name}, </span>
                  ))}
                </p>
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis at harum mollitia alias doloribus dolores assumenda
                nam maxime debitis possimus inventore, distinctio omnis fugiat
                aliquam officiis quae quisquam corrupti sit? Porro repudiandae
                optio nam enim! Voluptas, nisi sed. Veritatis doloremque
                similique debitis aut! Provident quas quod repudiandae
                voluptates praesentium reiciendis dicta, omnis consequatur,
                culpa dolorem dolore veritatis. Dolor, pariatur itaque.
                Doloribus quod officia sit nisi iusto, atque nemo, at
                necessitatibus voluptatibus eveniet expedita laudantium
                inventore odit velit quam sequi. Ad reiciendis, officia iusto
                neque tempora placeat rem minus animi error! Corrupti natus
                corporis quidem consequatur eaque aliquam, ducimus numquam
                ratione nobis eligendi explicabo, necessitatibus cumque
                excepturi. Atque tempora doloribus quos incidunt sed commodi
                odio, suscipit id impedit modi, optio nobis. Illo soluta facilis
                qui eveniet obcaecati aut fugiat deserunt modi inventore fugit,
                dolorem odio dolorum nam, facere, voluptatem esse distinctio eum
                explicabo molestiae et dolores temporibus quae. Quae, quod
                laudantium? Unde voluptatum natus ullam pariatur cumque
                blanditiis accusantium dignissimos fugiat facere dolores velit
                esse, in mollitia. Nam repellendus similique voluptatibus. Dolor
                rerum reprehenderit neque saepe. Ipsa id illo reiciendis
                expedita. Id ut praesentium, rem pariatur eius reiciendis dolore
                cum iusto sint corporis? Voluptates quas animi exercitationem
                optio, possimus aspernatur ad perspiciatis repellendus
                voluptatum, aperiam placeat dolor cum necessitatibus. A,
                adipisci! Repellendus at accusantium, corporis reiciendis, omnis
                eaque ipsum dicta suscipit eos repellat, nihil quod nesciunt
                perspiciatis enim fugit! Nemo illum iure eum unde voluptate,
                beatae soluta illo laudantium reprehenderit molestias?
                Consequatur fugiat eveniet tempore libero blanditiis ut facere
                et tempora neque perferendis accusamus voluptas illo minima
                nesciunt fugit, voluptates eligendi. Iste dolorem ab excepturi
                id esse cupiditate quidem sed expedita? Ad alias nisi, tempore
                ipsum harum repellendus voluptatem sapiente. Ducimus dolorem eos
                blanditiis qui aut fuga aperiam sed quis nobis, odio repudiandae
                magnam harum, nostrum quas dolor perspiciatis doloremque!
                Provident. Harum odit tempora ab labore. Deserunt voluptas
                dolore ad cupiditate inventore id corporis, voluptatum eos
                repudiandae dolores animi quis adipisci maiores distinctio
                tenetur, nostrum facilis, enim sunt. Qui, asperiores modi.
                Blanditiis nisi, est voluptatem totam facere distinctio eaque
                recusandae vero ab suscipit, ullam illo harum sint nulla velit
                voluptate rem consequatur quibusdam accusamus hic? Ullam
                eligendi quidem sint velit voluptates. Autem ut impedit quo
                amet, repellendus nulla ullam excepturi dolorem consequuntur
                pariatur qui. Voluptatibus fugiat enim a dolore delectus quas
                maxime debitis et dignissimos ullam perferendis, non, modi
                ducimus veritatis. Quaerat illum natus itaque dolor quidem rem
                laudantium facilis doloremque pariatur ex eius aut, recusandae
                voluptas officiis nulla neque! Nostrum in exercitationem
                explicabo saepe officiis magni recusandae impedit nihil ducimus.
                Labore quas voluptates eveniet magnam error cupiditate aliquam
                nisi, dignissimos iure officiis? Adipisci mollitia omnis debitis
                unde! Iusto dolore tempore voluptate, consectetur velit debitis
                numquam esse! Sint labore perferendis commodi? Reiciendis
                doloribus mollitia consequuntur animi corrupti voluptatibus
                pariatur sed, reprehenderit repellat cumque! Repellat officiis
                itaque quam deleniti hic numquam dolores iure, quaerat rem,
                ipsum dolor porro assumenda voluptate facilis delectus. Magnam
                eius exercitationem deserunt modi praesentium incidunt placeat
                optio minima aliquid magni, vitae aliquam quis voluptatibus
                eaque quam dolorum adipisci quisquam nemo vero doloremque
                libero, voluptatum laboriosam animi? Nesciunt, deleniti?
                Consequatur cum, officiis dolorem rerum, maxime natus, assumenda
                pariatur facilis repellendus aliquam tenetur modi quia
                dignissimos reprehenderit quibusdam iusto. Ratione ab veniam
                blanditiis adipisci aliquam optio quam tenetur molestias rem. In
                vitae enim alias amet dicta harum perspiciatis non, molestias
                illo officiis, unde minima temporibus iusto atque reprehenderit
                aliquid? Consequatur, suscipit quas! In pariatur, hic laborum
                nostrum nobis obcaecati quos. Pariatur, ullam illo. Veniam
                eveniet illum animi ut eaque, quo ipsam, maiores, excepturi vero
                perferendis perspiciatis quisquam? Repellat similique deleniti
                autem rerum iste doloribus fuga quo ab unde, cumque id.
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
