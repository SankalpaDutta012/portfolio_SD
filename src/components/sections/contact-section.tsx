
"use client";

import React, { useEffect, useRef } from "react";
import { useActionState } from "react"; // Updated import
import { useFormStatus } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { submitContactForm, type ContactFormState } from "@/app/actions";
import { Loader2, MapPin } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const initialState: ContactFormState = {
  message: "",
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Send Message
    </Button>
  );
}

export function ContactSection() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Success!" : "Error",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
    }
    if (state.success) {
      formRef.current?.reset();
      reset(); // Reset react-hook-form state
    }
  }, [state, reset]);

  return (
    <motion.section 
      id="contact" 
      className="section-padding"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="w-full shadow-lg">
            <CardHeader>
              <CardTitle>Contact Me</CardTitle>
              <CardDescription>
                Have a project in mind or just want to say hi? Fill out the form below.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                ref={formRef}
                action={formAction}
                onSubmit={handleSubmit(() => formRef.current?.requestSubmit())} 
                className="space-y-6"
              >
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    {...register("name")}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
                  {state.issues && state.fields?.name && !errors.name && <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.toLowerCase().includes('name'))}</p>}
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
                  {state.issues && state.fields?.email && !errors.email && <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.toLowerCase().includes('email'))}</p>}
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    className={errors.message ? "border-destructive" : ""}
                    rows={5}
                  />
                  {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
                  {state.issues && state.fields?.message && !errors.message && <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.toLowerCase().includes('message'))}</p>}
                </div>
                <SubmitButton />
              </form>
            </CardContent>
          </Card>
          <div className="space-y-6 pt-0 md:pt-12">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-6 w-6 text-primary" /> My Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  I'm based in Kolkata, India, but work with clients worldwide.
                </p>
                <div className="aspect-video w-full overflow-hidden rounded-md border">
                  <Image
                    src="https://placehold.co/600x400.png"
                    alt="Map placeholder showing Kolkata"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                    data-ai-hint="map India"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
