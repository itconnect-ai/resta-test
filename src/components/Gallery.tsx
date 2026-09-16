"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  caption: string;
  note: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "IMG-05",
    src: "/images/ongyeol/gallery-preparation.webp",
    alt: "제철 채소를 준비하는 손을 담은 콘셉트 이미지",
    title: "제철 채소 준비 과정",
    caption: "제철 채소를 준비하는 손을 담은 콘셉트 이미지",
    note: "실제 조리 과정 사진으로 교체 권장",
  },
  {
    id: "IMG-06",
    src: "/images/ongyeol/gallery-solo-seat.webp",
    alt: "혼자 편안하게 식사하는 좌석을 표현한 콘셉트 이미지",
    title: "1인 식사 공간 분위기",
    caption: "혼자 편안하게 식사하는 좌석을 표현한 콘셉트 이미지",
    note: "실제 매장 내부 사진으로 교체 필요",
  },
];

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const index = Math.round(scrollLeft / clientWidth);
    setCurrentIndex(Math.min(Math.max(index, 0), galleryItems.length - 1));
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const itemWidth = scrollRef.current.clientWidth;
    scrollRef.current.scrollTo({
      left: index * itemWidth,
      behavior: "smooth",
    });
    setCurrentIndex(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollToIndex(Math.max(currentIndex - 1, 0));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollToIndex(Math.min(currentIndex + 1, galleryItems.length - 1));
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="mt-10 sm:mt-14 focus:outline-none"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      role="region"
      aria-roledescription="carousel"
      aria-label="온결식탁 이용 장면 갤러리"
    >
      {/* 갤러리 헤더 컨트롤: 진행 표시 및 좌우 버튼 */}
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-2">
          <span className="text-caption font-semibold tracking-data text-deep-walnut/75 bg-deep-walnut/10 px-2.5 py-1 rounded">
            {currentIndex + 1} / {galleryItems.length}
          </span>
          <span className="text-caption text-deep-walnut/70">
            (키보드 좌우 방향키로 탐색 가능)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollToIndex(Math.max(currentIndex - 1, 0))}
            disabled={currentIndex === 0}
            className="w-11 h-11 inline-flex items-center justify-center rounded border border-deep-walnut/20 text-deep-walnut disabled:opacity-30 disabled:cursor-not-allowed hover:bg-deep-walnut/5 transition-colors focus-visible:ring-2 focus-visible:ring-burnt-clay"
            aria-label="이전 이미지 보기"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() =>
              scrollToIndex(Math.min(currentIndex + 1, galleryItems.length - 1))
            }
            disabled={currentIndex === galleryItems.length - 1}
            className="w-11 h-11 inline-flex items-center justify-center rounded border border-deep-walnut/20 text-deep-walnut disabled:opacity-30 disabled:cursor-not-allowed hover:bg-deep-walnut/5 transition-colors focus-visible:ring-2 focus-visible:ring-burnt-clay"
            aria-label="다음 이미지 보기"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* 가로 스크롤 영역 (모바일에서 다음 이미지 20% 피크 노출: w-[80vw] sm:w-[520px]) */}
      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-thin scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
        style={{ scrollbarWidth: "thin" }}
      >
        {galleryItems.map((item) => (
          <figure
            key={item.id}
            className="snap-start shrink-0 w-[80vw] max-w-[540px] sm:w-[520px] flex flex-col group"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded bg-deep-walnut/5 shadow-sm border border-deep-walnut/10">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 80vw, 520px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between gap-2 text-deep-walnut/80">
              <span className="text-caption font-medium">{item.caption}</span>
              <span className="text-[12px] font-semibold tracking-data text-burnt-clay/90 bg-burnt-clay/10 px-2 py-0.5 rounded shrink-0">
                콘셉트 이미지
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
