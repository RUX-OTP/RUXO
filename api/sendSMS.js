import Twilio from "twilio";

export default async function handler(req, res) {
  const { to, message } = req.body;

  const client = new Twilio(process.env.AC41269f9f2ab722bb198842c3b185a66d, process.env.4a43cf400244ca0eea4cca4fe5b9bfd8);

  try {
    const response = await client.messages.create({
      body: message,
      from: process.env.+14026215872,
      to: to
    });
    res.status(200).json({ success: true, sid: response.sid });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}
