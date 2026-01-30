'use client'

export default function Contact() {
  return (
    <section className="w-full">
      <div className="w-full bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center py-4">
          <h2 className="text-xl font-semibold text-black">Get in Touch</h2>
        </div>
      </div>
      <div className="w-full bg-[#F0FFFF]">
        <div className="max-w-3xl mx-auto px-4 text-center py-6">
          <p
            className="
              inline-block
              max-w-md
              text-base
              leading-relaxed
              text-gray-900
              text-center
            "
          >
            Want to book an apartment or need more information?
            <br />
            Feel free to reach out to us via phone <em>(WhatsApp, Viber)</em> or email, and
            we&apos;ll respond promptly to assist you.
            <br />
            We are eager to hear from you!
          </p>
        </div>
      </div>
    </section>
  )
}
