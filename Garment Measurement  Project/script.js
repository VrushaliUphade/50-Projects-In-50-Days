document.getElementById("measurementForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = Object.fromEntries(formData);

// ✅ Ensure all numeric values are parsed but keep raw format
const numericFields = [
  "price", "shirtLength", "chest", "front", "shoulder", "sleeveLength",
  "neckSize", "cup", "armhole", "sleeveWidth", "pantLength", "waist",
  "hip", "thigh", "knee", "bottom", "inseam"
];

numericFields.forEach(field => {
  if (data[field] !== undefined && data[field] !== "") {
    data[field] = String(parseFloat(data[field])); // keeps 42, 42.5, 42.75 as-is
  }
});


  // Shop details
  const shopAddress = "Liberty Art Tailor, Matoshree Complex, Shop No.2, Station Road, Next to Shivleela Medical, Badnera, Amravati, Maharashtra 444701";
  const shopMapLink = "https://maps.app.goo.gl/YnsbguPK2p7RAgKM7";
  const paymentLink = "https://drive.google.com/file/d/1T15I7aLGJ1dx-w8nZXFdFL5QMoE7e60N/view?usp=drive_link";
  const motivationalThought = "Hard work always pays off – Wear your uniform with pride!";

  // WhatsApp Message
  let message = `📌 *Measurement Details*\n\n`;

  // Student Info
  message += `🏫 Institute: ${data.institute}\n👤 Name: ${data.studentName}\n📚 Branch: ${data.branch}\n📞 Contact: ${data.contact}\n💬 WhatsApp: ${data.whatsapp}\n💰 Stitching Price: ₹${data.price}\n\n`;

  // Shirt Measurements
  message += `👕 *Shirt Measurements*\n`;
  message += `- Length: ${data.shirtLength}\n- Chest: ${data.chest}\n- Front: ${data.front}\n- Shoulder: ${data.shoulder}\n- Sleeve Length: ${data.sleeveLength}\n- Neck Size: ${data.neckSize}\n- Cup: ${data.cup}\n- Armhole: ${data.armhole}\n- Sleeve Width: ${data.sleeveWidth}\n- Other: ${data.shirtOther || "N/A"}\n\n`;

  // Pant Measurements
  message += `👖 *Pant Measurements*\n`;
  message += `- Pant Length: ${data.pantLength}\n- Waist: ${data.waist}\n- Hip: ${data.hip}\n- Thigh: ${data.thigh}\n- Knee: ${data.knee}\n- Bottom: ${data.bottom}\n- Inseam: ${data.inseam}\n- Other: ${data.pantOther || "N/A"}\n\n`;

  // Shop info
  message += `📍 *Uniform Pickup Address*\n${shopAddress}\n\n`;
  message += `🗺️ Location: ${shopMapLink}\n`;
  message += `💳 Payment: ${paymentLink}\n\n`;
  message += `💡 *Thought:* ${motivationalThought}`;

  // WhatsApp redirect
  const whatsappNumber = data.whatsapp;
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});

// Move cursor to next field when Enter is pressed
document.querySelectorAll("input, select, textarea").forEach((el, i, arr) => {
  el.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      const next = arr[i + 1];
      if (next) next.focus();
    }
  });
});
