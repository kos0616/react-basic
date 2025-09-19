import { useState, useEffect } from "react";
import styles from "./ChatRoom.module.scss";

// 模擬一個聊天室連線的 API
function createConnection(roomId: string) {
  return {
    connect() {
      console.log(`🔌 Connecting to room: ${roomId}`);
    },
    disconnect() {
      console.log(`❌ Disconnected from room: ${roomId}`);
    },
  };
}

// ChatRoom component
function ChatRoom({ roomId }: { roomId: string }) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();

    // cleanup function
    return () => connection.disconnect();
  }, [roomId]);

  return <h2>Currently in room: {roomId}</h2>;
}

// 父層 App component，控制 roomId
export default function App() {
  const [roomId, setRoomId] = useState("general");

  return (
    <div>
      <h1>My Chat App</h1>
      <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
        <button onClick={() => setRoomId("general")} className={styles.button}>
          General
        </button>
        <button onClick={() => setRoomId("music")} className={styles.button}>
          Music
        </button>
        <button onClick={() => setRoomId("sports")} className={styles.button}>
          Sports
        </button>
      </div>
      <ChatRoom roomId={roomId} />
    </div>
  );
}
