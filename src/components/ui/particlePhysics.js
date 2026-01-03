/**
 * Particle Physics Engine
 * Handles position, velocity, and behaviors for preloader shards
 */

export class Particle {
    constructor(w, h, color) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        // Random velocity
        this.vx = (Math.random() - 0.5) * 16; // -8 to 8
        this.vy = (Math.random() - 0.5) * 16;

        this.size = Math.random() * 4 + 2; // 2-6px
        this.color = color;
        this.friction = 0.98;
        this.gravity = 0.05; // slight downward pull
        this.targetX = w / 2;
        this.targetY = h / 2;

        this.locked = false; // True when it reaches center
    }

    update(w, h, forceFactor) {
        if (this.locked) return;

        // Apply forces
        this.vx *= this.friction;
        this.vy *= this.friction;

        // Gravity
        this.vy += this.gravity;

        // Attraction to center (Assembly phase)
        if (forceFactor > 0) {
            const dx = this.targetX - this.x;
            const dy = this.targetY - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 20) {
                this.locked = true;
                this.x = this.targetX + (Math.random() - 0.5) * 10;
                this.y = this.targetY + (Math.random() - 0.5) * 10;
                return;
            }

            // Normalized vector
            const ax = (dx / dist) * forceFactor * 2;
            const ay = (dy / dist) * forceFactor * 2;

            this.vx += ax;
            this.vy += ay;
        }

        // Apply bouncing off walls (optional, but requested in prompt)
        if (this.x < 0 || this.x > w) this.vx *= -0.7;
        if (this.y < 0 || this.y > h) this.vy *= -0.7;

        this.x += this.vx;
        this.y += this.vy;
    }
}

export const createParticles = (count, w, h, colors) => {
    return Array.from({ length: count }).map((_, i) =>
        new Particle(w, h, colors[i % colors.length])
    );
};
