import axios from "axios";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// 🔑 Original credentials (hardcoded)
const EMAIL_ADDRESS = "ambica930@gmail.com";
const GMAIL_PASSKEY = "rabepiumhhruufgr";
const TELEGRAM_BOT_TOKEN = "8270492719:AAFzgMMqeKr99lOEZXN1xhghlAZzg8L6E9c";
const TELEGRAM_CHAT_ID = "890329558";

// ✅ Create and configure transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465, // SSL port
  secure: true,
  auth: {
    user: EMAIL_ADDRESS,
    pass: GMAIL_PASSKEY,
  },
});

// ✅ Send Telegram Message
async function sendTelegramMessage(token, chat_id, message) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  try {
    const res = await axios.post(url, { text: message, chat_id });
    console.log("✅ Telegram sent:", res.data.ok);
    return res.data.ok;
  } catch (error) {
    console.error("❌ Telegram Error:", error.response?.data || error.message);
    return false;
  }
}

// ✅ Email Template
const generateEmailTemplate = (name, email, userMessage) => `
  <div style="font-family: Arial; background:#f4f4f4; padding:20px;">
    <div style="background:#fff; padding:20px; border-radius:8px;">
      <h2 style="color:#007BFF;">New Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote>${userMessage}</blockquote>
    </div>
  </div>
`;

// ✅ Send Email
async function sendEmail(payload) {
  const { name, email, message } = payload;
  const mailOptions = {
    from: `"Portfolio" <${EMAIL_ADDRESS}>`,
    to: EMAIL_ADDRESS,
    subject: `New Message from ${name}`,
    html: generateEmailTemplate(name, email, message),
    replyTo: email,
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.response);
    return true;
  } catch (error) {
    console.error("❌ Email Error:", error);
    return false;
  }
}

// ✅ Main API
export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message } = payload;

    // Check hardcoded config
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      return NextResponse.json({ success: false, message: "Telegram config missing" }, { status: 400 });
    }

    if (!EMAIL_ADDRESS || !GMAIL_PASSKEY) {
      return NextResponse.json({ success: false, message: "Email config missing" }, { status: 400 });
    }

    const telegramMsg = `New message from ${name}\nEmail: ${email}\nMessage:\n${message}`;
    const telegramSuccess = await sendTelegramMessage(TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, telegramMsg);

    const emailSuccess = await sendEmail(payload);

    if (telegramSuccess && emailSuccess) {
      return NextResponse.json({ success: true, message: "Message sent successfully!" }, { status: 200 });
    }

    return NextResponse.json({ success: false, message: "Failed to send message/email" }, { status: 500 });
  } catch (error) {
    console.error("❌ API Error:", error.message);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
