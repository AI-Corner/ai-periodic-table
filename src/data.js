export const groups = [
  { id: 1, name: 'Reactive', color: '#ff6b6b', desc: 'Evolves from control to autonomy', kidDesc: 'The Doers. These parts start by just listening to you, but grow up to do things all by themselves!' },
  { id: 2, name: 'Retrieval', color: '#4ecdc4', desc: 'Memory scales from Embeddings to Vector DBs', kidDesc: 'The Memory Keepers. They help the AI remember facts, stories, and where it put its toys.' },
  { id: 3, name: 'Orchestration', color: '#ffe66d', desc: 'Emerges in compositions (RAG/Frameworks)', kidDesc: 'The Conductors. They organize all the other parts to make sure they play music together beautifully.' },
  { id: 4, name: 'Validation', color: '#a66dff', desc: 'Safety from Guardrails to Red Teaming', kidDesc: 'The Safety Guards. They check everything to make sure the AI is being nice, safe, and telling the truth.' },
  { id: 5, name: 'Models', color: '#45b7d1', desc: 'Stable cores from LLMs to Multimodal', kidDesc: 'The Big Brains. These are the powerful thinkers that read, write, and draw for you.' },
];

export const rows = [
  { id: 1, name: 'Primitives', desc: 'Atomic building blocks', kidDesc: 'The Basic LEGO Bricks. You need these to start building anything!' },
  { id: 2, name: 'Compositions', desc: 'Combinations', kidDesc: 'Mixing the Bricks. This is when you put blocks together to make cool shapes.' },
  { id: 3, name: 'Deployment', desc: 'Production-ready', kidDesc: 'Ready to Play. Your toy is finished and strong enough to show your friends.' },
  { id: 4, name: 'Emerging', desc: 'Cutting-edge', kidDesc: 'Future Magic. These are brand new, super-powerful blocks that are just being invented!' },
];

export const elements = [
  // Row 1: Primitives
  { symbol: 'Pr', name: 'Prompts', group: 1, row: 1, atomicNumber: 1, desc: 'Instructions given to the model.' },
  {
    symbol: 'Em',
    name: 'Embeddings',
    group: 2,
    row: 1,
    atomicNumber: 2,
    desc: 'Vector representations of text.',
    audit: {
      question: 'What embedding models are used? Document model versions, dimensions, and update cadence.',
      security: 'Are embeddings protected against inversion attacks? How is semantic similarity secured?',
      compliance: "Can you demonstrate that embeddings don't leak PII or proprietary information?"
    }
  },
  // Gap
  { symbol: 'Lg', name: 'LLMs', group: 5, row: 1, atomicNumber: 5, desc: 'Large Language Models (GPT, Llama).' },

  // Row 2: Compositions
  { symbol: 'Fc', name: 'Function Calling', group: 1, row: 2, atomicNumber: 6, desc: 'Connecting LLMs to external tools.' },
  {
    symbol: 'Vx',
    name: 'Vector DBs',
    group: 2,
    row: 2,
    atomicNumber: 7,
    desc: 'Databases for storing embeddings.',
    audit: {
      question: 'Document all vector stores, their contents, access patterns, and retention policies.',
      security: 'What access controls govern vector database queries? Are similarity searches rate-limited?',
      compliance: 'How do you ensure right-to-deletion in vector stores? Can you purge specific embedded records?'
    }
  },
  { symbol: 'Rg', name: 'RAG', group: 3, row: 2, atomicNumber: 8, desc: 'Retrieval-Augmented Generation.' },
  { symbol: 'Gr', name: 'Guardrails', group: 4, row: 2, atomicNumber: 9, desc: 'Safety constraints and filters.' },
  { symbol: 'Mm', name: 'Multimodal', group: 5, row: 2, atomicNumber: 10, desc: 'Models handling text, image, audio.' },

  // Row 3: Deployment
  {
    symbol: 'Ag',
    name: 'Agents',
    group: 1,
    row: 3,
    atomicNumber: 11,
    desc: 'Autonomous goal-seeking entities.',
    audit: {
      question: 'Map all deployed agents, their goals, and autonomy levels. What triggers agent activation?',
      security: 'What prevents agents from exceeding authorized scope? How are agent loops bounded?',
      compliance: 'Are agent decisions explainable and auditable? How do you demonstrate human oversight?'
    }
  },
  { symbol: 'Ft', name: 'Fine-tuning', group: 2, row: 3, atomicNumber: 12, desc: 'Adapting models to specific tasks.' },
  { symbol: 'Fw', name: 'Frameworks', group: 3, row: 3, atomicNumber: 13, desc: 'LangChain, LlamaIndex, etc.' },
  { symbol: 'Rt', name: 'Red Teaming', group: 4, row: 3, atomicNumber: 14, desc: 'Adversarial testing for safety.' },
  { symbol: 'Sm', name: 'Small Models', group: 5, row: 3, atomicNumber: 15, desc: 'Efficient, edge-deployable models.' },

  // Row 4: Emerging
  {
    symbol: 'Ma',
    name: 'Multi-Agents',
    group: 1,
    row: 4,
    atomicNumber: 16,
    desc: 'Systems of collaborating agents.',
    audit: {
      question: 'Document inter-agent communication protocols and coordination mechanisms.',
      security: 'How do you prevent agent collusion or adversarial behavior in multi-agent systems?',
      compliance: 'Can you attribute decisions in swarm intelligence scenarios to specific agents?'
    }
  },
  { symbol: 'Sy', name: 'Synthetic Data', group: 2, row: 4, atomicNumber: 17, desc: 'AI-generated training data.' },
  // Gap Group 3
  { symbol: 'In', name: 'Interpretability', group: 4, row: 4, atomicNumber: 19, desc: 'Understanding model decisions.' },
  { symbol: 'Th', name: 'Thinking Models', group: 5, row: 4, atomicNumber: 20, desc: 'Models with internal reasoning (CoT).' },
];
