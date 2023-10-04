"use client";

const ContactForm: React.FC = () => {
  async function handleSubmit(event: any) {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      name: { value: string };
      phone: { value: string };
      email: { value: string };
      subject: { value: string };
      message: { value: string };
    };

    const data = {
      name: target.name.value,
      phone: target.phone.value,
      email: target.email.value,
      subject: target.subject.value,
      message: target.message.value,
    };

    const response = await fetch("/api/route", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Message sent", data);
    }
    if (!response.ok) {
      console.log("Message not sent");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-4 w-full py-2">
        <div className="flex flex-col">
          <label htmlFor="name" className="uppercase text-sm py-2">
            Name
          </label>
          <input
            id="name"
            autoComplete="off"
            required
            minLength={3}
            maxLength={150}
            className="border-2  rounded border-neutral-300 p-3"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="uppercase text-sm py-2">
            Phone Number
          </label>
          <input
            id="phone"
            autoComplete="off"
            minLength={9}
            maxLength={20}
            className="border-2  rounded border-neutral-300 p-3"
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-col py-2">
        <label htmlFor="email" className="uppercase text-sm py-2">
          Email
        </label>
        <input
          id="email"
          autoComplete="off"
          required
          minLength={8}
          maxLength={150}
          className="border-2  rounded border-neutral-300 p-3"
          type="email"
        />
      </div>
      <div className="flex flex-col py-2">
        <label htmlFor="subject" className="uppercase text-sm py-2">
          Subject
        </label>
        <input
          id="subject"
          autoComplete="off"
          className="border-2  rounded border-neutral-300 p-3"
          type="text"
        />
      </div>
      <div className="flex flex-col py-2">
        <label htmlFor="message" className="uppercase text-sm py-2">
          Message
        </label>
        <textarea
          id="message"
          autoComplete="off"
          required
          minLength={20}
          maxLength={600}
          className="border-2 rounded border-neutral-300 p-3"
          rows={10}
        />
      </div>
      <button type="submit" className="w-full p-4 mt-4 text shadow-md text-orange-50 shadow-gray-400  uppercase bg-gradient-to-r from-[#991b1b] to-[#9a3412]">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;