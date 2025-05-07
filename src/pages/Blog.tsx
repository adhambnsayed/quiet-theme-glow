
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const blogPosts = [
    {
      id: 1,
      title: "بناء واجهات متجاوبة",
      excerpt: "تعلم كيفية إنشاء واجهات تعمل على جميع أحجام الأجهزة دون تنازل.",
      date: "1 مايو 2025",
      category: "تطوير",
      readTime: "5 دقائق قراءة"
    },
    {
      id: 2,
      title: "مستقبل الرسوم المتحركة على الويب",
      excerpt: "استكشاف تقنيات الرسوم المتحركة الحديثة التي تعزز تجربة المستخدم دون التضحية بالأداء.",
      date: "15 أبريل 2025",
      category: "تصميم",
      readTime: "8 دقائق قراءة"
    },
    {
      id: 3,
      title: "إمكانية الوصول في تطبيقات الويب الحديثة",
      excerpt: "لماذا يجب أن تكون إمكانية الوصول أولوية وكيفية تنفيذها في مشاريعك.",
      date: "22 مارس 2025",
      category: "تطوير",
      readTime: "7 دقائق قراءة"
    },
    {
      id: 4,
      title: "سير عملي التطويري في 2025",
      excerpt: "الأدوات والملحقات والعمليات التي أستخدمها للبقاء منتجًا ومركزًا.",
      date: "10 مارس 2025",
      category: "سير العمل",
      readTime: "6 دقائق قراءة"
    },
    {
      id: 5,
      title: "التصميم مع الوضع الداكن في الاعتبار",
      excerpt: "أفضل الممارسات لإنشاء واجهات جميلة تعمل بشكل جيد في كل من الوضع الفاتح والداكن.",
      date: "28 فبراير 2025",
      category: "تصميم",
      readTime: "5 دقائق قراءة"
    },
    {
      id: 6,
      title: "إدارة الحالة ببساطة",
      excerpt: "نهج حديث لإدارة الحالة في تطبيقات رياكت دون تعقيد.",
      date: "15 فبراير 2025",
      category: "تطوير",
      readTime: "9 دقائق قراءة"
    },
  ];

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(blogPosts.map(post => post.category))];

  return (
    <div className="pt-28" dir="rtl">
      <div className="page-container">
        <SectionHeading
          title="مدونتي"
          subtitle="أفكار ورؤى وأفكار أشاركها مع العالم"
          align="right"
        />

        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="border rounded-lg p-6 sticky top-24">
              <h3 className="font-medium mb-4">التصنيفات</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => setSearchTerm(category)}
                  >
                    {category}
                  </Button>
                ))}
                {searchTerm && (
                  <Button
                    variant="outline"
                    className="w-full mt-4"
                    onClick={() => setSearchTerm("")}
                  >
                    مسح التصفية
                  </Button>
                )}
              </div>

              <div className="mt-8 pt-8 border-t">
                <h3 className="font-medium mb-4">النشرة الإخبارية</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  اشترك للحصول على إشعارات حول المنشورات والتحديثات الجديدة.
                </p>
                <div className="space-y-2">
                  <Input placeholder="بريدك الإلكتروني" />
                  <Button className="w-full">اشتراك</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="mb-8">
              <Input
                type="search"
                placeholder="البحث في المقالات..."
                className="max-w-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {filteredPosts.length === 0 ? (
              <div className="py-12 text-center">
                <p className="text-muted-foreground">لا توجد مقالات تطابق بحثك.</p>
              </div>
            ) : (
              <div className="space-y-10">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="border-b pb-10 last:border-0">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      <Link to={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Link to={`/blog/${post.id}`} className="text-primary link-hover font-medium">
                      قراءة المزيد
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
