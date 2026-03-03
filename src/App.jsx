import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("#387478");

  return (
    <div
      style={{ background: color }}
      className="min-h-screen w-full flex flex-col items-center justify-center px-4"
    >
      <h1 className="text-white text-center text-3xl sm:text-4xl md:text-6xl font-bold mb-12">
        Background Color Changer by Adit
      </h1>

      <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
        <button
          onClick={() => setColor("#B1F0F7")}
          className="px-5 py-2 rounded-full font-semibold"
          style={{ background: "#B1F0F7" }}
        >
          LightBlue
        </button>

        <button
          onClick={() => setColor("#AB4459")}
          className="px-5 py-2 rounded-full font-semibold text-white"
          style={{ background: "#AB4459" }}
        >
          Brown
        </button>

        <button
          onClick={() => setColor("#85A98F")}
          className="px-5 py-2 rounded-full font-semibold"
          style={{ background: "#85A98F" }}
        >
          LightGreen
        </button>

        <button
          onClick={() => setColor("#47663B")}
          className="px-5 py-2 rounded-full font-semibold text-white"
          style={{ background: "#47663B" }}
        >
          Green
        </button>
      </div>
    </div>
  );
};

export default App;