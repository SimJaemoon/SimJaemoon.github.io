import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { skill } from '@/utility/data';
import ProjectBubbles from '@/components/ProjectBubbles';

export default function Home() {
  return (
    <>
      <header className="font--black-han-sans flex h-[56px] justify-between border-b-[1px] border-onPrimary text-24 text-onPrimary">
        <button className="pl-2 leading-[56px]">
          <Link href={'/'}>Portfolio</Link>
        </button>
        <div className="hidden justify-between gap-x-8 pr-4 tablet:flex">
          <button className="text--shadow-1 leading-[56px]">기술</button>
          <button className="text--shadow-1 leading-[56px]">개발 경험</button>
          <button className="text--shadow-1 leading-[56px]">연구 경험</button>
          <button className="text--shadow-1 leading-[56px]">
            학력/논문/연락처
          </button>
        </div>
        <button className="tablet:hidden">
          <MenuIcon className="h-12 w-12 p-3" />
        </button>
      </header>
      <main>
        {/* Title */}
        <div className="font--black-han-sans flex flex-wrap items-center gap-y-4 px-2 pt-12 text-onPrimary tablet:gap-y-7 tablet:pt-[80px]">
          <h1 className="text--shadow-figma flex w-full shrink-0 items-center justify-center text-center text-24 tablet:text-40">
            HCI 지식으로 개선안을 제시하는&nbsp;
            <br className="tablet:hidden" />
            프론트엔드 개발자
          </h1>
          <div className="flex w-full flex-wrap justify-center">
            <div className="text--shadow-1 flex w-full shrink-0 items-center justify-center text-20 leading-[24px] tablet:text-32 tablet:leading-[36px]">
              심재문
            </div>
            <div className="text--shadow-1 font--inter text-12 leading-[16px] tablet:text-20 tablet:leading-[24px]">
              Sim Jaemoon
            </div>
          </div>
        </div>
        {/* Skill */}
        <div className="mx-auto flex w-[320px] flex-wrap gap-y-4 px-2 pt-10 tablet:w-[440px] tablet:gap-y-8 tablet:pt-[60px]">
          {skill.map((v, i) => (
            <div key={i} className="w-full">
              <div className="font--black-han-sans text--shadow-1 w-full shrink-0 text-center text-20 leading-[24px] text-onSecondary tablet:text-24 tablet:leading-[28px]">
                # {v.name}&nbsp;
              </div>
              {'data' in v && (
                <div className="font--inter text--shadow-1 text-center text-12 leading-[16px] tablet:text-16 tablet:leading-[20px]">
                  {v.data?.join(', ')}
                </div>
              )}
              <ul className="flex w-full list-disc flex-wrap gap-y-1 pl-10 tablet:gap-y-2 tablet:pl-[68px]">
                {'dataArray' in v &&
                  v.dataArray?.map((v2, i2) => (
                    <li
                      key={i2}
                      className="w-full pl-8 -indent-8 text-12 tablet:pl-10 tablet:-indent-10 tablet:text-16"
                    >
                      <span className="text--shadow-1 font-bold">
                        {v2.name} :&nbsp;
                      </span>
                      <span className="font--inter text--shadow-1">
                        {v2.data.join(', ')}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Experience */}
        <div className="pt-12 tablet:pt-[80px]">
          <div className="font--black-han-sans text--shadow-1 pb-1 text-center text-32 leading-[36px] text-onSecondary tablet:pb-2 tablet:text-40 tablet:leading-[44px]">
            2024
          </div>
          <ProjectBubbles />
        </div>
      </main>
      <footer></footer>
    </>
  );
}
