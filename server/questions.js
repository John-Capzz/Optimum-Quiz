const questions = [
  // ── TECH ──────────────────────────────────────────────────────────────────
  {
    id: 1, category: "Tech",
    question: "What does RLNC stand for?",
    options: ["Random Linear Network Coding", "Rapid Latency Node Controller", "Recursive Layer Network Compression", "Reliable Link Node Connector"],
    answer: 0,
    explanation: "RLNC = Random Linear Network Coding — the core technology powering Optimum, invented at MIT in 2003."
  },
  {
    id: 2, category: "Tech",
    question: "How much faster is mump2p's block delivery compared to Gossipsub on the Hoodi testnet?",
    options: ["2–3x faster", "4–5x faster", "6–20x faster", "50x faster"],
    answer: 2,
    explanation: "mump2p achieves 6–20x faster block and blob delivery compared to Gossipsub on the Hoodi testnet."
  },
  {
    id: 3, category: "Tech",
    question: "What is Optimum's approximate bandwidth reduction compared to Gossipsub?",
    options: ["20–30%", "50–60%", "70–80%", "~90–95%"],
    answer: 3,
    explanation: "Optimum achieves approximately 90–95% bandwidth reduction versus Gossipsub."
  },
  {
    id: 4, category: "Tech",
    question: "What is the average block propagation time mump2p achieved on Ethereum's Hoodi testnet?",
    options: ["~500ms", "~300ms", "~150ms", "~50ms"],
    answer: 2,
    explanation: "mump2p delivered ~150ms average block propagation on Hoodi — a minimum 6x improvement over existing solutions."
  },
  {
    id: 5, category: "Tech",
    question: "What is a 'flexnode' in Optimum's network?",
    options: ["A smart contract validator", "An operator-run node that participates in coded gossip and serves memory requests", "A centralised relay server", "A type of Ethereum consensus client"],
    answer: 1,
    explanation: "Flexnodes are operator-run nodes that encode, decode, forward RLNC-coded gossip frames, and serve DeRAM/DeROM requests."
  },
  {
    id: 6, category: "Tech",
    question: "What does mump2p run as alongside your existing Ethereum client?",
    options: ["A plugin", "A sidecar", "A middleware", "A fork"],
    answer: 1,
    explanation: "mump2p runs as a sidecar alongside your existing Ethereum client — no consensus modifications needed."
  },
  {
    id: 7, category: "Tech",
    question: "What does DeRAM stand for?",
    options: ["Decentralized Random Access Memory", "Distributed Relay Access Mechanism", "Dynamic Redundancy Allocation Module", "Decentralized Routing Algorithm for Mesh"],
    answer: 0,
    explanation: "DeRAM = Decentralized Random Access Memory — Optimum's read-write memory layer distributed across nodes."
  },
  {
    id: 8, category: "Tech",
    question: "In RLNC, what is a 'shard'?",
    options: ["A blockchain partition", "A coded fragment of a message produced by RLNC", "A validator key segment", "A network region"],
    answer: 1,
    explanation: "A shard is a coded fragment of a message produced by RLNC — messages can be reconstructed even if some shards are lost."
  },
  {
    id: 9, category: "Tech",
    question: "Does integrating Optimum require changes to a blockchain's consensus rules?",
    options: ["Yes, major protocol changes are needed", "Only minor consensus tweaks", "No — it's chain-agnostic and requires no consensus changes", "Only for Ethereum"],
    answer: 2,
    explanation: "Optimum is chain-agnostic and requires zero consensus changes — chains keep their full stack intact."
  },
  {
    id: 10, category: "Tech",
    question: "What existing pub/sub protocol is mump2p compatible with?",
    options: ["WebSockets", "GossipSub / libp2p", "MQTT", "ZeroMQ"],
    answer: 1,
    explanation: "mump2p is RLNC-accelerated and libp2p/Gossipsub-compatible for resilient propagation."
  },
  {
    id: 11, category: "Tech",
    question: "What is the 'threshold' parameter in Optimum's mump2p system?",
    options: ["The maximum number of nodes in the mesh", "The fraction of shards required to decode a message", "The minimum block size", "The latency cutoff for dropped packets"],
    answer: 1,
    explanation: "Threshold = the fraction of shards needed to decode a message. A threshold of 0.7 means only 70% of shards are needed."
  },
  {
    id: 12, category: "Tech",
    question: "What interface does the Optimum Proxy use for client communication?",
    options: ["REST only", "WebSocket only", "gRPC API", "GraphQL"],
    answer: 2,
    explanation: "Optimum provides a gRPC API for client communication — either via proxy or direct P2P node."
  },
  {
    id: 13, category: "Tech",
    question: "Optimum describes itself as solving what fundamental blockchain problem?",
    options: ["The oracle problem", "Data movement — the ceiling that limits everything above it", "The MEV crisis", "Smart contract execution speed"],
    answer: 1,
    explanation: "Optimum's core thesis: 'Data movement sets the ceiling. Optimum raises it.' — fixing propagation at the network foundation."
  },
  {
    id: 14, category: "Tech",
    question: "What is 'Gossipsub' in the context of Optimum?",
    options: ["An Optimum product feature", "The existing P2P messaging protocol that mump2p improves upon", "A blockchain consensus algorithm", "A type of validator key management"],
    answer: 1,
    explanation: "Gossipsub is the widely-used existing P2P gossip protocol — mump2p is RLNC-accelerated and Gossipsub-compatible but dramatically faster."
  },

  // ── TEAM ──────────────────────────────────────────────────────────────────
  {
    id: 15, category: "Team",
    question: "Who is the CEO and co-founder of Optimum?",
    options: ["Kent Lin", "Dr. Kishori Konwar", "Prof. Muriel Médard", "Sajida Zouarhi"],
    answer: 2,
    explanation: "Prof. Muriel Médard is Optimum's CEO and co-inventor of RLNC, also the NEC Chair Professor at MIT EECS."
  },
  {
    id: 16, category: "Team",
    question: "What prestigious position does Prof. Muriel Médard hold at MIT?",
    options: ["Dean of Engineering", "NEC Chair at MIT EECS", "Director of the Media Lab", "Head of the CS Department"],
    answer: 1,
    explanation: "Prof. Médard holds the NEC Chair at MIT EECS and is ranked #1 globally in Network Coding research."
  },
  {
    id: 17, category: "Team",
    question: "What role does Kent Lin lead at Optimum?",
    options: ["Chief Technology Officer", "Lead Researcher", "Business development, tokenomics, and fundraising", "Head of Engineering"],
    answer: 2,
    explanation: "Kent Lin drives Optimum's adoption by overseeing business development, tokenomics, and fundraising."
  },
  {
    id: 18, category: "Team",
    question: "Before Optimum, Kent Lin was a Partner at which firm?",
    options: ["a16z", "Sequoia", "GSRV ($4B VC)", "Polychain"],
    answer: 2,
    explanation: "Kent Lin was a former Partner at GSRV, a $4B venture capital fund."
  },
  {
    id: 19, category: "Team",
    question: "Which co-founder was previously a Senior Engineer at Meta and an Ex-Quant at Goldman Sachs?",
    options: ["Kent Lin", "Prof. Muriel Médard", "Dr. Kishori Konwar", "Sajida Zouarhi"],
    answer: 2,
    explanation: "Dr. Kishori Konwar is a former Senior Engineer/Scientist at Meta and Ex-Quant at Goldman Sachs."
  },
  {
    id: 20, category: "Team",
    question: "What community did Kent Lin found, connecting 200+ alumni in Web3?",
    options: ["Harvard Blockchain Club", "McKinsey Crypto DAO", "MIT DeFi Guild", "GSRV Alumni Network"],
    answer: 1,
    explanation: "Kent Lin founded the McKinsey Crypto DAO — a community of 200+ McKinsey alumni active in Web3."
  },
  {
    id: 21, category: "Team",
    question: "What role did Kent Lin hold at Harvard Blockchain Club?",
    options: ["Member", "Treasurer", "President", "Advisor"],
    answer: 2,
    explanation: "Kent Lin served as President of the Harvard Blockchain Club."
  },
  {
    id: 22, category: "Team",
    question: "Who is Optimum's CPO (Chief Product Officer)?",
    options: ["Nicolas Nicolaou", "Sajida Zouarhi", "Swarnabha Sinha", "Aayush Rajasekaran"],
    answer: 1,
    explanation: "Sajida Zouarhi is Optimum's CPO — she presented at EthCC[9] on latency and market structure."
  },
  {
    id: 23, category: "Team",
    question: "Which famous MIT professor advising Optimum published the first mathematical proof of Byzantine Fault Tolerance?",
    options: ["Prof. Sriram Viswanath", "Prof. Nancy Lynch", "Prof. Tim Berners-Lee", "Prof. Silvio Micali"],
    answer: 1,
    explanation: "Prof. Nancy Lynch published the first mathematical proof of BFT in 1985, and the DLS algorithm that Tendermint and Ethereum's consensus descend from."
  },

  // ── MILESTONES ────────────────────────────────────────────────────────────
  {
    id: 24, category: "Milestones",
    question: "When was RLNC invented at MIT?",
    options: ["1995", "2000", "2003", "2008"],
    answer: 2,
    explanation: "RLNC was invented by Prof. Médard and colleagues at MIT in 2003."
  },
  {
    id: 25, category: "Milestones",
    question: "When was network coding first invented as a field?",
    options: ["1995", "2000", "2003", "2006"],
    answer: 1,
    explanation: "Network coding was invented in 2000 by Ahlswede, Cai, Li, and Yeung — proving nodes can combine data rather than just forward it."
  },
  {
    id: 26, category: "Milestones",
    question: "When was Optimum founded?",
    options: ["2022", "2023", "2024", "2025"],
    answer: 2,
    explanation: "Optimum was founded in 2024 by Prof. Médard, Dr. Kishori Konwar, and Kent Lin."
  },
  {
    id: 27, category: "Milestones",
    question: "How much did Optimum raise in its seed round, and who led it?",
    options: ["$5M led by a16z", "$11M led by 1kx", "$20M led by Polychain", "$8M led by Sequoia"],
    answer: 1,
    explanation: "Optimum raised $11M in a seed round led by 1kx, announced at Consensus Toronto in April 2025."
  },
  {
    id: 28, category: "Milestones",
    question: "At which event was Optimum's $11M seed round announced?",
    options: ["ETHDenver", "Devcon", "Consensus Toronto 2025", "EthCC[9]"],
    answer: 2,
    explanation: "The seed round was announced at Consensus Toronto 2025."
  },
  {
    id: 29, category: "Milestones",
    question: "In what year did Prof. Médard become a member of the US National Academy of Engineering?",
    options: ["2016", "2018", "2020", "2022"],
    answer: 2,
    explanation: "Prof. Médard was elected to the US National Academy of Engineering in 2020 — the highest professional honour for US engineers."
  },
  {
    id: 30, category: "Milestones",
    question: "What prestigious medal did Prof. Médard receive in 2026?",
    options: ["Turing Award", "IEEE Richard W. Hamming Medal", "Fields Medal", "Marconi Prize"],
    answer: 1,
    explanation: "Prof. Médard received the 2026 IEEE Richard W. Hamming Medal for contributions to coding for reliable communications."
  },
  {
    id: 31, category: "Milestones",
    question: "How many testnet validator partners and ETH stake does Optimum's private testnet have?",
    options: ["10 partners, $5B ETH", "25 partners, $10B ETH", "40 partners, $24B+ ETH", "100 partners, $50B ETH"],
    answer: 2,
    explanation: "Optimum's private testnet launched with 40 validator partners and $24B+ ETH stake connected."
  },
  {
    id: 32, category: "Milestones",
    question: "Which blog post was authored by Kent Lin about blockchain scaling?",
    options: ["Why Solana Needs Faster Data Propagation", "Decentralize To Scale: Infrastructure for an Onchain Digital Economy", "Battle of the Codes: RLNC vs Reed-Solomon", "Behind the Metrics: mump2p's 6x Latency Win"],
    answer: 1,
    explanation: "'Decentralize To Scale' was written by Kent Lin — covering how Optimum tackles the blockchain scalability challenge."
  },

  // ── COMMUNITY ─────────────────────────────────────────────────────────────
  {
    id: 33, category: "Community",
    question: "What is Optimum's Twitter/X handle?",
    options: ["@optimum_xyz", "@get_optimum", "@optimumnet", "@rlnc_protocol"],
    answer: 1,
    explanation: "Optimum's X handle is @get_optimum"
  },
  {
    id: 34, category: "Community",
    question: "What is Optimum's website domain?",
    options: ["optimum.io", "optimum.network", "getoptimum.xyz", "optimum.xyz"],
    answer: 2,
    explanation: "Optimum's website is getoptimum.xyz"
  },
  {
    id: 35, category: "Community",
    question: "Which of these is a confirmed testnet validator partner of Optimum?",
    options: ["Coinbase Cloud", "Binance Node", "Everstake", "Kraken Staking"],
    answer: 2,
    explanation: "Everstake is a confirmed Optimum testnet validator partner alongside Kiln, Luganodes, and others."
  }
];

module.exports = questions;
