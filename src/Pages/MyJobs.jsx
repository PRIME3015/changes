import CreateApplications from "@/components/created-applications";
import CreatedJobs from "@/components/created-jobs";
import { useUser } from "@clerk/clerk-react";
import { PulseLoader } from "react-spinners";
import { motion } from "framer-motion";

const MyJobs = () => {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded || !isSignedIn) {
    return (
      <div className="flex justify-center items-center h-screen">
        <PulseLoader color="#4f46e5" size={15} />
      </div>
    );
  }

  const isCandidate = user?.unsafeMetadata?.role === "candidate";
  const containerStyles = isCandidate
    ? "bg-gradient-to-r from-green-200 to-blue-300"
    : "bg-gradient-to-r from-yellow-200 to-orange-300";

  return (
    <div className={`min-h-screen flex flex-col ${containerStyles}`}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="gradient-title text-5xl sm:text-6xl font-extrabold text-center py-8"
      >
        {isCandidate ? "My Applications" : "My Jobs"}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="w-full max-w-6xl px-4"
      >
        {isCandidate ? <CreateApplications /> : <CreatedJobs />}
      </motion.div>
    </div>
  );
};

export default MyJobs;
