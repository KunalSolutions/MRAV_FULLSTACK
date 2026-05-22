const WhatsAppButton = () => {
  const phone = "917709683131";     
  const message = "Hello, I would like to inquire about your audio-visual solutions, video systems, and installation services. Please provide details on offerings, pricing, and availability.";

  const handleClick = () => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-5 left-5 bg-[#1E3A8A] hover:bg-[#1E3A8A] text-white font-semibold px-4 py-1.5 rounded-full shadow-lg z-50"
    >
      Enquire Now
    </button>
  );
};

    export default WhatsAppButton;