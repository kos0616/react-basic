import { useState } from "react";
import ChatRoom from "./ChatRoom";

export default function App() {
  const [isShowingChatRoom, setIsShowingChatRoom] = useState(true);
  return (
    <>
      <button onClick={() => setIsShowingChatRoom(!isShowingChatRoom)}>
        Toggle Chatroom
      </button>
      {isShowingChatRoom && <ChatRoom></ChatRoom>}
    </>
  );
}
