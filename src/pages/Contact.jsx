const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a1924] flex justify-center items-center pt-32 p-4"
    >
      <form
        action="https://getform.io/f/4f1f05b6-3183-4601-b51a-6527b18a7b11"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            submit the form below or shoot me an email -
            yogaraj3102000@gmail.com
          </p>
        </div>
        <input
          placeholder="name "
          type="text"
          name="name"
          className="bg-[#ccd6f6] p-2"
        />
        <input
          placeholder="email"
          type="text"
          name="name"
          className="my-4 p-2 bg-[#ccd6f6]"
        />

        <textarea
          name="message"
          cols="30"
          rows="10"
          className="bg-[#ccd6f6] p-2"
          placeholder="message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 px-4 py-3 my-8 mx-auto  flex items-center hover:border-pink-600">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
