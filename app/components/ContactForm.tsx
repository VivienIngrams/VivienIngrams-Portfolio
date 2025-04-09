"use client";

const ContactForm: React.FC = () => {
  async function handleSubmit(event: any) {
    event.preventDefault();

    const formData = new FormData(event.target)
console.log(formData)
    try {
  
      const response = await fetch('/api', {
          method: 'post',     

          body: formData
      });

      if (!response.ok) {
          throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData);
      alert('Message successfully sent');
  } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting the form");
  }
  }
  return (
    <form onSubmit={handleSubmit} className="lg:p-6">
      <div className="grid md:grid-cols-2 gap-4 w-full py-2 ">
        <div className="flex flex-col">
          <label htmlFor="name" className="uppercase text-sm py-2">
            Name
          </label>
          <input
            id="name"
            name='name'
            autoComplete="off"
            required
            minLength={3}
            maxLength={150}
            className="border-2  rounded border-stone-400 p-2"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="uppercase text-sm py-2">
            Phone Number
          </label>
          <input
            id="phone"
            name='phone'
            autoComplete="off"
            minLength={9}
            maxLength={20}
            className="border-2  rounded border-stone-400 p-2"
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
          name="email"
          autoComplete="off"
          required
          minLength={8}
          maxLength={150}
          className="border-2  rounded border-stone-400 p-2"
          type="email"
        />
      </div>
      <div className="flex flex-col py-2">
        <label htmlFor="subject" className="uppercase text-sm py-2">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          autoComplete="off"
          className="border-2  rounded border-stone-400 p-2"
          type="text"
        />
      </div>
      <div className="flex flex-col py-2">
        <label htmlFor="message" className="uppercase text-sm py-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          autoComplete="off"
          required
          minLength={20}
          maxLength={600}
          className="border-2 rounded border-stone-400 p-2"
          rows={8}
        />
      </div>
      <button type="submit" className="w-full px-8 py-2 mt-4 shadow-md  shadow-stone-400 border-2 rounded border-stone-400 hover:scale-105 ease-in transition-300 uppercase  ">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
