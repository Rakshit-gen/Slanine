import React, { useState } from 'react';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  codeExamples: { title: string; code: string }[];
  benefits: string[];
  useCases: string[];
  image: string;
}

const projects: Project[] = [
  {
    name: "AI Chatbot",
    description: "A chatbot that provides customer support using natural language processing.",
    technologies: ["Python", "TensorFlow", "Flask"],
    codeExamples: [
      { title: "Complete Source Code", code: `from flask import Flask, request, jsonify\nimport random\nimport nltk\nfrom nltk.chat.util import Chat, reflections\n\nnltk.download('punkt')\n\npairs = [\n    [r"my name is (.*)", ["Hello %1, How can I help you today?", "Hi %1! Nice to meet you!"]],\n    [r"hi|hello|hey", ["Hello!", "Hi there!", "Hey! How can I help?"]],\n    [r"what is your name?", ["I am a chatbot created to assist you.", "You can call me ChatBot!"]],\n    [r"how are you?", ["I'm doing well, thank you!", "I'm just a bunch of code, but thanks for asking!"]],\n    [r"quit", ["Bye! Take care!", "Goodbye! Have a nice day!"]],\n    [r"(.*)", ["I'm sorry, I don't understand that.", "Can you please rephrase?"]]\n]\n\ndef chatbot_response(user_input):\n    chatbot = Chat(pairs, reflections)\n    return chatbot.respond(user_input)\n\napp = Flask(__name__)\n\n@app.route('/chat', methods=['POST'])\ndef chat():\n    user_input = request.json.get('message')\n    response = chatbot_response(user_input)\n    return jsonify({"response": response})\n\nif __name__ == '__main__':\n    app.run(debug=True)` }
    ],
    benefits: ["24/7 availability", "Instant responses", "Cost-effective"],
    useCases: ["Customer service", "E-commerce", "Healthcare"],
    image: "ai.png",
  },
  {
    name: "Dog or Cat Classifier",
    description: "An image classifier to detect if an image is of a dog or a cat using deep learning.",
    technologies: ["Python", "TensorFlow", "Keras"],
    codeExamples: [
      { title: "Complete Source Code", code: `import tensorflow as tf\nfrom tensorflow.keras.preprocessing.image import ImageDataGenerator\n\n# Data Preparation\ntrain_datagen = ImageDataGenerator(rescale=1./255)\ntrain_generator = train_datagen.flow_from_directory(\n    'data/train',\n    target_size=(150, 150),\n    batch_size=20,\n    class_mode='binary'\n)\n\n# Model Architecture\nmodel = tf.keras.models.Sequential([\n    tf.keras.layers.Conv2D(32, (3, 3), activation='relu', input_shape=(150, 150, 3)),\n    tf.keras.layers.MaxPooling2D(2, 2),\n    tf.keras.layers.Conv2D(64, (3, 3), activation='relu'),\n    tf.keras.layers.MaxPooling2D(2, 2),\n    tf.keras.layers.Conv2D(128, (3, 3), activation='relu'),\n    tf.keras.layers.MaxPooling2D(2, 2),\n    tf.keras.layers.Flatten(),\n    tf.keras.layers.Dense(512, activation='relu'),\n    tf.keras.layers.Dense(1, activation='sigmoid')\n])\n\n# Compile Model\nmodel.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])\n\n# Train Model\nmodel.fit(train_generator, steps_per_epoch=100, epochs=10)` }
    ],
    benefits: ["Automation", "High accuracy", "Scalability"],
    useCases: ["Pet identification", "Wildlife research", "Image tagging"],
    image: "dc.png",
  },
  {
    name: "Plagiarism Analyzer",
    description: "A tool to check text for plagiarism by comparing similarity between texts.",
    technologies: ["Python", "NLTK"],
    codeExamples: [
      { title: "Complete Source Code", code: `from nltk.corpus import stopwords\nfrom nltk.tokenize import word_tokenize\nimport string\n\nstop_words = set(stopwords.words('english'))\n\ndef preprocess(text):\n    text = text.lower()\n    text = text.translate(str.maketrans('', '', string.punctuation))\n    words = word_tokenize(text)\n    filtered_words = [w for w in words if w not in stop_words]\n    return filtered_words\n\ndef calculate_similarity(text1, text2):\n    words1 = set(preprocess(text1))\n    words2 = set(preprocess(text2))\n    similarity = len(words1.intersection(words2)) / len(words1.union(words2))\n    return similarity\n\n# Example usage\ntext1 = "This is a sample text."\ntext2 = "This text is a sample."\nsimilarity_score = calculate_similarity(text1, text2)\nprint(f"Similarity Score: {similarity_score * 100}%")` }
    ],
    benefits: ["Improved academic integrity", "Quick analysis", "Educational tool"],
    useCases: ["Academic institutions", "Publishing", "Content creation"],
    image: "plag.png",
  },
  {
    name: "Speech-to-Text Converter",
    description: "A system that converts spoken language into text in real-time.",
    technologies: ["Python", "Google Speech API"],
    codeExamples: [
      { title: "Complete Source Code", code: `import speech_recognition as sr\n\n# Initialize recognizer\nrecognizer = sr.Recognizer()\n\n# Function to convert audio to text\nwith sr.Microphone() as source:\n    print("Please say something:")\n    audio = recognizer.listen(source)\n    try:\n        text = recognizer.recognize_google(audio)\n        print("You said:", text)\n    except sr.UnknownValueError:\n        print("Could not understand audio")\n    except sr.RequestError:\n        print("Error with request")` }
    ],
    benefits: ["Accessibility for the hearing impaired", "Fast transcription", "Wide applicability"],
    useCases: ["Customer support", "Automated transcription", "Assistive technology"],
    image: "stot.png",
  },
  {
    name: "Spam Detection System",
    description: "A classifier to detect spam emails using machine learning.",
    technologies: ["Python", "Scikit-Learn", "Pandas"],
    codeExamples: [
      { title: "Complete Source Code", code: `import pandas as pd\nfrom sklearn.feature_extraction.text import CountVectorizer\nfrom sklearn.naive_bayes import MultinomialNB\n\n# Load dataset\nemails = pd.read_csv('emails.csv')\n\n# Prepare data\nX = CountVectorizer().fit_transform(emails['text'])\ny = emails['spam']\n\n# Train model\nmodel = MultinomialNB()\nmodel.fit(X, y)\n\n# Predict\ndef predict_spam(text):\n    text_vector = CountVectorizer().transform([text])\n    prediction = model.predict(text_vector)\n    return "Spam" if prediction[0] == 1 else "Not Spam"` }
    ],
    benefits: ["Efficient filtering", "Increased security", "Time-saving"],
    useCases: ["Email services", "Messaging platforms", "Social media"],
    image: "spam.png",
  },
];

