import WorldMap from "@/components/world-map";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <h1 className="text-4xl font-bold mb-8 text-center">GetAway ✈️</h1>
      <p className="text-lg mb-8 text-center max-w-2xl">
        Explore countries around the world. Hover over a country to see
        destinations your friends recommended!
      </p>
      <div className="w-full max-w-6xl h-[70vh] bg-white rounded-lg shadow-lg p-4">
        <WorldMap />
      </div>
    </main>
  );
}
