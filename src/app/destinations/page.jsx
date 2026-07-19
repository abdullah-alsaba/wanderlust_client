import DestinationCard from "@/components/DestinationCard/DestinationCard";
import { getDestinationData } from "@/lib/action";
import { ChevronDown } from "lucide-react";

const DestinationPage = async () => {
  const destinations = await getDestinationData();

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-0 py-20">
      {/* Heading */}
      <div className="mb-14">
        <h1 className="text-[58px] leading-none font-light text-[#222]">
          Explore All Destinations
        </h1>

        <p className="mt-6 text-[22px] text-[#6B7280]">
          Find your perfect travel experience from our curated collection
        </p>
      </div>
      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 border border-[#D9D9D9] mb-6">
        <select className="h-15.5 w-full border border-[#D9D9D9] px-6 text-[#666] uppercase outline-none bg-white">
          <option>Category</option>
        </select>
        <select className="h-15.5 w-full border border-[#D9D9D9] px-6 text-[#666] uppercase outline-none bg-white">
          <option> PRICE RANGE</option>
        </select>
        <select className="h-15.5 w-full border border-[#D9D9D9] px-6 text-[#666] uppercase outline-none bg-white">
          <option>SORT BY</option>
        </select>
      </div>

      {/* Showing */}
      <p className="text-[18px] text-[#666] mb-14">
        Showing {destinations.length} destinations
      </p>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-14">
        {destinations.map((destination) => (
          <DestinationCard key={destination._id} destination={destination} />
        ))}
      </div>
    </section>
  );
};

export default DestinationPage;
