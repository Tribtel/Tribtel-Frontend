// A sectioin to display FAQ items in an accordion style
import { useState } from 'react';
import styles from './FAQ.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What is Tribtel?',
    answer:
      'Tribtel is a travel booking platform that helps users find the best deals on hotels, flights, and vacation packages.',
  },
  {
    question: 'How do I book a trip?',
    answer:
      'You can book a trip by browsing our deals, selecting your preferred options, and completing the checkout process.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes, we offer refunds for eligible bookings in accordance with our refund policy.',
  },
  {
    question: 'Can I change my booking?',
    answer:
      'Yes, you can make changes to your booking within the allowed time frame. Please contact our support team for assistance.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faq}>
      <h2>Frequently Asked Questions</h2>
      <div className={styles.faqList}>
        {faqData.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <button className={styles.faqQuestion} onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className={`${styles.arrowIcon} ${activeIndex === index ? styles.open : ''}`} />
            </button>
            {activeIndex === index && (
              <div className={`${styles.faqAnswer} ${activeIndex === index ? styles.open : ''}`}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
