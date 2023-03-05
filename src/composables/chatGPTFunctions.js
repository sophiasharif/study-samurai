import generateChatGPTResponse from "./generateChatGPTResponse";

async function generateCorrectAnswer(question) {
    const prompt = "What is the correct answer to this question? Give me just the answer - no explanation is required. Question: " + question
    const res = await generateChatGPTResponse(prompt);
    return res;
}

export {generateCorrectAnswer}