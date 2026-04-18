import express from 'express';
import { Resend } from 'resend';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env.local') });

const app = express();
const PORT = 5000;

// Initialize Resend
console.log("API Key:", process.env.RESEND_API_KEY ? "✓ Loaded" : "✗ Missing");
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(cors());
app.use(express.json());

// Contact form endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, phone, course, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !course) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Send email using Resend
    const result = await resend.emails.send({
      from: 'noreply@resend.dev', // Resend default sender
      to: 'canaancaareer2005@gmail.com',
      replyTo: email,
      subject: `New Course Inquiry - ${name}`,
      html: `
        <h2>New Course Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Course Interested:</strong> ${course}</p>
        <p><strong>Message:</strong> ${message || 'No additional message'}</p>
      `,
    });

    if (result.error) {
      return res.status(400).json({ error: result.error.message });
    }

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
