// in ActionProvider.jsx
import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleCall = (query) => {

    (async () => {
      const msg = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      })
        .then((res) => res.json())
        .then((res) => {
          return res.response
        })
        .catch((err) => {
          console.log("error", err);
          return "Some error occured"
        });
      const botMessage = createChatBotMessage(msg);
      setState((state) => ({
        ...state,
        messages: [...state.messages, botMessage],
      }));

    })()
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleCall,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
