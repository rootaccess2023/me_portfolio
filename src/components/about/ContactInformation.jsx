import { MdMarkEmailUnread } from "react-icons/md";
import { FaLinkedin, FaGithub, FaArrowRight } from "react-icons/fa";
import { ButtonIndigo } from "../../components";

// Reusable contact card component
const ContactCard = ({
  icon: Icon,
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="w-full border hover:border-black p-4 sm:p-6 md:p-8 cursor-pointer transition-all duration-300 hover:shadow-md">
      <Icon className="text-indigo-500 text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3 md:mb-4" />
      <h1 className="font-zilla text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 md:mb-4">
        {title}
      </h1>
      <p className="font-light text-sm md:text-base mb-2 sm:mb-3 md:mb-4">
        {description}
      </p>
      <ButtonIndigo
        buttonText={buttonText}
        icon={<FaArrowRight />}
        link={buttonLink}
      />
    </div>
  );
};

function ContactInformation() {
  // Contact data
  const contactMethods = [
    {
      icon: MdMarkEmailUnread,
      title: "Email Me",
      description:
        "Have questions, ideas, or just want to connect? Send me an email, and I'll get back to you soon!",
      buttonText: "Send Email",
      buttonLink: "mailto:contact@example.com",
    },
    {
      icon: FaLinkedin,
      title: "Connect on LinkedIn",
      description:
        "Let's connect on LinkedIn! Follow me for insights, updates, and networking opportunities.",
      buttonText: "Visit LinkedIn",
      buttonLink: "https://linkedin.com/in/yourprofile",
    },
    {
      icon: FaGithub,
      title: "Check My GitHub",
      description:
        "Interested in my projects? Visit my GitHub to see my latest work and open-source contributions.",
      buttonText: "Visit GitHub",
      buttonLink: "https://github.com/yourusername",
    },
  ];

  return (
    <div className="mb-8 md:mb-12 max-w-[1140px] mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {contactMethods.map((contact, index) => (
          <ContactCard
            key={`contact-${index}`}
            icon={contact.icon}
            title={contact.title}
            description={contact.description}
            buttonText={contact.buttonText}
            buttonLink={contact.buttonLink}
          />
        ))}
      </div>
    </div>
  );
}

export default ContactInformation;
