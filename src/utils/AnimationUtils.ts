import { gsap } from 'gsap';

export interface AnimationConfig {
  duration?: number;
  ease?: string;
  delay?: number;
  repeat?: number;
  yoyo?: boolean;
  onComplete?: () => void;
  onStart?: () => void;
  onUpdate?: () => void;
}

export class AnimationUtils {
  
  // Fade animations
  static fadeIn(element: HTMLElement | string, config: AnimationConfig = {}): gsap.core.Tween {
    return gsap.fromTo(element, 
      { opacity: 0 },
      {
        opacity: 1,
        duration: config.duration ?? 0.5,
        ease: config.ease ?? "power2.out",
        delay: config.delay ?? 0,
        onComplete: config.onComplete,
        onStart: config.onStart,
        onUpdate: config.onUpdate
      }
    );
  }

  static fadeOut(element: HTMLElement | string, config: AnimationConfig = {}): gsap.core.Tween {
    return gsap.to(element, {
      opacity: 0,
      duration: config.duration ?? 0.5,
      ease: config.ease ?? "power2.out",
      delay: config.delay ?? 0,
      onComplete: config.onComplete,
      onStart: config.onStart,
      onUpdate: config.onUpdate
    });
  }

  // Scale animations
  static scaleIn(element: HTMLElement | string, config: AnimationConfig = {}): gsap.core.Tween {
    return gsap.fromTo(element,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: config.duration ?? 0.6,
        ease: config.ease ?? "back.out(1.7)",
        delay: config.delay ?? 0,
        onComplete: config.onComplete,
        onStart: config.onStart,
        onUpdate: config.onUpdate
      }
    );
  }

  static scaleOut(element: HTMLElement | string, config: AnimationConfig = {}): gsap.core.Tween {
    return gsap.to(element, {
      scale: 0,
      opacity: 0,
      duration: config.duration ?? 0.4,
      ease: config.ease ?? "back.in(1.7)",
      delay: config.delay ?? 0,
      onComplete: config.onComplete,
      onStart: config.onStart,
      onUpdate: config.onUpdate
    });
  }

  static pulse(element: HTMLElement | string, config: AnimationConfig = {}): gsap.core.Tween {
    return gsap.to(element, {
      scale: 1.1,
      duration: config.duration ?? 0.3,
      ease: config.ease ?? "power2.inOut",
      repeat: config.repeat ?? -1,
      yoyo: config.yoyo ?? true,
      delay: config.delay ?? 0,
      onComplete: config.onComplete,
      onStart: config.onStart,
      onUpdate: config.onUpdate
    });
  }

  // Slide animations
  static slideInFromLeft(element: HTMLElement | string, config: AnimationConfig = {}): gsap.core.Tween {
    return gsap.fromTo(element,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: config.duration ?? 0.8,
        ease: config.ease ?? "power3.out",
        delay: config.delay ?? 0,
        onComplete: config.onComplete,
        onStart: config.onStart,
        onUpdate: config.onUpdate
      }
    );
  }

  static slideInFromRight(element: HTMLElement | string, config: AnimationConfig = {}): gsap.core.Tween {
    return gsap.fromTo(element,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: config.duration ?? 0.8,
        ease: config.ease ?? "power3.out",
        delay: config.delay ?? 0,
        onComplete: config.onComplete,
        onStart: config.onStart,
        onUpdate: config.onUpdate
      }
    );
  }

  static slideInFromTop(element: HTMLElement | string, config: AnimationConfig = {}): gsap.core.Tween {
    return gsap.fromTo(element,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: config.duration ?? 0.8,
        ease: config.ease ?? "power3.out",
        delay: config.delay ?? 0,
        onComplete: config.onComplete,
        onStart: config.onStart,
        onUpdate: config.onUpdate
      }
    );
  }

  static slideInFromBottom(element: HTMLElement | string, config: AnimationConfig = {}): gsap.core.Tween {
    return gsap.fromTo(element,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: config.duration ?? 0.8,
        ease: config.ease ?? "power3.out",
        delay: config.delay ?? 0,
        onComplete: config.onComplete,
        onStart: config.onStart,
        onUpdate: config.onUpdate
      }
    );
  }

  // Game-specific animations
  static brickBreakAnimation(element: HTMLElement | string, config: AnimationConfig = {}): gsap.core.Timeline {
    const tl = gsap.timeline();
    
    tl.to(element, {
      scale: 1.2,
      duration: 0.1,
      ease: "power2.out"
    })
    .to(element, {
      scale: 0,
      opacity: 0,
      rotation: 45,
      duration: config.duration ?? 0.3,
      ease: config.ease ?? "power2.in",
      onComplete: config.onComplete
    });

    return tl;
  }

  static ballHitAnimation(element: HTMLElement | string, config: AnimationConfig = {}): gsap.core.Tween {
    return gsap.to(element, {
      scale: 1.3,
      duration: 0.1,
      ease: "power2.out",
      yoyo: true,
      repeat: 1,
      onComplete: config.onComplete
    });
  }

  static powerUpCollectAnimation(element: HTMLElement | string, config: AnimationConfig = {}): gsap.core.Timeline {
    const tl = gsap.timeline();
    
    tl.to(element, {
      scale: 1.5,
      rotation: 180,
      duration: 0.2,
      ease: "power2.out"
    })
    .to(element, {
      scale: 0,
      opacity: 0,
      y: -50,
      duration: config.duration ?? 0.4,
      ease: config.ease ?? "power2.in",
      onComplete: config.onComplete
    });

    return tl;
  }

  static skillActivationAnimation(element: HTMLElement | string, config: AnimationConfig = {}): gsap.core.Timeline {
    const tl = gsap.timeline();
    
    tl.fromTo(element, 
      { scale: 0, rotation: -180, opacity: 0 },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)"
      }
    )
    .to(element, {
      boxShadow: "0 0 20px rgba(255, 255, 0, 0.8)",
      duration: 0.3,
      yoyo: true,
      repeat: 3,
      onComplete: config.onComplete
    });

    return tl;
  }

  static bossIntroAnimation(element: HTMLElement | string, config: AnimationConfig = {}): gsap.core.Timeline {
    const tl = gsap.timeline();
    
    tl.fromTo(element,
      { scale: 0, rotation: 720, opacity: 0 },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: config.duration ?? 1.5,
        ease: config.ease ?? "power3.out"
      }
    )
    .to(element, {
      scale: 1.1,
      duration: 0.5,
      ease: "power2.inOut",
      yoyo: true,
      repeat: 2,
      onComplete: config.onComplete
    });

    return tl;
  }

  // Utility methods
  static killAll(): void {
    gsap.killTweensOf("*");
  }

  static createTimeline(config: AnimationConfig = {}): gsap.core.Timeline {
    return gsap.timeline({
      delay: config.delay ?? 0,
      repeat: config.repeat ?? 0,
      yoyo: config.yoyo ?? false,
      onComplete: config.onComplete,
      onStart: config.onStart,
      onUpdate: config.onUpdate
    });
  }

  static setPosition(element: HTMLElement | string, x: number, y: number): void {
    gsap.set(element, { x, y });
  }

  static getProperty(element: HTMLElement | string, property: string): any {
    return gsap.getProperty(element, property);
  }
}

// Export commonly used easing functions
export const Easing = {
  power1: {
    in: "power1.in",
    out: "power1.out",
    inOut: "power1.inOut"
  },
  power2: {
    in: "power2.in", 
    out: "power2.out",
    inOut: "power2.inOut"
  },
  power3: {
    in: "power3.in",
    out: "power3.out", 
    inOut: "power3.inOut"
  },
  back: {
    in: "back.in(1.7)",
    out: "back.out(1.7)",
    inOut: "back.inOut(1.7)"
  },
  elastic: {
    in: "elastic.in(1, 0.3)",
    out: "elastic.out(1, 0.3)",
    inOut: "elastic.inOut(1, 0.3)"
  },
  bounce: {
    in: "bounce.in",
    out: "bounce.out",
    inOut: "bounce.inOut"
  }
};