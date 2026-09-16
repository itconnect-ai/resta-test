import Image from "next/image";
import Gallery from "@/components/Gallery";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-warm-ivory text-deep-walnut">
      {/* A. 상단 실습 안내 바 (닫기 버튼 없음, deep-walnut 배경, soft-white 글자 13px 이상 불투명도 0.9) */}
      <aside
        className="w-full bg-deep-walnut py-2.5 px-4 text-center select-none z-50 relative"
        aria-label="실습용 시안 안내"
      >
        <p className="text-caption sm:text-support text-soft-white/90 font-medium tracking-normal">
          예비 창업 실습용 시안입니다. 일부 메뉴·가격·운영 정보는 가정입니다.
        </p>
      </aside>

      {/* B. 헤더 (고정 헤더, 터치 타깃 44x44px 이상 보장) */}
      <header className="sticky top-0 z-40 w-full bg-warm-ivory/95 backdrop-blur-md border-b border-deep-walnut/10 transition-colors">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* 로고 및 가칭 표시 (터치 타깃 최소 44x44px 확보) */}
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="inline-flex items-center min-h-[44px] min-w-[44px] text-h3 font-serif font-bold text-deep-walnut hover:text-burnt-clay transition-colors"
              aria-label="온결식탁 첫 화면으로 가기"
            >
              온결식탁
            </a>
            <span className="text-[12px] font-medium tracking-wide text-deep-walnut/75 bg-deep-walnut/10 px-2 py-0.5 rounded select-none">
              가칭
            </span>
          </div>

          {/* 데스크톱 내비게이션 (라벨과 도착 섹션 제목 100% 일치) */}
          <nav
            className="flex items-center gap-4 sm:gap-8"
            aria-label="주요 섹션 내비게이션"
          >
            <ul className="hidden md:flex items-center gap-6">
              <li>
                <a
                  href="#story"
                  className="inline-link text-support font-medium text-deep-walnut/85 hover:text-burnt-clay transition-colors"
                >
                  브랜드 이야기
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="inline-link text-support font-medium text-deep-walnut/85 hover:text-burnt-clay transition-colors"
                >
                  메뉴 구상
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="inline-link text-support font-medium text-deep-walnut/85 hover:text-burnt-clay transition-colors"
                >
                  이용 장면
                </a>
              </li>
              <li>
                <a
                  href="#opening"
                  className="inline-link text-support font-medium text-deep-walnut/85 hover:text-burnt-clay transition-colors"
                >
                  오픈 준비
                </a>
              </li>
            </ul>

            {/* 대표 버튼: 최소 152x44px, 글자 15px, data-slot="header-menu" */}
            <a
              href="#menu"
              data-slot="header-menu"
              className="inline-flex items-center justify-center min-w-[152px] min-h-[44px] px-5 py-2.5 bg-burnt-clay text-soft-white text-[15px] font-semibold rounded hover:bg-[#853926] active:bg-[#733120] transition-colors shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-burnt-clay focus-visible:outline-offset-2"
            >
              메뉴 구상 보기
            </a>
          </nav>
        </div>

        {/* 모바일 내비게이션 바 (터치 타깃 최소 44x44px 유지, 도착 섹션 제목과 일치) */}
        <nav
          className="md:hidden border-t border-deep-walnut/5 overflow-x-auto py-1 px-3 flex items-center justify-around gap-1 scrollbar-none"
          aria-label="모바일 빠른 이동"
        >
          <a
            href="#story"
            className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-2 text-caption font-medium text-deep-walnut/80 hover:text-burnt-clay shrink-0"
          >
            브랜드 이야기
          </a>
          <a
            href="#menu"
            className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-2 text-caption font-medium text-deep-walnut/80 hover:text-burnt-clay shrink-0"
          >
            메뉴 구상
          </a>
          <a
            href="#experience"
            className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-2 text-caption font-medium text-deep-walnut/80 hover:text-burnt-clay shrink-0"
          >
            이용 장면
          </a>
          <a
            href="#opening"
            className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-2 text-caption font-medium text-deep-walnut/80 hover:text-burnt-clay shrink-0"
          >
            오픈 준비
          </a>
        </nav>
      </header>

      {/* 메인 콘텐츠 영역 (Skip Link 타깃) */}
      <main id="main-content" className="flex-1">
        {/* C. 히어로 섹션 (높이 88svh, 다음 섹션 40~80px 살짝 노출, 좌우 2단 카드 금지) */}
        {/* [교체 필요: 실제 음식 및 매장 사진] */}
        <section
          className="relative w-full h-[88svh] min-h-[540px] max-h-[960px] overflow-hidden bg-deep-walnut text-soft-white dark-surface"
          aria-label="온결식탁 소개 히어로"
        >
          {/* 배경 이미지: picture 태그로 데스크톱 16:9 / 모바일 분기, 스크림 오버레이 */}
          <div className="absolute inset-0 hero-media z-0">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={`${basePath}/images/ongyeol/hero-ongyeol-mobile.webp`}
              />
              <source
                media="(min-width: 768px)"
                srcSet={`${basePath}/images/ongyeol/hero-ongyeol.webp`}
              />
              <img
                src={`${basePath}/images/ongyeol/hero-ongyeol.webp`}
                alt="혼자 먹는 따뜻한 저녁 한 끼를 표현한 콘셉트 이미지"
                className="w-full h-full object-cover object-center"
                fetchPriority="high"
                loading="eager"
              />
            </picture>
          </div>

          {/* 히어로 텍스트 및 CTA (좌측 정렬 텍스트, 최소 4.5:1 고대비 확보, 한 줄 정의 핵심 사용) */}
          <div className="relative z-10 max-w-[1160px] h-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <div className="max-w-2xl text-left hero-copy">
              <p className="text-support sm:text-lead font-medium text-soft-white/90 mb-3 tracking-wide flex items-center gap-2">
                <span>온결식탁 · 가칭</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-burnt-clay" />
                <span className="text-caption text-soft-white/85 bg-soft-white/15 px-2 py-0.5 rounded">
                  실습 준비 단계
                </span>
              </p>

              <h1 className="text-h1 font-serif font-bold text-soft-white leading-[1.18] tracking-[-0.02em] mb-4 sm:mb-5">
                퇴근 뒤 혼자서도,
                <br />
                따뜻한 제철 한 끼
              </h1>

              <p className="text-lead sm:text-[20px] text-soft-white/95 leading-[1.7] mb-3 sm:mb-4 font-normal">
                혼자 온 손님이 눈치 보지 않고 천천히 저녁을 먹을 수 있는 작은
                식당을 구상하고 있습니다.
              </p>

              <p className="text-caption sm:text-support text-soft-white/80 mb-6 sm:mb-8">
                현재 아이디어와 메뉴를 구체화하는 실습 단계입니다.
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="#menu"
                  data-slot="hero-menu"
                  className="inline-flex items-center justify-center min-w-[152px] min-h-[44px] px-6 py-3 bg-burnt-clay text-soft-white text-[16px] font-semibold rounded hover:bg-[#853926] active:bg-[#733120] transition-colors shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-soft-white focus-visible:outline-offset-3"
                >
                  메뉴 구상 보기
                </a>
                <span className="text-caption text-soft-white/80 bg-black/40 backdrop-blur-sm px-3 py-2 rounded">
                  콘셉트 이미지 · 실제 음식 사진 교체 예정
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* D. 브랜드 이야기 섹션 (대형 여백 176px / 모바일 104px, 12컬럼 비대칭) */}
        {/* [확인 필요: 실제 상호] */}
        <section
          id="story"
          className="w-full pt-[104px] pb-[104px] md:pt-[176px] md:pb-[176px] px-4 sm:px-6 lg:px-8 border-b border-deep-walnut/10"
        >
          <div className="max-w-[1160px] mx-auto">
            {/* 섹션 헤더 (제목-첫콘텐츠 간격: 데스크톱 64px, 모바일 40px) */}
            <div className="mb-10 md:mb-16">
              <span className="text-caption font-semibold tracking-data text-burnt-clay uppercase">
                Brand Philosophy
              </span>
              <h2 className="text-h2 font-serif font-bold text-deep-walnut mt-3">
                브랜드 이야기
              </h2>
            </div>

            {/* 12컬럼 비대칭 에디토리얼 레이아웃 (5컬럼 문장 + 1컬럼 여백 + 6컬럼 원칙 목록) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-start">
              {/* 좌측 문장 영역: 5컬럼 */}
              <div className="md:col-span-5 flex flex-col gap-4 sm:gap-5">
                <p className="text-lead sm:text-[20px] font-semibold text-deep-walnut leading-[1.6]">
                  온결식탁은 혼자 먹는 저녁이 대충 때우는 시간이 되지 않도록
                  준비하는 가상의 식당입니다.
                </p>
                <p className="text-body text-deep-walnut/80 leading-[1.70]">
                  바쁜 하루를 마친 사람이 주문을 재촉받거나 자리를 의식하지 않고
                  따뜻한 한 끼에 집중할 수 있는 경험을 구상하고 있습니다. 실제
                  좌석 구성과 서비스 방식은 입지와 운영 인원을 확인한 뒤
                  결정합니다.
                </p>
                <div className="pt-2">
                  <span className="inline-block px-3 py-1.5 bg-deep-walnut/5 border border-deep-walnut/10 rounded text-caption text-deep-walnut/70">
                    가상 브랜드 기획안 · 차분한 · 따뜻한 · 정직한
                  </span>
                </div>
              </div>

              {/* 빈 컬럼: 1컬럼 (넓은 분리를 위한 빈 컬럼) */}
              <div className="hidden md:block md:col-span-1" aria-hidden="true" />

              {/* 우측 원칙 목록: 6컬럼 */}
              <div className="md:col-span-6 bg-[#EBE4D5]/70 p-5 sm:p-8 rounded-lg border border-deep-walnut/10">
                <h3 className="text-caption font-semibold tracking-data text-deep-walnut/60 uppercase mb-4">
                  온결식탁의 세 가지 기준
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start gap-3 pb-3 sm:pb-4 border-b border-deep-walnut/10">
                    <span className="w-6 h-6 rounded-full bg-burnt-clay text-soft-white text-caption font-bold flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <strong className="text-body font-semibold text-deep-walnut block">
                        혼자 앉기 편한 자리를 먼저 생각합니다.
                      </strong>
                      <span className="text-support text-deep-walnut/75 mt-0.5 block">
                        눈치 보지 않고 머물 수 있는 1인 중심의 좌석과 동선을 연구합니다.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 pb-3 sm:pb-4 border-b border-deep-walnut/10">
                    <span className="w-6 h-6 rounded-full bg-burnt-clay text-soft-white text-caption font-bold flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <strong className="text-body font-semibold text-deep-walnut block">
                        검증하지 않은 건강 효과를 말하지 않습니다.
                      </strong>
                      <span className="text-support text-deep-walnut/75 mt-0.5 block">
                        과장된 효능 대신, 좋은 제철 재료와 정직한 조리에 집중합니다.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-burnt-clay text-soft-white text-caption font-bold flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <strong className="text-body font-semibold text-deep-walnut block">
                        할인보다 음식과 이용 경험을 설명합니다.
                      </strong>
                      <span className="text-support text-deep-walnut/75 mt-0.5 block">
                        빠른 회전이나 과도한 프로모션 대신 차분하고 따뜻한 식사를 만듭니다.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* E. 메뉴 구상 섹션 (중형 여백 144px / 모바일 88px, 가격 우측 정렬 세로 목록) */}
        {/* [확인 필요: 메뉴 구성과 가격] */}
        {/* [확인 필요: 원산지와 알레르기 유발 재료] */}
        <section
          id="menu"
          className="w-full pt-[88px] pb-[88px] md:pt-[144px] md:pb-[144px] px-4 sm:px-6 lg:px-8 border-b border-deep-walnut/10"
        >
          <div className="max-w-[1160px] mx-auto">
            {/* 섹션 헤더 및 실습 가정 라벨 */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-3">
              <div>
                <span className="text-caption font-semibold tracking-data text-burnt-clay uppercase">
                  Seasonal Menu Plan
                </span>
                <h2 className="text-h2 font-serif font-bold text-deep-walnut mt-3">
                  메뉴 구상
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-burnt-clay/10 border border-burnt-clay/20 rounded text-caption font-medium text-burnt-clay self-start md:self-auto">
                <span className="w-2 h-2 rounded-full bg-burnt-clay" />
                아래 메뉴와 가격은 실습용 가정입니다.
              </div>
            </div>

            {/* 메뉴 리스트: 세로 목록, 가격 우측 정렬, 모바일에서는 좌측 4:3 썸네일과 우측 정보가 정돈된 한 행으로 배치 */}
            <div className="space-y-6 sm:space-y-8 divide-y divide-deep-walnut/10">
              {/* 메뉴 1 */}
              <article className="pt-6 first:pt-0 flex flex-row items-start sm:items-center gap-3.5 sm:gap-6 md:grid md:grid-cols-12">
                <figure className="relative w-[110px] sm:w-[200px] md:w-auto md:col-span-4 aspect-[4/3] shrink-0 overflow-hidden rounded bg-deep-walnut/5 border border-deep-walnut/10">
                  <Image
                    src={`${basePath}/images/ongyeol/menu-mushroom-rice.webp`}
                    alt="구운 버섯 들깨밥 구상을 표현한 콘셉트 이미지"
                    fill
                    sizes="(max-width: 640px) 110px, (max-width: 768px) 200px, 360px"
                    className="object-cover"
                    loading="lazy"
                  />
                  <figcaption className="sr-only">
                    구운 버섯 들깨밥 구상을 표현한 콘셉트 이미지
                  </figcaption>
                  <span className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 text-[10px] sm:text-[11px] font-semibold text-soft-white bg-black/60 px-1.5 py-0.5 rounded backdrop-blur-xs">
                    콘셉트 이미지
                  </span>
                </figure>

                <div className="flex-1 md:col-span-8 flex flex-col justify-between py-0.5 sm:py-1">
                  <div className="flex items-baseline justify-between gap-2 border-b border-deep-walnut/10 pb-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-[18px] sm:text-h3 font-serif font-bold text-deep-walnut">
                        구운 버섯 들깨밥
                      </h3>
                      <span className="text-[11px] sm:text-[12px] font-medium text-deep-walnut/70 bg-deep-walnut/10 px-1.5 py-0.5 rounded">
                        실습용 가정
                      </span>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="price text-[17px] sm:text-[22px] font-bold text-burnt-clay">
                        13,000원
                      </span>
                    </div>
                  </div>

                  <p className="text-support sm:text-body text-deep-walnut/85 mt-2 leading-[1.6]">
                    구운 버섯과 들깨 소스를 따뜻한 밥에 곁들이는 메뉴를 구상하고 있습니다.
                  </p>

                  <div className="mt-2.5 flex flex-wrap items-center gap-1.5 sm:gap-2 text-caption text-deep-walnut/75">
                    <span className="font-semibold text-deep-walnut/90">핵심 재료 가정:</span>
                    <span>버섯, 들깨, 쌀</span>
                  </div>
                </div>
              </article>

              {/* 메뉴 2 */}
              <article className="pt-6 flex flex-row items-start sm:items-center gap-3.5 sm:gap-6 md:grid md:grid-cols-12">
                <figure className="relative w-[110px] sm:w-[200px] md:w-auto md:col-span-4 aspect-[4/3] shrink-0 overflow-hidden rounded bg-deep-walnut/5 border border-deep-walnut/10">
                  <Image
                    src={`${basePath}/images/ongyeol/menu-chicken-set.webp`}
                    alt="닭다리살 된장구이 정식 구상을 표현한 콘셉트 이미지"
                    fill
                    sizes="(max-width: 640px) 110px, (max-width: 768px) 200px, 360px"
                    className="object-cover"
                    loading="lazy"
                  />
                  <figcaption className="sr-only">
                    닭다리살 된장구이 정식 구상을 표현한 콘셉트 이미지
                  </figcaption>
                  <span className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 text-[10px] sm:text-[11px] font-semibold text-soft-white bg-black/60 px-1.5 py-0.5 rounded backdrop-blur-xs">
                    콘셉트 이미지
                  </span>
                </figure>

                <div className="flex-1 md:col-span-8 flex flex-col justify-between py-0.5 sm:py-1">
                  <div className="flex items-baseline justify-between gap-2 border-b border-deep-walnut/10 pb-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-[18px] sm:text-h3 font-serif font-bold text-deep-walnut">
                        닭다리살 된장구이 정식
                      </h3>
                      <span className="text-[11px] sm:text-[12px] font-medium text-deep-walnut/70 bg-deep-walnut/10 px-1.5 py-0.5 rounded">
                        실습용 가정
                      </span>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="price text-[17px] sm:text-[22px] font-bold text-burnt-clay">
                        15,000원
                      </span>
                    </div>
                  </div>

                  <p className="text-support sm:text-body text-deep-walnut/85 mt-2 leading-[1.6]">
                    된장 양념에 구운 닭다리살과 계절 반찬을 함께 내는 정식 구성입니다.
                  </p>

                  <div className="mt-2.5 flex flex-wrap items-center gap-1.5 sm:gap-2 text-caption text-deep-walnut/75">
                    <span className="font-semibold text-deep-walnut/90">핵심 재료 가정:</span>
                    <span>닭다리살, 된장, 계절 채소</span>
                  </div>
                </div>
              </article>

              {/* 메뉴 3 */}
              <article className="pt-6 flex flex-row items-start sm:items-center gap-3.5 sm:gap-6 md:grid md:grid-cols-12">
                <figure className="relative w-[110px] sm:w-[200px] md:w-auto md:col-span-4 aspect-[4/3] shrink-0 overflow-hidden rounded bg-deep-walnut/5 border border-deep-walnut/10">
                  <Image
                    src={`${basePath}/images/ongyeol/menu-warm-noodles.webp`}
                    alt="제철 채소 온국수 구상을 표현한 콘셉트 이미지"
                    fill
                    sizes="(max-width: 640px) 110px, (max-width: 768px) 200px, 360px"
                    className="object-cover"
                    loading="lazy"
                  />
                  <figcaption className="sr-only">
                    제철 채소 온국수 구상을 표현한 콘셉트 이미지
                  </figcaption>
                  <span className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 text-[10px] sm:text-[11px] font-semibold text-soft-white bg-black/60 px-1.5 py-0.5 rounded backdrop-blur-xs">
                    콘셉트 이미지
                  </span>
                </figure>

                <div className="flex-1 md:col-span-8 flex flex-col justify-between py-0.5 sm:py-1">
                  <div className="flex items-baseline justify-between gap-2 border-b border-deep-walnut/10 pb-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-[18px] sm:text-h3 font-serif font-bold text-deep-walnut">
                        제철 채소 온국수
                      </h3>
                      <span className="text-[11px] sm:text-[12px] font-medium text-deep-walnut/70 bg-deep-walnut/10 px-1.5 py-0.5 rounded">
                        실습용 가정
                      </span>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="price text-[17px] sm:text-[22px] font-bold text-burnt-clay">
                        11,000원
                      </span>
                    </div>
                  </div>

                  <p className="text-support sm:text-body text-deep-walnut/85 mt-2 leading-[1.6]">
                    제철 채소와 맑은 국물을 중심으로 개발할 따뜻한 국수입니다.
                  </p>

                  <div className="mt-2.5 flex flex-wrap items-center gap-1.5 sm:gap-2 text-caption text-deep-walnut/75">
                    <span className="font-semibold text-deep-walnut/90">핵심 재료 가정:</span>
                    <span>밀면, 채소, 채소 육수</span>
                  </div>
                </div>
              </article>
            </div>

            {/* 메뉴 하단 정직한 안내 문구 (같은 섹션 가리키는 CTA 제외) */}
            <div className="mt-10 p-4 sm:p-5 bg-deep-walnut/5 rounded border border-deep-walnut/10 text-caption sm:text-support text-deep-walnut/80 leading-[1.6]">
              메뉴 구성과 가격, 원산지, 알레르기 유발 재료는 조리법과 공급처를
              정한 뒤 확인할 예정입니다.
            </div>
          </div>
        </section>

        {/* F. 이용 장면 섹션 (소형 여백 112px / 모바일 72px, 좌우 지그재그 후 갤러리) */}
        <section
          id="experience"
          className="w-full pt-[72px] pb-[72px] md:pt-[112px] md:pb-[112px] px-4 sm:px-6 lg:px-8 border-b border-deep-walnut/10"
        >
          <div className="max-w-[1160px] mx-auto">
            {/* 섹션 헤더 */}
            <div className="mb-8 md:mb-12">
              <span className="text-caption font-semibold tracking-data text-burnt-clay uppercase">
                Dining Experience
              </span>
              <h2 className="text-h2 font-serif font-bold text-deep-walnut mt-3">
                이용 장면
              </h2>
            </div>

            {/* 좌우 지그재그 에디토리얼 레이아웃 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
              <div>
                <p className="text-lead sm:text-[20px] text-deep-walnut font-medium leading-[1.65]">
                  저녁 7시, 일을 마치고 혼자 들어온 손님이 있습니다. 혼자라는
                  이유로 작은 메뉴를 고르거나 빨리 자리를 비우지 않아도 되는
                  경험을 목표로 합니다.
                </p>
                <div className="mt-3 inline-block text-caption text-deep-walnut/70 bg-deep-walnut/5 px-3 py-1 rounded">
                  이 이용 장면은 실제 고객 반응이 아니라 매장 기획을 위한 가정입니다.
                </div>
              </div>

              <div className="bg-[#EAE4D7] p-5 sm:p-7 rounded-lg border border-deep-walnut/10">
                <h3 className="text-caption font-semibold tracking-data text-deep-walnut/60 uppercase mb-3">
                  계획된 운영 방식
                </h3>
                <ul className="space-y-2.5 text-support text-deep-walnut/85">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-burnt-clay shrink-0" />
                    <span>혼자 앉기 편한 좌석을 우선 검토합니다.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-burnt-clay shrink-0" />
                    <span>주문과 퇴점을 재촉하지 않는 응대 방식을 설계합니다.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-burnt-clay shrink-0" />
                    <span>메뉴 이름만으로 구성을 알기 어렵지 않게 설명합니다.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2장짜리 가로 스크롤 갤러리 컴포넌트 */}
            <Gallery />
          </div>
        </section>

        {/* G. 오픈 준비 섹션 (중형 여백 144px / 모바일 88px, 테두리 없는 목록 + 타임라인) */}
        {/* [확인 필요: 주소, 영업시간, 좌석 수] */}
        {/* [확인 필요: 오픈 일정과 문의 수단] */}
        <section
          id="opening"
          className="w-full pt-[88px] pb-[88px] md:pt-[144px] md:pb-[144px] px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-[1160px] mx-auto">
            {/* 섹션 헤더 */}
            <div className="mb-8 md:mb-16">
              <span className="text-caption font-semibold tracking-data text-burnt-clay uppercase">
                Preparation Status
              </span>
              <h2 className="text-h2 font-serif font-bold text-deep-walnut mt-3">
                오픈 준비
              </h2>
              <p className="text-support text-deep-walnut/75 mt-2">
                운영 정보는 아직 실습용 구상 단계이며, 세부 사항은 확정 후 순차적으로 안내합니다.
              </p>
            </div>

            {/* 테두리 없는 단일 정보 목록과 타임라인 레이아웃 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
              {/* 왼쪽 정보 목록 */}
              <div className="md:col-span-6 space-y-4">
                <dl className="divide-y divide-deep-walnut/10">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-2.5 gap-1">
                    <dt className="text-support font-semibold text-deep-walnut min-w-[100px]">
                      희망 지역
                    </dt>
                    <dd className="text-support text-deep-walnut/85 text-left sm:text-right">
                      성수동 인근을 검토하고 있습니다.{" "}
                      <span className="text-caption text-deep-walnut/60 font-medium ml-1">
                        (실습용 가정)
                      </span>
                    </dd>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-2.5 gap-1">
                    <dt className="text-support font-semibold text-deep-walnut min-w-[100px]">
                      좌석
                    </dt>
                    <dd className="text-support text-deep-walnut/85 text-left sm:text-right">
                      12석 규모를 가정해 동선을 검토하고 있습니다.{" "}
                      <span className="text-caption text-deep-walnut/60 font-medium ml-1">
                        (실습용 가정)
                      </span>
                    </dd>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-2.5 gap-1">
                    <dt className="text-support font-semibold text-deep-walnut min-w-[100px]">
                      예상 운영
                    </dt>
                    <dd className="text-support text-deep-walnut/85 text-left sm:text-right">
                      평일 17:30~21:30 운영을 가정하고 있습니다.{" "}
                      <span className="text-caption text-deep-walnut/60 font-medium ml-1">
                        (실습용 가정)
                      </span>
                    </dd>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-2.5 gap-1">
                    <dt className="text-support font-semibold text-deep-walnut min-w-[100px]">
                      예상 휴무
                    </dt>
                    <dd className="text-support text-deep-walnut/85 text-left sm:text-right">
                      토·일요일 휴무를 가정하고 있습니다.{" "}
                      <span className="text-caption text-deep-walnut/60 font-medium ml-1">
                        (실습용 가정)
                      </span>
                    </dd>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-2.5 gap-1">
                    <dt className="text-support font-semibold text-deep-walnut min-w-[100px]">
                      배달·단체
                    </dt>
                    <dd className="text-support text-deep-walnut/85 text-left sm:text-right">
                      초기에는 배달과 단체 이용을 운영하지 않는 방향을 검토합니다.{" "}
                      <span className="text-caption text-deep-walnut/60 font-medium ml-1">
                        (실습용 가정)
                      </span>
                    </dd>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-2.5 gap-1">
                    <dt className="text-support font-semibold text-deep-walnut min-w-[100px]">
                      오픈 일정
                    </dt>
                    <dd className="text-support text-burnt-clay font-semibold text-left sm:text-right">
                      오픈 일정은 추후 안내합니다.{" "}
                      <span className="text-caption text-deep-walnut/60 font-normal ml-1">
                        (미정)
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>

              {/* 오른쪽 준비 타임라인 */}
              <div className="md:col-span-6 bg-[#EBE4D5]/60 p-5 sm:p-7 rounded-lg border border-deep-walnut/10">
                <h3 className="text-caption font-semibold tracking-data text-deep-walnut/60 uppercase mb-5">
                  창업 준비 진행 단계
                </h3>

                <ol className="relative border-l border-deep-walnut/20 ml-2.5 space-y-5">
                  <li className="ml-5">
                    <span className="absolute flex items-center justify-center w-5 h-5 bg-burnt-clay rounded-full -left-2.5 ring-4 ring-warm-ivory text-soft-white text-[11px] font-bold">
                      ✓
                    </span>
                    <h4 className="text-body font-semibold text-deep-walnut">
                      콘셉트 및 브랜드 정의
                    </h4>
                    <p className="text-caption text-deep-walnut/75 mt-0.5">
                      퇴근 후 혼자 찾는 작은 식당의 가치와 타깃 고객 정의 (완료)
                    </p>
                  </li>

                  <li className="ml-5">
                    <span className="absolute flex items-center justify-center w-5 h-5 bg-burnt-clay rounded-full -left-2.5 ring-4 ring-warm-ivory text-soft-white text-[11px] font-bold">
                      ●
                    </span>
                    <h4 className="text-body font-semibold text-burnt-clay">
                      메뉴 테스트 및 조리법 구체화
                    </h4>
                    <p className="text-caption text-deep-walnut/75 mt-0.5">
                      버섯 들깨밥, 닭구이 정식, 온국수 조리법 및 원가 테스트 (진행 중)
                    </p>
                  </li>

                  <li className="ml-5">
                    <span className="absolute flex items-center justify-center w-5 h-5 bg-deep-walnut/20 rounded-full -left-2.5 ring-4 ring-warm-ivory text-deep-walnut/60 text-[11px] font-bold">
                      ○
                    </span>
                    <h4 className="text-body font-semibold text-deep-walnut/60">
                      공간 확정 및 오픈 일정 공개
                    </h4>
                    <p className="text-caption text-deep-walnut/50 mt-0.5">
                      상세 주소, 좌석 동선 확정 후 최종 오픈 안내 예정 (예정)
                    </p>
                  </li>
                </ol>

                <div className="mt-6 pt-4 border-t border-deep-walnut/10">
                  <p className="text-caption sm:text-support text-deep-walnut/80 leading-[1.6]">
                    주소, 연락처, 예약 방법은 준비가 완료되고 실제 정보를 확인한
                    뒤 안내하겠습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* H. 푸터 (safe-bottom 적용, 불투명도 0.72 이상) */}
      <footer className="w-full bg-deep-walnut text-soft-white site-footer pt-10 px-4 sm:px-6 lg:px-8 border-t border-deep-walnut/20">
        <div className="max-w-[1160px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pb-6 border-b border-soft-white/10">
          <div>
            <span className="text-h3 font-serif font-bold text-soft-white block">
              온결식탁 · 가칭
            </span>
            <p className="text-support text-soft-white/85 mt-1">
              예비 창업 실습을 위해 만든 가상 매장 소개 시안입니다.
            </p>
          </div>
          <div className="text-caption text-soft-white/80 space-y-0.5">
            <p>※ 본 페이지의 모든 정보는 실습용 가정입니다.</p>
            <p>※ 실제 영업, 예약, 주문 및 결제를 제공하지 않습니다.</p>
          </div>
        </div>

        <div className="max-w-[1160px] mx-auto pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-caption text-soft-white/80">
          <p>© 온결식탁 프로젝트 (예비 창업 실습용). All rights reserved.</p>
          <p className="text-soft-white/80">
            접근성 기준 준수 · 1인 저녁 식사 가상 모델
          </p>
        </div>
      </footer>
    </div>
  );
}
