import { useRouter } from "next/router";

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useAccount } from "wagmi";
import { addClientData } from "@/blockchain/constants/utils";

function UserType() {
    const router = useRouter();
    const [clientData, setClientData] = useState({
        name: "",
        email: "",
        company: "",
        description: "",
    });
    const [freelancerData, setFreelancerData] = useState({
        name: "",
        email: "",
        category: "",
        experience: "",
        skills: "",
    });

    const handleClientValuesChange =
        (key: keyof typeof clientData) =>
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setClientData((prev) => {
                return { ...prev, [key]: e.target.value };
            });
        };
    const handleFreelancerValuesChange =
        (key: keyof typeof freelancerData) =>
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setFreelancerData((prev) => {
                return { ...prev, [key]: e.target.value };
            });
        };

    const handleClientCategorySelect = (val: string) => {
        setClientData((prev) => {
            return { ...prev, category: val };
        });
    };
    const handleFreelancerCategorySelect = (val: string) => {
        setFreelancerData((prev) => {
            return { ...prev, category: val };
        });
    };
    const handleBudgetSelect = (val: string) => {
        setClientData((prev) => {
            return { ...prev, budget: val };
        });
    };
    const handleExperienceSelect = (val: string) => {
        setFreelancerData((prev) => {
            return { ...prev, budget: val };
        });
    };

    const handleClientSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(clientData);
    };
    const handleFreelancerSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(freelancerData);
    };

    const CATEGORIES = [
        "Accounting",
        "Business & Consulting",
        "Human Research",
        "Marketing & Finance",
        "Design & Development",
        "Finance Managment",
        "Project Management",
        "Customer Service",
        "Others",
    ];
    const BUDGET = [
        "0-5000",
        "5000-10000",
        "10000-50000",
        "50000-100000",
        "100000+",
    ];

  const EXPERIENCE = ["Beginner", "Intermediate", "Expert"];

  const { isConnected, address } = useAccount();

  const addClientToChain = () => {
    if (isConnected) {
      addClientData(
        clientData.name,
        clientData.company,
        clientData.description,
        address!,
        clientData.email
      ).then(() => {
        router.push("/clientDashboard");
      });
    }
  };

  return (
    <main className="min-h-screen bg-[url('/assets/line-bg.png')] w-full font-outfit bg-app-grey-dark text-stone-200">
      <section className="p-4 md:px-16 lg:max-w-4xl lg:mx-auto font-outfit py-[50px] md:py-[80px]">
        {router.query.userType === "client" ? (
          <>
            <div className="mx-auto flex flex-col gap-4 text-center pb-[50px] md:pb-[80px]">
              <h2 className="text-3xl lg:text-5xl font-bold">Join as Client</h2>
              <p className="text-slate-200 md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                vel maximus justo, a accumsan neque. Donec magna diam,
                vestibulum a posuere vitae, lobortis in ipsum.
              </p>
            </div>
            <form
              onSubmit={handleClientSubmit}
              className="w-full p-4 font-outfit bg-app-grey-light flex flex-col gap-6 rounded border border-white/10"
            >
              <h1 className="font-bold text-xl md:text-2xl">Client Details</h1>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="name">Your Name / Comapny Name</Label>
                <Input
                  onChange={handleClientValuesChange("name")}
                  required
                  type="text"
                  className="h-12"
                  placeholder="Enter your full name or Comapny name"
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  onChange={handleClientValuesChange("email")}
                  required
                  type="email"
                  className="h-12"
                  placeholder="Enter your email  or Comapny email "
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="category" className="mb-2">
                  What category you will be looking for?
                </Label>
                <Select required onValueChange={handleClientCategorySelect}>
                  <SelectTrigger className="w-full h-12">
                    <SelectValue placeholder="Pick a Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((item, idx) => (
                      <SelectItem key={idx} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="budget" className="mb-2">
                  What is your budget range?
                </Label>
                <Select required onValueChange={handleBudgetSelect}>
                  <SelectTrigger className="w-full h-12">
                    <SelectValue placeholder="Pick a Budget" />
                  </SelectTrigger>
                  <SelectContent>
                    {BUDGET.map((item, idx) => (
                      <SelectItem key={idx} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={addClientToChain} type="submit" className="h-12">
                Join
              </Button>
            </form>
          </>
        ) : (
          <>
            <div className="mx-auto flex flex-col gap-4 text-center pb-[50px] md:pb-[80px]">
              <h2 className="text-3xl lg:text-5xl font-bold">
                Join as Freelancer
              </h2>
              <p className="text-slate-200 md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                vel maximus justo, a accumsan neque. Donec magna diam,
                vestibulum a posuere vitae, lobortis in ipsum.
              </p>
            </div>
            <form
              onSubmit={handleFreelancerSubmit}
              className="w-full p-4 font-outfit bg-app-grey-light flex flex-col gap-6 rounded border border-white/10"
            >
              <h1 className="font-bold text-xl md:text-2xl">
                Freelancer Details
              </h1>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  onChange={handleFreelancerValuesChange("name")}
                  required
                  type="text"
                  className="h-12"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Your Email</Label>
                <Input
                  onChange={handleFreelancerValuesChange("email")}
                  required
                  type="email"
                  className="h-12"
                  placeholder="Enter your email"
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="category" className="mb-2">
                  Which category suits you best?
                </Label>
                <Select required onValueChange={handleFreelancerCategorySelect}>
                  <SelectTrigger className="w-full h-12">
                    <SelectValue placeholder="Pick a Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((item, idx) => (
                      <SelectItem key={idx} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="experience" className="mb-2">
                  What is your experience level as freelancer?
                </Label>
                <Select required onValueChange={handleExperienceSelect}>
                  <SelectTrigger className="w-full h-12">
                    <SelectValue placeholder="Pick your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    {EXPERIENCE.map((item, idx) => (
                      <SelectItem key={idx} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="skills">Your Skills</Label>
                <Textarea
                  required
                  onChange={handleFreelancerValuesChange("skills")}
                  placeholder="Type your skills seperated by comma"
                  id="skills"
                />
              </div>
              <Button
                onClick={() => router.push("/dashboard/freelancer")}
                type="submit"
                className="h-12"
              >
                Join
              </Button>
            </form>
          </>
        )}
      </section>
    </main>
  );
}

export default UserType;
