export const BACKEND_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://wassup-bub.herokuapp.com";

export const WEBSOCKET_PROTOCOL =
  process.env.NODE_ENV === "development" ? "ws" : "wss";

const messageHandlers = new Set();

export const addMessageHandler = (handler) => {
  console.log(handler);
  messageHandlers.add(handler);
};

export const removeMessageHandler = (handler) => {
  messageHandlers.delete(handler);
};

let wsURL = BACKEND_URL.replace(/^https?/, WEBSOCKET_PROTOCOL) + "/ws";

const socket = new WebSocket(wsURL);
socket.onopen = function () {
  console.log("Socket is open");
};
socket.onmessage = function (e) {
  messageHandlers.forEach((handler) => handler(e));
};

export default socket;
