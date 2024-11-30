
import React from "react";
import useFetch from "@/hooks/use_fetch";
import { getSingleJob } from "@/api/apiJobs";
import Applicationcard from "@/Pages/applicationcard";
const Application=()=>{
    const {
      loading: loadingJob,
      data: job,
      fn: fnJob,
      error: jobError,
    } = useFetch(getSingleJob, { job_id: id });
return (
  <>
    {job?.application?.length > 0 && job?.recruiter_id === user?.id && (
      <div className="flex flex-col gap-4 mt-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Applications
        </h2>
        {job?.application?.map((application) => (
          <Applicationcard key={application.id} application={application} />
        ))}
      </div>
    )}
  </>
);


}
export default Application;