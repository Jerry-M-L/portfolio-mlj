import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { nom, email, message } = await request.json();

  // Configurez ici votre transporteur SMTP (exemple Gmail)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER, // ton adresse Gmail
      pass: process.env.MAIL_PASS, // mot de passe d'application Gmail
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.MAIL_USER, // tu reçois le mail ici
      subject: `Message portfolio de ${nom}`,
      text: message,
      html: `<p><b>Nom:</b> ${nom}</p><p><b>Email:</b> ${email}</p><p>${message}</p>`
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    let errorMsg = "Erreur inconnue";
    if (error instanceof Error) errorMsg = error.message;
    return NextResponse.json({ success: false, error: errorMsg }, { status: 500 });
  }
}
