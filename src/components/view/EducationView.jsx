function EducationView(props) {
  return (
    <div className="min-h-24 p-4 m-2 shadow-md rounded w-full">
      <h2 className="text-lg text-center">{props.schoolName}</h2>
      <p className="text-md text-center">
        {props.titleOfStudy} | {props.dateOfStudy}
      </p>
    </div>
  );
}

export default EducationView;
