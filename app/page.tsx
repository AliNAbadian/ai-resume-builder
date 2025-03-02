import React from "react";



const page = () => {


  return (
    <div className="flex flex-col items-center justify-between my-10 h-fit space-y-4 bg-slate-800/50 text-white shadow-lg shadow-white/5 rounded-md w-4/6 mx-auto font-mono py-10">
      <h1>AI Resume Builder</h1>
      <form action={createResume} className="flex flex-col gap-4">
        <input
          className="rounded-md placeholder:text-xs placeholder:text-center overflow-hidden bg-slate-400/70 ring-2 ring-white/80 focus-within:bg-slate-50 duration-200 ease-in-out transition-all text-slate-900 text-sm"
          type="text"
          name="name"
          required
          placeholder="Enter Your Name"
        />

        <input
          className="rounded-md placeholder:text-xs placeholder:text-center overflow-hidden bg-slate-400/70 ring-2 ring-white/80 focus-within:bg-slate-50 duration-200 ease-in-out transition-all text-slate-900 text-sm"
          type="text"
          name="jobTitle"
          required
          placeholder="Enter Your Job Title"
        />

        <textarea
          className="rounded-md placeholder:text-xs placeholder:text-center overflow-hidden bg-slate-400/70 ring-2 ring-white/80 focus-within:bg-slate-50 duration-200 ease-in-out transition-all text-slate-900 text-sm"
          name="experience"
          required
          placeholder="Enter Your Experience"
        />

        <input
          className="rounded-md placeholder:text-xs placeholder:text-center overflow-hidden bg-slate-400/70 ring-2 ring-white/80 focus-within:bg-slate-50 duration-200 ease-in-out transition-all text-slate-900 text-sm"
          type="text"
          name="skills"
          required
          placeholder="Enter Your Skills (comma separated)"
        />
        <button
          className="bg-yellow-500 py-2 px-4 rounded-md text-slate-700 font-bold hover:bg-yellow-600 duration-200 ease-in-out transition-all"
          type="submit"
        >
          Generate Resume
        </button>
      </form>
    </div>
  );
};

export default page;
