
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");
  
  const projects = [
    {
      title: "E-Commerce Store",
      description: "A full-featured online shopping platform with product catalog, cart, and secure checkout.",
      tags: ["React", "Node.js", "MongoDB"],
      category: "web",
      featured: true,
      link: "https://example.com"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media managers with real-time data visualization.",
      tags: ["Vue.js", "Firebase", "Chart.js"],
      category: "web",
      featured: true,
      link: "https://example.com"
    },
    {
      title: "Travel Application",
      description: "Mobile app for travelers to discover new places, plan itineraries, and share experiences.",
      tags: ["React Native", "GraphQL", "AWS"],
      category: "app",
      featured: true,
      link: "https://example.com"
    },
    {
      title: "Restaurant Booking System",
      description: "Online reservation system for restaurants with table management and customer notifications.",
      tags: ["Next.js", "PostgreSQL", "Stripe"],
      category: "web",
      featured: false,
      link: "https://example.com"
    },
    {
      title: "Fitness Tracker",
      description: "Mobile application for tracking workouts, nutrition, and achieving fitness goals.",
      tags: ["Flutter", "Firebase", "HealthKit"],
      category: "app",
      featured: false,
      link: "https://example.com"
    },
    {
      title: "Corporate Website",
      description: "Modern, responsive website design for a financial services company.",
      tags: ["HTML/CSS", "JavaScript", "WordPress"],
      category: "design",
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
