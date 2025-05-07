
import { SectionHeading } from "@/components/layout/section-heading";

export default function About() {
  return (
    <div className="pt-28" dir="rtl">
      <div className="page-container">
        <SectionHeading
          title="عني"
          subtitle="تعرف أكثر على خلفيتي وما يحفزني"
          align="right"
        />

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <div>
            <div className="aspect-square bg-secondary rounded-lg flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-muted-foreground/10 flex items-center justify-center">
                <span className="text-lg font-medium">أدهم سيد</span>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <h3 className="text-2xl font-medium mb-4">قصتي</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                أنا أدهم سيد، مطور ويب شغوف بخبرة أكثر من 5 سنوات في المجال. بدأت رحلتي
                في تطوير الويب خلال سنوات دراستي الجامعية، حيث اكتشفت شغفي بإنشاء
                واجهات جميلة وعملية.
              </p>
              <p>
                خلال مسيرتي المهنية، عملت مع شركات ناشئة ووكالات وشركات راسخة،
                ساعدتهم في إحياء منتجاتهم الرقمية. أفتخر بكتابة كود نظيف وسهل الوصول
                وإنشاء تجارب مستخدم بديهية.
              </p>
              <p>
                عندما لا أكون أمام شاشة الكمبيوتر، يمكنك أن تجدني أستكشف مسارات المشي، أجرب وصفات طبخ جديدة،
                أو أشارك في مجتمع التقنية المحلي من خلال ورش العمل والملتقيات.
              </p>
              <p>
                أؤمن بالتعلم المستمر ومواكبة أحدث الاتجاهات والتقنيات
                في عالم تطوير الويب المتطور باستمرار.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
