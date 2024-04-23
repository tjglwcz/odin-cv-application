import { useState } from "react";
function App() {
  const [general, setGeneral] = useState({
    name: "John Doe",
    email: "john@doe.com",
    number: "123321123",
  });

  const handleInputChange = (e) => {
    const { name, value } = event.target;
    setGeneral({
      ...general,
      [name]: value,
    });
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
              onChange={handleInputChange}
              className="bg-slate-100 rounded"
            />
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              value={general.email}
              onChange={handleInputChange}
              className="bg-slate-100 rounded"
            />
            <label htmlFor="number">Phone Number</label>
            <input
              type="tel"
              name="number"
              id="number"
              value={general.number}
              onChange={handleInputChange}
              className="bg-slate-100 rounded"
            />
          </form>
        </div>
      </div>
      <div className="flex flex-col h-screen">
        <div className="min-h-24 p-4 m-2 shadow-md rounded w-full">
          <h2 className="text-lg text-center">{general.name}</h2>
          <p className="text-md text-center">
            {general.email} | {general.number}
          </p>
        </div>
        <h2 className="text-lg font-bold text-center m-4">EDUCATION</h2>
        <div className="min-h-24 p-4 m-2 shadow-md rounded w-full">
          <h2 className="text-lg text-center"></h2>
          <p className="text-md text-center">|</p>
        </div>
        <h2 className="text-lg font-bold text-center m-4">EXPERIENCE</h2>
        <div className="min-h-24 p-4 m-2 shadow-md rounded w-full">
          <h2 className="text-lg text-center"></h2>
          <p className="text-md text-center">|</p>
          <p className="text-center mt-4"></p>
        </div>
      </div>
    </div>
  );
}

export default App;
