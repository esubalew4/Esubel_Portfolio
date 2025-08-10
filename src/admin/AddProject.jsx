import React, { useState } from "react";
import toast from "react-hot-toast";
import { supabase } from "../SupabaseClient";
import Loading from "../Components/Loading";

const AddProject = () => {
  const [dataValue, setDataValue] = useState({
    title: "",
    techs: [],
    features: [],
    challenges: "",
    live: "",
    code: "",
    image_url: "",
    image_path: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [imageVal, setImageVal] = useState(null);

  const handleUploadImage = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageVal(e.target.files[0]);
    }
  };

  const uploadImage = async (file) => {
    try {
      const filePath = `images/${file.name}-${Date.now()}`;

      const { error: UploadImageError } = await supabase.storage
        .from("project-images")
        .upload(filePath, file);

      const { data } = await supabase.storage
        .from("project-images")
        .getPublicUrl(filePath);
      const pURL = data.publicUrl;
      return { pURL, filePath };
      if (UploadImageError) throw UploadImageError;
      console.log(filePath);
    } catch (error) {
      console.error("Error while uploading image:", error);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // uploading image
      let imageUrl = "";
      let imagePath = "";
      if (imageVal) {
        const ddata = await uploadImage(imageVal);
        imageUrl = ddata.pURL;
        imagePath = ddata.filePath;
        setDataValue((prev) => ({
          ...prev,
          image_url: imageUrl,
          image_path: imagePath,
        }));
        setImageVal(null);
      }
      // uploading array into supabase table
      const { error: UploadError } = await supabase
        .from("portfolio-projects")
        .insert([{ ...dataValue, image_url: imageUrl, image_path: imagePath }]);
      if (UploadError) throw UploadError;
      toast.success("File Uploaded Successfully!");
      setDataValue({
        title: "",
        techs: [],
        features: [],
        challenges: "",
        live: "",
        code: "",
        image_url: "",
        image_path: "",
      });
    } catch (error) {
      console.error("Error while uploading:", error);
      toast.error("Error while Uploading File.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="items-center min-h-screen justify-center flex">
      <form
        onSubmit={handleUpload}
        className="flex flex-col gap-4 border border-slate-200/15  p-6 w-80 sm:w-[75%] md:w-[65%] lg:w-[60%] rounded-lg shadow-xl"
      >
        {/* title input */}
        <input
          value={dataValue.title}
          onChange={(e) =>
            setDataValue((prev) => ({ ...prev, title: e.target.value }))
          }
          type="text"
          placeholder="Title"
          className="w-full text-white placeholder:text-slate-500 bg-slate-200/10 p-2 rounded-sm outline-0"
          required
        />

        {/* image input */}
        <input
          className="bg-slate-200/10 p-2 text-slate-500 cursor-pointer"
          type="file"
          accept="image/*"
          name="imageInput"
          required
          onChange={handleUploadImage}
        />

        {/* Techs Input */}
        <input
          required
          value={dataValue.techs}
          onChange={(e) =>
            setDataValue((prev) => ({
              ...prev,
              techs: e.target.value.split(","),
            }))
          }
          type="text"
          placeholder="Techs (with comma )"
          className="text-white placeholder:text-slate-500 bg-slate-200/10 p-2 rounded-sm outline-0 w-full"
        />

        {/* Features Input */}
        <input
          required
          value={dataValue.features}
          onChange={(e) =>
            setDataValue((prev) => ({
              ...prev,
              features: e.target.value.split(","),
            }))
          }
          type="text"
          placeholder="Features (with comma )"
          className="text-white placeholder:text-slate-500 bg-slate-200/10 p-2 rounded-sm outline-0 w-full"
        />

        {/* Other Inputs */}
        <input
          value={dataValue.challenges}
          onChange={(e) =>
            setDataValue((prev) => ({ ...prev, challenges: e.target.value }))
          }
          type="text"
          placeholder="Challenges"
          className="text-white placeholder:text-slate-500 bg-slate-200/10 p-2 rounded-sm outline-0"
          required
        />

        <input
          value={dataValue.live}
          onChange={(e) =>
            setDataValue((prev) => ({ ...prev, live: e.target.value }))
          }
          type="url"
          placeholder="Live URL"
          className="text-white placeholder:text-slate-500 bg-slate-200/10 p-2 rounded-sm outline-0"
          required
        />

        <input
          value={dataValue.code}
          onChange={(e) =>
            setDataValue((prev) => ({ ...prev, code: e.target.value }))
          }
          type="url"
          placeholder=" Code URL"
          className="text-white placeholder:text-slate-500 bg-slate-200/10 p-2 rounded-sm outline-0"
        />

        <button
          type="submit"
          className={`${
            isLoading ? "pointer-events-none opacity-60" : ""
          } bg-accent text-white gap-2 select-none px-4 py-2 rounded-sm font-medium cursor-pointer hover:brightness-75 active:scale-98 duration-50 flex justify-center`}
        >
          {isLoading ? (
            <>
              <Loading />
              Uploading
            </>
          ) : (
            "Upload Project"
          )}
        </button>
      </form>
    </div>
  );
};

export default AddProject;
