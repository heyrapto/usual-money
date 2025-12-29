export const TRADE_CONTENT = {
    swap: {
        from: {
            amount: "1000.00",
            balance: "225,500.78",
            symbol: "USDC",
            icon: "/images/trade/turd.svg", // Using the icon found in assets
            usdValue: "$1000.00"
        },
        to: {
            amount: "1000.10",
            balance: "15,000.43",
            symbol: "USDO",
            icon: "/images/trade/usdo.avif",
            usdValue: "$1000.00"
        },
        exchangeRate: "1 USDC ≈ 0.9999 USDO"
    },
    approve: {
        image: "/images/trade/trade-image.png",
        steps: ["Approve token", "Confirm transaction"],
        fee: "Free",
        amount: "10 000 USDC"
    }
};
