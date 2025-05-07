
import { HeroSection } from "@/components/home/hero-section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
  // Featured blog posts
  const featuredPosts = [
    {
      title: "بناء واجهات متجاوبة",
      excerpt: "تعلم كيفية إنشاء واجهات تعمل على جميع أحجام الأجهزة دون تنازل.",
      date: "1 مايو 2025",
    },
    {
      title: "مستقبل الرسوم المتحركة على الويب",
      excerpt: "استكشاف تقنيات الرسوم المتحركة الحديثة التي تعزز تجربة المستخدم دون التضحية بالأداء.",
      date: "15 أبريل 2025",
    },
  ];

  return (
    <>
      <HeroSection />
      
      {/* About Preview Section */}
      <section className="section-padding bg-muted/50" dir="rtl">
        <div className="page-container">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">عني</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                أنا مطور واجهات أمامية بخبرة أكثر من 5 سنوات في إنشاء 
                تطبيقات ويب يمكن الوصول إليها وسهلة الاستخدام. أنا شغوف 
                بالكود النظيف وأنظمة التصميم وإنشاء تجارب مستخدم مميزة.
              </p>
              <Button asChild variant="outline">
                <Link to="/about">اقرأ المزيد عني</Link>
              </Button>
            </div>
            <div className="w-full md:w-1/2">
              <div className="aspect-square bg-secondary rounded-lg flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-muted-foreground/10 flex items-center justify-center">
                  <span className="text-xl font-medium">أدهم سيد</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Preview Section */}
      <section className="section-padding bg-muted/50" dir="rtl">
        <div className="page-container">
          <SectionHeading 
            title="من مدونتي" 
            subtitle="أفكار ورؤى أشاركها مع العالم"
            align="right"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <article key={index} className="border rounded-lg p-6 bg-background hover:shadow-md transition-shadow">
                <p className="text-sm text-muted-foreground">{post.date}</p>
                <h3 className="text-xl font-medium mt-2 mb-3">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Link to="/blog" className="text-primary link-hover font-medium">
                  اقرأ المزيد
                </Link>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link to="/blog">عرض جميع المقالات</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Contact Call to Action */}
      <section className="section-padding" dir="rtl">
        <div className="page-container">
          <div className="bg-primary text-primary-foreground rounded-lg py-12 px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">هل ترغب في العمل معًا؟</h2>
            <p className="max-w-2xl mx-auto mb-8">
              أنا متاح حاليًا للعمل الحر ومنفتح على الفرص الجديدة.
              إذا كنت مهتمًا بالتعاون أو لديك مشروع في ذهنك، دعنا نتواصل!
            </p>
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">تواصل معي</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
