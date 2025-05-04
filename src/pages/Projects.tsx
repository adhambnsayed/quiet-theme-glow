
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");
  
  const projects = [
    {
      title: "Project Alpha",
      description: "A responsive web application with modern UI/UX principles and animations.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      category: "web",
      featured: true,
      link: "https://example.com"
    },
    {
      title: "Portfolio Redesign",
      description: "A complete redesign of a client portfolio with focus on minimalism and accessibility.",
      tags: ["Next.js", "Framer Motion", "Figma"],
      category: "design",
      featured: true,
      link: "https://example.com"
    },
    {
      title: "Commerce Platform",
      description: "An e-commerce solution with inventory management and payment processing.",
      tags: ["React", "Node.js", "MongoDB"],
      category: "web",
      featured: true,
      link: "https://example.com"
    },
    {
      title: "Task Manager",
      description: "A productivity app to manage personal and team tasks with deadline tracking.",
      tags: ["Vue.js", "Supabase", "Tailwind CSS"],
      category: "app",
      featured: false,
      link: "https://example.com"
    },
    {
      title: "Brand System",
      description: "A comprehensive brand identity design for a tech startup.",
      tags: ["Figma", "Illustrator", "UI Design"],
      category: "design",
      featured: false,
      link: "https://example.com"
    },
    {
      title: "News Aggregator",
      description: "An app that collects and organizes news from various sources based on user preferences.",
      tags: ["React Native", "Redux", "API Integration"],
      category: "app",
      featured: false,
      link: "https://example.com"
    },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { name: "All", value: "all" },
    { name: "Web", value: "web" },
    { name: "App", value: "app" },
    { name: "Design", value: "design" },
  ];

  return (
    <div className="pt-28">
      <div className="page-container">
        <SectionHeading
          title="My Projects"
          subtitle="Explore my recent work and the solutions I've built"
          align="left"
        />

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.value}
              onClick={() => setFilter(category.value)}
              variant={filter === category.value ? "default" : "outline"}
              size="sm"
              className="rounded-full"
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="border hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="h-48 bg-secondary rounded-md mb-3 flex items-center justify-center">
                  <span className="text-muted-foreground">Project Image</span>
                </div>
                <CardTitle className="flex justify-between items-start">
                  <span>{project.title}</span>
                  {project.featured && (
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                      Featured
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-secondary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary link-hover font-medium"
                >
                  View Project
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
