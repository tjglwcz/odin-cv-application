import { useState } from "react";
import { DisplayView } from "./components/view/DisplayView";
import { GeneralForm } from "./components/form/GeneralForm";
import EducationForm from "./components/form/EducationForm";
import ExperienceForm from "./components/form/ExperienceForm";
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
        <GeneralForm
          general={general}
          handleInputChange={handleInputChange(general)}
        />
        <EducationForm
          education={education}
          handleInputChange={handleInputChange(education)}
        />
        <ExperienceForm
          experience={experience}
          handleInputChange={handleInputChange(experience)}
        />
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
