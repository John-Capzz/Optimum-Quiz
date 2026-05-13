const questions = [
  {
    id: 1,
    category: "Tech",
    question: "Which is associated with RLNC?",
    options: ["Governance voting", "Smart contract execution", "Privacy", "Flexible recovery"],
    answer: 3,
    explanation: "RLNC (Random Linear Network Coding) is known for flexible recovery — nodes can reconstruct data from any combination of encoded packets, even with packet loss."
  },
  {
    id: 2,
    category: "Tech",
    question: "Which problem can slow propagation cause?",
    options: ["Rug pull", "Increased token supply", "Lower validator count", "Delayed synchronization"],
    answer: 3,
    explanation: "Slow propagation causes delayed synchronization — nodes take longer to agree on the latest state, hurting performance and validator competitiveness."
  },
  {
    id: 3,
    category: "Tech",
    question: "Which is NOT true about RLNC?",
    options: ["It uses encoded packet combinations", "It improves resilience during packet loss", "It requires packets to arrive in order", "It reduces retransmissions"],
    answer: 2,
    explanation: "RLNC does NOT require packets to arrive in order — that's one of its key advantages. Any combination of encoded packets can reconstruct the original data."
  },
  {
    id: 4,
    category: "Tech",
    question: "Which is NOT true about Optimum?",
    options: ["It focuses on networking efficiency", "It improves data propagation", "It replaces blockchain consensus", "It supports real-time infrastructure"],
    answer: 2,
    explanation: "Optimum does NOT replace blockchain consensus — it works alongside existing consensus mechanisms with zero protocol changes required."
  },
  {
    id: 5,
    category: "Tech",
    question: "Which is NOT true about DeRAM?",
    options: ["It replaces smart contracts entirely", "It enables real-time data access", "It acts as a decentralized memory layer", "It supports distributed systems"],
    answer: 0,
    explanation: "DeRAM does NOT replace smart contracts — it is a decentralized memory layer that complements existing blockchain infrastructure, not a replacement for smart contracts."
  },
  {
    id: 6,
    category: "Tech",
    question: "Which is NOT true about Flexnodes?",
    options: ["They help relay encoded data", "They are responsible for token minting", "They participate in network propagation", "They support RLNC-based transmission"],
    answer: 1,
    explanation: "Flexnodes are NOT responsible for token minting — they encode, decode and relay RLNC-coded gossip frames across the Optimum network."
  },
  {
    id: 7,
    category: "Tech",
    question: "Low latency helps validators by:",
    options: ["Reducing stake", "Receiving data faster", "Increasing supply", "Reducing nodes"],
    answer: 1,
    explanation: "Low latency means validators receive blocks and transactions faster — giving them a competitive edge to capture rewards and act on opportunities first."
  },
  {
    id: 8,
    category: "Tech",
    question: "Which is NOT part of Optimum's focus?",
    options: ["Data movement", "Networking scalability", "Real-time coordination", "Token inflation mechanics"],
    answer: 3,
    explanation: "Optimum focuses on data movement, networking scalability, and real-time coordination — token inflation mechanics are not part of its core mission."
  },
  {
    id: 9,
    category: "Community",
    question: "You can get the refined role without having the observer role",
    options: ["False", "True", "Probably by chance", "If the Mod likes you"],
    answer: 1,
    explanation: "True — you can get the refined role directly without needing the observer role first."
  },
  {
    id: 10,
    category: "Tech",
    question: "Which of these is MOST directly related to Optimum's core networking architecture?",
    options: ["Flexnodes", "DeRAM", "RLNC", "mump2p"],
    answer: 3,
    explanation: "mump2p is Optimum's core networking protocol — it is the RLNC-powered P2P data transmission layer that delivers 6–20x faster block propagation than Gossipsub."
  }
];

module.exports = questions;