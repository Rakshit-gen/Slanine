import React, { useState } from 'react';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  benefits: string[];
  useCases: string[];
  image: string;
}

const projects: Project[] = [
  {
    name: "Product Recommendation Systems",
    description: "Recommender systems help people find items relevant to them. They are crucial in businesses, generating revenue and differentiating from competitors.",
    technologies: ["Machine Learning", "Collaborative Filtering", "Content-Based Filtering"],
    benefits: ["Personalized Experience", "Increased Revenue", "Customer Engagement"],
    useCases: ["E-commerce", "Streaming Services", "Social Media"],
    image: "/project1.png", // Corrected path for public folder image
  },
  {
    name: "Plagiarism Analyzer",
    description: "AI can help identify plagiarized content across millions of websites. A plagiarism detection tool can assist writers and news organizations in protecting their content.Uses NLP",
    technologies: ["Natural Language Processing", "Text Comparison Algorithms"],
    benefits: ["Content Originality", "Credibility", "Academic Integrity"],
    useCases: ["Academic Institutions", "Content Creators", "News Outlets"],
    image: "/project2.png", // Corrected path for public folder image
  },
  {
    name: "Prediction of Bird Species",
    description: "AI can classify bird species efficiently, overcoming the limitations of manual classification. You can use random forests or convolutional neural networks for this task.",
    technologies: ["Machine Learning", "Convolutional Neural Networks"],
    benefits: ["Efficiency", "Accuracy", "Scalability"],
    useCases: ["Wildlife Research", "Conservation Efforts", "Birdwatching Communities"],
    image: "/project3.png", // Corrected path for public folder image
  },
  {
    name: "Dog and Cat Classification",
    description: "This computer vision project involves categorizing images as either dogs or cats. CNNs have proven to be effective for this classification task.",
    technologies: ["Deep Learning", "Convolutional Neural Networks"],
    benefits: ["Automated Classification", "Image Recognition Skills"],
    useCases: ["Pet Adoption", "Animal Welfare", "Image Search Engines"],
    image: "/project4.png", // Corrected path for public folder image
  },
  {
    name: "Next Word Prediction",
    description: "This project improves typing efficiency by predicting the next word, reducing typos and enhancing user experience on small devices.",
    technologies: ["Natural Language Processing", "Predictive Text Algorithms"],
    benefits: ["Faster Typing", "Reduced Errors", "Improved User Experience"],
    useCases: ["Mobile Devices", "Text Editors", "Chat Applications"],
    image: "/project5.png", // Corrected path for public folder image
  },
];

const ProjectCard: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-white mb-8">AI Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
        {projects.map((project) => (
          <div key={project.name} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer">
            <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-white">
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
            <button
              className="bg-blue-600 text-white w-full py-2 rounded-b-lg hover:bg-blue-700 transition-colors duration-300"
              onClick={() => handleCardClick(project)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-start z-50 pt-20">
          <div className="bg-gray-900 rounded-lg p-8 max-w-3xl w-full mx-8 my-4">
            <h2 className="text-2xl font-bold text-white mb-4">{selectedProject.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-300">Description:</h3>
                <p className="text-gray-200 mb-4">{selectedProject.description}</p>
                <h3 className="text-xl font-semibold text-gray-300">Technologies:</h3>
                <ul className="list-disc list-inside text-gray-200 mb-4">
                  {selectedProject.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-300">Benefits:</h3>
                <ul className="list-disc list-inside text-gray-200 mb-4">
                  {selectedProject.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
                <h3 className="text-xl font-semibold text-gray-300">Use Cases:</h3>
                <ul className="list-disc list-inside text-gray-200 mb-4">
                  {selectedProject.useCases.map((useCase, index) => (
                    <li key={index}>{useCase}</li>
                  ))}
                </ul>
              </div>
            </div>
            <button
              className="bg-red-600 text-white w-full py-2 rounded-lg hover:bg-red-700 transition-colors duration-300 mt-4"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
