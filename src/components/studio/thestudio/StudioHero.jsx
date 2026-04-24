import img1 from "../../../assets/studioB-1.webp";
const StudioHero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center">

      <img
        src={img1}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold">
          The Studios
        </h1>
        <p className="text-gray-300 mt-4">
          Built for artists. Designed for excellence.
        </p>
      </div>

    </section>
  );
};

export default StudioHero;