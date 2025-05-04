
import { HeroSection } from "@/components/home/hero-section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Home() {
  // Featured projects
  const featuredProjects = [
    {
      title: "Project Alpha",
      description: "A responsive web application with modern UI/UX principles and animations.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Portfolio Redesign",
      description: "A complete redesign of a client portfolio with focus on minimalism and accessibility.",
      tags: ["Next.js", "Framer Motion", "Figma"],
    },
    {
      title: "Commerce Platform",
      description: "An e-commerce solution with inventory management and payment processing.",
      tags: ["React", "Node.js", "MongoDB"],
    },
  ];

  // Featured blog posts
  const featuredPosts = [
    {
      title: "Building Responsive Interfaces",
      excerpt: "Learn how to create interfaces that work across all device sizes without compromise.",
      date: "May 1, 2025",
    },
    {
      title: "The Future of Web Animation",
      excerpt: "Exploring modern animation techniques that enhance user experience without sacrificing performance.",
      date: "April 15, 2025",
    },
  ];

  return (
    <>
      <HeroSection />
      
      {/* About Preview Section */}
      <section className="section-padding bg-muted/50">
        <div className="page-container">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/2">
              <div className="aspect-square bg-secondary rounded-lg flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-muted-foreground/10 flex items-center justify-center">
                  <span className="text-xl font-medium">Jane Doe</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm a front-end developer with over 5 years of experience creating 
                accessible and user-friendly web applications. I'm passionate about 
                clean code, design systems, and creating delightful user experiences.
              </p>
              <Button asChild variant="outline">
                <Link to="/about">Learn More About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Preview Section */}
      <section className="section-padding">
        <div className="page-container">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="Some of my recent work that I'm proud of"
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="border hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="h-40 bg-secondary rounded-md mb-3 flex items-center justify-center">
                    <span className="text-muted-foreground">Project Image</span>
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-secondary rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Blog Preview Section */}
      <section className="section-padding bg-muted/50">
        <div className="page-container">
          <SectionHeading 
            title="From My Blog" 
            subtitle="Thoughts, insights and ideas that I share with the world"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <article key={index} className="border rounded-lg p-6 bg-background hover:shadow-md transition-shadow">
                <p className="text-sm text-muted-foreground">{post.date}</p>
                <h3 className="text-xl font-medium mt-2 mb-3">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Link to="/blog" className="text-primary link-hover font-medium">
                  Read More
                </Link>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link to="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Contact Call to Action */}
      <section className="section-padding">
        <div className="page-container">
          <div className="bg-primary text-primary-foreground rounded-lg py-12 px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Want to work together?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              I'm currently available for freelance work and open to new opportunities.
              If you're interested in collaborating or have a project in mind, let's connect!
            </p>
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
