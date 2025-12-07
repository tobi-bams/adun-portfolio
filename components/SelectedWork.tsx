import Container from "./Container";
import { Button } from "./ui/button";
import VideoCard from "./VideoCard";
import VideoPlaceholder from "./VideoPlaceholder";

const SelectedWork = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description:
        "Project explanation hyjoshyjoahyjos hyjios hyjioshy joahyjos",
    },
    {
      id: 2,
      title: "Project One",
      description: "Project explanation hyjoshyjoahyjos hyjios hyjioshy",
    },
    {
      id: 3,
      title: "Project One",
      description:
        "Project explanation hyjoshyjoahyjos hyjios hyjioshy joahyjos",
    },
    {
      id: 4,
      title: "Project One",
      description:
        "Project explanation hyjoshyjoahyjos hyjios hyjioshy joahyjos",
    },
  ];

  return (
    <section className="w-full py-20 bg-background">
      <Container>
        <h2 className="text-foreground text-[32px] md:text-[56px] leading-[38px] md:leading-[72px] tracking-[-0.015em] font-[family-name:var(--font-crimson)] font-normal mb-12">
          Selected Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          {projects.map((project) => (
            <VideoCard
              key={project.id}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>

        <div className="w-full mt-9 flex justify-center">
          <Button className="w-full md:w-auto md:px-12 md:py-[30px] rounded-4xl cursor-pointer bg-white text-black hover:bg-neutral-200 py-7 px-9 md:text-base font-medium">
            View all work
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default SelectedWork;
