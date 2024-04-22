function GeneralInformationForm() {
  return (
    <div className="min-h-24 p-4 m-2 shadow-md rounded w-full">
      <form action="/" className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="bg-slate-100 rounded"
        />
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-slate-100 rounded"
        />
        <label htmlFor="number">Phone Number</label>
        <input
          type="tel"
          name="number"
          id="number"
          className="bg-slate-100 rounded"
        />
      </form>
    </div>
  );
}

export default GeneralInformationForm;
