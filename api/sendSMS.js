import Twilio from "twilio";

export default async function handler(req, res) {
  const { to, message } = req.body;

  const client = new Twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

  try {
    const response = await client.messages.create({
      body: message,
      from: process.env.TWILIO_NUMBER,
      to: to
    });
    res.status(200).json({ success: true, sid: response.sid });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}

