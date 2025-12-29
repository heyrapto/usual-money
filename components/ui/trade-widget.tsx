import { TRADE_CONTENT } from "@/constants/trade";
import Image from "next/image";
import { BsArrowDown } from "react-icons/bs";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { LuArrowDownUp, LuSettings2 } from "react-icons/lu";
import { MdVerifiedUser } from "react-icons/md";

export default function TradeWidget() {
  return (
    <div className="w-full flex justify-center pb-32 pt-10 -mb-80 relative z-20 pointer-events-none">
      <div className="flex flex-col lg:flex-row gap-6 max-w-[1200px] w-full px-4 items-stretch justify-center pointer-events-auto">

        {/* Left Card: Swap */}
        <div className="w-full lg:w-1/2 bg-white rounded-3xl p-6 shadow-xl border border-gray-100 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-1 cursor-pointer hover:opacity-70 transition-opacity">
              <span className="font-bold text-xl">Swap</span>
              <FiChevronDown />
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <LuSettings2 size={20} />
            </button>
          </div>

          {/* From Token */}
          <div className="bg-gray-50 rounded-2xl p-4 mb-2 flex flex-col justify-center">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2 bg-white rounded-full px-3 py-2 shadow-sm border border-gray-100">
                <div className="relative w-6 h-6 rounded-full overflow-hidden">
                  <div className="bg-blue-500 w-full h-full flex items-center justify-center text-white text-[10px]">$</div>
                </div>
                <span className="font-bold text-sm">{TRADE_CONTENT.swap.from.symbol}</span>
                {/* Extra icons/badges */}
                <div className="flex gap-1 ml-2">
                  <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center text-[10px] text-green-600">T</div>
                  <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center text-[10px] text-blue-600">T</div>
                </div>
              </div>
              <input
                type="text"
                value={TRADE_CONTENT.swap.from.amount}
                readOnly
                className="bg-transparent text-right font-bold text-2xl outline-none w-[150px]"
              />
            </div>
            <div className="flex justify-between text-sm text-gray-400 font-medium">
              <span>Balance: {TRADE_CONTENT.swap.from.balance} <span className="text-black font-bold cursor-pointer hover:underline">Max</span></span>
              <span>{TRADE_CONTENT.swap.from.usdValue}</span>
            </div>
          </div>

          {/* Arrow Divider */}
          <div className="relative h-4 flex justify-center items-center z-10 -my-3">
            <div className="bg-white rounded-lg p-1.5 border border-gray-100 shadow-sm text-gray-400">
              <BsArrowDown size={14} />
            </div>
          </div>

          {/* To Token */}
          <div className="bg-gray-50 rounded-2xl p-4 mt-2 flex flex-col justify-center">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2 bg-white rounded-full px-3 py-2 shadow-sm border border-gray-100">
                <div className="relative w-6 h-6 rounded-full overflow-hidden">
                  <Image src={TRADE_CONTENT.swap.to.icon} alt="USDO" fill className="object-cover" />
                </div>
                <span className="font-bold text-sm">{TRADE_CONTENT.swap.to.symbol}</span>
              </div>
              <input
                type="text"
                value={TRADE_CONTENT.swap.to.amount}
                readOnly
                className="bg-transparent text-right font-bold text-2xl outline-none w-[150px]"
              />
            </div>
            <div className="flex justify-between text-sm text-gray-400 font-medium">
              <span>Balance: {TRADE_CONTENT.swap.to.balance}</span>
              <span>{TRADE_CONTENT.swap.to.usdValue}</span>
            </div>
          </div>

          {/* Footer Info */}
          <div className="bg-gray-50 rounded-2xl p-4 mt-2 flex justify-between text-xs font-medium px-2 text-gray-400">
            <div className="flex items-center gap-1">
              <span className="text-black">Min. received</span> 245,450.89 USDO
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600">
              {TRADE_CONTENT.swap.exchangeRate} <LuArrowDownUp size={10} className="rotate-45" />
            </div>
          </div>
        </div>

        {/* Right Card: Approve */}
        <div className="w-full lg:w-1/2 bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col justify-between items-center relative overflow-visible">

          {/* Illustration */}
          <div className="absolute -top-20 right-0 w-[80%] h-[200px] mt-4 mb-8">
            <Image
              src={TRADE_CONTENT.approve.image}
              alt="Approval Illustration"
              fill
              className="object-contain"
            />
          </div>

          {/* Steps */}
          <div className="w-full mt-auto">
            <div className="flex justify-center items-center w-full mb-8 text-sm font-medium gap-8">
              <div className="flex flex-col items-center gap-3">
                <span className="text-black font-bold">Approve token</span>
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-black">
                  <MdVerifiedUser size={16} />
                </div>
              </div>

              <div className="w-32 h-[1px] bg-gray-200 border-t border-dashed border-gray-300 relative top-[-10px]"></div>

              <div className="flex flex-col items-center gap-3">
                <span className="text-gray-300">Confirm transaction</span>
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-300">
                  <LuArrowDownUp size={16} />
                </div>
              </div>
            </div>

            {/* Fee Info */}
            <div className="flex justify-between text-xs text-gray-400 mb-2">
              <span>Network fee</span>
              <span className="text-black font-medium text-right">{TRADE_CONTENT.approve.fee}</span>
            </div>
            <div className="flex justify-between text-xs text-gray-400 mb-6">
              <span>Approved Amount</span>
              <span className="text-black font-medium text-right">{TRADE_CONTENT.approve.amount}</span>
            </div>

            {/* Button */}
            <div className="relative mt-10">
              {/* "Try me" arrow text */}
              <div className="absolute -top-10 left-0 hidden md:flex items-end gap-2 text-xs text-gray-400 italic font-handwriting transform -rotate-12 translate-x-4">
                <span>Try me</span>
                <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-90 translate-y-4">
                  <path d="M10 10 C 20 20, 40 20, 40 40" stroke="currentColor" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead)" />
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                    </marker>
                  </defs>
                </svg>
              </div>

              <button className="w-fit bg-[#1A1A1A] text-white text-sm py-4 rounded-full mx-auto px-3 flex items-center justify-center gap-2 hover:bg-black transition-colors group">
                One-time Approval <FiChevronUp className="group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}