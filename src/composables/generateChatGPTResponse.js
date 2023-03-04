import axios from "axios";

export default async function generateChatGPTResponse(prompt, tokens=1000, temperature=1) {
  const client = axios.create({
    headers: {
      Authorization: "Bearer " + process.env.VUE_APP_OPENAI_API_KEY,
    },
  });

  console.log("running function");
  const params = {
    prompt: prompt,
    model: "text-davinci-003",
    max_tokens: tokens,
    temperature: temperature,
  };

  try {
    const result = await client.post(
      "https://api.openai.com/v1/completions",
      params
    );
    return result.data.choices[0].text;
  } catch (error) {
    console.error(error);
  }
}