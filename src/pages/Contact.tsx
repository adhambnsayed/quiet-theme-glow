
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "تم إرسال الرسالة!",
        description: "شكرًا للتواصل. سأرد عليك قريبًا.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="pt-28" dir="rtl">
      <div className="page-container">
        <SectionHeading
          title="تواصل معي"
          subtitle="هل لديك سؤال أو ترغب في العمل معًا؟ تواصل معي مباشرة"
          align="right"
        />

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-medium mb-4">لنتواصل</h3>
            <p className="text-muted-foreground mb-6">
              أنا متاح حاليًا للعمل الحر ومنفتح على الفرص الجديدة.
              إذا كان لديك مشروع ترغب في بدئه، أو تعتقد أنني يمكنني مساعدتك في شيء ما،
              أو ترغب فقط في إلقاء التحية، فتواصل معي.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">البريد الإلكتروني</h4>
                <p className="text-muted-foreground">adhamebnsayedbnhanafi@gmail.com</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">الموقع</h4>
                <p className="text-muted-foreground">مصر، الجيزة</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">تابعني</h4>
                <div className="flex space-x-4">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    تويتر
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    جيثب
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    لينكد إن
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Card className="p-6">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">الاسم</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">الموضوع</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">الرسالة</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
