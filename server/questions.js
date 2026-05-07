const questions = [
  {
    id: 1,
    category: "Tech",
    question: "What is Optimum mainly building?",
    options: ["Crypto exchange", "Blockchain memory infrastructure", "NFT marketplace", "Blockchain reputation app"],
    answer: 1,
    explanation: "Optimum is building blockchain memory infrastructure — solving data movement at the network layer to accelerate the entire stack above it."
  },
  {
    id: 2,
    category: "Tech",
    question: "What is mump2p?",
    options: ["The official memecoin", "A consensus algorithm", "A data transmission protocol", "A wallet"],
    answer: 2,
    explanation: "mump2p is Optimum's RLNC-powered data transmission protocol — it delivers blocks and blobs 6–20x faster than Gossipsub."
  },
  {
    id: 3,
    category: "Tech",
    question: "What does DeRAM provide?",
    options: ["Mining rewards", "NFT minting", "Trading tools", "Storage and memory access"],
    answer: 3,
    explanation: "DeRAM (Decentralized Random Access Memory) provides decentralized storage and memory access across nodes in the Optimum network."
  },
  {
    id: 4,
    category: "Tech",
    question: "What is the core bottleneck Optimum is primarily solving?",
    options: ["Smart contract execution", "Data propagation across nodes", "Liquidity provision", "Wallet speed"],
    answer: 1,
    explanation: "Optimum's core thesis: data propagation across nodes is the ceiling that limits everything built on top — fix the foundation, everything else improves."
  },
  {
    id: 5,
    category: "Tech",
    question: "Why is data propagation critical in blockchain systems?",
    options: ["It affects how fast nodes sync", "It increases token supply", "It reduces gas fees directly", "It improves UI performance"],
    answer: 0,
    explanation: "Fast data propagation means nodes sync quicker, validators act on fresher data, and the whole network becomes more efficient and competitive."
  },
  {
    id: 6,
    category: "Tech",
    question: "Why is lowering latency important for validators?",
    options: ["It increases inflation", "It reduces decentralization", "It helps capture more rewards and opportunities", "It removes staking"],
    answer: 2,
    explanation: "Lower latency means validators receive and process blocks faster — giving them a competitive edge to capture block rewards and MEV opportunities."
  },
  {
    id: 7,
    category: "Tech",
    question: "Which of these best describes DeRAM?",
    options: ["A consensus mechanism", "A decentralized memory layer", "A token bridge", "A mining pool"],
    answer: 1,
    explanation: "DeRAM is Optimum's decentralized memory layer — think of it as RAM for the blockchain, distributed across nodes rather than sitting on one machine."
  },
  {
    id: 8,
    category: "Tech",
    question: "Optimum enables which type of applications better?",
    options: ["Low-speed apps", "Latency-sensitive apps", "Offline-only apps", "Static websites"],
    answer: 1,
    explanation: "By dramatically reducing propagation delays, Optimum unlocks latency-sensitive applications like high-frequency DeFi, real-time gaming, and on-chain order books."
  },
  {
    id: 9,
    category: "Tech",
    question: "Optimum integrates with blockchains how?",
    options: ["Permissionlessly", "By replacing them", "Only via partnerships", "Through centralized APIs only"],
    answer: 0,
    explanation: "Optimum is chain-agnostic and integrates permissionlessly — no approval needed, no consensus changes required, any chain can plug in."
  },
  {
    id: 10,
    category: "Tech",
    question: "What does 'permissionless integration' imply?",
    options: ["Requires approval from Optimum team", "Anyone can connect without gatekeeping", "Only enterprises can use it", "It is private"],
    answer: 1,
    explanation: "Permissionless means no gatekeeping — any developer, validator, or chain can integrate Optimum without asking anyone for access or approval."
  }
];

module.exports = questions;