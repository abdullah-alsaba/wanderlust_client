import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

const NotFound = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/Banner.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/75 via-black/65 to-black/80"></div>

      {/* Decorative Blur */}
      <div className="absolute top-24 left-20 w-72 h-72 rounded-full bg-sky-500/20 blur-[120px]" />
      <div className="absolute bottom-24 right-20 w-72 h-72 rounded-full bg-cyan-400/20 blur-[120px]" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">
            <Compass className="h-4 w-4 text-sky-400" />
            <span className="text-xs uppercase tracking-[0.3em] text-gray-200">
              Wanderlast
            </span>
          </div>

          {/* 404 */}
          <h1 className="mt-8 text-[120px] md:text-[180px] font-black leading-none text-white/15">
            404
          </h1>

          {/* Heading */}
          <h2 className="-mt-12 text-4xl md:text-6xl font-bold text-white">
            Lost in Paradise?
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            The destination you&apos;re looking for seems to have drifted off the
            map. But every great adventure begins with finding a new path. Let&apos;s
            guide you back to somewhere extraordinary.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              href="/"
              className="group flex items-center gap-3 rounded-lg bg-[#2AB7E8] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:scale-105 hover:bg-sky-500"
            >
              Return Home
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/destinations"
              className="rounded-lg border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
            >
              Explore Destinations
            </Link>
          </div>

          {/* Bottom Text */}
          <div className="mt-16 flex items-center justify-center gap-4 text-sm text-gray-400">
            <div className="h-px w-16 bg-white/20"></div>
            Every Journey Starts Somewhere
            <div className="h-px w-16 bg-white/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
