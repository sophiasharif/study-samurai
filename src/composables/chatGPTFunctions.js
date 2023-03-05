import generateChatGPTResponse from "./generateChatGPTResponse";

async function generateCorrectAnswer(question) {
    const prompt = `What is the correct answer to this question? Give me just the answer - 
                    no explanation is required. Question: ${question}`
    const res = await generateChatGPTResponse(prompt);
    return res;
}

async function generateCorrectAnswerExplanation(question, correctAnswer) {
    const prompt = `I'm struggling with solving the following question: ${question}.
                    The correct answer to this question is ${correctAnswer}.
                    Could you explain how to reach this correct answer in a friendly tone
                    Format any math expressions you use with LaTeX.`
    const res = await generateChatGPTResponse(prompt);
    return res;
}

async function generateIncorrectAnswer(question, correctAnswer, incorrectAnswers=[]) {
    let prompt = `Generate a convincing incorrect answer to the following question: Text:{${question}}.
                The correct answer to this question is ${correctAnswer}, so do not give it as an incorrect answer.
                Format math expressions with LaTeX.
                No further explanation is necessary; just the incorrect answer is sufficient.`
    
    if (incorrectAnswers.length > 0) {
        prompt +=  " Incorrect answers that I have already thoughts of are "
        for (let i=0; i<incorrectAnswers.length; i++) {
            prompt += incorrectAnswers[i] + " ,"
        }
        prompt += " so do not provide those as your answer."
    }
    
    const res = await generateChatGPTResponse(prompt);
    return res;
}

async function generateMultipleIncorrectAnswers(question, correctAnswer, numAnswers) {
    let res = []
    for (let i=0; i<numAnswers; i++) {
        const ans = await generateIncorrectAnswer(question, correctAnswer, res);
        res.push(ans.trim())
    }
    return res;
}

export {generateCorrectAnswer, generateCorrectAnswerExplanation, generateIncorrectAnswer, generateMultipleIncorrectAnswers}