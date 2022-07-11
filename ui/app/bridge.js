export const EventManager = {
    events: {},

    addHandler: function (eventName, handler) {
        if (eventName in this.events) {
            this.events[eventName].push(handler);
        }
        else {
            this.events[eventName] = [handler];
        }
    },

    removeHandler: function (eventName, handler) {
        if (eventName in this.events) {
            const index = this.events[eventName].indexOf(handler);
            this.events[eventName].splice(index, 1);
        }
    }
}

export function trigger(eventName, args) {
    const handlers = EventManager.events[eventName];
    handlers.forEach(handler => handler(JSON.parse(args)));
}