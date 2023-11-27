"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function LoginPage() {
  return (
    <section>
      <div>
        <h3>Sign in to your account</h3>
        <button onClick={() => signIn("google", { callbackUrl: "/" })}>
          <Image src="/google.svg" alt="Google Logo" width={24} height={24} />
          Sign in with Google
        </button>
      </div>
    </section>
  );
}
