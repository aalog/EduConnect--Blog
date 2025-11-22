import React, { useState } from 'react';
import { Edit3, Eye, Info, Monitor } from 'lucide-react';
import AssignmentDetails from './components/AssignmentDetails';
import Editor from './components/Editor';
import BlogPreview from './components/BlogPreview';
import { BlogEntry, ViewState } from './types';

const App: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>(ViewState.PREVIEW);
  
  // Initial state with the content provided by the user
  const [blogEntry, setBlogEntry] = useState<BlogEntry>({
    title: "El papel transformador de las TIC en los procesos comunicativos y la construcción colectiva del conocimiento",
    author: "Estudiante Universitario",
    date: new Date().toLocaleDateString(),
    intro: "Las Tecnologías de la Información y la Comunicación (TIC) han cambiado profundamente, de una manera estructural, la comunicación en la sociedad del conocimiento, puesto que han democratizado el acceso y la producción de saberes, han facilitado el desarrollo de la inteligencia colectiva, y han dado pie a nuevas prácticas sociales, culturales y educativas (Monteiro & Façanha, 2025). Así, las tecnologías han pasado de ser herramientas de trabajo en la comunicación al núcleo de la transformación social del siglo XXI, en un proceso que ha conducido a la economía del conocimiento, al aprendizaje centrado en el estudiante, a la colaboración a escala global y al desarrollo regional en el contexto de la sostenibilidad (Ribadiya et al., 2022). Al mismo tiempo, han generado problemas como las divisiones digitales, la homogeneización cultural de corte occidental, la exigencia de confianza en los entornos remotos, la emergencia de nuevas subculturas digitales, etc. En definitiva, las TIC no sólo han creado nuevos canales de comunicación, sino que han permitido transformar la manera en la que construimos, compartimos y significamos el saber en toda la vida (Batura, 2013).\n\nLa llegada de la sociedad del conocimiento ha cambiado radicalmente la manera de comunicarse, aprender y construir conocimiento en el aula, pero también fuera de ella, gracias a las Tecnologías de la Información y la Comunicación (TIC).",
    question1: "Las plataformas digitales contribuyen a la participación simultánea de múltiples voces, rompen las barreras espacio-temporales y colaboran en la co-creación de conocimiento a través de debates, wikis, hilos en foros, utilizando, por ejemplo, WhatsApp o Discord. Así los estudiantes dejan de ser sólo receptores para convertirse también en productores de contenido colectivo con sus aportaciones y experiencias.",
    question2: "Facilitan enormemente al ofrecer edición en tiempo real (Google Docs, Padlet), comunicación instantánea y almacenamiento en la nube; sin embargo, pueden dificultarlo cuando hay sobrecarga informativa, falta de competencias digitales, brecha de acceso o “ruido” por mensajes irrelevantes que dispersan la atención y reducen la calidad del intercambio.",
    question3: "La relación pasa de ser jerárquica y unidireccional a horizontal y bidireccional. El docente deja de ser el único poseedor del conocimiento y se convierte en mediador y facilitador. La comunicación es más cercana, inmediata y personalizada (chats, foros, correo, videollamadas), generando mayor confianza y un acompañamiento más continuo.",
    question4: "Ventajas: inmediatez en la respuesta (WhatsApp, Classroom), retroalimentación rápida y múltiple (foros, rúbricas digitales), accesibilidad 24/7 a materiales y mayor acompañamiento individualizado. Desafíos: brecha digital (falta de dispositivos o conexión), saturación de notificaciones, dificultad para detectar emociones en texto escrito y riesgo de disminuir la interacción cara a cara.",
    conclusion: "Las TIC no son solo herramientas técnicas; son catalizadores de una nueva cultura comunicativa que democratiza el conocimiento, fomenta la colaboración global y redefine los roles tradicionales en educación. Su impacto positivo será mayor en la medida en que logremos superar la brecha digital y formemos a docentes y estudiantes en un uso crítico, ético y pedagógicamente intencionado de estas tecnologías.",
    bibliography: "Batura, O. (2013). The WTO Legal Framework for Telecommunications Services and Challenges of the Information Age. En C. Herrmann, M. Krajewski, & J. P. Terhechte (Eds.), European Yearbook of International Economic Law 2014 (pp. 201-234). Springer. https://doi.org/10.1007/978-3-642-40913-4_9\n\nMonteiro, J. C. da S., & Façanha, L. da S. (2025). As TIC no centro da (re)configuração social do século XXI. Texto Livre, 18, e56501. https://doi.org/10.1590/1983-3652.2025.56501\n\nRibadiya, S., Garg, D., & Bharvad, J. (2022). A Survey on Collaboration Technologies and Systems of ICT Application in the Field of Education. En A. Joshi, M. Mahmud, R. G. Ragel, & N. V. Thakur (Eds.), Information and Communication Technology for Competitive Strategies (ICTCS 2020) (pp. 751-759). Springer. https://doi.org/10.1007/978-981-16-0739-4_71",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1740&auto=format&fit=crop"
  });

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      {/* Navbar */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 p-2 rounded-lg text-white">
                <Monitor size={20} />
              </div>
              <span className="font-bold text-xl text-slate-800 hidden sm:block">EduConnect</span>
            </div>
            
            <div className="flex items-center space-x-1">
              <button 
                onClick={() => setViewState(ViewState.ASSIGNMENT)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  viewState === ViewState.ASSIGNMENT 
                    ? 'bg-indigo-50 text-indigo-700' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Info size={18} />
                <span className="hidden sm:inline">Instrucciones</span>
              </button>
              
              <button 
                onClick={() => setViewState(ViewState.EDITOR)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  viewState === ViewState.EDITOR 
                    ? 'bg-indigo-50 text-indigo-700' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Edit3 size={18} />
                <span className="hidden sm:inline">Editor</span>
              </button>
              
              <button 
                onClick={() => setViewState(ViewState.PREVIEW)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  viewState === ViewState.PREVIEW 
                    ? 'bg-indigo-50 text-indigo-700' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Eye size={18} />
                <span className="hidden sm:inline">Blog Final</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content Area */}
      <main className="flex-1 py-8 px-4 sm:px-6">
        {viewState === ViewState.ASSIGNMENT && (
          <div className="animate-fade-in">
            <AssignmentDetails />
            <div className="text-center mt-8">
              <button 
                onClick={() => setViewState(ViewState.EDITOR)}
                className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
              >
                Comenzar Actividad <Edit3 size={18} />
              </button>
            </div>
          </div>
        )}

        {viewState === ViewState.EDITOR && (
          <div className="animate-fade-in">
            <Editor 
              entry={blogEntry} 
              setEntry={setBlogEntry} 
              onViewChange={() => setViewState(ViewState.PREVIEW)} 
            />
          </div>
        )}

        {viewState === ViewState.PREVIEW && (
          <div className="animate-fade-in">
            <BlogPreview entry={blogEntry} />
            <div className="max-w-3xl mx-auto mt-6 flex justify-between pb-10">
                <button 
                  onClick={() => setViewState(ViewState.EDITOR)}
                  className="text-slate-500 hover:text-indigo-600 font-medium flex items-center gap-2"
                >
                  ← Volver a Editar
                </button>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 py-6 mt-auto">
        <div className="max-w-6xl mx-auto px-4 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} EduConnect - Plataforma de Aprendizaje Práctico Experimental</p>
        </div>
      </footer>
    </div>
  );
};

export default App;