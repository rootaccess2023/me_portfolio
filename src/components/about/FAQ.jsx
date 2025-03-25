import { useState } from "react";
import { Title } from "../../components";

// FAQ Item component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details>
      <summary
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center py-3 sm:py-4 border-t border-stone-300 list-none cursor-pointer"
      >
        <span className="text-base sm:text-lg font-light pr-4">{question}</span>
        <img
          src={
            isOpen
              ? "https://assets.mofoprod.net/static/_images/minus-circle.svg"
              : "https://assets.mofoprod.net/static/_images/plus-circle.07f676a21c6b.svg"
          }
          alt="toggle icon"
          className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
        />
      </summary>
      <div className="pb-3 sm:pb-4">
        <p className="text-sm sm:text-base md:text-lg">{answer}</p>
      </div>
    </details>
  );
};

function FAQ() {
  // FAQ data structure
  const faqItems = [
    {
      question: "Why did you shift your career?",
      answer:
        "I decided to shift my career to pursue my passion and explore new opportunities that align better with my personal values and goals.",
    },
    {
      question: "What challenges did you face during the transition?",
      answer:
        "The transition came with its own set of challenges, including learning new skills and adapting to a different work culture, but each obstacle was a stepping stone to growth.",
    },
    {
      question: "How did you prepare for the career change?",
      answer:
        "I dedicated time to self-education, attended relevant workshops, and networked with industry professionals to ensure a smooth and informed transition.",
    },
    {
      question:
        "What advice would you give to others considering a similar shift?",
      answer:
        "Be patient and persistent. Do your research, embrace continuous learning, and don't be afraid to step out of your comfort zone to follow your true calling.",
    },
    {
      question: "What has been the most rewarding aspect of your new career?",
      answer:
        "The most rewarding part has been the sense of fulfillment I get from aligning my work with my interests and contributing to projects that inspire me.",
    },
    {
      question: "How do you see your career evolving in the future?",
      answer:
        "I plan to keep growing by taking on new challenges, acquiring advanced skills, and exploring leadership opportunities to make a broader impact in my field.",
    },
  ];

  // Optional: can group FAQs by categories if needed
  const faqCategories = [
    {
      title: "General",
      items: faqItems,
    },
    // You can add more categories here if needed
    // { title: "Technical", items: [...] },
    // { title: "Personal", items: [...] },
  ];

  return (
    <div className="mb-8 md:mb-12 max-w-[1140px] mx-auto px-4 sm:px-6">
      {faqCategories.map((category, categoryIndex) => (
        <div key={`category-${categoryIndex}`} className="mb-6 sm:mb-8">
          <div className="mb-4 sm:mb-6">
            <Title title={category.title} />
          </div>
          <div className="border-b border-stone-300">
            {category.items.map((item, itemIndex) => (
              <FAQItem
                key={`faq-${categoryIndex}-${itemIndex}`}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FAQ;
