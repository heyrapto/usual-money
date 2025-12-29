export const ECOSYSTEM_CONTENT = {
    headline: {
        category: "Ecosystem",
        title: "Usual Everywhere",
        description: "We partner with the best platforms and ecosystems in DeFi to unlock the full potential of USD0++ and USUAL.",
    },
    cards: [
        {
            category: "CEXs",
            name: "Binance",
            description: "Binance is the largest cryptocurrency exchange by trading volume, serving 185M+ users across 180+ countries.",
            image: "/images/ecosystem/binance-b.png",
            isPng: true,
        },
        {
            category: "CEXs",
            name: "Coinbase",
            description: "Coinbase is a secure online platform for buying, selling, transferring, and storing cryptocurrency.",
            image: "/images/ecosystem/coinbase-c.avif",
            isPng: false, // assuming avif works fine
        },
        {
            category: "Money Markets",
            name: "Morpho",
            description: "A permissionless, non-custodial protocol for earning interest and borrowing on immutable infrastructure.",
            image: "/images/ecosystem/morpho-m.avif",
            isPng: false,
        },
        {
            category: "Money Markets",
            name: "Euler",
            description: "Euler is a modular lending platform that enables users to lend, borrow and build without limits.",
            image: "/images/ecosystem/euler-e.avif",
            isPng: false,
        },
        {
            category: "DEXs",
            name: "Curve",
            description: "Creating deep on-chain liquidity using advanced bonding curves.",
            image: "/images/ecosystem/curve-c.avif",
            isPng: false,
        },
        {
            category: "Yield",
            name: "Pendle",
            description: "Pendle is a DeFi protocol focused on yield trading, allowing users to both fix or leveraged yield.",
            image: "/images/ecosystem/pendle-p.avif",
            isPng: false,
        },
        {
            category: "Bridge Oracle",
            name: "Chainlink",
            description: "Chainlink is a decentralized oracle network connecting smart contracts to off-chain data.",
            image: null, // No image in list, use icon in component
            icon: "chainlink",
            isPng: false,
        },
        {
            category: "Bridge",
            name: "LayerZero",
            description: "LayerZero is a trustless omnichain protocol enabling seamless cross-chain communication.",
            image: null, // No image in list, use icon in component
            icon: "layerzero",
            isPng: false,
        },
    ],
    stats: [
        {
            value: "+30",
            label: "Integrated Projects",
            icons: ["curve", "morpho", "euler"],
            extra: "+27",
        },
        {
            value: "4",
            label: "Supported Chains",
            icons: ["eth", "arbitrum", "base", "blast"], // check valid react-icons for these
            extra: null,
        },
        {
            value: "+80",
            label: "Yield Opportunities",
            badges: ["Vault", "Liquidity Provider"],
            extra: "+3",
        },
    ],
};
