import { Play } from "lucide-react";

// Reusable Video Card Component
const VideoCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="group cursor-pointer">
      {/* Video Placeholder */}
      <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-900 to-black">
          {/* Subtle pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-2xl">
            <Play className="w-8 h-8 text-black fill-black ml-1" />
          </div>
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
      </div>

      {/* Project Info */}
      <div>
        <h3 className="text-foreground text-2xl font-[family-name:var(--font-crimson)] font-normal mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm font-inter">
          {description}
        </p>
      </div>
    </div>
  );
};
export default VideoCard;
