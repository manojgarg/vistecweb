"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const ORG_TYPES = [
  { value: "health-system", label: "Health System / Hospital" },
  { value: "physician-group", label: "Physician Group / Practice" },
  { value: "billing-company", label: "Billing Company / MSO" },
  { value: "asc", label: "Ambulatory Surgery Center" },
  { value: "other", label: "Other" },
];

const PROVIDER_COUNTS = [
  { value: "1-10", label: "1–10 providers" },
  { value: "11-50", label: "11–50 providers" },
  { value: "51-200", label: "51–200 providers" },
  { value: "201-500", label: "201–500 providers" },
  { value: "500+", label: "500+ providers" },
];

const CHALLENGES = [
  { value: "denials", label: "Too many denials" },
  { value: "ar-days", label: "AR days too high" },
  { value: "staff", label: "Can't hire/retain billing staff" },
  { value: "tech", label: "Current RCM tech isn't working" },
  { value: "growth", label: "Scaling for growth" },
  { value: "evaluating", label: "Evaluating options" },
];

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z
    .string()
    .min(1, "Work email is required")
    .email("Please enter a valid email")
    .refine(
      (v) => !/@(gmail|yahoo|outlook|hotmail|aol|icloud|proton)\.(com|mail)/i.test(v),
      "Please use your work email",
    ),
  organization: z.string().min(1, "Organization is required"),
  title: z.string().min(1, "Title is required"),
  orgType: z.string().min(1, "Please select an organization type"),
  providerCount: z.string().min(1, "Please select a provider count"),
  challenge: z.string().min(1, "Please select a primary challenge"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function DemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormValues) => {
    await new Promise((res) => setTimeout(res, 900));
    setSubmitted(true);
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col items-center gap-4 py-12 text-center"
          >
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="grid h-16 w-16 place-items-center rounded-full bg-teal-500/10 text-teal-500"
            >
              <CheckCircle2 className="h-10 w-10" strokeWidth={1.75} />
            </motion.div>
            <h3 className="text-h3 font-semibold text-gray-900">Request received.</h3>
            <p className="max-w-md text-body text-gray-600">
              A member of our revenue strategy team will reach out within one business day to
              schedule your demo. In the meantime, check your inbox for a short confirmation.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
            noValidate
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Input
                label="First name"
                required
                autoComplete="given-name"
                {...register("firstName")}
                error={errors.firstName?.message}
              />
              <Input
                label="Last name"
                required
                autoComplete="family-name"
                {...register("lastName")}
                error={errors.lastName?.message}
              />
            </div>
            <Input
              label="Work email"
              type="email"
              required
              autoComplete="email"
              {...register("email")}
              error={errors.email?.message}
              hint="Please use your organization email, not a personal one."
            />
            <div className="grid gap-5 md:grid-cols-2">
              <Input
                label="Organization"
                required
                autoComplete="organization"
                {...register("organization")}
                error={errors.organization?.message}
              />
              <Input
                label="Title"
                required
                autoComplete="organization-title"
                {...register("title")}
                error={errors.title?.message}
              />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <Select
                label="Organization type"
                required
                options={ORG_TYPES}
                {...register("orgType")}
                error={errors.orgType?.message}
              />
              <Select
                label="Number of providers"
                required
                options={PROVIDER_COUNTS}
                {...register("providerCount")}
                error={errors.providerCount?.message}
              />
            </div>
            <Select
              label="Primary challenge"
              required
              options={CHALLENGES}
              {...register("challenge")}
              error={errors.challenge?.message}
            />
            <Textarea
              label="Anything else we should know?"
              placeholder="EHR, payer mix, what you've tried, timelines…"
              {...register("message")}
              error={errors.message?.message}
            />
            <div className="mt-2 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-caption text-gray-500">
                By submitting, you agree to our{" "}
                <a href="/privacy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
                . No spam — ever.
              </p>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                icon={
                  isSubmitting ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <ArrowRight className="h-4 w-4" />
                  )
                }
              >
                {isSubmitting ? "Sending…" : "Request Demo"}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
