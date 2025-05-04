
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
      title: "Building Responsive Interfaces",
      excerpt: "Learn how to create interfaces that work across all device sizes without compromise.",
      date: "May 1, 2025",
      category: "Development",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Future of Web Animation",
      excerpt: "Exploring modern animation techniques that enhance user experience without sacrificing performance.",
      date: "April 15, 2025",
      category: "Design",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Accessibility in Modern Web Applications",
      excerpt: "Why accessibility should be a priority and how to implement it in your projects.",
      date: "March 22, 2025",
      category: "Development",
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "My Development Workflow in 2025",
      excerpt: "Tools, extensions, and processes I use to stay productive and focused.",
      date: "March 10, 2025",
      category: "Workflow",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Designing with Dark Mode in Mind",
      excerpt: "Best practices for creating beautiful interfaces that work well in both light and dark modes.",
      date: "February 28, 2025",
      category: "Design",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "State Management Simplified",
      excerpt: "Modern approaches to managing state in React applications without the complexity.",
      date: "February 15, 2025",
      category: "Development",
      readTime: "9 min read"
    },
  ];

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(blogPosts.map(post => post.category))];

  return (
    <div className="pt-28">
      <div className="page-container">
        <SectionHeading
          title="My Blog"
          subtitle="Thoughts, insights and ideas that I share with the world"
          align="left"
        />

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <div className="mb-8">
              <Input
                type="search"
                placeholder="Search posts..."
                className="max-w-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {filteredPosts.length === 0 ? (
              <div className="py-12 text-center">
                <p className="text-muted-foreground">No posts found matching your search.</p>
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
                      Read More
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="border rounded-lg p-6 sticky top-24">
              <h3 className="font-medium mb-4">Categories</h3>
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
                    Clear Filter
                  </Button>
                )}
              </div>

              <div className="mt-8 pt-8 border-t">
                <h3 className="font-medium mb-4">Newsletter</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Subscribe to get notified about new posts and updates.
                </p>
                <div className="space-y-2">
                  <Input placeholder="Your email" />
                  <Button className="w-full">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
