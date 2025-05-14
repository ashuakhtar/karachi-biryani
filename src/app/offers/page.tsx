import Navbar from "@/components/Navbar";

export default function OffersPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16 flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Offers</h1>
        <p className="text-lg text-gray-600">No offers</p>
      </div>
    </main>
  );
}
