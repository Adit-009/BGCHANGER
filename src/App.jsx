import { useState } from "react";
const App = () => {
  const [color, setColor] = useState("#387478");
  return (
    <div style={{ background: color }} className="h-screen w-full">
      <h1 className="text-white text-center whitespace-nowrap text-6xl font-bold absolute top-80 left-1/2 transform -translate-x-1/2">
        Background Color Changer by Adit
      </h1>
      <div className="flex flex-wrap fixed bottom-44 gap-8 w-full justify-center">
        <button
          onClick={() => setColor("#B1F0F7")}
          className="px-5 h-9 rounded-full font-semibold"
          style={{ background: "#B1F0F7" }}
        >
          LightBlue
        </button>
        <button
          onClick={() => setColor("#AB4459")}
          className="px-5 h-9 rounded-full font-semibold text-white"
          style={{ background: "#AB4459" }}
        >
          Brown
        </button>
        <button
          onClick={() => setColor("#85A98F")}
          className="px-5 h-9 rounded-full font-semibold"
          style={{ background: "#85A98F" }}
        >
          LightGreen
        </button>
        <button
          onClick={() => setColor("#47663B")}
          className="px-5 h-9 rounded-full font-semibold text-white"
          style={{ background: "#47663B" }}
        >
          Green
        </button>
      </div>
    </div>
  );
};
export default App;
