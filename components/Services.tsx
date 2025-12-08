import Image from "next/image";
import Container from "./Container";

const ServiceCard = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="h-[400px] w-full md:w-[395px] bg-neutral-900/50 rounded-[32px] md:rounded-[32px] overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 group flex flex-col">
      <div className="w-full h-[238px] opacity-30 pointer-events-none flex-shrink-0">
        <img src="/Dots.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="p-6 md:px-6 md:py-2 flex flex-col flex-1">
        <div className="text-muted-foreground text-xl font-switzer font-medium group-hover:text-foreground transition-colors leading-[30px] tracking-widest">
          {number}
        </div>

        <h3 className="text-foreground text-2xl font-[family-name:var(--font-crimson)] font-medium mb-3">
          {title}
        </h3>

        <p className="text-sm font-crimson leading-6 tracking-[-0.005em] text-[#B3B3B3]">
          {description}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      id: 1,
      number: "01",
      title: "Short Form Editing",
      description:
        "Fast, trendy, and built for TikTok, reels and shorts. Quick cut videos and wonderful stuff.",
    },
    {
      id: 2,
      number: "02",
      title: "Long Form Editing",
      description:
        "Fast, trendy, and built for TikTok, reels and shorts. Quick cut videos and wonderful stuff.",
    },
    {
      id: 3,
      number: "03",
      title: "Commercial",
      description:
        "Fast, trendy, and built for TikTok, reels and shorts. Quick cut videos and wonderful stuff.",
    },
  ];

  return (
    <section className="w-full py-15 bg-background">
      <Container>
        <div className="flex flex-col mb-12">
          <h2 className="text-foreground text-[32px] leading-[38px] md:text-[56px] md:leading-[72px] tracking-[-0.015em] font-[family-name:var(--font-crimson)] font-normal text-center">
            Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:justify-between">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              number={service.number}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
