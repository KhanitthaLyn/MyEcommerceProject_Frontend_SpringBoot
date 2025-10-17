import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";

const Contact = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen py-12 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1441262452/photo/communication-and-technology-concept-hand-putting-wooden-block-cube-symbol-telephone-email.webp?b=1&s=612x612&w=0&k=20&c=ZOdUz89xMjx48b0m6VoZJXagG64yyWZT423vGFJRIiM=')",
      }}
    >
      <div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-4xl font-bold text-center mb-6 text-slate-800">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center mb-6">
          We'd love to hear from you! Please fill out the form below.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              required
              placeholder="Your name"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-200 shadow-sm transition duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-200 shadow-sm transition duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows="5"
              required
              placeholder="Your message..."
              className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-200 shadow-sm transition duration-200"
            />
          </div>

          <button className="w-full bg-gradient-to-r from-blue-400 to-indigo-500 text-white py-3 rounded-lg font-semibold hover:from-indigo-400 hover:to-blue-400 shadow-md transition-all duration-300">
            Send
          </button>
        </form>

        <div className="mt-10 text-center">
          <h2 className="text-lg font-semibold mb-4 text-slate-800">
            Contact Information
          </h2>
          <div className="flex flex-col items-center space-y-3">
            <div className="flex items-center space-x-3">
              <HiOutlinePhone className="text-blue-500 text-2xl" />
              <span className="text-gray-700 font-medium">+111 111 1111</span>
            </div>

            <div className="flex items-center space-x-3">
              <HiOutlineMail className="text-blue-500 text-2xl" />
              <span className="text-gray-700 font-medium">info@email.com</span>
            </div>

            <div className="flex items-center space-x-3">
              <HiOutlineLocationMarker className="text-blue-500 text-2xl" />
              <span className="text-gray-700 font-medium">
                111 Example St, City
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
