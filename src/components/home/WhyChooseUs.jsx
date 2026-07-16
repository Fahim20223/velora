import React from "react";
import Container from "../ui/Container";
import { FiTruck, FiShield, FiRefreshCw, FiHeadphones } from "react-icons/fi";

const features = [
  {
    icon: FiTruck,
    title: "Free Shipping",
    description: "Free delivery on all orders over ৳3000.",
  },
  {
    icon: FiShield,
    title: "Secure Payment",
    description: "Safe and secure checkout with trusted payment methods.",
  },
  {
    icon: FiRefreshCw,
    title: "Easy Returns",
    description: "30-day hassle-free return policy on every purchase.",
  },
  {
    icon: FiHeadphones,
    title: "24/7 Support",
    description: "Friendly customer support whenever you need help.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#FAF8F5] py-24">
      <Container>
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
            WHY CHOOSE US
          </p>

          <h2 className="mt-4 text-4xl font-semibold text-gray-900 md:text-5xl">
            Shopping Made Better
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Experience premium fashion with trusted service, secure payments,
            and exceptional customer care.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100">
                  <Icon size={28} className="text-black" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
