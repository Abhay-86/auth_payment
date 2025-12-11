"use client"

import { useState } from "react"
import { CenterModal } from "@/components/ui/central-modal"
import { LoginForm } from "@/components/login-form"
import { SignupForm } from "@/components/singup-form"
import { OTPForm } from "@/components/otp-form"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ModeToggle } from "@/components/toggle"

export default function Home() {
  const [loginOpen, setLoginOpen] = useState(false)
  const [signupOpen, setSignupOpen] = useState(false)
  const [otpOpen, setOtpOpen] = useState(false)

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 bg-background/80 backdrop-blur border-b z-50">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">A</span>
            </div>
            <span className="text-xl font-semibold">AuthPayment</span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="#what" className="text-sm hover:text-primary">What we do</Link>
            <Link href="#testimonials" className="text-sm hover:text-primary">Testimonials</Link>
            <ModeToggle />

            <Button variant="ghost" onClick={() => setLoginOpen(true)}>Sign In</Button>
            <Button onClick={() => setSignupOpen(true)}>Sign Up</Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-4xl font-bold leading-tight">
              Payments made simple and secure
            </h1>
            <p className="mt-4 text-muted-foreground">
              AuthPayment helps you accept payments, manage subscriptions, and keep your users secure.
            </p>

            <div className="mt-6 flex gap-3">
              <Button size="lg" onClick={() => setSignupOpen(true)}>Get started</Button>
              <Button size="lg" variant="ghost" onClick={() => setLoginOpen(true)}>Learn more</Button>
            </div>
          </div>

          <div className="h-64 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
            Illustration / Image
          </div>
        </div>
      </section>

      {/* LOGIN MODAL */}
      <CenterModal
        open={loginOpen}
        onOpenChange={setLoginOpen}
        title=""
        description=""
      >
        <LoginForm />
      </CenterModal>

      {/* SIGNUP MODAL */}
      <CenterModal
        open={signupOpen}
        onOpenChange={setSignupOpen}
        title=""
        description=""
      >
        <SignupForm onSuccess={() => {
          setSignupOpen(false)
          setOtpOpen(true)
        }} />
      </CenterModal>

      {/* OTP MODAL */}
      <CenterModal
        open={otpOpen}
        onOpenChange={setOtpOpen}
        title="Verify your email"
        description="Enter the 6-digit code sent to your email"
      >
        <OTPForm />
      </CenterModal>
    </>
  )
}
