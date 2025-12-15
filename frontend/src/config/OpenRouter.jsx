import React from "react";

const OpenRouter = async ({ Prompt, model }) => {
  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + import.meta.env.VITE_OPENROUTER_API_URL, // Your OpenRouter API key
          "Content-Type": "application/json",
          "HTTP-Referer": "https://ai-chatbot-app-six.vercel.app/", // or your deployed site
          "X-Title": "My AI App",
        },
        body: JSON.stringify({
          model: model, //"mistralai/mistral-7b-instruct", // or try "meta-llama/llama-3-8b-instruct"
          messages: [{ role: "user", content: Prompt }],
        }),
      }
    );

    const data = await response.json();

    return data.choices[0].message.content || "No response";
  } 
  // eslint-disable-next-line no-unused-vars
  catch (error) {
    return " Check your Internet Connection ... ";
  }
};

export default OpenRouter;
