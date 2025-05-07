
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="pt-32 pb-16" dir="rtl">
      <div className="page-container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            مرحباً، أنا <span className="text-primary">أدهم سيد</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            مطور ويب متخصص في بناء واجهات استخدام جميلة وتجارب مستخدم متميزة.
            أقوم بكتابة كود نظيف وتحويل الأفكار إلى واقع رقمي.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">تواصل معي</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/blog">المدونة</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
