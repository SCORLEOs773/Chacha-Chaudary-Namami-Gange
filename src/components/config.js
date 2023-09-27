import { createChatBotMessage } from "react-chatbot-kit";
import cc2 from "../assets/images/cc head2.png";
import "./config.css";

const botName = "Chacha Chaudhary";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`Hi I'm ${botName}`),
    createChatBotMessage("How may I help you today?", {
      // widget: "airportSelector",
      delay: 500,
    }),
  ],
  customComponents: {
    // Replaces the default header
    header: () => (
      <div
        style={{
          backgroundColor: "skyblue",
          padding: "5px",
          borderRadius: "3px",
        }}
      >
        <img className="mx-2" src={cc2} height={"50px"} alt="" />
        Chacha Chaudhary
      </div>
    ),
    botAvatar: (props) => (
      <img
        className="mx-2"
        src={cc2}
        style={{ width: "70px", height: "70px" }}
        alt=""
      />
    ),
  },
};

export default config;
