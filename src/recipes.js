export const recipes = [
    {
        id: 'basic-chatbot',
        name: 'Basic Chatbot',
        desc: 'Simple conversational AI. Good for general questions, drafting emails, and brainstorming.',
        elements: ['Pr', 'Lg'],
        explanation: "This is the minimum viable AI. You only need a **Prompt (Pr)** to capture what the user wants, and a **Large Language Model (Lg)** to generate the answer based on its training data. No external tools or memory needed."
    },
    {
        id: 'rag-system',
        name: 'RAG Knowledge Base',
        desc: 'Connects AI to your data. Good for HR bots, policy search, and documentation coding assistants.',
        elements: ['Pr', 'Em', 'Vx', 'Rg', 'Lg'],
        explanation: "LLMs don't know your private data. To fix this, we use **Embeddings (Em)** to turn your documents into math, store them in a **Vector DB (Vx)**, and use **RAG (Rg)** to fetch the right pages before the **LLM (Lg)** answers. The **Prompt (Pr)** guides the style."
    },
    {
        id: 'agentic-workflow',
        name: 'Agentic Workflow',
        desc: 'AI that can "do" things. Good for booking flights, customer support actions, and multi-step research.',
        elements: ['Pr', 'Fc', 'Ag', 'Lg', 'Fw'],
        explanation: "To take action, we need **Agents (Ag)** that can think in loops. They specifically use **Function Calling (Fc)** to touch external APIs (like a calendar or CRM). A **Framework (Fw)** like LangChain connects these pieces, while the **LLM (Lg)** provides the reasoning brain."
    },
    {
        id: 'safe-enterprise',
        name: 'Safe Enterprise App',
        desc: 'Production-ready system with safety checks. Essential for public-facing or regulated industries.',
        elements: ['Pr', 'Em', 'Vx', 'Rg', 'Lg', 'Gr', 'Rt'],
        explanation: "Going live requires safety. We add **Guardrails (Gr)** to filter bad inputs/outputs and pre-test with **Red Teaming (Rt)**. This is layered on top of a standard RAG stack (**Em, Vx, Rg**) to ensure the **LLM (Lg)** is helpful but harmless."
    },
    {
        id: 'multi-agent-swarm',
        name: 'Multi-Agent Swarm',
        desc: 'Complex problem solving with specialized roles. Good for software development teams or complex research.',
        elements: ['Pr', 'Ma', 'Ag', 'Lg', 'Fw', 'Sy'],
        explanation: "One brain isn't enough. We use a **Multi-Agent (Ma)** system where different **Agents (Ag)** have different roles (e.g., 'Coder', 'Reviewer'). They generate **Synthetic Data (Sy)** to test each other, all orchestrated by a **Framework (Fw)**."
    }
];
