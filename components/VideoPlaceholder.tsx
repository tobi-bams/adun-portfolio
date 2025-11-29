import { Play } from "lucide-react";

const VideoPlaceholder = () => {
  return (
    <section className="w-full py-20 bg-background">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="relative w-full aspect-video rounded-lg overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-900 to-black">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-2xl">
              <Play className="w-10 h-10 md:w-12 md:h-12 text-black fill-black ml-1" />
            </div>
          </div>

          {/* <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
            <h2 className="text-white text-2xl md:text-3xl font-[family-name:var(--font-crimson)] font-normal">
              Video Showreel
            </h2>
            <p className="text-white/70 text-sm md:text-base mt-2 font-inter">
              Watch my latest work
            </p>
          </div> */}

          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
};

export default VideoPlaceholder;
