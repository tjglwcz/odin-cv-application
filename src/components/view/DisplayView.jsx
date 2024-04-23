export const DisplayView = ({ general, education, experience }) => {
  return (
    <>
      <div className="min-h-24 p-4 m-2 shadow-md rounded w-full">
        <h2 className="text-lg text-center">{general.name}</h2>
        <p className="text-md text-center">
          {general.email} | {general.number}
        </p>
      </div>
      <h2 className="text-lg font-bold text-center m-4">EDUCATION</h2>
      <div className="min-h-24 p-4 m-2 shadow-md rounded w-full">
        <h2 className="text-lg text-center">{education.schoolName}</h2>
        <p className="text-md text-center">
          {education.fieldOfStudy} | {education.graduationDate}
        </p>
      </div>
      <h2 className="text-lg font-bold text-center m-4">EXPERIENCE</h2>
      <div className="min-h-24 p-4 m-2 shadow-md rounded w-full">
        <h2 className="text-lg text-center">{experience.companyName}</h2>
        <p className="text-md text-center">
          {experience.positionTitle} | {experience.employementDate}
        </p>
        <p className="text-center mt-4">{experience.mainResponsibilities}</p>
      </div>
    </>
  );
};
