"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Invalid form data.",
      issues: parsed.error.issues.map((issue) => issue.message),
      fields: formData as Record<string, string>,
      success: false,
    };
  }

  const { name, email, message } = parsed.data;

  // In a real application, you would send an email or save to a database here.
  // For example, using Nodemailer, SendGrid, or Firebase.
  console.log("Contact Form Submission:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // Simulate email sending
  try {
    // Replace with actual email sending logic
    // await sendEmail({ to: "your-email@example.com", subject: `New message from ${name}`, text: message, from: email });
    console.log("Simulating email sending...");
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
    
    return {
      message: "Thank you for your message! I'll get back to you soon.",
      success: true,
    };
  } catch (error) {
    console.error("Failed to send message:", error);
    return {
      message: "An error occurred while sending your message. Please try again later.",
      success: false,
      fields: parsed.data,
    };
  }
}
