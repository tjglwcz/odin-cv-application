import GeneralInformationView from "./components/view/GeneralInformationView";
import EducationView from "./components/view/EducationView";
import ExperienceView from "./components/view/ExperienceView";
function App() {
  return (
    <div>
      <GeneralInformationView
        name="John"
        email="john@doe.com"
        number="123123123"
      />
      <h2 className="text-lg font-bold text-center m-4">EDUCATION</h2>
      <EducationView
        schoolName="Sample School"
        titleOfStudy="Computer Science"
        dateOfStudy="2020/03/01 - 2023/03/01"
      />
      <h2 className="text-lg font-bold text-center m-4">EXPERIENCE</h2>
      <ExperienceView
        companyName="The Company"
        positionTitle="Front End Developer"
        dateOfWork="2023/03/01 - current"
        mainResponsibilities="This is a place for main responsibilities."
      />
    </div>
  );
}

export default App;
