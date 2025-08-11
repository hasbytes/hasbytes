import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");

    console.log("Contact request (placeholder):", { name, email, message });
    await new Promise((r) => setTimeout(r, 700));
    toast.success("Thanks — I’ll get back to you soon.");
    setSubmitting(false);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4" aria-labelledby="contact-heading">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Your name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="email@example.com" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Tell me about your campaign or goals" rows={5} />
      </div>
      <Button type="submit" disabled={submitting} className="group">
        {submitting ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
};

export default ContactForm;
