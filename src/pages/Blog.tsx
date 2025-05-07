
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [blogPosts, setBlogPosts] = useState([]);
  
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
                <p className="text-muted-foreground">لم يتم إضافة أي مقالات بعد.</p>
                <div className="mt-6">
                  <Button asChild>
                    <Link to="/admin">إضافة مقال جديد</Link>
                  </Button>
                </div>
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
