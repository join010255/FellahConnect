import OpenAI from "openai";
import dotenv from "dotenv";
import { tools } from "../tools/agent.tools.js"
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
                    ],
                    tools : tools
                    
            })

            const result = resp.choices[0].message;

            if(result.tool_calls){
                for(let line of result.tool_calls){
                    let argement = JSON.parse(line.function.arguments)
                    const ress = toolFunctions[line.function.name](argement);
                    return ress;
                }
            }
            return result.content
        }catch(error){
            console.log(error);
            return false;
        }
    }
}

export default new AiAgentServes();