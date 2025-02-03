"use client";

import type React from "react";
import { useEffect, useRef, useCallback } from "react";

interface Circle {
    x: number;
    y: number;
    radius: number;
    vx: number;
    vy: number;
    color: string;
}

interface ParticlesProps {
    className?: string;
    quantity?: number;
    staticity?: number;
    ease?: number;
    size?: number;
    refresh?: boolean;
    color?: string;
    vx?: number;
    vy?: number;
}

const Particles: React.FC<ParticlesProps> = ({
    className = "",
    quantity = 100,
    staticity = 50,
    ease = 50,
    size = 0.4,
    refresh = false,
    color = "#ffffff",
    vx = 0,
    vy = 0,
}) => {
    const canvasContainerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const context = useRef<CanvasRenderingContext2D | null>(null);
    const circles = useRef<Circle[]>([]);
    const canvasSize = useRef<{ w: number; h: number; }>({ w: 0, h: 0 });
    const dpr = window.devicePixelRatio || 1;

    const circleParams = useCallback(() => {
        const radius = size * 10;
        return {
            x: Math.random() * canvasSize.current.w,
            y: Math.random() * canvasSize.current.h,
            radius,
            vx: vx + (Math.random() - 0.5) * staticity,
            vy: vy + (Math.random() - 0.5) * staticity,
            color,
        };
    }, [size, staticity, vx, vy, color]);

    const clearContext = useCallback(() => {
        if (context.current) {
            context.current.clearRect(0, 0, canvasSize.current.w * dpr, canvasSize.current.h * dpr);
        }
    }, [dpr]);

    const drawCircle = useCallback(
        (circle: Circle) => {
            if (context.current) {
                context.current.beginPath();
                context.current.arc(circle.x, circle.y, circle.radius * dpr, 0, Math.PI * 2);
                context.current.fillStyle = circle.color;
                context.current.fill();
            }
        },
        [dpr],
    );

    const resizeCanvas = useCallback(() => {
        if (canvasContainerRef.current && canvasRef.current && context.current) {
            circles.current.length = 0;
            canvasSize.current.w = canvasContainerRef.current.offsetWidth;
            canvasSize.current.h = canvasContainerRef.current.offsetHeight;
            canvasRef.current.width = canvasSize.current.w * dpr;
            canvasRef.current.height = canvasSize.current.h * dpr;
            canvasRef.current.style.width = `${canvasSize.current.w}px`;
            canvasRef.current.style.height = `${canvasSize.current.h}px`;
            context.current.scale(dpr, dpr);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const drawParticles = useCallback(() => {
        clearContext();
        const particleCount = quantity;
        for (let i = 0; i < particleCount; i++) {
            const circle = circleParams();
            drawCircle(circle);
        }
    }, [quantity, circleParams, clearContext, drawCircle]);

    const initCanvas = useCallback(() => {
        resizeCanvas();
        drawParticles();
    }, [resizeCanvas, drawParticles]);

    const animate = useCallback(() => {
        if (context.current) {
            circles.current.forEach((circle) => {
                circle.x += circle.vx / ease;
                circle.y += circle.vy / ease;

                if (circle.x + circle.radius > canvasSize.current.w || circle.x - circle.radius < 0) {
                    circle.vx *= -1;
                }
                if (circle.y + circle.radius > canvasSize.current.h || circle.y - circle.radius < 0) {
                    circle.vy *= -1;
                }
                drawCircle(circle);
            });
            requestAnimationFrame(animate);
        }
    }, [drawCircle, ease]);

    useEffect(() => {
        if (canvasRef.current) {
            context.current = canvasRef.current.getContext("2d");
        }
        initCanvas();
        animate();
        window.addEventListener("resize", initCanvas);

        return () => {
            window.removeEventListener("resize", initCanvas);
        };
    }, [initCanvas, animate]);

    useEffect(() => {
        if (refresh) {
            initCanvas();
        }
    }, [refresh, initCanvas]);

    return (
        <div className={`${className} relative overflow-hidden`} ref={canvasContainerRef}>
            <canvas ref={canvasRef} className="absolute inset-0" />
        </div>
    );
};

export default Particles

