# Phase 03: Registration Form

## Objective
Create the registration form to collect user information (full name, email, phone, work/company).

## Implementation

### Create Form Component: `app/bimspeed-promo/components/registration-form.tsx`

```tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { submitPromoForm } from "@/lib/api/bimspeed-promo";
import { Loader2, CheckCircle, Download } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  work: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  work?: string;
}

export function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    work: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.work.trim()) {
      newErrors.work = "Work/Company is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await submitPromoForm({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        work: formData.work,
        submittedAt: new Date().toISOString(),
      });
      setIsSuccess(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Card className="border-primary/20">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Thank You!</h3>
          <p className="text-muted-foreground mb-6">
            Your registration has been received. Download BIMSpped Pro now and start boosting your productivity.
          </p>
          <Button
            asChild
            size="lg"
            className="gap-2"
          >
            <a
              href="https://drive.google.com/drive/folders/18mScSQVgRK9lStk3x4D8ZIi2mxD7r6IU"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-5 h-5" />
              Download BIMSpped Pro
            </a>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Claim Your Free License</CardTitle>
        <CardDescription>
          Fill in your details below to get 3 months of BIMSpped Pro for free
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
              aria-invalid={!!errors.fullName}
            />
            {errors.fullName && (
              <p className="text-sm text-destructive">{errors.fullName}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@company.com"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={formData.phone}
              onChange={handleChange}
              aria-invalid={!!errors.phone}
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="work">Work / Company</Label>
            <Input
              id="work"
              name="work"
              type="text"
              placeholder="ABC Architecture Firm"
              value={formData.work}
              onChange={handleChange}
              aria-invalid={!!errors.work}
            />
            {errors.work && (
              <p className="text-sm text-destructive">{errors.work}</p>
            )}
          </div>

          {submitError && (
            <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-md">
              <p className="text-sm text-destructive text-center">{submitError}</p>
            </div>
          )}

          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              "Get Free License"
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting, you agree to receive communications about BIMSpped products.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
```

## Key Points

1. **Form Fields**: Full Name, Email, Phone, Work/Company
2. **Validation**: Client-side validation with error messages
3. **States**: Default, Submitting, Success, Error
4. **Success UI**: Shows download link to Google Drive
5. **Accessibility**: ARIA labels, error states, keyboard navigation
6. **UX**: Clear error messages, loading states, success confirmation

## Next Phase
After this phase is complete, proceed to Phase 04 to implement the API integration.
