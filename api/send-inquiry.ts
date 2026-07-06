import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { parentName, childName, childAge, email, phone, program, message } = req.body;

  try {
    await resend.emails.send({
      from: 'ATHLETA ACADEMY <onboarding@resend.dev>',
      to: [
        'brazilian.soccer.club@gmail.com',
        'renyan.h0530@gmail.com',
        'moto.higa@gmail.com'
      ],
      subject: `【無料体験申込】${childName}様（保護者：${parentName}様）`,
      text: `
保護者氏名: ${parentName}
お子様氏名: ${childName}
年齢・学年: ${childAge}
メールアドレス: ${email}
電話番号: ${phone}
希望クラス: ${program}
ご質問・ご要望: ${message}
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
