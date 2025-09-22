"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link"; 

interface SignInButtonProps {
  className?: string;
}
//Allows passing optional custom CSS classes (className) to the button.

export function SignInButton({ className }: SignInButtonProps) {
  return (
    <Button asChild className={className}>
      <Link href="/login">Sign In</Link> 
    </Button>
  );
}

////asChild means the Button renders the child element (<Link> in this case) instead of a <button> element.
