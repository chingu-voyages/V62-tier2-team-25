import { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// Shadcn UI Components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

// google sign up button
import { GoogleLogin } from "@react-oauth/google";
import { formSchema } from "@/lib/formSchema";

const SignupForm = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
const handleSubmit = async (e) => {
    e.preventDefault();

    const validation = formSchema.safeParse(formValues);
    if (!validation.success) {
      const fieldErrors = validation.error.flatten().fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        password: fieldErrors.password?.[0],
        confirmPassword: fieldErrors.confirmPassword?.[0],
      });
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      let data;

      // Si estás probando localmente en tu máquina, simulamos la respuesta con token
      if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        data = { 
          token: "mock_local_signup_token_" + Math.random().toString(36).substring(2),
          user: { name: validation.data.name, email: validation.data.email }
        };
      } else {
        // En producción (Netlify), ejecuta la función serverless real
        const response = await fetch('/.netlify/functions/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(validation.data),
        });

        data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Signup failed");
        }
      }

      // --- GUARDAR LA SESIÓN DE FORMA SEGURA EN EL LOCALSTORAGE ---
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("userName", data.user.name);
      localStorage.setItem("isAuthenticated", "true");

      // Limpiar los valores del formulario
      setFormValues({ name: "", email: "", password: "", confirmPassword: "" });

      // Redirigir al usuario al panel protegido
      setTimeout(() => {
        navigate("/learning-path");
      }, 1500);

    } catch (err) {
      setErrors({ form: { message: err.message || "Network error occurred" } });
    } finally {
      setLoading(false);
    }
  };

  // Google Login Handlers
  const handleGoogleSuccess = (credentialResponse) => {
    console.log("Google Login Success:", credentialResponse);

    const tokenPayload = JSON.parse(
      atob(credentialResponse.credential.split(".")[1]),
    );

    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("googleToken", credentialResponse.credential);
    localStorage.setItem("userName", tokenPayload.name);

    setTimeout(() => {
      navigate("/learning-path");
    }, 2000);
  };

  // google login error handler
  const handleGoogleError = () => {
    console.log("Google Login Failed");
  };

  const inputClass = (hasError) =>
    cn(
      "h-10 rounded-lg border bg-slate-50 px-3 text-slate-900 placeholder:text-slate-400",
      "focus-visible:border-emerald-600 focus-visible:ring-2 focus-visible:ring-emerald-600/20",
      hasError &&
        "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20",
    );

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <FieldGroup>
        <FieldDescription className="mb-8 text-center text-black text-2xl font-bold">
          Create your account
        </FieldDescription>

        {/* Google OAuth Button */}
        <div className="flex justify-center w-full">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            theme="outline"
            size="large"
            shape="pill"
            width="100%"
          />
        </div>

        <div className="flex items-center gap-4 my-2">
          <div className="flex-1 h-px bg-[#c3c6d6]/30" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#424654]">
            OR
          </span>
          <div className="flex-1 h-px bg-[#c3c6d6]/30" />
        </div>

        <FieldGroup>
          {errors.form && (
            <FieldError className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-red-700">
              {errors.form.message}
            </FieldError>
          )}

          {/* Name */}
          <Field data-invalid={!!errors.name}>
            <FieldLabel
              htmlFor="name"
              className="text-sm font-medium text-slate-700"
            >
              Name
            </FieldLabel>
            <Input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              value={formValues.name}
              onChange={handleChange}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={inputClass(!!errors.name)}
            />
            {errors.name && (
              <FieldError id="name-error" className="text-xs text-red-600">
                {errors.name}
              </FieldError>
            )}
          </Field>

          {/* Email */}
          <Field data-invalid={!!errors.email}>
            <FieldLabel
              htmlFor="email"
              className="text-sm font-medium text-slate-700"
            >
              Email
            </FieldLabel>
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
              <FieldError id="email-error" className="text-xs text-red-600">
                {errors.email}
              </FieldError>
            )}
          </Field>

          {/* Password */}
          <Field data-invalid={!!errors.password}>
            <FieldLabel
              htmlFor="password"
              className="text-sm font-medium text-slate-700"
            >
              Password
            </FieldLabel>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                autoComplete="new-password"
                placeholder="At least 8 characters"
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
              <FieldError id="password-error" className="text-xs text-red-600">
                {errors.password}
              </FieldError>
            )}
          </Field>

          {/* Confirm password */}
          <Field data-invalid={!!errors.confirmPassword}>
            <FieldLabel
              htmlFor="confirmPassword"
              className="text-sm font-medium text-slate-700"
            >
              Confirm password
            </FieldLabel>
            <Input
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              autoComplete="new-password"
              placeholder="Re-enter your password"
              value={formValues.confirmPassword}
              onChange={handleChange}
              aria-invalid={!!errors.confirmPassword}
              aria-describedby={
                errors.confirmPassword ? "confirmPassword-error" : undefined
              }
              className={inputClass(!!errors.confirmPassword)}
            />
            {errors.confirmPassword && (
              <FieldError
                id="confirmPassword-error"
                className="text-xs text-red-600"
              >
                {errors.confirmPassword}
              </FieldError>
            )}
          </Field>

          <Button
            type="submit"
            disabled={loading}
            className="mt-2 h-11 w-full rounded-lg bg-slate-900 font-medium text-white hover:bg-slate-800"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            {loading ? "Creating account..." : "Create account"}
          </Button>
        </FieldGroup>

        <p className="mt-8 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-emerald-700 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </FieldGroup>
    </form>
  );
};

export default SignupForm;
