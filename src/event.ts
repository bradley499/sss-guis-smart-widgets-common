/**
 * Topic or channel identifier for an event stream
 */
export type eventName = string;

/**
 * Format or sub-type identifier for an event payload (e.g. `"json"`, `"string"`, `"binary"`)
 */
export type eventType = string;

/**
 * Arbitrary payload contents carried by an {@link eventMessage}
 */
export type eventContents = unknown;

/**
 * Message payload exchanged across widgets, DOM events, shared worker ports, and transports
 * @template eventContentsType The type of the event's payload contents
 */
export interface eventMessage<eventContentsType = eventContents> {
    /**
     * Event topic or channel name
     */
    name: eventName;
    /**
     * Event payload type or format identifier
     */
    type: eventType;
    /**
     * Payload data carried by the event
     */
    contents: eventContentsType;
    /**
     * Optional timestamp indicating when the event was produced
     */
    time?: Date;
}

/**
 * Topic subscription request payload forwarded from widgets to the shared worker and transport
 */
export interface eventFollow {
    /**
     * Event topic or channel name to follow
     */
    name: eventName;
    /**
     * Event payload type or format identifier to follow
     */
    type: eventType;
}
