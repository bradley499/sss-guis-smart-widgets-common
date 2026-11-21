/**
 * Manageable single-shot timer wrapper
 */
export class timeout {
    private timerId: ReturnType<typeof setTimeout> | null = null;
    private isExpired: boolean = false;

    /**
     * Initializes a timeout timer
     * @param callback The function to execute upon timer expiration
     * @param durationMs Timeout duration in milliseconds
     */
    constructor(
        private callback: () => void,
        private durationMs: number
    ) {}

    /**
     * Starts the timer. If a timer is already active, it clears it and restarts.
     */
    public start(): void {
        this.stop(); // Clear any existing active timer
        this.isExpired = false;

        this.timerId = setTimeout(() => {
            this.isExpired = true;
            this.timerId = null;
            this.callback();
        }, this.durationMs);
    }

    /**
     * Stops the active timer if it is running.
     */
    public stop(): void {
        if (this.timerId !== null) {
            clearTimeout(this.timerId);
            this.timerId = null;
        }
    }

    /**
     * Returns true if the timer ran to completion and triggered the callback.
     * @returns Whether the timer has expired
     */
    public expired(): boolean {
        return this.isExpired;
    }

    /**
     * Returns true if the timer is currently actively counting down.
     * @returns Whether the timer is actively counting down
     */
    public isActive(): boolean {
        return this.timerId !== null;
    }
}
