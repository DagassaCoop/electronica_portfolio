import { useState } from "react";

// Mock
import { contactInfo } from "@/mock";

// Components
import IconButton from "../components/IconButton";

// Assets
import { InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <section id="contact" className="relative container pt-12 pb-20">
        <div className="relative z-5">
          <h1 className="h1 mb-4">Get in touch</h1>
          <p className="body-1 mb-20">
            We're thrilled that you're considering collaborating with us! If
            you're ready to take your digital presence to new heights, let's get
            the ball rolling.
          </p>
          <form
            onSubmit={onSubmit}
            className="mb-12 flex flex-col w-full gap-6"
          >
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="font-poppins font-bold p-4 outline-none"
            />

            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="font-poppins font-bold p-4 outline-none"
            />
            <textarea
              id="message"
              name="message"
              required
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="font-poppins font-bold p-4 outline-none"
              rows={6}
            />
            <button
              type="submit"
              className="font-poppins font-bold p-4 bg-white text-color-violet hover:bg-white/80 transition ease-in-out"
            >
              submit
            </button>
          </form>
          <div>
            <p className="body-1 text-sm text-color-kidnapper/50 mb-2">
              or find me on:
            </p>
            <div className="flex gap-6">
              {contactInfo.instagram && (
                <IconButton
                  icon={
                    <InstagramLogo
                      className="text-color-kidnapper/50 hover:text-color-kidnapper transition ease-in-out"
                      weight="fill"
                      width={32}
                      height={32}
                    />
                  }
                  href={contactInfo.instagram}
                />
              )}
              {contactInfo.linkedIn && (
                <IconButton
                  icon={
                    <LinkedinLogo
                      className="text-color-kidnapper/50 hover:text-color-kidnapper transition ease-in-out"
                      weight="fill"
                      width={32}
                      height={32}
                    />
                  }
                  href={contactInfo.linkedIn}
                />
              )}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 -left-1/2 -right-1/2 z-1 h-[380px] bg-color-blue" />
      </section>
    </>
  );
};

export default Contact;
