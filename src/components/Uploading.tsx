import React from "react";

const Uploading: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-8 p-8 rounded-xl w-[20rem] max-h-[25rem] sm:w-[25rem] sm:max-h-[30rem] uploader-shadow">
      <h4 className="text-primary-gray-2 font-medium text-lg">Uploading...</h4>
      <div className="relative h-1 overflow-hidden bg-primary-gray-6 rounded w-full">
        <span className="absolute h-1 w-1/3 bg-primary-blue rounded uploading"></span>
      </div>
    </div>
  );
};

export default Uploading;
