"use client";

import { useState } from "react";
import MemberCard from "./MemberCard";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Divya Menon",
    year: "Second Year · IT",
    wing: "AI/ML Wing",
    wingColor: "bg-indigo-100 text-indigo-600",
    avatar: "/members/divya.jpg",

    quote:
      "Joined knowing zero ML. Within 3 months I had a trained model and presented at an inter-college symposium. The community makes the impossible normal.",

    achievementTitle: "Trained first model in 3 months",
    achievementImage: "/stories/ml.jpg",
  },

  {
    name: "Ananya Krishnan",
    year: "Final Year · CSE",
    wing: "WebDev Wing Lead",
    wingColor: "bg-cyan-100 text-cyan-600",
    avatar: "/members/ananya.jpg",

    quote:
      "The club completely transformed my career. Leading the Web Development Wing gave me confidence and helped me secure my internship before graduation.",

    achievementTitle: "Built 20+ Full Stack Projects",
    achievementImage: "/stories/web.jpg",
  },

  {
    name: "Rahul Nair",
    year: "Third Year · ECE",
    wing: "IoT Wing",
    wingColor: "bg-yellow-100 text-yellow-600",
    avatar: "/members/rahul.jpg",

    quote:
      "I never imagined hardware could be this exciting. We built drones, robots and IoT systems that actually solved real-world problems.",

    achievementTitle: "National IoT Championship",
    achievementImage: "/stories/iot.jpg",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const member = testimonials[active];

  return (
    <section className="bg-[#FAF7F3] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-500">
              Member Stories
            </p>

            <h2 className="mt-4 text-4xl font-extrabold text-[#1A1A2E]">
              In their own words.
            </h2>
          </div>

          <div className="flex gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-3 w-3 rounded-full transition-all ${
                  active === i
                    ? "scale-125 bg-cyan-500"
                    : "bg-gray-300 hover:bg-cyan-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonial */}

        <div className="animate-fade-in">
          <TestimonialCard
            quote={member.quote}
            name={member.name}
            year={member.year}
            wing={member.wing}
            wingColor={member.wingColor}
            avatar={member.avatar}
            achievementTitle={member.achievementTitle}
            achievementImage={member.achievementImage}
          />
        </div>

        {/* Members */}

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <MemberCard
              key={index}
              active={active === index}
              onClick={() => setActive(index)}
              name={item.name}
              year={item.year}
              wing={item.wing}
              wingColor={item.wingColor}
              image={item.avatar}
            />
          ))}
        </div>

      </div>
    </section>
  );
}