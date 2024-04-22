function ExperienceView(props) {
  return (
    <div className="min-h-24 p-4 m-2 shadow-md rounded w-full">
      <h2 className="text-lg text-center">{props.companyName}</h2>
      <p className="text-md text-center">
        {props.positionTitle} | {props.dateOfWork}
      </p>
      <p className="text-center mt-4">{props.mainResponsibilities}</p>
    </div>
  );
}

export default ExperienceView;
