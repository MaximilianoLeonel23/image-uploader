import React from "react";
import { useState } from "react";
import Uploading from "./Uploading";
import UploadSuccess from "./UploadSuccess";
import { UploadImage } from "../assets/images/images";

const Uploader: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [successLoad, setSuccessLoad] = useState<boolean>(false);
  const [notification, setNotification] = useState<string>("");
  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const file = event.dataTransfer.files?.[0];
    if (file) {
      if (file.type === "image/jpeg" || file.type === "image/png") {
        setUploading(true);
        const data = await handleImageUpload(file);
        setTimeout(async () => {
          const imageData = await getImageUrl(data.fileName);

          if (imageData) {
            setImageUrl(imageData.url);
            setUploading(false);
            setSuccessLoad(true);
          }
        }, 4000);
      } else {
        setNotification("File format must be .jpg, .jpeg or .png");
        setTimeout(() => {
          setNotification("");
        }, 2000);
      }
    }
  };

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const file = event.target.files?.[0];
    if (file) {
      if (file.type === "image/jpeg" || file.type === "image/png") {
        setUploading(true);
        const data = await handleImageUpload(file);
        setTimeout(async () => {
          const imageData = await getImageUrl(data.fileName);

          if (imageData) {
            setImageUrl(imageData.url);
            setUploading(false);
            setSuccessLoad(true);
          }
        }, 4000);
      }
    }
  };

  const getImageUrl = async (filename: string) => {
    try {
      const response = await fetch(
        `https://image-uploader-api-97oj-dev.fl0.io/images/${filename}`,
        {
          method: "GET",
        }
      );

      return response;
    } catch (error) {
      console.log("No se encuentra la imagen");
    }
  };

  const handleImageUpload = async (file: File) => {
    console.log(file);
    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch(
        "https://image-uploader-api-97oj-dev.fl0.io/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      console.log("Respuesta del servidor:", data);
      return data;
    } catch (error) {
      console.error("Error al subir y almacenar la imagen:", error);
    }
  };

  if (uploading) {
    return <Uploading />;
  }

  if (successLoad) {
    return <UploadSuccess imageUrl={imageUrl} />;
  }

  return (
    <article className="bg-white rounded-xl p-8 uploader-shadow w-[20rem] max-h-[25rem] sm:w-[25rem] sm:max-h-[30rem]">
      <div className="flex flex-col justify-center text-center gap-y-4 sm:gap-y-6">
        <div className="flex flex-col gap-y-4">
          <h4 className="text-lg text-primary-gray-2 font-medium">
            Upload your image
          </h4>
          <p className="text-xxs text-primary-gray-3 font-medium">
            File should be Jpeg, Png...
          </p>
        </div>
        <div className="flex flex-col gap-y-4">
          <div
            className="flex flex-col justify-center gap-y-8 p-8 rounded-xl border border-dashed border-primary-lightblue bg-primary-gray-blue"
            onDrop={handleDrop}
            onDragOver={(event) => event.preventDefault()}
            onDragEnter={(event) => event.preventDefault()}
          >
            <div className="grid place-content-center">
              <UploadImage />
            </div>
            <p className="text-primary-gray-4 text-xs">
              Drag & Drop your image here
            </p>
          </div>
          <p className="text-primary-gray-4 text-xs">or</p>
        </div>
        <div className="flex items-center justify-center">
          <input
            id="file-btn"
            type="file"
            className=""
            onChange={handleUpload}
            accept=".png,.jpg,.jpeg"
            hidden
          />
          <label
            htmlFor="file-btn"
            className="bg-primary-blue py-2 px-4 rounded-lg text-white text-xs cursor-pointer"
          >
            Choose a file
          </label>
        </div>
        {notification && (
          <span className="text-xs text-primary-gray-4 text-center">
            {notification}
          </span>
        )}
      </div>
    </article>
  );
};

export default Uploader;
