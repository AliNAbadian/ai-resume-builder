"use client";
import { parseMarkdown } from "@/lib/utils";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit } = useForm();
  const [resume, setResume] = useState("");

  const onSubmit = async (data: Record<string, any>) => {
    // Split the skills string into an array
    data.skills = data.skills.split(",").map((skill: string) => skill.trim());

    const response = await fetch("/api/generate-resume", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    console.log(data);

    const result = await response.json();
    const parsedResult = parseMarkdown(result.resume);
    setResume(parsedResult);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">AI Resume Builder</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("name")}
          placeholder="Your Name"
          className="border p-2 w-full"
          required
        />
        <input
          {...register("jobTitle")}
          placeholder="Job Title"
          className="border p-2 w-full"
          required
        />
        <textarea
          {...register("experience")}
          placeholder="Experience"
          className="border p-2 w-full"
          required
        />
        <input
          {...register("skills")}
          placeholder="Skills (comma separated)"
          className="border p-2 w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Generate Resume
        </button>
      </form>

      {resume && (
        <div className="mt-6 p-4 border">
          <h2 className="text-xl font-bold">Generated Resume:</h2>
          <pre
            className="whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: resume }}
          ></pre>
        </div>
      )}
    </div>
  );
}
