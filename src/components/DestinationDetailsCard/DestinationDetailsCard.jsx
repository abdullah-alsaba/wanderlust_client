import { CalendarDays, Check, MapPin, Pencil, Star, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import EditDestination from "../EditDestination/EditDestination";
import DeleteAlert from "../DeleteAlert/DeleteAlert";

const DestinationDetailsCard = ({ destinationDetails }) => {
  const {
    _id,
    country,
    imageUrl,
    duration,
    price,
    destinationName,
    description,
    highlights,
  } = destinationDetails;

  return (
    <section className="max-w-7xl mx-auto py-10">
      {/* Top */}

      <div className="flex justify-between items-center mb-8">
        <Link
          href="/destination"
          className="text-gray-500 hover:text-sky-500 transition"
        >
          ← Back to Destinations
        </Link>

        <div className="flex gap-3">
          <EditDestination destinationDetails={destinationDetails} />

          <DeleteAlert id={_id} />
          {/* <button className="border border-red-300 text-red-500 px-6 py-2 text-sm flex items-center gap-2 hover:bg-red-50 transition">
            <X size={16} />
            Cancel
          </button> */}
        </div>
      </div>

      {/* Hero Image */}

      <div className="relative w-full h-117.5 overflow-hidden">
        <Image
          src={imageUrl}
          alt={destinationName}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Main Section */}

      <div className="grid lg:grid-cols-3 gap-14 mt-12">
        {/* Left */}

        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <MapPin size={15} />

            {country}
          </div>

          <h1 className="text-5xl font-light mt-3">{destinationName}</h1>

          <div className="flex items-center gap-5 mt-4 text-gray-600">
            <div className="flex items-center gap-1">
              <Star size={15} className="fill-green-500 text-green-500" />

              <span className="font-medium">4.9</span>

              <span>(234 reviews)</span>
            </div>

            <div className="flex items-center gap-2">
              <CalendarDays size={15} />

              {duration}
            </div>
          </div>

          {/* Overview */}

          <h2 className="text-3xl font-light mt-10">Overview</h2>

          <p className="text-gray-600 leading-8 mt-4">{description}</p>

          {/* Highlights */}

          <h2 className="text-3xl font-light mt-10">Highlights</h2>

          <p className="text-gray-600 leading-8 mt-4">{description}</p>

          <div className="grid md:grid-cols-2 gap-5 mt-8">
            {highlights?.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check size={18} className="text-green-500" />

                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Card */}

        <div>
          <div className="border shadow-sm p-8 sticky top-8">
            <p className="text-gray-400 text-sm">Starting from</p>

            <h2 className="text-5xl text-sky-500 font-bold mt-2">${price}</h2>

            <p className="text-gray-500">per person</p>

            <input type="date" className="border w-full h-12 mt-8 px-3" />

            <button className="w-full h-12 bg-sky-500 hover:bg-sky-600 text-white mt-5 transition">
              Book Now →
            </button>

            <div className="mt-8 space-y-3 text-sm text-gray-600">
              <div className="flex gap-2">
                <Check size={16} className="text-green-500" />
                Free cancellation up to 7 days
              </div>

              <div className="flex gap-2">
                <Check size={16} className="text-green-500" />
                Travel insurance included
              </div>

              <div className="flex gap-2">
                <Check size={16} className="text-green-500" />
                24/7 customer support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationDetailsCard;
