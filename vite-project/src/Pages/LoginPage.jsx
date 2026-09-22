import { useState } from "react";
import { Home, Eye, EyeOff, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import leafLogo from "../assets/leaf.png";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

import { loginSchema } from "@/lib/loginSchema";

const LoginPage = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // handling input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = loginSchema.safeParse(formValues);
    if (!validation.success) {
      const fieldErrors = validation.error.flatten().fieldErrors;
      setErrors({
        email: fieldErrors.email?.[0],
        password: fieldErrors.password?.[0],
      });
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      console.log("User Creds:", validation.data);
      setFormValues({ email: "", password: "" });
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
    <div className="w-full">

      <div className="max-w-7xl mx-auto px-4 pt-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl shadow-sm hover:bg-gray-50 transition-all"
        >
          <Home className="w-4 h-4 text-gray-500" />
          Home
        </Link>
      </div>

      <div className="flex w-full justify-center px-4 py-16 sm:py-24">
        <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-900/5 sm:p-10">
       
        <div className="mb-8 flex items-center justify-center gap-2">
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

          {/* Password */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-slate-700"
              >
                Password
              </Label>
              <Link
                to="/forgot-password"
                className="text-sm font-medium text-emerald-700 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                value={formValues.password}
                onChange={handleChange}
                aria-invalid={!!errors.password}
                aria-describedby={
                  errors.password ? "password-error" : undefined
                }
                className={cn(inputClass(!!errors.password), "pr-10")}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-400 hover:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/40"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <p id="password-error" className="text-xs text-red-600">
                {errors.password}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="mt-2 h-11 w-full rounded-lg bg-slate-900 font-medium text-white hover:bg-slate-800"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            {loading ? "Signing in..." : "Sign in"}
          </Button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-emerald-700 hover:underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  </div>
  );
};

export default LoginPage;