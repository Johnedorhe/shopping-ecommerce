"use client"

import { useForm } from "react-hook-form"
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
import Link from "next/link"

// 1. Validation Schema
export const LoginSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required"),
  content: z
    .string()
    .min(1, "Enter some content"),
});

export type LoginInput = z.infer<typeof LoginSchema>;

export function CardDemo() {
  // 2. Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  // 3. Form Submit Handler
  const onSubmit = async (data: LoginInput) => {
    try {
      console.log("Form Data:", data);
      // Add your authentication API logic here
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className="w-full max-w-sm m-auto">
      <CardHeader>
        <CardTitle>Form submission</CardTitle>
        <CardDescription>
          Kindly enter some data to test the form validation and submission process.
        </CardDescription>
      </CardHeader>
      
      {/* 4. Wrap form around inputs and submit buttons */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <div className="flex flex-col gap-6">
            {/* Title Field */}
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                type="text"
                placeholder="Enter a title"
                {...register("title")} // 5. Register Field
              />
              {/* 6. Display Errors */}
              {errors.title && (
                <p className="text-xs font-medium text-destructive">{errors.title.message}</p>
              )}
            </div>

            {/* Content Field */}
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="content">Content</Label>
              </div>
              <Textarea 
              className="resize-none h-36 mb-4"
                id="content" 
                placeholder="Enter the content"
                {...register("content")} // 5. Register Field
              />
              {/* 6. Display Errors */}
              {errors.content && (
                <p className="text-xs font-medium text-destructive">{errors.content.message}</p>
              )}
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex gap-2">
          {/* 7. Native submit button triggers validation */}
          <Button variant='secondary'>Reset</Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </CardFooter>
      </form>
      <Link className="m-4" href="/contact-us">Go to Contact Us Form</Link>
    </Card>
  )
}

export default CardDemo;
