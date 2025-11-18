import Messages from "./messages";
import ChatInput from "./chatInput";
import { useChat } from "@/hooks/useChat";
import { useParams } from "react-router";

export default function ChatRoom() {
  const { room } = useParams();

  const { messages, sendMessage, name } = useChat(room); // 只在這裡調用一次

  return (
    <div className="flex flex-col gap-4">
      <Messages messages={messages}></Messages>
      <ChatInput sendMessage={sendMessage} name={name}></ChatInput>
    </div>
  );
}
