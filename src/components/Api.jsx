import React from "react";

export default function Api() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const apiUrl = "https://namami-gange-chatbot.vercel.app/chat";

    const requestBody = {
      query: "testing",
    };

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error("There was a problem fetching the data:", error);
      });
  }, []);

  return (
    <div>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
