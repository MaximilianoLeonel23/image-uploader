import React, { useState } from "react";
import { IconCheck } from "../assets/icons/icons";

interface Props {
  imageUrl: string | null;
}

const UploadSuccess: React.FC<Props> = ({ imageUrl }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyLink = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (imageUrl) {
      try {
        navigator.clipboard.writeText(imageUrl);
        console.log("copiado");
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <article className="bg-white rounded-xl p-8 uploader-shadow w-[20rem] max-h-[25rem] sm:w-[25rem] sm:max-h-[30rem] uploader-shadow">
      <div className="flex flex-col justify-center text-center gap-y-4 sm:gap-y-8">
        <div className="flex flex-col gap-y-2 items-center">
          <IconCheck />
          <h4 className="text-lg text-primary-gray-2">
            Uploaded Successfully!
          </h4>
        </div>
        <div className="h-[12.5rem]">
          <img
            src={imageUrl ? imageUrl : ""}
            alt="uploaded image preview"
            className="h-full w-full object-cover rounded-xl"
          />
        </div>
        <div className="relative">
          <input
            type="text"
            defaultValue={imageUrl ? imageUrl : ""}
            className="w-full bg-primary-gray-blue border border-primary-gray-5 rounded-lg pl-2 py-2 text-xxxs text-primary-text focus:outline-none"
          />
          {copied ? (
            <button className="absolute top-px right-px bg-primary-green rounded-lg text-xxxs px-2 py-2 text-white z-20">
              Copied
            </button>
          ) : (
            <button
              onClick={handleCopyLink}
              className="absolute top-px right-px bg-primary-blue rounded-lg text-xxxs px-2 py-2 text-white z-20"
            >
              Copy Link
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default UploadSuccess;
