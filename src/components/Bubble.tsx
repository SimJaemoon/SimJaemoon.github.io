import { ProjectData } from '@/utility/data';
import Link from 'next/link';

export default function Bubble({
  status,
  title,
  timeline,
  figmaURL,
  githubURL,
  summary,
  keywords,
  contents,
  contentArray,
  skills,
  siteURL,
  reportURL,
}: ProjectData) {
  return (
    <div className="relative left-1/2 w-[90%] min-w-[304px] max-w-[480px] -translate-x-1/2 break-all rounded-[12px] shadow-3">
      {/* Bubble-Title */}
      <div
        className={`flex h-[60px] w-full rounded-t-[12px] py-2 pl-3 pr-2 ${status === 'WIP' ? 'bg-WIP' : 'bg-primary'}`}
      >
        <div
          className={`flex h-full ${figmaURL || githubURL ? 'w-[75%]' : 'w-full'} flex-wrap content-center text-onPrimary`}
        >
          <div className="text--shadow-1 w-full shrink-0 text-16 font-bold">
            {title}
          </div>
          <div className="text--shadow-1 w-full shrink-0 pl-1 text-14">
            {timeline}
          </div>
        </div>
        {figmaURL || githubURL ? (
          <div className="font--inter flex h-full w-[25%] flex-col justify-center gap-y-1 text-14 text-onSecondary tablet:text-onPrimary">
            {figmaURL && (
              <button className="text--shadow-1 text-right font-bold tablet:transition tablet:hover:text-onSecondary">
                <Link href={figmaURL} target="_blank">
                  Figma ↗
                </Link>
              </button>
            )}
            {githubURL && (
              <button className="text--shadow-1 text-right font-bold tablet:transition tablet:hover:text-onSecondary">
                <Link href={githubURL} target="_blank">
                  Github ↗
                </Link>
              </button>
            )}
          </div>
        ) : null}
      </div>
      {/* Bubble-Content */}
      <div className="rounded-b-[12px] bg-background px-4 pb-4 pt-2">
        <div className="text-16 font-bold">{summary}</div>
        <div
          className={`mt-2 flex flex-wrap justify-center gap-x-2 gap-y-1 rounded-[8px] px-3 py-1 text-14 text-background ${keywords ? '' : 'hidden'}`}
        >
          {keywords?.map((v, i) => (
            <span
              key={i}
              className="rounded-[8px] bg-onBackground/60 px-2 py-1"
            >
              {v}
            </span>
          ))}
        </div>
        {contents && (
          <ul className="mt-2 list-disc pl-6 text-14">
            {contents.map((v, i) => (
              <li key={i}>{v}</li>
            ))}
          </ul>
        )}
        {contentArray && (
          <ol className="mt-2 flex list-[square] flex-wrap gap-y-3 pl-6 text-14">
            {contentArray.map((v, i) => (
              <li key={i}>
                <div className="font-bold">{v.step}</div>
                <ul className="list-disc pl-6">
                  {v.description.map((v2, i2) => (
                    <li
                      key={i2}
                      className={`${i2 + 1 === v.description.length ? '' : 'mb-1'}`}
                    >
                      {v2}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        )}
        <div className="font--inter mt-4 rounded-[8px] bg-onBackground/60 px-3 py-1 text-14 font-bold text-background">
          {skills.join(', ')}
        </div>
        {reportURL && (
          <div className="mt-3 w-full text-center text-14 font-bold">
            <button className="text--shadow-1 underline tablet:transition tablet:hover:text-onSecondary">
              <Link href={reportURL} target="_blank">
                프로젝트 보고서 보러 가기 ↗
              </Link>
            </button>
          </div>
        )}
        {siteURL && (
          <div className="mt-3 w-full text-center text-14 font-bold">
            <button className="text--shadow-1 underline tablet:transition tablet:hover:text-onSecondary">
              <Link href={siteURL} target="_blank">
                배포된 사이트 보러 가기 ↗
              </Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
