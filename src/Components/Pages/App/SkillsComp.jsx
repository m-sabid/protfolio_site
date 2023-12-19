import React from "react";

const skills_object = [
  {
    category: "Language Skills",
    skills: [
      {
        name: "English",
        proficiency: "Advanced",
        description:
          "Fluent in spoken and written English, with excellent communication skills.",
      },
      {
        name: "Spanish",
        proficiency: "Intermediate",
        description:
          "Conversational proficiency in Spanish, with a focus on everyday communication.",
      },
    ],
  },
  {
    category: "Project Management",
    skills: [
      {
        name: "Agile Methodology",
        proficiency: "Intermediate",
        description:
          "Experience in applying Agile principles for effective project management.",
      },
      {
        name: "Scrum",
        proficiency: "Intermediate",
        description:
          "Familiarity with Scrum framework for collaborative and iterative project development.",
      },
    ],
  },
  {
    category: "Public Speaking",
    skills: [
      {
        name: "Presentation Skills",
        proficiency: "Advanced",
        description:
          "Skilled in delivering engaging and effective presentations on various topics.",
      },
    ],
  },
  {
    category: "Photography",
    skills: [
      {
        name: "Digital Photography",
        proficiency: "Intermediate",
        description:
          "Proficient in capturing high-quality photographs using digital cameras.",
        tools: ["Canon DSLR", "Adobe Lightroom"],
      },
    ],
  },
];

function SkillsComp() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
      {skills_object.map((dt, index) => {
        return (
          <div
            key={index}
            className="col-span-3 md:col-span-1 rounded-md bg-neutral bg-opacity-30"
          >
            <p className="text-black font-semibold text-lg p-3">
              {dt.category}
            </p>
            <div className="grid gap-4">
              {dt.skills.map((sk, index) => {
                return (
                  <div
                    key={index}
                    className="bg-neutral bg-opacity-40 p-4 m-2 rounded-md"
                  >
                    <p className="my-2">
                      <b className="text-highlight"> Name: </b>{" "}
                      <span className="bg-gray-300 bg-opacity-50 px-1 py-1 rounded-md">
                        {sk.name}
                      </span>
                    </p>
                    <p className="my-2">
                      <b className="text-highlight"> Proficiency: </b>{" "}
                      <span className="bg-gray-300 bg-opacity-50 px-1 py-1 rounded-md">
                        {sk.proficiency}
                      </span>
                    </p>
                    <p className="my-2">
                      <b className="text-highlight"> Description: </b>
                      {sk.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SkillsComp;
