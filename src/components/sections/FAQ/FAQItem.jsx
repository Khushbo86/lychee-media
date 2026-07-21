import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        border: "1px solid #e5e5e5",
        borderRadius: "16px",
        marginBottom: "20px",
        overflow: "hidden",
        background: "#fff",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          background: "#fff",
          border: "none",
          padding: "22px 28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            color: "#111",
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          {question}
        </span>

        <FaChevronDown
          style={{
            color: "#111",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "0.3s",
          }}
        />
      </button>

      {open && (
        <div
          style={{
            padding: "0 28px 22px",
            color: "#555",
            lineHeight: "1.7",
          }}
        >
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;