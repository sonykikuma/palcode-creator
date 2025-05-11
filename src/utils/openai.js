import axios from "axios";

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export const generateVideoIdea = async (topic, tone, type) => {
  try {
    // const response = await axios.get("https://api.openai.com/v1/models", {
    //   headers: {
    //     Authorization: `Bearer ${OPENAI_API_KEY}`,
    //   },
    // });

    //console.log(response.data); // This will list available models

    const res = await axios.post(
      "https://api.openai.com/v1/chat/completions",

      {
        model: "gpt-4o", // Using GPT-4o-mini model
        messages: [
          {
            role: "system",
            content:
              "You are a creative assistant that helps generate video content ideas.",
          },
          {
            role: "user",
            content: `Give me a ${tone} ${type} video idea for: ${topic}`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return res.data.choices[0].message.content;
  } catch (error) {
    console.error("Error generating video idea:", error);
    throw new Error("Failed to generate content.");
  }
};
