"use client"

import { useState } from "react"
import { Reveal } from "@/components/reveal"

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-navy py-24 px-8 md:px-16">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-[1.15fr_1fr] gap-16 md:gap-24 items-start">

        {/* Left */}
        <Reveal>
          <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.32em] uppercase text-gold-light mb-3">
            <span className="block w-6 h-px bg-gold-light" />
            Get in Touch
          </p>
          <h2 className="font-serif text-[clamp(2.2rem,3.8vw,3.2rem)] font-normal text-white leading-[1.2] mb-5">
            Let&rsquo;s Start a Conversation
          </h2>
          <p className="text-[16px] text-white/52 leading-[1.85] mb-10">
            Whether you are navigating a complex reputational challenge or building a long-term
            strategic communications program, we would welcome the opportunity to discuss how
            Tricuro can help.
          </p>

          <div className="divide-y divide-white/[0.08]">
            {/* Offices */}
            <div className="grid grid-cols-[110px_1fr] items-start py-4">
              <span className="text-[9.5px] font-bold tracking-[0.28em] uppercase text-gold pt-0.5">
                Offices
              </span>
              <div>
                <p className="text-[16px] text-white/78 leading-snug">Washington DC</p>
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/32 mt-1">
                  London &nbsp;&bull;&nbsp; New York
                </p>
              </div>
            </div>
            {/* Email */}
            <div className="grid grid-cols-[110px_1fr] items-center py-4">
              <span className="text-[9.5px] font-bold tracking-[0.28em] uppercase text-gold">Email</span>
              <a href="mailto:david.sowells@tricuro.com" className="text-[16px] text-white/78 hover:text-gold-light transition-colors duration-200">
                david.sowells@tricuro.com
              </a>
            </div>
            {/* Phone */}
            <div className="grid grid-cols-[110px_1fr] items-center py-4">
              <span className="text-[9.5px] font-bold tracking-[0.28em] uppercase text-gold">Phone</span>
              <a href="tel:+12027019005" className="text-[16px] text-white/78 hover:text-gold-light transition-colors duration-200">
                +1-202-701-9005
              </a>
            </div>
            {/* Website */}
            <div className="grid grid-cols-[110px_1fr] items-center py-4">
              <span className="text-[9.5px] font-bold tracking-[0.28em] uppercase text-gold">Web</span>
              <span className="text-[16px] text-white/78">www.tricuro.com</span>
            </div>
          </div>
        </Reveal>

        {/* Right — form */}
        <Reveal delay={2}>
          {sent ? (
            <div className="flex flex-col items-start gap-4 py-12">
              <div className="w-10 h-0.5 bg-gold" />
              <p className="font-serif text-xl text-white">Message received.</p>
              <p className="text-[15px] text-white/52">
                Thank you for reaching out. A member of our team will be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field id="fname" label="First Name" placeholder="Jane" required />
                <Field id="lname" label="Last Name"  placeholder="Smith" required />
              </div>
              <Field id="email" label="Email Address" type="email" placeholder="jane@organization.com" required />
              <Field id="org"   label="Organization"  placeholder="Your organization" />
              <Field id="message" label="Message" placeholder="Tell us about your communications needs…" textarea required />
              <button
                type="submit"
                className="self-start mt-1 bg-gold text-white px-10 py-3.5 text-[11.5px] font-semibold tracking-[0.2em] uppercase hover:bg-gold-light hover:translate-x-1 transition-all duration-200 border-0 cursor-pointer"
              >
                Send Message &thinsp;&rarr;
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
  textarea = false,
  required = false,
}: {
  id: string
  label: string
  placeholder: string
  type?: string
  textarea?: boolean
  required?: boolean
}) {
  const base =
    "w-full bg-white/[0.04] border border-white/[0.10] border-b-white/[0.20] text-white text-[15px] px-4 py-3 outline-none focus:border-gold focus:bg-white/[0.07] transition-all duration-200 placeholder:text-white/22"
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[9.5px] font-bold tracking-[0.22em] uppercase text-white/38">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          required={required}
          rows={5}
          className={`${base} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          required={required}
          className={base}
        />
      )}
    </div>
  )
}
