import Link from 'next/link';
import HamburgerButton from '@/components/HamburgerButton';
import { navItems, paper, researchDescription, skill } from '@/utility/data';
import ProjectBubbles from '@/components/ProjectBubbles';

export default function Home() {
  return (
    <>
      <div id="ceiling" className="invisible absolute h-0 w-0" />
      <header
        id="header"
        className="font--black-han-sans sticky top-0 z-50 flex h-[56px] justify-between border-b-[1px] border-onPrimary text-onPrimary backdrop-blur-sm"
      >
        <button className="pl-2 text-24 leading-[56px] tablet:transition tablet:hover:text-onSecondary">
          <Link href={'#ceiling'}>Portfolio</Link>
        </button>
        <nav className="hidden justify-between gap-x-8 pr-4 tablet:flex">
          {navItems.map((v, i) => (
            <button
              key={i}
              className="text--shadow-1 text-28 leading-[56px] tablet:transition tablet:hover:text-onSecondary"
            >
              <Link href={v.href} replace>
                {v.name}
              </Link>
            </button>
          ))}
        </nav>
        <HamburgerButton />
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
            <div className="text--shadow-1 flex w-full shrink-0 items-center justify-center text-20 leading-[24px] tablet:text-28 tablet:leading-[32px]">
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
          <ProjectBubbles />
        </div>
      </main>
      <footer className="relative pb-10">
        <div id="footer" className="absolute -top-[72px] h-0 w-0" />
        <div className="mx-auto mt-[72px] w-[320px] tablet:mt-[108px] tablet:w-[480px]">
          <div className="font--black-han-sans text--shadow-1 mb-2 text-center text-[40px] leading-[44px] text-onSecondary underline tablet:mb-3 tablet:text-[48px] tablet:leading-[52px]">
            학력
          </div>
          <div className="text--shadow-1 mb-1 text-center text-14 leading-[18px] tablet:mb-2 tablet:text-[20px] tablet:leading-[24px]">
            연세대학교 산업공학과 석사 졸업
          </div>
          <div className="font--inter text--shadow-1 text-center text-14 leading-[18px] tablet:text-[20px] tablet:leading-[24px]">
            Human-Computer Interaction(HCI)
          </div>
        </div>
        <div className="mx-auto mt-[72px] w-[90%] min-w-[308px] max-w-[488px] px-1 tablet:mt-[108px]">
          <div className="font--black-han-sans text--shadow-1 mb-2 text-center text-[40px] leading-[44px] text-onSecondary underline tablet:mb-3 tablet:text-[48px] tablet:leading-[52px]">
            논문
          </div>
          <ol className="font--inter text--shadow-1 flex list-decimal flex-col gap-y-2 break-all pl-6 text-14 leading-[18px] tablet:gap-y-3 tablet:text-[16px] tablet:leading-[20px]">
            {paper.map((v, i) => (
              <li key={i}>{v}</li>
            ))}
          </ol>
          <ul className="text--shadow-1 mt-4 flex list-disc flex-col gap-y-1 pl-10 text-14 leading-[18px] tablet:mt-6 tablet:gap-y-2 tablet:text-[16px] tablet:leading-[20px]">
            <li>
              <span className="font--inter font-bold">Keyword : </span>
              {researchDescription.keyword.join(' / ')}
            </li>
            <li>
              <span className="font--inter font-bold">Domain : </span>
              {researchDescription.domain.join(' / ')}
            </li>
          </ul>
        </div>
        <div className="mx-auto mb-6 mt-[72px] w-[320px] tablet:mb-9 tablet:mt-[108px] tablet:w-[480px]">
          <div className="font--black-han-sans text--shadow-1 mb-1 w-full shrink-0 text-center text-24 leading-[28px] text-onSecondary tablet:mb-2 tablet:text-28 tablet:leading-[32px]">
            # Email
          </div>
          <div className="text--shadow-1 text-center text-14 leading-[18px] tablet:mb-2 tablet:text-[20px] tablet:leading-[24px]">
            limun1324@gmail.com
          </div>
        </div>
        <div className="mx-auto w-[320px] tablet:w-[480px]">
          <div className="font--black-han-sans text--shadow-1 mb-1 w-full shrink-0 text-center text-24 leading-[28px] text-onSecondary tablet:mb-2 tablet:text-28 tablet:leading-[32px]">
            # Github
          </div>
          <div className="text--shadow-1 text-center text-14 leading-[18px] underline tablet:mb-2 tablet:text-[20px] tablet:leading-[24px] tablet:transition tablet:hover:text-onSecondary">
            <Link href={'https://github.com/SimJaemoon'} target="_blank">
              https://github.com/SimJaemoon
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
