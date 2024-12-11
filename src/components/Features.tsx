
import { Map, Clock, CreditCard, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: Map,
    title: "Find the Perfect Field",
    description: "Search by map or browse categories to find your ideal location."
  },
  {
    icon: Clock,
    title: "Choose Date and Time",
    description: "Check real-time availability and book your preferred slot instantly."
  },
  {
    icon: CreditCard,
    title: "Book and Get Ready",
    description: "Secure payment and immediate confirmation for peace of mind."
  },
  {
    icon: HeartHandshake,
    title: "24/7 Support",
    description: "Our team is always here to help with any questions or concerns."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600">Simple steps to get you on the field</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <feature.icon className="w-12 h-12 text-emerald-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}