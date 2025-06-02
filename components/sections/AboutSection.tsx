"use client";

import { aboutMe } from "@/lib/constants";
import { Briefcase, GraduationCap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MotionDiv, MotionH2, MotionP } from "@/components/ui/motion";
import { fadeIn, textVariant } from "@/lib/animations";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container max-w-7xl mx-auto px-4">
        <MotionH2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          About <span className="text-primary">Me</span>
        </MotionH2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <MotionDiv
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-primary/10 w-full aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/4549416/pexels-photo-4549416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="About Me"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
              <div className="text-center">
                <p className="text-xl font-bold text-primary-foreground">5+</p>
                <p className="text-xs text-primary-foreground">
                  Years of Experience
                </p>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <MotionP
              className="text-muted-foreground mb-8 leading-relaxed"
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {aboutMe.description}
            </MotionP>

            <Tabs defaultValue="experience" className="mt-8">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="experience">
                  <Briefcase className="h-4 w-4 mr-2" /> Experience
                </TabsTrigger>
                <TabsTrigger value="education">
                  <GraduationCap className="h-4 w-4 mr-2" /> Education
                </TabsTrigger>
              </TabsList>

              <TabsContent value="experience" className="space-y-6">
                {aboutMe.experience.map((exp, index) => (
                  <MotionDiv
                    key={index}
                    className="border-l-2 border-primary/70 pl-4 py-2"
                    variants={fadeIn("up", 0.1 * index + 0.5)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-semibold">{exp.position}</h3>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <p>{exp.company}</p>
                      <p>{exp.period}</p>
                    </div>
                    <p className="mt-2 text-muted-foreground">
                      {exp.description}
                    </p>
                  </MotionDiv>
                ))}
              </TabsContent>

              <TabsContent value="education" className="space-y-6">
                {aboutMe.education.map((edu, index) => (
                  <MotionDiv
                    key={index}
                    className="border-l-2 border-primary/70 pl-4 py-2"
                    variants={fadeIn("up", 0.1 * index + 0.5)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-semibold">{edu.degree}</h3>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <p>{edu.institution}</p>
                      <p>{edu.period}</p>
                    </div>
                  </MotionDiv>
                ))}
              </TabsContent>
            </Tabs>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}