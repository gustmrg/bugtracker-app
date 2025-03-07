import { Bug } from "lucide-react";

import { LoginForm } from "@/components/login-form";

export function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-violet-700 text-primary-foreground">
            <Bug className="size-4" fill="white " />
          </div>
          BugTracker
        </a>
        <LoginForm />
      </div>
    </div>
  );
}
