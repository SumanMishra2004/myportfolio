import { Particles } from "react-tsparticles";

import { loadFull } from "tsparticles";
import React, { useCallback } from "react";
const ParticlesContainer = () => {
  const particleinit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const particleLoaded = useCallback(async () => {}, {});
  return (
    <Particles
      className="w-full h-full absolute translate-z-o"
      id="tsparticles"
      init={particleinit}
      loaded={particleLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: " ",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onclick: {
              enable: false,
              mode: "push",
            },
            onhover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 500,
            },
            repulse: {
              distance: 100,
              duration: 0.7,
            },
          },
        },
        particles: {
          color: {
            value: "#0000ff",
          },
          links: {
            color: "#f5d393",
            distance: 180,
            enable: true,
            opacity: 0.3,
            width: 1.45,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,
            outMode: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1200,
            },
            value: 150,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
