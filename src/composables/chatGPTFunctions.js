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
                    Format any math expressions you use with LaTeX. Use only single dollar signs
                    to delimit your math expressions.`
    const res = await generateChatGPTResponse(prompt);
    return res;
}

async function generateIncorrectAnswer(question, correctAnswer, incorrectAnswers=[]) {
    let prompt = `Generate a convincing incorrect answer to the following math question: Text:{${question}}.
                The correct answer to this question is ${correctAnswer}. Do not give it as an incorrect answer,
                and structure your answer like the correct answer.
                Format your answer as a single expression, do not end with punctuation.
                Write numbers and math statements with LaTeX. Do not explain the incorrect answer.`
    
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

async function generateIncorrectAnswerExplanation(question, correctAnswer, incorrectAnswer) {
    const prompt = `I'm struggling with solving the following question: ${question}.
                    The correct answer to this question is ${correctAnswer}.
                    However, I'm getting the answer ${incorrectAnswer}.
                    Where am I going wrong? Write an explanation in a very friendly tone explaining how I made the mistake.
                    Format any math expressions you use with LaTeX.`
    const res = await generateChatGPTResponse(prompt);
    return res;
}

async function generateIncorrectAnswerSet(question, correctAnswer, numIncorrectAnswers) {
    const incorrectAnswers = await generateMultipleIncorrectAnswers(question, correctAnswer, numIncorrectAnswers);
    let res = [];
    for (let i=0; i<numIncorrectAnswers; i++) {
        const ans = incorrectAnswers[i];
        const exp = await generateIncorrectAnswerExplanation(question, correctAnswer, ans);
        res.push({
            incorrectAnswer: ans,
            explanation: exp
        })
    }
    return res
}

export {
    generateCorrectAnswer, 
    generateCorrectAnswerExplanation, 
    generateIncorrectAnswer, 
    generateMultipleIncorrectAnswers,
    generateIncorrectAnswerExplanation,
    generateIncorrectAnswerSet
}