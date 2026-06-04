import { useEffect } from "react";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

// const isMobile = window.matchMedia("(pointer: coarse)").matches;

let slimLoaded = false;

const particleOptions = {
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  interactivity: {
    events: { onHover: { enable: true, mode: "grab" } },
    modes: { grab: { distance: 120, links: { opacity: 0.5 } } },
  },
  particles: {
    color: { value: "#34d399" },
    links: {
      color: "#34d399",
      distance: 100,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: { enable: true, speed: 0.5, outModes: { default: "bounce" } },
    number: { value: 55, density: { enable: true } },
    opacity: { value: 0.5 },
    size: { value: { min: 1, max: 2.5 } },
  },
  detectRetina: true,
};

export default function ParticlesBg() {
  useEffect(() => {
    // if (isMobile) return;

    let container;

    const init = async () => {
      if (!slimLoaded) {
        await loadSlim(tsParticles);
        slimLoaded = true;
      }
      container = await tsParticles.load({
        id: "tsparticles",
        options: particleOptions,
      });
    };

    init().catch(console.error);

    return () => {
      container?.destroy();
    };
  }, []);

  // if (isMobile) return null;

  return (
    <div
      id="tsparticles"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
