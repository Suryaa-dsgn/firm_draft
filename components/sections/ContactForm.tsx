"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CONTACT_EMAIL } from "@/lib/config";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  organisation: z.string().min(1, "Please enter your organisation"),
  problem: z
    .string()
    .min(20, "Please share a bit more about what you are trying to solve"),
});

type FormValues = z.infer<typeof schema>;

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormValues) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("server");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-card border border-hairline bg-surface p-10">
        <p className="font-mono text-mono-label uppercase tracking-widest text-accent">
          MESSAGE RECEIVED
        </p>
        <h2 className="mt-4 text-display-m font-semibold text-ink">
          We will be in touch.
        </h2>
        <p className="mt-4 text-body text-ink-muted">
          You can expect a reply within one business day. If anything is
          time-sensitive, email us directly at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-accent underline underline-offset-4"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="Your name"
          aria-invalid={!!errors.name}
          {...register("name")}
        />
        {errors.name && (
          <p className="font-mono text-mono-label text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Organisation */}
      <div className="space-y-2">
        <Label htmlFor="organisation">Organisation</Label>
        <Input
          id="organisation"
          placeholder="Fund or firm name"
          aria-invalid={!!errors.organisation}
          {...register("organisation")}
        />
        {errors.organisation && (
          <p className="font-mono text-mono-label text-red-500">
            {errors.organisation.message}
          </p>
        )}
      </div>

      {/* Problem */}
      <div className="space-y-2">
        <Label htmlFor="problem">What are you trying to solve?</Label>
        <Textarea
          id="problem"
          placeholder="Describe the situation briefly. We will come prepared."
          rows={6}
          aria-invalid={!!errors.problem}
          {...register("problem")}
        />
        {errors.problem && (
          <p className="font-mono text-mono-label text-red-500">
            {errors.problem.message}
          </p>
        )}
      </div>

      {/* Error banner */}
      {status === "error" && (
        <p className="rounded-input border border-red-200 bg-red-50 px-4 py-3 text-small text-red-700">
          Something went wrong. Try again or email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
            {CONTACT_EMAIL}
          </a>{" "}
          directly.
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "loading"}
        className={cn("w-full sm:w-auto", status === "loading" && "opacity-70")}
      >
        {status === "loading" ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
