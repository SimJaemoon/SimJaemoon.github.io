import { developProjectData, researchProjectData } from '@/utility/data';
import Bubble from './Bubble';

export default function ProjectBubbles() {
  return (
    <>
      {/* Devolop-Experience */}
      <div className="relative">
        <div id="develop" className="absolute -top-[72px] h-0 w-0" />
        <div className="font--black-han-sans text--shadow-1 pb-1 text-center text-32 leading-[36px] text-onSecondary tablet:pb-2 tablet:text-40 tablet:leading-[44px]">
          2024
        </div>
        <div>
          <div className="relative pb-[calc(96px+72px)] tablet:pb-[calc(152px+108px)]">
            {/* Figure-Upper-Arrow */}
            <div className="absolute top-0 h-full w-full drop-shadow-3">
              <div className="relative left-1/2 h-0 w-0 -translate-x-1/2 border-x-[40px] border-b-[80px] border-t-0 border-x-transparent border-b-background border-t-transparent tablet:border-x-[60px] tablet:border-b-[120px]" />
              <div className="relative left-1/2 h-[calc(100%-80px)] w-10 -translate-x-1/2 bg-background tablet:h-[calc(100%-120px)] tablet:w-[60px]" />
            </div>
            {/* Project-Bubbles */}
            <div className="relative top-[96px] z-10 flex w-full flex-col gap-y-10 tablet:top-[152px]">
              {developProjectData.map((v, i) => (
                <Bubble
                  key={i}
                  status={v.status}
                  title={v.title}
                  timeline={v.timeline}
                  figmaURL={v.figmaURL}
                  githubURL={v.githubURL}
                  summary={v.summary}
                  contents={v?.contents}
                  contentArray={v?.contentArray}
                  skills={v.skills}
                  reportURL={v?.reportURL}
                  siteURL={v?.siteURL}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="font--black-han-sans text--shadow-1 pt-1 text-center text-32 leading-[36px] text-onSecondary tablet:pt-2 tablet:text-40 tablet:leading-[44px]">
          2023
        </div>
      </div>
      {/* Divdier */}
      <div className="relative my-12 flex flex-col gap-y-2 tablet:my-[72px] tablet:gap-y-3">
        <div id="research" className="absolute -top-[72px] h-0 w-0" />
        <div className="font--black-han-sans text--shadow-1 text-center text-24 leading-[28px] text-onPrimary tablet:text-32 tablet:leading-[36px]">
          프론트엔드 개발자
        </div>
        <div className="relative left-1/2 w-[90%] -translate-x-1/2 border-b-4 border-dashed border-onSecondary drop-shadow-3" />
        <div className="font--black-han-sans text--shadow-1 text-center text-24 leading-[28px] text-onPrimary tablet:text-32 tablet:leading-[36px]">
          HCI 연구원
        </div>
      </div>
      {/* Research-Experience */}
      <div>
        <div className="font--black-han-sans text--shadow-1 pb-1 text-center text-32 leading-[36px] text-onSecondary tablet:pb-2 tablet:text-40 tablet:leading-[44px]">
          2022
        </div>
        <div>
          <div className="relative py-[72px] tablet:py-[108px]">
            {/* Figure-bar */}
            <div className="absolute top-0 h-full w-full drop-shadow-3">
              <div className="relative left-1/2 h-full w-10 -translate-x-1/2 bg-background tablet:w-[60px]" />
            </div>
            {/* Project-Bubbles */}
            <div className="relative z-10 flex w-full flex-col gap-y-10">
              {researchProjectData.map((v, i) => (
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
        </div>
        <div className="font--black-han-sans text--shadow-1 pt-1 text-center text-32 leading-[36px] text-onSecondary tablet:pt-2 tablet:text-40 tablet:leading-[44px]">
          2017
        </div>
      </div>
    </>
  );
}
