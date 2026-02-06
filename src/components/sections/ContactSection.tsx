"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/resume";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import GradientText from "@/components/ui/GradientText";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const contactMethods = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
  },
  {
    label: "Location",
    value: personalInfo.location,
    href: "#",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative px-4 py-24 sm:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's discuss your next project or opportunity"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-3"
        >
          {contactMethods.map((method) => (
            <motion.a
              key={method.label}
              href={method.href}
              variants={fadeInUp}
              className="block"
            >
              <GlassCard className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">
                  {method.icon}
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  {method.label}
                </h3>
                <p className="mt-1 text-base font-medium text-white">
                  {method.value}
                </p>
              </GlassCard>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 text-center"
        >
          <GlassCard className="inline-block px-8 py-10 sm:px-16">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Let&apos;s Build Something{" "}
              <GradientText>Amazing</GradientText>
            </h3>
            <p className="mx-auto mt-4 max-w-md text-slate-400">
              Whether you need a scalable backend system, microservices
              architecture, or a full-stack solution — I&apos;m ready to help.
            </p>
            <div className="mt-8">
              <Button
                href={`mailto:${personalInfo.email}`}
                variant="primary"
                size="lg"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
                Send Me a Message
              </Button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
