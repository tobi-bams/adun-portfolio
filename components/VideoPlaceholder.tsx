import { Play } from "lucide-react";
import React from "react";

const VideoPlaceholder = () => {
  return (
    <section className="w-full py-10 bg-background">
      <div className="relative w-full h-[260px] md:h-auto md:aspect-video rounded-[24px] md:rounded-[64px] overflow-hidden group cursor-pointer border border-white/5 md:border-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-900 to-black">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-10 h-10 md:w-24 md:h-24 rounded-full group-hover:scale-110 transition-transform duration-500 shadow-[0_6px_6px_rgba(0,0,0,0.2),0_0_20px_rgba(0,0,0,0.1)]">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                zIndex: 0,
                backdropFilter: "blur(3px)",
                filter: "url(#glass-distortion-large)",
                overflow: "hidden",
              }}
            />

            <div
              className="absolute inset-0 rounded-full bg-white/20"
              style={{ zIndex: 1 }}
            />

            <div
              className="absolute inset-0 rounded-full"
              style={{
                zIndex: 2,
                boxShadow:
                  "inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5)",
              }}
            />

            <div className="relative z-[3] w-full h-full flex items-center justify-center">
              <Play className="w-5 h-5 md:w-12 md:h-12 text-white fill-white ml-0.5 md:ml-1 drop-shadow-[0_0_3px_rgba(255,255,255,0.25)] transition-transform duration-200 active:scale-95" />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
      </div>

      <svg style={{ display: "none" }}>
        <filter
          id="glass-distortion-large"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.01"
            numOctaves="1"
            seed="5"
            result="turbulence"
          />
          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>
          <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
          <feSpecularLighting
            in="softMap"
            surfaceScale="5"
            specularConstant="1"
            specularExponent="100"
            lightingColor="white"
            result="specLight"
          >
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>
          <feComposite
            in="specLight"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="litImage"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="40"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
    </section>
  );
};

export default VideoPlaceholder;
