import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  className = "",
  origin = "bottom",
  distance = 50,
  delay = 0,
  duration = 800, // tăng duration cho mượt
  easing = "ease-out", // easing smooth
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let tx = 0,
      ty = 0;
    if (origin === "bottom") ty = distance;
    if (origin === "top") ty = -distance;
    if (origin === "left") tx = -distance;
    if (origin === "right") tx = distance;

    // trạng thái ban đầu: ẩn + dịch chuyển
    el.style.opacity = 0;
    el.style.transform = `translate(${tx}px, ${ty}px)`;
    el.style.transition = `opacity ${duration}ms ${easing}, transform ${duration}ms ${easing}`;
    el.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true); // chỉ reveal 1 lần
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [origin, distance, delay, duration, easing]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0,0)" : undefined,
      }}
    >
      {children}
    </div>
  );
}
