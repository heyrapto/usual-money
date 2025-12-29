import { TRADE_CONTENT } from "@/constants/trade";
import Image from "next/image";
import { BsArrowDown, BsCheck, BsChevronDown, BsSliders } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";
import { LuArrowDownUp, LuSettings2 } from "react-icons/lu";

export default function TradeWidget() {
  return (
    <div className="w-full flex justify-center py-20 bg-[#F3F4F6]"> {/* Light gray background for contrast */}
      <div className="flex flex-col lg:flex-row gap-6 max-w-[1200px] w-full px-4 items-center lg:items-start justify-center">

        {/* Left Card: Swap */}
        <div className="w-full max-w-[500px] bg-white rounded-3xl p-4 shadow-sm">
          <div className="flex justify-between items-center mb-6 px-2">
            <div className="flex items-center gap-1 cursor-pointer">
              <span className="font-bold text-xl">Swap</span>
              <FiChevronDown />
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <LuSettings2 size={20} />
            </button>
          </div>

          {/* From Token */}
          <div className="bg-gray-50 rounded-2xl p-4 mb-2">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2 bg-white rounded-full px-3 py-2 shadow-sm border border-gray-100">
                <div className="relative w-6 h-6 rounded-full overflow-hidden">
                  {/* Placeholder or actual SVG if valid path */}
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
              <span>Balance: {TRADE_CONTENT.swap.from.balance} <span className="text-black font-bold cursor-pointer">Max</span></span>
              <span>{TRADE_CONTENT.swap.from.usdValue}</span>
            </div>
          </div>

          {/* Arrow Divider */}
          <div className="relative h-4 flex justify-center items-center z-10 -my-2">
            <div className="bg-white rounded-lg p-1 border border-gray-100 shadow-sm text-gray-400">
              <BsArrowDown size={14} />
            </div>
          </div>

          {/* To Token */}
          <div className="bg-gray-50 rounded-2xl p-4 mt-0">
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
          <div className="mt-4 flex justify-between text-xs font-medium px-2 text-gray-400">
            <div className="flex items-center gap-1">
              <span className="text-black">Min. received</span> 245,450.89 USDO
            </div>
            <div className="flex items-center gap-1">
              {TRADE_CONTENT.swap.exchangeRate} <LuArrowDownUp size={10} className="rotate-45" />
            </div>
          </div>
        </div>

        {/* Right Card: Approve */}
        <div className="w-full max-w-[500px] h-[500px] bg-white rounded-3xl p-8 shadow-sm flex flex-col justify-between items-center relative overflow-hidden">

          {/* Illustration */}
          <div className="relative w-[300px] h-[250px] mt-8">
            <Image
              src={TRADE_CONTENT.approve.image}
              alt="Approval Illustration"
              fill
              className="object-contain"
            />
            {/* Floating Coin Overlay - to match "fading" visual if needed, but image likely has it */}
          </div>

          {/* Steps */}
          <div className="w-full mt-8">
            <div className="flex justify-between items-center w-full px-8 mb-8 text-sm font-medium">
              <div className="flex flex-col items-center gap-2">
                <span className="text-black font-bold">Approve token</span>
                <div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-gray-400">
                  <FaCheck size={10} />
                </div>
              </div>
              <div className="flex-1 h-[1px] bg-gray-100 mx-4 mb-6"></div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-gray-300">Confirm transaction</span>
                <div className="w-6 h-6 rounded-full border border-gray-100 flex items-center justify-center text-gray-200">
                  <LuArrowDownUp size={10} />
                </div>
              </div>
            </div>

            {/* Fee Info */}
            <div className="flex justify-between text-xs text-gray-400 mb-2">
              <span>Network fee</span>
              <span className="text-black font-medium">{TRADE_CONTENT.approve.fee}</span>
            </div>
            <div className="flex justify-between text-xs text-gray-400 mb-6">
              <span>Approved Amount</span>
              <span className="text-black font-medium">{TRADE_CONTENT.approve.amount}</span>
            </div>

            {/* Button */}
            <div className="relative">
              {/* "Try me" arrow text */}
              <div className="absolute -top-8 left-0 text-xs text-gray-400 transform -rotate-12 italic font-handwriting">
                Try me
                {/* Placeholder for arrow curve svg if needed */}
              </div>

              <button className="w-full bg-[#1A1A1A] text-white font-bold py-4 rounded-full flex items-center justify-center gap-2 hover:bg-black transition-colors">
                One-time Approval <FiChevronUp />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}