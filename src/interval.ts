import { timeout } from "./timeout";

/**
 * Recurring timer wrapper based on timeout
 */
export class interval extends timeout {
    /**
     * Initializes a recurring interval
     * @param callback The function to execute on each interval tick
     * @param durationMs Interval duration in milliseconds
     */
    constructor(
        callback: () => void,
        durationMs: number
    ) {
        super(() => {
            callback();
            this.start();
        }, durationMs);
    }
}
