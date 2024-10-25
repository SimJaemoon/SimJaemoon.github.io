import { developProjectData } from '@/utility/data';
import Bubble from './Bubble';

export default function ProjectBubbles() {
  return (
    <>
      {/* Figure */}
      <div className="relative">
        {/* Upper-Arrow */}
        <div className="relative w-full drop-shadow-3">
          <div className="relative left-1/2 h-0 w-0 -translate-x-1/2 border-x-[40px] border-b-[80px] border-t-0 border-x-transparent border-b-background border-t-transparent tablet:border-x-[60px] tablet:border-b-[120px]" />
          <div className="relative left-1/2 h-[2000px] w-10 -translate-x-1/2 bg-background tablet:w-[60px]" />
        </div>
        {/* Project-Bubbles */}
        <div className="absolute top-[96px] z-10 flex w-full flex-col gap-y-10 tablet:top-[152px]">
          {developProjectData.map((v, i) => (
            <Bubble
              key={i}
              title={v.title}
              timeline={v.timeline}
              figmaURL={v.figmaURL}
              githubURL={v.githubURL}
              summary={v.summary}
              contents={v?.contents}
              contentArray={v?.contentArray}
              skills={v.skills}
            />
          ))}
        </div>
      </div>
    </>
  );
}
