import { useState } from "react";
import { DisplayView } from "./components/view/DisplayView";
function App() {
  const [general, setGeneral] = useState({
    name: "John Doe",
    email: "john@doe.com",
    number: "123321123",
  });
  const [education, setEducation] = useState({
    schoolName: "Sample School",
    fieldOfStudy: "Computer Science",
    graduationDate: "2024-03-01",
  });
  const [experience, setExperience] = useState({
    companyName: "Random Company",
    positionTitle: "Developer",
    employementDate: "2024-04-01",
    mainResponsibilities: "This is a place for main responsibilities.",
  });
  const handleInputChange = (setter) => (event) => {
    const { name, value } = event.target;
    setter((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col h-screen">
        <div className="min-h-24 p-4 m-2 shadow-md rounded w-full">
          <form action="/" className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={general.name}
              onChange={handleInputChange(setGeneral)}
              className="bg-slate-100 rounded"
            />
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              value={general.email}
              onChange={handleInputChange(setGeneral)}
              className="bg-slate-100 rounded"
            />
            <label htmlFor="number">Phone Number</label>
            <input
              type="tel"
              name="number"
              id="number"
              value={general.number}
              onChange={handleInputChange(setGeneral)}
              className="bg-slate-100 rounded"
            />
          </form>
        </div>
        <div className="min-h-24 p-4 m-2 shadow-md rounded w-full">
          <form action="/" className="flex flex-col gap-2">
            <label htmlFor="name">School Name</label>
            <input
              type="text"
              name="schoolName"
              id="schoolName"
              value={education.schoolName}
              onChange={handleInputChange(setEducation)}
              className="bg-slate-100 rounded"
            />
            <label htmlFor="email">Field of Study</label>
            <input
              type="text"
              name="fieldOfStudy"
              id="fieldOfStudy"
              value={education.fieldOfStudy}
              onChange={handleInputChange(setEducation)}
              className="bg-slate-100 rounded"
            />
            <label htmlFor="number">Graduation Date</label>
            <input
              type="date"
              name="graduationDate"
              id="graduationDate"
              value={education.graduationDate}
              onChange={handleInputChange(setEducation)}
              className="bg-slate-100 rounded"
            />
          </form>
        </div>
        <div className="min-h-24 p-4 m-2 shadow-md rounded w-full">
          <form action="/" className="flex flex-col gap-2">
            <label htmlFor="name">Company Name</label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              value={experience.companyName}
              onChange={handleInputChange(setExperience)}
              className="bg-slate-100 rounded"
            />
            <label htmlFor="positionTitle">Position Title</label>
            <input
              type="positionTitle"
              name="positionTitle"
              id="positionTitle"
              value={experience.positionTitle}
              onChange={handleInputChange(setExperience)}
              className="bg-slate-100 rounded"
            />
            <label htmlFor="employementDate">Employement Date</label>
            <input
              type="date"
              name="employementDate"
              id="employementDate"
              value={experience.employementDate}
              onChange={handleInputChange(setExperience)}
              className="bg-slate-100 rounded"
            />
            <label htmlFor="mainResponsibilities">Main Responsibilities</label>
            <textarea
              id="mainResponsibities"
              name="mainResponsibilities"
              value={experience.mainResponsibilities}
              onChange={handleInputChange(setExperience)}
              className="bg-slate-100"
              rounded
            ></textarea>
          </form>
        </div>
      </div>
      <div className="flex flex-col h-screen">
        <DisplayView
          general={general}
          education={education}
          experience={experience}
        />
      </div>
    </div>
  );
}

export default App;
