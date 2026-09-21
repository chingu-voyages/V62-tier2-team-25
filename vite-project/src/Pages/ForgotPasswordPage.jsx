import { useState } from "react";
import { ArrowLeft, Loader2, MailCheck } from "lucide-react";
import { Link } from "react-router-dom";
import leafLogo from "../assets/leaf.png";

// Shadcn UI Components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

import { forgotPasswordSchema } from "@/lib/forgotPasswordSchema";

const ForgotPasswordPage = () => {
  const [formValues, setFormValues] = useState({ email: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [sentTo, setSentTo] = useState(""); // email the reset link was sent to

  // handling input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = forgotPasswordSchema.safeParse(formValues);
    if (!validation.success) {
      const fieldErrors = validation.error.flatten().fieldErrors;
      setErrors({ email: fieldErrors.email?.[0] });
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      console.log("Reset link requested for:", validation.data.email);
      setSentTo(validation.data.email);
      setFormValues({ email: "" });
    } catch {
      setErrors({ form: { message: "An unexpected error occurred" } });
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (hasError) =>
    cn(
      "h-10 rounded-lg border bg-slate-50 px-3 text-slate-900 placeholder:text-slate-400",
      "focus-visible:border-emerald-600 focus-visible:ring-2 focus-visible:ring-emerald-600/20",
      hasError &&
        "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20",
    );

  return (
    <div className="flex w-full justify-center px-4 py-16 sm:py-24">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-900/5 sm:p-10">
        {/* Brand */}
        <div className="mb-2 flex items-center justify-center gap-2">
          <img
            src={leafLogo}
            alt=""
            aria-hidden="true"
            className="h-7 w-7 object-contain"
          />
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            <span className="text-slate-900">Dev</span>
            <span className="text-emerald-700">Trajectory</span>
          </h1>
        </div>

        {sentTo ? (
          /* Success state */
          <div className="mt-6 flex flex-col items-center text-center">
            <MailCheck className="mb-4 h-10 w-10 text-emerald-700" />
            <p className="text-sm text-slate-600">
              If an account exists for{" "}
              <span className="font-medium text-slate-900">{sentTo}</span>,
              you'll get an email with a link to reset your password.
            </p>
            <button
              type="button"
              onClick={() => setSentTo("")}
              className="mt-6 text-sm font-medium text-emerald-700 hover:underline"
            >
              Use a different email
            </button>
          </div>
        ) : (
          <>
            <p className="mb-8 text-center text-sm text-slate-500">
              Enter your email and we'll send you a reset link
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {errors.form && (
                <p
                  role="alert"
                  className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
                >
                  {errors.form.message}
                </p>
              )}

              {/* Email */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-700"
                >
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  placeholder="email@example.com"
                  value={formValues.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={inputClass(!!errors.email)}
                />
                {errors.email && (
                  <p id="email-error" className="text-xs text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="mt-2 h-11 w-full rounded-lg bg-slate-900 font-medium text-white hover:bg-slate-800"
              >
                {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                {loading ? "Sending link..." : "Send reset link"}
              </Button>
            </form>
          </>
        )}

        <p className="mt-8 text-center text-sm text-slate-500">
          <Link
            to="/login"
            className="inline-flex items-center gap-1 font-medium text-emerald-700 hover:underline"
          >
            <ArrowLeft size={14} />
            Back to sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
