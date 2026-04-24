import { useNavigate } from "react-router-dom";
import studioA from "../../../assets/studioC-2.webp";
import studioB from "../../../assets/studioB-1.webp";
import studioC from "../../../assets/studioC-1.webp";
import studioD from "../../../assets/studioD-1.webp";

const imageMap = {
  studioA,
  studioB,
  studioC,
  studioD
};

const studios = [
  { name: "Studio A", image: "studioA", path: "/studio-a" },
  { name: "Studio B", image: "studioB", path: "/studio-b" },
  { name: "Studio C", image: "studioC", path: "/studio-c" },
  { name: "Studio D", image: "studioD", path: "/studio-d" }
];

const StudioGrid = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-12 pb-20 px-6 bg-black text-white">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Our Studios
          </h2>
          <p className="text-gray-400 mt-3 text-sm tracking-widest">
            CHOOSE YOUR SPACE
          </p>
        </div>

        {/*  2x2 GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {studios.map((studio, i) => (
            <div
              key={i}
              onClick={() => navigate(studio.path)}
              className="relative h-[300px] md:h-[360px] rounded-2xl overflow-hidden cursor-pointer group"
            >

              {/* IMAGE */}
              <img
                src={imageMap[studio.image]}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* TEXT */}
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-semibold tracking-wide group-hover:translate-y-[-4px] transition">
                  {studio.name}
                </h3>
                <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition duration-300">
                  Explore Studio
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default StudioGrid;