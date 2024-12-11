import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How can I modify my booking?",
    answer: "You can modify your booking up to 24 hours before your scheduled time through your account dashboard. Navigate to 'My Bookings' and select the booking you wish to modify."
  },
  {
    question: "Are there cancellation fees?",
    answer: "Cancellations made more than 48 hours in advance receive a full refund. Cancellations within 24-48 hours receive a 50% refund. No refunds are available for cancellations less than 24 hours before the booking."
  },
  {
    question: "Can I book a field for extended periods?",
    answer: "Yes! We offer extended booking options for tournaments, leagues, or regular team practice. Contact our support team for special rates on long-term bookings."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}