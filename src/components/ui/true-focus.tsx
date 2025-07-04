import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface TrueFocusProps {
  sentence?: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
}

const TrueFocus = ({
  sentence = "True Focus",
  manualMode = false,
  blurAmount = 5,
  borderColor = "green",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
}: TrueFocusProps) => {
  const words = sentence.split(" ");
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [showFocus, setShowFocus] = useState(false);

  console.log("TrueFocus palavras:", words);

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(() => {
        setCurrentIndex((prev: number) => {
          const nextIndex = (prev + 1) % words.length;
          console.log(`Focando palavra ${nextIndex}: "${words[nextIndex]}"`);
          return nextIndex;
        });
      }, (animationDuration + pauseBetweenAnimations) * 1000);

      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length, words]);

  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return;
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    // Aguarda o próximo frame para garantir renderização completa
    requestAnimationFrame(() => {
      const containerElement = containerRef.current;
      const wordElement = wordRefs.current[currentIndex];
      
      if (!containerElement || !wordElement) return;

      const containerRect = containerElement.getBoundingClientRect();
      const wordRect = wordElement.getBoundingClientRect();

      setFocusRect({
        x: wordRect.left - containerRect.left,
        y: wordRect.top - containerRect.top,
        width: wordRect.width,
        height: wordRect.height,
      });
      setShowFocus(true);
    });
  }, [currentIndex, words.length]);

  useEffect(() => {
    // Força recálculo após montagem
    const timer = setTimeout(() => {
      if (wordRefs.current[0] && containerRef.current) {
        setCurrentIndex(0);
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (showFocus && currentIndex >= 0) {
        // Recalcula posição após resize
        requestAnimationFrame(() => {
          const containerElement = containerRef.current;
          const wordElement = wordRefs.current[currentIndex];
          
          if (!containerElement || !wordElement) return;

          const containerRect = containerElement.getBoundingClientRect();
          const wordRect = wordElement.getBoundingClientRect();

          setFocusRect({
            x: wordRect.left - containerRect.left,
            y: wordRect.top - containerRect.top,
            width: wordRect.width,
            height: wordRect.height,
          });
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [showFocus, currentIndex]);

  const handleMouseEnter = (index: number) => {
    if (manualMode) {
      setLastActiveIndex(index);
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (manualMode && lastActiveIndex !== null) {
      setCurrentIndex(lastActiveIndex);
    }
  };

  return (
    <div
      className="relative inline-flex gap-2 items-center"
      ref={containerRef}
      style={{ position: 'relative' }}
    >
              {words.map((word, index) => {
          const isActive = index === currentIndex;
          
          return (
            <span
              key={index}
              ref={(el) => {
                if (el) {
                  wordRefs.current[index] = el;
                }
              }}
              className="relative cursor-pointer inline-block"
              style={{
                filter: isActive ? `blur(0px)` : `blur(${blurAmount}px)`,
                transition: `filter ${animationDuration}s ease`,
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {word}
            </span>
          );
        })}

              {showFocus && (
          <motion.div
            className="absolute pointer-events-none"
            style={{
              left: 0,
              top: 0,
              zIndex: 10,
            }}
            animate={{
              x: focusRect.x,
              y: focusRect.y,
              width: focusRect.width,
              height: focusRect.height,
              opacity: currentIndex >= 0 ? 1 : 0,
            }}
            transition={{
              duration: animationDuration,
              ease: "easeInOut",
            }}
          >
          <span
            className="absolute w-5 h-5 border-[3px] rounded-[3px] top-[-12px] left-[-12px] border-r-0 border-b-0"
            style={{
              borderColor: borderColor,
              filter: `drop-shadow(0 0 6px ${borderColor})`,
            }}
          ></span>
          <span
            className="absolute w-5 h-5 border-[3px] rounded-[3px] top-[-12px] right-[-12px] border-l-0 border-b-0"
            style={{
              borderColor: borderColor,
              filter: `drop-shadow(0 0 6px ${borderColor})`,
            }}
          ></span>
          <span
            className="absolute w-5 h-5 border-[3px] rounded-[3px] bottom-[-12px] left-[-12px] border-r-0 border-t-0"
            style={{
              borderColor: borderColor,
              filter: `drop-shadow(0 0 6px ${borderColor})`,
            }}
          ></span>
          <span
            className="absolute w-5 h-5 border-[3px] rounded-[3px] bottom-[-12px] right-[-12px] border-l-0 border-t-0"
            style={{
              borderColor: borderColor,
              filter: `drop-shadow(0 0 6px ${borderColor})`,
            }}
          ></span>
        </motion.div>
      )}
    </div>
  );
};

export default TrueFocus; 