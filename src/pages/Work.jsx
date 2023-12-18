const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Shopping Cart",
      description:
        "Shopping cart with cart add and remove cart items with cart section  and  user friendly single product view",
      imageUrl:
        "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?size=626&ext=jpg&ga=GA1.1.125146762.1701331629&semt=sph", // Replace with your image URL
      demoLink: "https://e-commerce-indol-six-54.vercel.app/",
      codeLink: "https://github.com/yoga2000/e-commerce",
    },
    {
      id: 2,
      title: "Chat-App",
      description:
        "A react chat app with a firebase firestore with authentication and protected route create a room and start chatting with your friends immediately",
      imageUrl:
        "https://img.freepik.com/free-vector/human-hand-holding-mobile-phone-with-text-messages_74855-6531.jpg?size=626&ext=jpg&ga=GA1.1.125146762.1701331629&semt=ais",
      demoLink: "https://chatapp-gamma-two.vercel.app/",
      codeLink: "https://github.com/yoga2000/chatapp",
    },
  ];

  return (
    <div
      name="work"
      className="h-screen w-full     pb-32 flex justify-center items-center bg-[#0a1924]"
    >
      <div className="max-w-7xl mx-auto  w-full  px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl  text-center  underline decoration-pink-500 decoration-4   font-bold text-white mb-8">
          Work
        </h2>

        <div className="grid gap-6  md:grid-cols-2   lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-green-500 shadow-md  shadow-[#040c16] rounded-md p-6"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-40 object-cover mb-4 rounded-md"
              />
              <h3 className="text-lg font-semibold text-[#111] mb-2">
                {project.title}
              </h3>
              <p className="text-gray-800 mb-2">{project.description}</p>
              <div className="flex justify-around">
                <a
                  href={project.demoLink}
                  className="bg-black hover:bg-zinc-900 text-white px-4 py-2 rounded-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
                <a
                  href={project.codeLink}
                  className="bg-black text-white py-2 px-4   hover:bg-zinc-900 rounded-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Work;
