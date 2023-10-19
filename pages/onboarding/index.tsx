import React from "react";



import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


function Onboarding() {
    const router = useRouter();
    const handleOnboarding = (e: any) => {
        e.preventDefault();
        var newUser = {
            name: e.target[0].value.trim(),
            email: e.target[1].value.trim(),
        }
        alert(JSON.stringify(newUser));
        router.push("/onboarding/cof");

    }
  return (
    <div className="mx-auto w-full h-full">
      <div className="text-center my-10 p-4">
        <h1 className="text-4xl font-bold text-center">Join the Chain</h1>
        <p className="text-md">
          Handsome met debating sir dwelling age material. As style lived he
          worse dried
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center overflow-hidden w-full h-full">
          <form
            className="p-6 md:p-10 border-2 border-app-grey-light bg-app-grey-light w-full lg:max-w-3xl lg:mx-auto lg:w-full "
            //   onSubmit={(e) => addNewUser(e)}
            onSubmit={(e) => handleOnboarding(e)}
          >
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold">
                Personal Details
              </h3>
            </div>
            <div className="flex flex-col gap-2 my-4">
              <Label htmlFor="name" className="text-left font-semibold">
                Name
              </Label>
              <Input id="name" placeholder="Full Name" />
            </div>
            <div className="flex flex-col gap-2 my-4">
              <Label htmlFor="email" className="text-left font-semibold">
                Email
              </Label>

              <Input id="email" placeholder="Email" />
            </div>
            <div className="mt-8 ">
              <Button type="submit" variant={"default"} className="w-full">
                Proceed
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
