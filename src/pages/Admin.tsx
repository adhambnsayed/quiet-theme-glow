
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const blogPostSchema = z.object({
  title: z.string().min(5, { message: "العنوان يجب أن يكون على الأقل 5 أحرف" }),
  category: z.string().min(3, { message: "يجب تحديد التصنيف" }),
  content: z.string().min(50, { message: "المحتوى يجب أن يكون على الأقل 50 حرف" }),
  readTime: z.string().min(1, { message: "يجب تحديد وقت القراءة" }),
});

export default function Admin() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [blogPosts, setBlogPosts] = useState<any[]>([]);

  // استرجاع المقالات المحفوظة عند تحميل الصفحة
  useEffect(() => {
    const storedPosts = localStorage.getItem('blogPosts');
    if (storedPosts) {
      setBlogPosts(JSON.parse(storedPosts));
    }
  }, []);

  // حفظ المقالات في localStorage عند تغييرها
  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
  }, [blogPosts]);

  const form = useForm<z.infer<typeof blogPostSchema>>({
    resolver: zodResolver(blogPostSchema),
    defaultValues: {
      title: "",
      category: "",
      content: "",
      readTime: "",
    },
  });

  const onSubmit = (values: z.infer<typeof blogPostSchema>) => {
    const newPost = {
      id: Date.now(), // استخدام الطابع الزمني كمعرف فريد
      title: values.title,
      content: values.content,
      excerpt: values.content.substring(0, 150) + "...",
      date: new Date().toLocaleDateString("ar-EG", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      category: values.category,
      readTime: values.readTime,
      author: "أدهم سيد",
    };

    setBlogPosts([newPost, ...blogPosts]);
    form.reset();
    toast({
      title: "تم إنشاء المقال بنجاح",
      description: "تم إضافة المقال إلى قائمة المقالات",
    });
  };

  const deletePost = (id: number) => {
    setBlogPosts(blogPosts.filter(post => post.id !== id));
    toast({
      title: "تم حذف المقال",
      description: "تم حذف المقال من قائمة المقالات",
      variant: "destructive",
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    toast({
      title: "تم تسجيل الخروج بنجاح",
    });
    navigate("/login");
  };

  return (
    <div className="pt-28" dir="rtl">
      <div className="page-container">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">لوحة التحكم</h1>
          <Button variant="outline" onClick={handleLogout}>تسجيل الخروج</Button>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>إنشاء مقال جديد</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>عنوان المقال</FormLabel>
                          <FormControl>
                            <Input placeholder="أدخل عنوان المقال" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>التصنيف</FormLabel>
                          <FormControl>
                            <Input placeholder="مثال: تطوير، تصميم، سير العمل" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="readTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>وقت القراءة</FormLabel>
                          <FormControl>
                            <Input placeholder="مثال: 5 دقائق قراءة" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="content"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>محتوى المقال</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="أدخل محتوى المقال هنا..." 
                              className="min-h-[300px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full">نشر المقال</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>المقالات المنشورة ({blogPosts.length})</CardTitle>
              </CardHeader>
              <CardContent>
                {blogPosts.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    لا توجد مقالات منشورة بعد
                  </div>
                ) : (
                  <div className="space-y-4">
                    {blogPosts.map((post) => (
                      <div key={post.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold">{post.title}</h3>
                            <div className="text-sm text-muted-foreground">
                              {post.date} • {post.category} • {post.readTime}
                            </div>
                            <p className="mt-2 line-clamp-2">{post.excerpt}</p>
                          </div>
                          <Button 
                            variant="destructive"
                            size="sm"
                            onClick={() => deletePost(post.id)}
                          >
                            حذف
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
