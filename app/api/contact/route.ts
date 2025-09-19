import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { nom, email, message } = await request.json();

  console.log('Tentative d\'envoi de mail:', { nom, email, message });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS, 
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.MAIL_USER, 
      subject: `Message portfolio de ${nom}`,
      text: message,
      html: `<p><b>Nom:</b> ${nom}</p><p><b>Email:</b> ${email}</p><p>${message}</p>`
    });
    console.log('Mail envoyé avec succès');
    return NextResponse.json({ success: true });
  } catch (error) {
    let errorMsg = "Erreur inconnue";
    if (error instanceof Error) errorMsg = error.message;
    console.error('Erreur Nodemailer:', errorMsg);
    return NextResponse.json({ success: false, error: errorMsg }, { status: 500 });
  }
}
