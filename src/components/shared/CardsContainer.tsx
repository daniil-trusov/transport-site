import clsx from 'clsx';
import { useEffect, useRef, useState, type ComponentType } from 'react';

type Props<T> = {
  cardsInfo: T[];
  cardComponent: ComponentType<{ info: T }>;
  gapPx: number;
  stackOnMobile?: boolean;
  cardWidth?: number;
  className?: string;
};

export const CardsContainer: React.FC<Props<any>> = ({
  cardsInfo,
  cardComponent: CardComponent,
  gapPx,
  cardWidth = 320,
  className,
  stackOnMobile = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState(1);
  const [isStacked, setIsStacked] = useState(false);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      const stacked = stackOnMobile && width < 640;
      setIsStacked(stacked);

      if (stacked) {
        setVisibleCards(cardsInfo.length);
      } else {
        const count = Math.floor((width + gapPx) / (cardWidth + gapPx));
        setVisibleCards(Math.max(count, 1));
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [cardsInfo.length, stackOnMobile, cardWidth]);

  return (
    <div ref={containerRef} className="w-full">
      <div
        className={clsx(
          'flex',
          isStacked ? 'flex-col items-center' : 'flex-row justify-center',
          className,
        )}
        style={{ gap: `${gapPx}px` }}
      >
        {cardsInfo.slice(0, visibleCards).map((cardInfo, index) => (
          <CardComponent key={index} info={cardInfo} />
        ))}
      </div>
    </div>
  );
};
