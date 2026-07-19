import { CalendarDays, MapPin, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DestinationCard = ({ destination }) => {
  const { country, imageUrl, duration, price, destinationName } = destination;

  return (
    <div className="w-full">
      {/* Image */}
      <div className="relative w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={destinationName}
          width={500}
          height={320}
          className="w-full h-53.75 object-cover transition duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="pt-4">
        {/* Country */}
        <div className="flex items-center gap-1 text-[14px] text-[#7C7C7C]">
          <MapPin size={15} strokeWidth={1.7} />
          <span>{country}</span>
        </div>

        {/* Name + Price */}
        <div className="flex justify-between items-end mt-2">
          <h3 className="text-[18px] font-medium text-[#222]">
            {destinationName}
          </h3>

          <div>
            <span className="text-[18px] font-semibold">${price}</span>

            <span className="text-[14px] text-gray-500">/Person</span>
          </div>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-2 mt-2 text-[14px] text-[#666]">
          <CalendarDays size={15} strokeWidth={1.7} />
          <span>{duration}</span>
        </div>

        {/* Button */}
        <Link
          href="/my-bookings"
          className="mt-6 inline-flex items-center gap-2 text-[#21B8EA] uppercase text-[13px] tracking-wide font-medium hover:gap-3 transition-all"
        >
          BOOK NOW
          <MoveUpRight size={15} />
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
