"use client"

import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// 1. Contact Form Validation Schema
export const ContactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address"),
  subject: z
    .string()
    .min(1, "Please select a subject"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long"),
});

export type ContactInput = z.infer<typeof ContactSchema>;

export function ContactForm() {
  // 2. Initialize React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // 3. Form Submit Handler
  const onSubmit = async (data: ContactInput) => {
    try {
      console.log("Contact Form Data:", data);
      // Add your email API or support desk logic here
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className="w-full max-w-md m-auto">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
        <CardDescription>
          Have questions or feedback? Send us a message and we will get back to you.
        </CardDescription>
      </CardHeader>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <div className="flex flex-col gap-5">
            
            {/* Full Name Field */}
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-xs font-medium text-destructive">{errors.name.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-xs font-medium text-destructive">{errors.email.message}</p>
              )}
            </div>

            {/* Subject Dropdown Field */}
            <div className="grid gap-2">
              <Label htmlFor="subject">Subject</Label>
              {/* Controlled component wrapper needed for Shadcn Select */}
              <Controller
                control={control}
                name="subject"
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="billing">Billing & Sales</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.subject && (
                <p className="text-xs font-medium text-destructive">{errors.subject.message}</p>
              )}
            </div>

            {/* Message Field */}
            <div className="grid gap-2">
              <Label htmlFor="message">Your Message</Label>
              <Textarea 
                id="message" 
                placeholder="How can we help you?"
                className="resize-none h-32"
                {...register("message")}
              />
              {errors.message && (
                <p className="text-xs font-medium text-destructive">{errors.message.message}</p>
              )}
            </div>

          </div>
        </CardContent>

        <CardFooter className="flex justify-end gap-2">
          {/* Explicit type="button" prevents accidental validation triggers */}
          <Button type="button" variant="secondary" onClick={() => reset()}>
            Reset
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

export default ContactForm;
