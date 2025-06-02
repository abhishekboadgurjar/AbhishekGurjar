"use client";

import { projects } from "@/lib/constants";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { MotionDiv, MotionH2 } from "@/components/ui/motion";
import { fadeIn, textVariant, staggerContainer } from "@/lib/animations";

export default function ProjectsSection() {
  // Show all projects, not just featured
  const allProjects = projects;

  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="container max-w-7xl mx-auto px-4">
        <MotionH2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          All <span className="text-primary">Projects</span>
        </MotionH2>

        <MotionDiv
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {allProjects.map((project, index) => (
            <MotionDiv
              key={index}
              variants={fadeIn("up", 0.3 + index * 0.1)}
              className="flex"
            >
              <Card className="border border-border overflow-hidden group flex flex-col h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.github && (
                      <Button size="icon" variant="secondary" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="icon" variant="secondary" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                <CardContent className="flex-grow pt-6">
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  {project.demo && (
                    <Button
                      variant="ghost"
                      className="text-primary group/link"
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex justify-between items-center"
                      >
                        <span>View Project</span>
                        <ChevronRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}
