"use client";
import Image from "next/image";

export default function Skills() {
  return (
    <section
      id="skills"
      className=" min-h-screen w-full flex flex-col justify-center bg-white z-10"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center lg:mt-6">
        <h2 className="text-4xl font-bold mb-2  bg-black bg-clip-text text-transparent pt-14 lg:pt-2">
          Skills
        </h2>
        <p className="text-black mb-12">
          A diverse toolkit of technologies &  <br/> frameworks I excel in.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 py-4 px-8">
        {/* HTML */}
        <div className="flex flex-col items-center animate-fadeInUp">
          <i className="devicon-html5-plain colored text-7xl "></i>
          <span className="mt-2 text-base font-medium text-blue-900">HTML</span>
        </div>

        {/* CSS */}
        <div className="flex flex-col items-center animate-fadeInUp">
          <i className="devicon-css3-plain colored text-7xl "></i>
          <span className="mt-2 text-base font-medium text-blue-900">CSS</span>
        </div>

        {/* JavaScript */}
        <div className="flex flex-col items-center animate-fadeInUp">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            className="h-18 w-auto"
          />
          <span className="mt-2 text-base font-medium text-blue-900">
            JavaScript
          </span>
        </div>

        {/* React */}
        <div className="flex flex-col items-center animate-fadeInUp">
          <i className="devicon-react-original colored text-7xl "></i>
          <span className="mt-2 text-base font-medium text-blue-900">
            React
          </span>
        </div>

        {/* Node.js */}
        <div className="flex flex-col items-center animate-fadeInUp">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
            className="h-18 w-auto"
          />
          <span className="mt-2 text-base font-medium text-blue-900">
            Next.js
          </span>
        </div>

        {/* Express.js */}
        <div className="flex flex-col items-center animate-fadeInUp">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
            className="h-18 w-auto"
          />
          <span className="mt-2 text-base font-medium text-blue-900">
            Express.js
          </span>
        </div>

        {/* Java */}
        <div className="flex flex-col items-center animate-fadeInUp">
          <i className="devicon-java-plain colored text-7xl "></i>
          <span className="mt-2 text-base font-medium text-blue-900">Java</span>
        </div>

        {/* Python */}
        <div className="flex flex-col items-center animate-fadeInUp">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            className="h-18 w-auto"
          />

          <span className="mt-2 text-base font-medium text-blue-900">
            Python
          </span>
        </div>

        {/* MySQL */}
        <div className="flex flex-col items-center animate-fadeInUp">
          <i className="devicon-mysql-plain colored text-7xl "></i>
          <span className="mt-2 text-base font-medium text-blue-900">
            MySQL
          </span>
        </div>

        {/* SSMS */}
        <div className="flex flex-col items-center animate-fadeInUp">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg"
            className="h-18 w-auto"
          />

          <span className="mt-2 text-base font-medium text-blue-900">SSMS</span>
        </div>

        {/* MongoDB */}
        <div className="flex flex-col items-center animate-fadeInUp">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
            className="h-18 w-auto"
          />
          <span className="mt-2 text-base font-medium text-blue-900">
            MongoDB
          </span>
        </div>

        {/* TensorFlow */}
        <div className="flex flex-col items-center animate-fadeInUp">
          <i className="devicon-tensorflow-original colored text-7xl "></i>
          <span className="mt-2 text-base font-medium text-blue-900">
            TensorFlow
          </span>
        </div>

        {/* Keras*/}
        <div className="flex flex-col items-center animate-fadeInUp">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg"
            className="h-18 w-auto"
          />

          <span className="mt-2 text-base font-medium text-blue-900">
            Keras
          </span>
        </div>

        {/* Spring Boot */}
        <div className="flex flex-col items-center animate-fadeInUp">
          <i className="devicon-spring-plain colored text-7xl "></i>
          <span className="mt-2 text-base font-medium text-blue-900">
            Spring Boot
          </span>
        </div>

        {/* JSP (placeholder) */}
        <div className="flex flex-col items-center animate-fadeInUp">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
            className="h-18 w-auto"
          />
          <span className="mt-2 text-base font-medium text-blue-900">
            FLASK
          </span>
        </div>

        {/* Git */}
        <div className="flex flex-col items-center animate-fadeInUp">
          <i className="devicon-git-plain colored text-7xl "></i>
          <span className="mt-2 text-base font-medium text-blue-900">Git</span>
        </div>

        {/* GitHub */}
        <div className="flex flex-col items-center animate-fadeInUp">
          <i className="devicon-github-original colored text-7xl "></i>
          <span className="mt-2 text-base font-medium text-blue-900">
            GitHub
          </span>
        </div>

        {/* Docker */}
        <div className="flex flex-col items-center animate-fadeInUp">
          <i className="devicon-docker-plain colored text-7xl "></i>
          <span className="mt-2 text-base font-medium text-blue-900">
            Docker
          </span>
        </div>

        {/* Bootstrap */}
        <div className="flex flex-col items-center animate-fadeInUp">
          <i className="devicon-bootstrap-plain colored text-7xl "></i>
          <span className="mt-2 text-base font-medium text-blue-900">
            Bootstrap
          </span>
        </div>

        {/* TailwindCSS */}
        <div className="flex flex-col items-center animate-fadeInUp">
          <i className="devicon-tailwindcss-plain colored text-7xl "></i>
          <span className="mt-2 text-base font-medium text-blue-900">
            TailwindCSS
          </span>
        </div>

        {/* Xml*/}
        <div className="flex flex-col items-center animate-fadeInUp">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xml/xml-original.svg"
            className="h-18 w-auto"
          />
          <span className="mt-2 text-base font-medium text-blue-900">XML</span>
        </div>

        {/* Google Extensions (placeholder) */}
        <div className="flex flex-col items-center animate-fadeInUp">
          <span className="text-7xl">🧩</span>
          <span className="mt-2 text-base font-medium text-blue-900">
            Google Extensions
          </span>
        </div>

        {/* Google Colab */}
        <div className="flex flex-col items-center animate-fadeInUp">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecolab/googlecolab-original.svg"
            className="h-18 w-auto"
          />
          <span className="mt-2 text-base font-medium text-blue-900">
            Colab
          </span>
        </div>

        {/* Jupyter */}
        <div className="flex flex-col items-center animate-fadeInUp">
          <i className="devicon-jupyter-plain colored text-7xl "></i>
          <span className="mt-2 text-base font-medium text-blue-900">
            Jupyter
          </span>
        </div>

        {/* Google Cloud*/}
        <div className="flex flex-col items-center animate-fadeInUp">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg"
            className="h-18 w-auto"
          />
          <span className="mt-2 text-base font-medium text-blue-900">
            CLOUD CONSOLE
          </span>
        </div>

        {/* Render  */}
        <div className="flex flex-col items-center animate-fadeInUp">
          <img
            src="/render.png"
            alt="Render"
            className="w-20 h-18 object-contain "
          />

          <span className="mt-2 text-base font-medium text-blue-900">
            Render
          </span>
        </div>

        {/* vercel */}
        <div className="flex flex-col items-center animate-fadeInUp">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg"
            className="h-18 w-auto"
          />
          <span className="mt-2 text-base font-medium text-blue-900">
            Vercel
          </span>
        </div>

        {/* AWS */}
        <div className="flex flex-col items-center animate-fadeInUp">
          <i className="devicon-amazonwebservices-plain colored text-7xl "></i>
          <span className="mt-2 text-base font-medium text-blue-900">AWS</span>
        </div>
      </div>
    </section>
  );
}
