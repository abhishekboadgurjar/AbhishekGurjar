"use client";

import { skills } from "@/lib/constants";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MotionDiv, MotionH2, MotionH3 } from "@/components/ui/motion";
import { fadeIn, textVariant, staggerContainer } from "@/lib/animations";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <MotionH2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          My <span className="text-primary">Skills</span>
        </MotionH2>

        <MotionDiv
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <MotionDiv
              key={index}
              variants={fadeIn("up", 0.3 + index * 0.1)}
              className="flex flex-col h-full"
            >
              <Card className="border border-border flex-1">
                <CardHeader>
                  <MotionH3
                    className="text-xl"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {skill.category}
                  </MotionH3>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skill.technologies.map((tech, techIndex) => (
                    <MotionDiv
                      key={techIndex}
                      initial={{ opacity: 0, width: 0 }}
                      whileInView={{ opacity: 1, width: "100%" }}
                      transition={{ duration: 0.5, delay: 0.2 + techIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between mb-1">
                        <span>{tech.name}</span>
                        <span>{tech.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{ width: `${tech.level}%` }}
                        ></div>
                      </div>
                    </MotionDiv>
                  ))}
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}
