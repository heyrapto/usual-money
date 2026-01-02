
import { IconType } from "react-icons";
import { FaRocket, FaShieldAlt, FaLayerGroup } from "react-icons/fa";

export interface FeatureCard {
    icon: string;
    title: string;
    description: string;
}

export interface Partner {
    name: string;
    logo: string;
}

export interface ProductTab {
    id: string;
    label: string;
    status?: "active" | "coming soon";
}

export interface ProductStateContent {
    mainCard: {
        title: string;
        description: string;
        stats: { label: string; value: string }[];
        image: string;
    };
    greenCard: {
        title: string;
        description: string;
        backgroundImage?: string;
    };
    features: FeatureCard[];
}

export interface RevenueContent {
    title: string;
    description: string;
    stats: { label: string; value: string; position: "left" | "right" }[];
    centralImage: string;
}

export const PRODUCTS_CONTENT = {
    header: {
        tag: "AI Simplified",
        title: "Unlock autonomous trading \nwith intelligent on-chain \nexecution",
        description: "Echo AI simplifies everything: select a strategy, choose size, and let the system manage entries, exits, risk exposure, and ongoing adjustments in real time."
    },
    tabs: [
        { id: "stablecoin", label: "Strategies", status: "active" },
        { id: "yield", label: "AI Vaults", status: "coming soon" },
        { id: "rates", label: "Perpetuals", status: "coming soon" },
        { id: "terms", label: "Infrastructure", status: "coming soon" }
    ] as ProductTab[],

    // Strategy State
    usdo: {
        mainCard: {
            title: "Autonomous On-Chain Trading",
            description: "AI-driven trading strategies that deploy directly on decentralized markets, adapting to volatility, liquidity, and on-chain behavior without manual intervention.",
            stats: [
                { label: "Active Strategies", value: "24+" },
                { label: "Execution Mode", value: "Fully On-Chain" }
            ],
            image: "/images/products/usd/1.avif"
        },
        greenCard: {
            title: "One-Click Strategy Deployment",
            description: "Select a strategy, define size, and let Echo AI handle execution, risk management, and continuous optimization automatically."
        },
        features: [
            {
                icon: "/images/products/usdo/1.svg",
                title: "Adaptive Strategy Engine",
                description: "Strategies continuously learn from market volatility, liquidity depth, and trader behavior to optimize execution in real time."
            },
            {
                icon: "/images/products/usdo/2.svg",
                title: "Smart Money Mirroring",
                description: "Track and replicate whale wallets, high-performance traders, and winning on-chain flows across decentralized markets."
            },
            {
                icon: "/images/products/usdo/3.svg",
                title: "Risk-Aware Automation",
                description: "Built-in controls dynamically manage exposure, position sizing, and exits to protect capital during adverse conditions."
            }
        ]
    } as ProductStateContent,

    // AI Vaults State
    busdo: {
        mainCard: {
            title: "AI-Managed Trading Vaults",
            description: "Diversified vaults powered by multiple AI strategies, automatically reallocating capital across opportunities to balance risk and performance.",
            stats: [
                { label: "Supported Markets", value: "15+" },
                { label: "Optimization Cycle", value: "Continuous" }
            ],
            image: "/images/products/usd/2.avif"
        },
        greenCard: {
            title: "Always Optimized",
            description: "Capital is dynamically routed between strategies and markets based on performance, volatility, and liquidity conditions.",
            backgroundImage: "/images/products/boosted-bg.avif"
        },
        features: [
            {
                icon: "/images/products/usd/1.avif",
                title: "Multi-Strategy Exposure",
                description: "Access momentum, arbitrage, funding-rate neutral, and volatility-adaptive strategies within a single automated vault."
            },
            {
                icon: "/images/products/usd/2.avif",
                title: "Continuous Rebalancing",
                description: "Vault allocations adjust automatically using AI signals to maintain optimal risk-adjusted returns."
            },
            {
                icon: "/images/products/usd/3.avif",
                title: "Non-Custodial Execution",
                description: "Funds remain fully on-chain and under user control, ensuring transparency, security, and permissionless access."
            }
        ]
    } as ProductStateContent,

    partners: {
        title: "Powered by DeFi.\nIntegrated Across Ecosystems.",
        description: "Built with leading infrastructure, execution layers, and oracle providers to ensure reliable automation and real-time intelligence.",
        list: [
            { name: "USYC", logo: "/images/products/usyc.svg" },
            { name: "MO", logo: "/images/products/mo.svg" },
            { name: "USDtb", logo: "/images/products/usdbt.svg" },
            { name: "ONDO", logo: "/images/products/ondo.svg" }
        ] as Partner[],
        bottomImage: "/images/products/bottom-handle-image.avif"
    },

    // Intelligence Section
    revenue: {
        title: "The Intelligence Layer\nBehind Echo AI",
        description: "Echo AI aligns users, strategies, and protocols through autonomous execution, performance analytics, and on-chain transparency.",
        stats: [
            { label: "Strategy Uptime", value: "99.9%", position: "left" },
            { label: "Markets Monitored", value: "1,000+", position: "left" },
            { label: "On-Chain Execution", value: "Native", position: "right" },
            { label: "Transparency", value: "100%", position: "right" }
        ],
        centralImage: "/images/products/usd/2.avif"
    }
};
