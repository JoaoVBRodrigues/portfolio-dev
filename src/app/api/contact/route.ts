import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // 1. Validate fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos os campos obrigatórios devem ser preenchidos.' },
        { status: 400 }
      )
    }

    // 2. Validate environment variable
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY is not defined in environment variables.')
      return NextResponse.json(
        { error: 'O serviço de envio de emails não está configurado no servidor.' },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)

    // 3. Send email via Resend
    // - From: onboarding@resend.dev (default for unverified domains in free tier)
    // - Reply-To: sender email (so the user can reply directly in their mail client)
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'joaovictor.brodr@gmail.com',
      replyTo: email,
      subject: `[Portfólio] ${subject}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; color: #1e293b; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #8b5cf6; border-bottom: 2px solid #f1f5f9; padding-bottom: 15px; margin-top: 0; font-size: 20px; font-weight: 700;">
            📥 Nova Mensagem do Portfólio
          </h2>
          <div style="margin-bottom: 20px; line-height: 1.6;">
            <p style="margin: 6px 0;"><strong style="color: #64748b;">Remetente:</strong> <span style="color: #0f172a; font-weight: 500;">${name}</span></p>
            <p style="margin: 6px 0;"><strong style="color: #64748b;">Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></p>
            <p style="margin: 6px 0;"><strong style="color: #64748b;">Assunto:</strong> <span style="color: #0f172a; font-weight: 500;">${subject}</span></p>
          </div>
          <div style="margin-top: 25px; padding: 20px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #00d4ff; box-shadow: inset 0 2px 4px 0 rgba(0,0,0,0.02);">
            <p style="margin: 0; white-space: pre-wrap; font-size: 15px; color: #334155; font-family: inherit; line-height: 1.6;">${message}</p>
          </div>
          <hr style="border: 0; border-top: 1px solid #f1f5f9; margin: 30px 0;" />
          <p style="font-size: 12px; color: #94a3b8; text-align: center; margin-bottom: 0; letter-spacing: 0.5px;">
            Enviado de forma segura via API do Portfólio (Next.js & Resend)
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend transmission failure:', error)
      return NextResponse.json(
        { error: `Falha no serviço Resend: ${error.message}` },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data })
  } catch (error: unknown) {
    console.error('Unhandled route error inside contact API:', error)
    return NextResponse.json(
      { error: 'Erro inesperado ao processar a requisição no servidor.' },
      { status: 500 }
    )
  }
}
