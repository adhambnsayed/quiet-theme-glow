
import { SectionHeading } from "@/components/layout/section-heading";

export default function About() {
  return (
    <div className="pt-28">
      <div className="page-container">
        <SectionHeading
          title="About Me"
          subtitle="Learn more about my background and what drives me"
          align="left"
        />

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <div className="col-span-2">
            <h3 className="text-2xl font-medium mb-4">My Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm Adham-Sayed, a passionate web developer with over 5 years of industry experience. My journey
                in web development began during my university years, where I discovered my love for creating
                beautiful, functional interfaces.
              </p>
              <p>
                Throughout my career, I've worked with startups, agencies, and established companies,
                helping them bring their digital products to life. I take pride in writing clean, accessible
                code and creating intuitive user experiences.
              </p>
              <p>
                When I'm not coding, you can find me exploring hiking trails, experimenting with new cooking
                recipes, or engaging with the local tech community through workshops and meetups.
              </p>
              <p>
                I believe in continuous learning and staying updated with the latest trends and technologies
                in the ever-evolving web development landscape.
              </p>
            </div>
          </div>
          
          <div>
            <div className="aspect-square bg-secondary rounded-lg flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-muted-foreground/10 flex items-center justify-center">
                <span className="text-lg font-medium">Adham-Sayed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
