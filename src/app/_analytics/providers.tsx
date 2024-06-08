"use client";
import { useEffect, type ReactNode } from "react";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useAuth, useUser } from "@clerk/nextjs";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    ui_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    api_host: "/ingest",
    person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
  });
}

export function CSPostHogProvider({ children }: { children: ReactNode }) {
  return (
    <PostHogProvider client={posthog}>
      <PostHogAuthWrapper>{children}</PostHogAuthWrapper>
    </PostHogProvider>
  );
}

export function PostHogAuthWrapper({ children }: { children: ReactNode }) {
  const auth = useAuth();
  const userInfo = useUser();

  useEffect(() => {
    if (userInfo.user) {
      posthog.identify(userInfo.user.id, {
        email: userInfo.user.emailAddresses[0]?.emailAddress,
        name: userInfo.user.fullName,
      });
    } else if (!auth.isSignedIn) {
      posthog.reset();
    }
  }, [userInfo, auth]);

  return children;
}
