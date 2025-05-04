
import { SectionHeading } from "@/components/layout/section-heading";

export default function About() {
  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
    { category: "Design", items: ["Figma", "Adobe XD", "UI/UX Design", "Responsive Design"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL"] },
    { category: "Tools", items: ["Git", "GitHub", "VS Code", "Jest", "Webpack"] },
  ];

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc",
      period: "2022 - Present",
      description: "Led the development of the company's flagship product, improving performance by 40% and implementing a component library used across multiple projects."
    },
    {
      title: "Frontend Developer",
      company: "Creative Agency",
      period: "2019 - 2022",
      description: "Developed responsive web applications for various clients in the finance, healthcare, and e-commerce sectors."
    },
    {
      title: "Junior Web Developer",
      company: "Startup Studio",
      period: "2017 - 2019",
      description: "Contributed to multiple early-stage startups, focusing on building MVPs and iterating based on user feedback."
    },
  ];

  return (
    <div className="pt-28">
      <div className="page-container">
        <SectionHeading
          title="About Me"
          subtitle="Learn more about my background, experience, and what drives me"
          align="left"
        />

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <div className="col-span-2">
            <h3 className="text-2xl font-medium mb-4">My Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm Jane Doe, a passionate web developer with over 5 years of industry experience. My journey
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
                <span className="text-lg font-medium">Jane Doe</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-16" />

        <div className="mb-16">
          <h3 className="text-2xl font-medium mb-8">My Skills</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="border rounded-lg p-5">
                <h4 className="font-medium mb-3">{skill.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="text-sm px-2 py-1 bg-secondary rounded-full text-secondary-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-16" />

        <div>
          <h3 className="text-2xl font-medium mb-8">Work Experience</h3>
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="grid md:grid-cols-4 gap-6">
                <div>
                  <p className="text-muted-foreground">{experience.period}</p>
                </div>
                <div className="md:col-span-3">
                  <h4 className="text-xl font-medium">{experience.title}</h4>
                  <p className="text-primary mb-3">{experience.company}</p>
                  <p className="text-muted-foreground">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