// The rest of your code remains unchanged here.

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
          <div className="bg-gray-900 rounded-lg p-8 max-w-4xl w-full mx-8 my-4 relative overflow-y-auto" style={{ maxHeight: '80vh' }}>
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 transition duration-300"
            >
              Close
            </button>
            <h2 className="text-2xl font-bold text-white mb-4">{selectedProject.name}</h2>
            <div className="text-gray-200">
              <h3 className="text-xl font-semibold text-gray-300">Description:</h3>
              <p className="mb-4">{selectedProject.description}</p>
              <h3 className="text-xl font-semibold text-gray-300">Technologies:</h3>
              <ul className="list-disc list-inside mb-4">
                {selectedProject.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
              {selectedProject.codeExamples.map((example, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold text-gray-300 mt-4">{example.title}</h4>
                  <pre className="bg-gray-800 p-4 rounded mb-4 overflow-x-auto">
                    <code>{example.code}</code>
                  </pre>
                </div>
              ))}
              <h3 className="text-xl font-semibold text-gray-300">Benefits:</h3>
              <ul className="list-disc list-inside mb-4">
                {selectedProject.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              <h3 className="text-xl font-semibold text-gray-300">Use Cases:</h3>
              <ul className="list-disc list-inside mb-4">
                {selectedProject.useCases.map((useCase, index) => (
                  <li key={index}>{useCase}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
