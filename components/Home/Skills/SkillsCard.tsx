"use client";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import React from "react";

type SkillsCardProps = {
  title: string;
  icon: React.ReactNode;
  description: string;
  technologies: string[];
  imageSrc: string; // Ajoutez la propriété pour l'image
  animation: string;
};

const SkillCard: React.FC<SkillsCardProps> = ({ title, icon, description, technologies, imageSrc, animation }) => {
  return (
    <AnimationOnScroll animateIn={animation} className='h-full' animateOnce>
      <Card shadow="none" className="shadow-lg h-full bg-black ">
        <CardHeader className="text-xl px-5 pt-5 pb-0">
          {icon} {title}
        </CardHeader>
        <CardBody className="text-default-700 tracking-tight relative px-5 pb-5">
          <p className='text-sm text-default-600'>{description}</p>
          <div className="flex flex-wrap mt-6 gap-1">
            {technologies.map((tech: string, index: number) => (
              <Chip size="sm" key={index} color="secondary" variant='bordered'>
                {tech}
              </Chip>
            ))}
          </div>
          <img src={imageSrc} alt={`Image for ${title}`} className="mt-4" />
        </CardBody>
      </Card>
    </AnimationOnScroll>
  );
};

export default SkillCard;
