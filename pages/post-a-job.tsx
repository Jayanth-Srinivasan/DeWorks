import Header from "@/components/layouts/Header";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Footer from "@/components/layouts/Footer";
import { postJob } from "@/blockchain/constants/utils";
import { useRouter } from "next/router";

const PostAJob = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    title: "",
    location: "",
    category: "",
    pay: 0,
    experience: "",
    description: "",
  });

  const handleValuesChange =
    (key: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => {
        return { ...prev, [key]: e.target.value };
      });
    };

  const handleCategorySelect = (val: string) => {
    setValues((prev) => {
      return { ...prev, category: val };
    });
  };
  const handleExperienceSelect = (val: string) => {
    setValues((prev) => {
      return { ...prev, experience: val };
    });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
    postJob(
      values.category,
      values.title,
      values.description,
      values.pay,
      values.experience,
      values.location
    ).then((res) => {
      router.replace("/dashboard/client");
    });
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
  ];

  const EXPERIENCE = ["Beginner", "Intermediate", "Expert"];

  return (
    <main className="min-h-screen bg-[url('/assets/line-bg.png')] w-full font-outfit bg-app-grey-dark text-stone-200">
      {/* <Header /> */}
      <section className="p-4 md:px-16 lg:max-w-4xl lg:mx-auto font-outfit py-[50px] md:py-[80px]">
        <div className="mx-auto flex flex-col gap-4 text-center pb-[50px] md:pb-[80px]">
          <h2 className="text-3xl lg:text-5xl font-bold">Post a Job</h2>
          <p className="text-slate-200 md:text-lg">
            Define your project&apos;s requirements, set milestones, and discuss
            terms with ease. Find the right expertise for your tasks with our
            streamlined posting process.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full p-4 font-outfit bg-app-grey-light flex flex-col gap-4 rounded border border-white/10"
        >
          <h1 className="font-bold text-xl md:text-2xl">Job Details</h1>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="title">Job Title</Label>
            <Input
              onChange={handleValuesChange("title")}
              required
              type="text"
              className="h-12"
              placeholder="Title of the job"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="location">Location</Label>
            <Input
              onChange={handleValuesChange("location")}
              type="text"
              className="h-12"
              placeholder="Leave it blank for remote location"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="category" className="mb-2">
              Category
            </Label>
            <Select required onValueChange={handleCategorySelect}>
              <SelectTrigger className="w-full h-12">
                <SelectValue placeholder="Select" />
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
            <Label htmlFor="location">Job Pay</Label>
            <Input
              required
              step={0.01}
              onChange={handleValuesChange("pay")}
              type="number"
              className="h-12"
              placeholder="How much for the work"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="experiance" className="mb-2">
              Experiance Level
            </Label>
            <Select required onValueChange={handleExperienceSelect}>
              <SelectTrigger className="w-full h-12">
                <SelectValue placeholder="Select" />
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
            <Label htmlFor="message">Job Description</Label>
            <Textarea
              required
              onChange={handleValuesChange("description")}
              placeholder="Type your job description"
              id="message"
            />
          </div>
          <Button type="submit" className="h-12">
            Post this Job
          </Button>
        </form>
      </section>
      {/* <Footer /> */}
    </main>
  );
};

export default PostAJob;
