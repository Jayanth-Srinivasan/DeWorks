import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { CheckCircle } from "lucide-react";
import { upload } from "@spheron/browser-upload";
import Image from "next/image";
import React, { useRef, useState } from "react";

function ViewPosting() {
  const CHATS = [
    {
      id: 1,
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      isClient: true,
    },
    {
      id: 2,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      isClient: false,
    },
    {
      id: 3,
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      isClient: true,
    },
    {
      id: 4,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      isClient: false,
    },
  ];
   const [file, setFile] = useState<File | null>(null);
   const fileInputRef = useRef<HTMLInputElement | null>(null);
   const [isLoading, setIsLoading] = useState(false);
   const [uploadLink, setUploadLink] = useState("");
   const [dynamicLink, setDynamicLink] = useState("");

   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     const selectedFile = event.target.files ? event.target.files[0] : null;
     setFile(selectedFile);
     setUploadLink("");
     setDynamicLink("");
   };

   const handleSelectFile = () => {
     if (fileInputRef.current) {
       fileInputRef.current.click();
     }
   };

   const handleUpload = async () => {
     if (!file) {
       alert("No file selected");
       return;
     }

     try {
       setIsLoading(true);
       const response = await fetch("/api/initiate-upload");
       const responseJson = await response.json();
       const uploadResult = await upload([file], {
         token: responseJson.uploadToken,
       });

       setUploadLink(uploadResult.protocolLink);
       setDynamicLink(uploadResult.dynamicLinks[0]);
     } catch (err) {
       alert(err);
     } finally {
       setIsLoading(false);
     }
   };
  
  return (
    <main className="min-h-screen bg-[url('/assets/line-bg.png')] w-full font-outfit bg-app-grey-dark text-stone-200">
      <section className="p-4 flex flex-col md:flex-row md:px-16 items-center gap-12 w-full mx-auto py-[50px] md:py-[80px]">
        <div className="md:w-2/3 w-full">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Digital Marketing Manager
          </h1>
          <p className="text-slate-200 text-lg font-medium md:text-xl mt-4">
            $8000 USD • 2 days ago
          </p>
          <div className="py-8">
            <p className="text-lg font-medium">Assigned by:</p>
            <div className="p-4 border-2 bg-app-grey-light border-app-grey-light rounded-md mt-2 max-w-md">
              <div className="flex justify-between items-center gap-4">
                <span className="text-base font-medium">Client 1</span>
                <span className="text-amber-500">Not Submitted</span>
                {/* <span className="text-green-500">Accepted</span> */}
                {/* <span className="text-red-500">Rejected</span> */}
              </div>
            </div>
          </div>
          <div className="p-4 border-2 border-app-grey-light bg-app-grey-light rounded-md max-w-md">
            <p className="text-base font-medium">Update the Progress</p>
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <span className="text-base">Sub Task 1</span>
                <Button variant={"outline"} className="h-10" disabled>
                  Completed
                </Button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-base">Sub Task 2</span>
                <Button variant={"outline"} className="h-10">
                  Complete
                </Button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-base">Sub Task 3</span>
                <Button variant={"outline"} className="h-10">
                  Complete
                </Button>
              </div>
            </div>
          </div>
          <div className="p-4 border-2 border-app-grey-light bg-app-grey-light rounded-md mt-4 max-w-md">
            <p className="text-md">Submit Files</p>
            {/* <Button variant={"outline"} className="h-10 mt-4">
              Upload
            </Button> */}
            {/* <div>
              <div className="p-2 border-2 border-stone-500 rounded-md mt-2 underline">
                1.File one
              </div>
              <div className="p-2 border-2 border-stone-500 rounded-md mt-2 underline">
                1.File one
              </div>
              <div className="p-2 border-2 border-stone-500 rounded-md mt-2 underline">
                1.File one
              </div>
            </div> */}
            {isLoading ? (
              <>Uploading...</>
            ) : (
              <>
                <div className="mt-2">
                  <div className="w-full">
                    <Button
                      variant={"outline"}
                      className="w-full"
                      onClick={handleSelectFile}
                    >
                      Select File to Upload
                      <input
                        id="file"
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="w-full h-full"
                        style={{ display: "none" }}
                      />
                    </Button>
                    <div className="flex-1 flex items-center pl-4x text-sm ">
                      {file ? "File Name:" + " " + file?.name : "No file selected"}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Button
                      // variant={"outline"
                      className="button-con button-53 h-12"
                      onClick={handleUpload}
                    >
                      Upload
                    </Button>
                    {/* {uploadLink && (
                      <a
                        className="text-sm mt-4 "
                        href={uploadLink}
                        target="__blank"
                      >
                        {uploadLink}
                      </a>
                    )} */}
                    {/* {dynamicLink && (
                      <a
                        className="text-sm mt-4 "
                        href={`https://${dynamicLink}`}
                        target="__blank"
                      >
                        {dynamicLink}
                      </a>
                    )} */}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className=" h-[600px] md:w-3/4 w-full ">
          <div className="flex flex-col flex-grow w-full h-full bg-app-grey-light shadow-xl rounded-lg overflow-hidden">
            <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
              {CHATS.map((chat) => (
                <div key={chat.id}>
                  {chat.isClient ? (
                    <div className="flex w-full mt-2 space-x-3 max-w-xs">
                      <div className="p-3 bg-gray-600/50 rounded-r-lg rounded-bl-lg">
                        <p className="text-sm">{chat.message}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end ">
                      <div className="bg-app-slate-blue text-white p-3 rounded-l-lg rounded-br-lg">
                        <p className="text-sm">{chat.message}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="bg-gray-500/50 p-4">
              <Input className="w-full" placeholder="Type a message" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ViewPosting;
