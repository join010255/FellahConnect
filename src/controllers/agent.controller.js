import AiAgent from "../services/agent.service.js";


class ControlesAgent{
    chatMess = async(req, res) => {
        const {message} = req.body;
        const resultAiMessage = AiAgent.chat(message);
        if(!resultAiMessage) return res.status(500).json({message: "ai agent error"})
        res.status(200).json({ai_message : resultAiMessage})   
    }
}