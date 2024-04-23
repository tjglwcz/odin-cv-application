import React from "react";

const ExperienceForm = ({ experience, handleInputChange }) => {
  return (
    <div className="min-h-24 p-4 m-2 shadow-md rounded w-full">
      <form action="/" className="flex flex-col gap-2">
        <label htmlFor="companyName">Company Name</label>
        <input
          type="text"
          name="companyName"
          id="companyName"
          value={experience.companyName}
          onChange={handleInputChange}
          className="bg-slate-100 rounded"
        />
        <label htmlFor="positionTitle">Position Title</label>
        <input
          type="positionTitle"
          name="positionTitle"
          id="positionTitle"
          value={experience.positionTitle}
          onChange={handleInputChange}
          className="bg-slate-100 rounded"
        />
        <label htmlFor="employementDate">Employement Date</label>
        <input
          type="date"
          name="employementDate"
          id="employementDate"
          value={experience.employementDate}
          onChange={handleInputChange}
          className="bg-slate-100 rounded"
        />
        <label htmlFor="mainResponsibilities">Main Responsibilities</label>
        <textarea
          id="mainResponsibities"
          name="mainResponsibilities"
          value={experience.mainResponsibilities}
          onChange={handleInputChange}
          className="bg-slate-100"
        ></textarea>
      </form>
    </div>
  );
};
export { ExperienceForm };
