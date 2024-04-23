import React from "react";

const EducationForm = ({ education, handleInputChange }) => {
  return (
    <div className="min-h-24 p-4 m-2 shadow-md rounded w-full">
      <form action="/" className="flex flex-col gap-2">
        <label htmlFor="schoolName">School Name</label>
        <input
          type="text"
          name="schoolName"
          id="schoolName"
          value={education.schoolName}
          onChange={handleInputChange}
          className="bg-slate-100 rounded"
        />
        <label htmlFor="fieldOfStudy">Field of Study</label>
        <input
          type="text"
          name="fieldOfStudy"
          id="fieldOfStudy"
          value={education.fieldOfStudy}
          onChange={handleInputChange}
          className="bg-slate-100 rounded"
        />
        <label htmlFor="graduationDate">Graduation Date</label>
        <input
          type="date"
          name="graduationDate"
          id="graduationDate"
          value={education.graduationDate}
          onChange={handleInputChange}
          className="bg-slate-100 rounded"
        />
      </form>
    </div>
  );
};

export { EducationForm };
