"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const session = false;

  useEffect(() => {
    if (!session) {
      router.push("/dashboard");
    }
  }, []);

  return <main>Hola Mundo!</main>;
}
