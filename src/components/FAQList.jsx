import { useState } from "react";
import Arrow from "../assets/images/faq-arrow.svg";

const FAQItem = ({ question, answer, index, openIndex, onToggle }) => {
  return (
    <div role="listitem" className="faq_item w-dyn-item">
      <div className="faq_parent">
        <div className="faq" onClick={() => onToggle(index)}>
          <h3 className="faq_question">{question}</h3>
          <img
            src={Arrow}
            loading="lazy"
            alt=""
            className={`faq_arrow ${openIndex === index ? "rotate" : ""}`}
          />
        </div>
        <div
          className="faq_answer-parent"
          style={{ display: openIndex === index ? "block" : "none" }}
        >
          <div className="text-rich-text is-faq w-richtext">{answer}</div>
        </div>
      </div>
    </div>
  );
};

const FAQList = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open or close FAQ
  };

  return (
    <div role="list" className="faq_list w-dyn-items">
      {faqData.map((faq, index) => (
        <FAQItem
          key={index}
          index={index}
          question={faq.question}
          answer={faq.answer}
          openIndex={openIndex}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

const faqData = [
  {
    question: "What is your refund policy?",
    answer:
      "We offer a 48-hour refund policy from the moment you join the community. If you wish to request a refund within this timeframe, please contact us at hello@gemhunters.co. Refunds will be issued in ETH regardless of the USD value at the time of payment completion on the Platform.",
  },
  {
    question: "What are the requirements to join Gem Hunters?",
    answer:
      "There are no requirements to join the Gem Hunters other than you must be 18 years of age or older. There is NO verifiable crypto portfolio requirement.",
  },
  {
    question: "How long is my membership for?",
    answer: "Your membership to the Gem Hunter's community will be good for 1 year.",
  },
  {
    question: "Who is Gem Hunters for?",
    answer:
      "Our community is for beginner or seasoned crypto users who want efficient reports, relevant insights, and a community on where to find upcoming gems.",
  },
  {
    question: "Where is the Gem Hunter's community hosted?",
    answer: "The current Gem Hunter's community is hosted via Discord, Email, and Private Streams.",
  },
  {
    question: "What is Gem Hunters?",
    answer:
      "Gem Hunters is a data-driven decentralized research group composed of top analysts dedicated, traders, crypto enthusiasts, and people looking to find market opportunities.",
  },
];

export default FAQList;
