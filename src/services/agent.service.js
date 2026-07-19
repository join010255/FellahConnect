import OpenAI from "openai";
import dotenv from "dotenv";
import systemPrompt from "../ai/systemPrompt.js"

dotenv.config();

const client = OpenAI({
    APIKey: process.env.OPEN_AI_API_KEY
})
class AiAgentServes{
    chat = async(message) => {
        try{
            const resp = await client.chat.completions.create({
                    module: "gpt-4.1-mini",
                    message: [
                        {
                            role : "system",
                            content : systemPrompt // thes is system promt
                        },
                        {
                            role:  "user",
                            content: message
                        }
                    ]
            })

            return resq.choices[0].message.content;
        }catch(error){
            console.log(error);
            return false;
        }
    }
}

export default new AiAgentServes();