
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
        { id: "stablecoin", label: "Stablecoin", status: "active" },
        { id: "yield", label: "Yield Optimizer", status: "coming soon" },
        { id: "rates", label: "Fixed Rates", status: "coming soon" },
        { id: "terms", label: "Fixed Terms", status: "coming soon" }
    ] as ProductTab[],

    // USDO State
    usdo: {
        mainCard: {
            title: "USDO, The Ultimate Fiat Stablecoin",
            description: "The world's first RWA stablecoin that aggregates various US Treasury Bill tokens, providing a secure & permissionless bankruptcy-remote solution unlinked to traditional bank deposits.",
            stats: [
                { label: "TVL", value: "$543.79M" },
                { label: "% Collateralization", value: "100.88%" }
            ],
            image: "/images/products/usd/1.avif"
        },
        greenCard: {
            title: "Supercharge USDO",
            description: "Toggle to discover bUSDO, a liquid staking version of USDO, acting like a savings account for Real-World Assets with a 4-year lock-up."
        },
        features: [
            {
                icon: "/images/products/usdo/1.svg",
                title: "Efficient & Composable",
                description: "Backed 1:1, USDO is transferable, permissionless, and seamlessly integrates into DeFi and CeFi for maximum efficiency."
            },
            {
                icon: "/images/products/usdo/2.svg",
                title: "Fully Collateralized",
                description: "USDO is fully collateralized by diversified short-term T-Bills, eliminating the fractional reserve risks of traditional fiat-backed stablecoins."
            },
            {
                icon: "/images/products/usdo/3.svg",
                title: "Safe and Insured",
                description: "Although backed by solid, liquid assets, USDO is also protected by an insurance fund, funded by protocol revenue, to shield holders in a systemic crisis."
            }
        ]
    } as ProductStateContent,

    // bUSDO (USD0++) State
    busdo: {
        mainCard: {
            title: "bUSDO, The LST for Real World Assets",
            description: "bUSDO is the liquid staking version of USDO, acting as a savings account for RWA with a 4-year lock-up. It remains transferable while offering $USUAL rewards to drive USDO adoption.",
            stats: [
                { label: "4-Year Cash Flow", value: "$104.40M" },
                { label: "APY", value: "3.32%" }
            ],
            image: "/images/products/usd/2.avif"
        },
        greenCard: {
            title: "Boosted Yield Activated!",
            description: "Toggle to learn more on USDO, an RWA stablecoin aggregating US Treasury Bill tokens, unlinked to traditional bank deposits.",
            backgroundImage: "/images/products/boosted-bg.avif"
        },
        features: [
            {
                icon: "/images/products/usd/1.avif",
                title: "Yield & Growth Combined",
                description: "Usual goes beyond traditional stablecoins by aligning TVL providers with both yield and growth. Unlike Tether, Usual lets you benefit from the protocol's expansion."
            },
            {
                icon: "/images/products/usd/2.avif",
                title: "Secondary Market Liquidity",
                description: "bUSDO is fully liquid and transferable, allowing holders to exit their positions at any time by swapping bUSDO for other assets."
            },
            {
                icon: "/images/products/usd/3.avif",
                title: "1:1 Early Unstaking",
                description: "bUSDO maintains stable Protocol revenue and long-term value for $USUAL. Stay flexible and exit 1:1 by using rt-bUSDO (redemption token)."
            }
        ]
    } as ProductStateContent,

    partners: {
        title: "Built on Stability.\nSecured by AA-Grade Assets.",
        description: "Backed by high-quality, revenue-generating assets, ensuring stability, security, and sustainable yield.",
        list: [
            { name: "USYC", logo: "/images/products/usyc.svg" },
            { name: "MO", logo: "/images/products/mo.svg" },
            { name: "USDtb", logo: "/images/products/usdbt.svg" },
            { name: "ONDO", logo: "/images/products/ondo.svg" }
        ] as Partner[],
        bottomImage: "/images/products/bottom-handle-image.avif"
    },

    // Revenue Section (below partners)
    revenue: {
        title: "The Revenue-Based Token\nat the Heart of Usual",
        description: "USUAL rewards adoption and usage, aligning incentives with contributors to fuel protocol growth. Its distribution introduces new DeFi primitives, ensuring rapid ecosystem scaling and sustainable decentralization.",
        stats: [
            { label: "USUALx APY", value: "99%", position: "left" },
            { label: "4-Year Cash Flow", value: "$104.42M", position: "left" },
            { label: "Staked Supply", value: "62.44%", position: "right" },
            { label: "Burned Supply", value: "17.31%", position: "right" }
        ],
        centralImage: "/images/products/usd/2.avif" // Using this as it looks similar to the graphic in screenshot
    }
};
