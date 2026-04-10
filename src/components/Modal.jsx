import React from "react";
import ReactDOM from "react-dom";
import { FaCopy, FaCheck } from "react-icons/fa";
import { useClipboard } from "react-haiku";

const Modal = ({ show, quote, close }) => {
  const clipboard = useClipboard({ timeout: 2000 });

  const { content, author } = quote;

  if (!show) return null;
  return ReactDOM.createPortal(
    <div className="flex items-center justify-center w-full absolute inset-0">
      {/* overlay */}
      <div
        className="w-full h-full absolute inset-0 z-10 bg-gray-800 opacity-50 backdrop-blur-sm"
        onClick={close}
      ></div>

      <div className="w-11/12 md:w-1/2 z-20 px-8 py-8 bg-white flex flex-col justify-center items-center rounded-md shadow-lg">
        <button
          className="border-2 font-semibold p-2 mb-3 rounded-full text-gray-500 hover:text-gray-700 self-end"
          onClick={() => clipboard.copy(content)}
        >
          {clipboard.copied ? (
            <FaCheck className="text-green-500 border-green-700" />
          ) : (
            <FaCopy />
          )}
        </button>

        <blockquote className="flex flex-col font-mono">
          <p className="text-slate-900 border-l-8 border-slate-600 pl-3 mb-4">
            <q>{content}</q>
          </p>
          <cite className="self-center text-gray-500"> -{author}</cite>
        </blockquote>

        <button
          className="border-2 font-semibold mt-7 px-5 py-1 rounded-full bg-gray-200 text-slate-900  hover:text-gray-200 hover:bg-slate-600"
          onClick={close}
        >
          Close
        </button>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
