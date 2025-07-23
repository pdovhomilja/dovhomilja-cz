import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, inquiryType } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Map inquiry type to readable format
    const inquiryTypeMap: Record<string, string> = {
      general: "General Inquiry",
      business: "Business Partnership",
      speaking: "Speaking Engagement",
      media: "Media & Press",
      demo: "Xmation Demo Request",
    };

    const inquiryTypeLabel = inquiryTypeMap[inquiryType] || "General Inquiry";

    // Send email to Pavel
    const { data, error } = await resend.emails.send({
      from: "pavel@endorphinit.com",
      to: ["pavel@dovhomilja.com"],
      subject: `[Contact Form] ${inquiryTypeLabel}: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 20px; border-radius: 8px 8px 0 0; margin: -20px -20px 20px -20px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          
          <div style="background: #f8fafc; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
            <h2 style="color: #1e293b; margin: 0 0 10px 0; font-size: 18px;">Contact Information</h2>
            <p style="margin: 5px 0; line-height: 1.5;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 5px 0; line-height: 1.5;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #3b82f6;">${email}</a></p>
            <p style="margin: 5px 0; line-height: 1.5;"><strong>Inquiry Type:</strong> ${inquiryTypeLabel}</p>
            <p style="margin: 5px 0; line-height: 1.5;"><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background: #ffffff; padding: 15px; border: 1px solid #e2e8f0; border-radius: 6px;">
            <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 16px;">Message:</h3>
            <div style="color: #475569; line-height: 1.6; white-space: pre-wrap;">${message}</div>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; color: #64748b; font-size: 14px;">
            <p>This email was sent from the contact form on dovhomilja.cz</p>
            <p>Sent on: ${new Date().toLocaleString("en-US", {
              timeZone: "Europe/Prague",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              timeZoneName: "short",
            })}</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Contact Information:
Name: ${name}
Email: ${email}
Inquiry Type: ${inquiryTypeLabel}
Subject: ${subject}

Message:
${message}

---
This email was sent from the contact form on dovhomilja.cz
Sent on: ${new Date().toLocaleString("en-US", {
        timeZone: "Europe/Prague",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short",
      })}
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    // Send auto-reply to the sender
    await resend.emails.send({
      from: "pavel@dovhomilja.cz",
      to: [email],
      subject: "Thank you for contacting Pavel Dovhomilja",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 20px; border-radius: 8px 8px 0 0; margin: -20px -20px 20px -20px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Reaching Out!</h1>
          </div>
          
          <div style="padding: 0 0 20px 0;">
            <p style="font-size: 16px; line-height: 1.6; color: #374151;">Hi ${name},</p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #374151;">
              Thank you for your message regarding "<strong>${subject}</strong>". I've received your ${inquiryTypeLabel.toLowerCase()} and will get back to you as soon as possible.
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #374151;">
              I typically respond within 24 hours during business days. If your inquiry is urgent, feel free to reach out to me directly on LinkedIn.
            </p>
            
            <div style="background: #f8fafc; padding: 15px; border-radius: 6px; margin: 20px 0;">
              <h3 style="color: #1e293b; margin: 0 0 10px 0; font-size: 16px;">Your Message Summary:</h3>
              <p style="margin: 5px 0; color: #64748b;"><strong>Type:</strong> ${inquiryTypeLabel}</p>
              <p style="margin: 5px 0; color: #64748b;"><strong>Subject:</strong> ${subject}</p>
              <p style="margin: 5px 0; color: #64748b;"><strong>Submitted:</strong> ${new Date().toLocaleString(
                "en-US",
                {
                  timeZone: "Europe/Prague",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZoneName: "short",
                }
              )}</p>
            </div>
            
            <p style="font-size: 16px; line-height: 1.6; color: #374151;">
              Best regards,<br>
              <strong>Pavel Dovhomilja</strong><br>
              Co-founder, EndorphinIT<br>
              <a href="https://dovhomilja.cz" style="color: #3b82f6;">dovhomilja.cz</a>
            </p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
            <p style="color: #64748b; font-size: 14px; margin: 0;">
              Follow me on: 
              <a href="https://www.linkedin.com/in/paveldovhomilja/" style="color: #3b82f6; text-decoration: none;">LinkedIn</a> | 
              <a href="https://twitter.com/dovhomilja" style="color: #3b82f6; text-decoration: none;">Twitter</a> | 
              <a href="https://github.com/pdovhomilja" style="color: #3b82f6; text-decoration: none;">GitHub</a>
            </p>
          </div>
        </div>
      `,
      text: `Hi ${name},

Thank you for your message regarding "${subject}". I've received your ${inquiryTypeLabel.toLowerCase()} and will get back to you as soon as possible.

I typically respond within 24 hours during business days. If your inquiry is urgent, feel free to reach out to me directly on LinkedIn.

Your Message Summary:
Type: ${inquiryTypeLabel}
Subject: ${subject}
Submitted: ${new Date().toLocaleString("en-US", {
        timeZone: "Europe/Prague",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short",
      })}

Best regards,
Pavel Dovhomilja
Co-founder, EndorphinIT
dovhomilja.cz

Follow me on:
LinkedIn: https://www.linkedin.com/in/paveldovhomilja/
Twitter: https://twitter.com/dovhomilja
GitHub: https://github.com/pdovhomilja
      `,
    });

    return NextResponse.json(
      {
        message: "Email sent successfully",
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
