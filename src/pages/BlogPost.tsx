
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  
  useEffect(() => {
    const storedPosts = localStorage.getItem('blogPosts');
    if (storedPosts) {
      const allPosts = JSON.parse(storedPosts);
      const foundPost = allPosts.find((p: any) => p.id === parseInt(id || "0"));
      setPost(foundPost || null);
      
      if (foundPost) {
        // البحث عن المقالات ذات الصلة (نفس الفئة)
        const related = allPosts
          .filter((p: any) => p.id !== foundPost.id && p.category === foundPost.category)
          .slice(0, 2);
        setRelatedPosts(related);
      }
    }
  }, [id]);

  if (!post) {
    return (
      <div className="pt-28 min-h-screen" dir="rtl">
        <div className="page-container">
          <div className="text-center py-16">
            <h1 className="text-3xl font-bold mb-4">المقال غير موجود</h1>
            <p className="text-muted-foreground mb-8">المقال الذي تبحث عنه غير متوفر.</p>
            <Button asChild>
              <Link to="/blog">العودة إلى المدونة</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28" dir="rtl">
      <div className="page-container">
        <div className="mb-8">
          <Link to="/blog" className="text-primary link-hover flex items-center gap-2">
            &larr; العودة إلى المدونة
          </Link>
        </div>
        
        <article className="max-w-3xl mx-auto">
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.category}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-medium text-sm">{post.author?.charAt(0)}</span>
              </div>
              <span>{post.author}</span>
            </div>
          </header>
          
          {post.image && (
            <div className="mb-8">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          )}
          
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n').map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          {relatedPosts.length > 0 && (
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-xl font-bold mb-4">مقالات ذات صلة</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.id}>
                    <CardContent className="p-4">
                      <div className="text-sm text-muted-foreground mb-2">{relatedPost.date}</div>
                      <h3 className="text-lg font-medium mb-2">
                        <Link to={`/blog/${relatedPost.id}`} className="hover:text-primary transition-colors">
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
