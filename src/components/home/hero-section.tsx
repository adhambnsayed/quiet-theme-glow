
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="pt-32 pb-16">
      <div className="page-container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Hi, I'm <span className="text-primary">Jane Doe</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            A passionate web developer building beautiful interfaces and experiences.
            I craft clean code and transform ideas into digital reality.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
