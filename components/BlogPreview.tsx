import React from 'react';
import { BlogEntry } from '../types';
import { Calendar, User, MessageCircle, Share2, Bookmark, Quote } from 'lucide-react';

interface BlogPreviewProps {
  entry: BlogEntry;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ entry }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-none md:rounded-lg overflow-hidden min-h-screen md:min-h-0 md:mb-10">
      <img 
        src={entry.imageUrl} 
        alt="Header" 
        className="w-full h-64 md:h-80 object-cover"
      />
      
      <div className="p-6 md:p-12">
        {/* Blog Header */}
        <div className="mb-8">
          <span className="text-indigo-600 font-bold tracking-wider uppercase text-xs mb-3 block">Educación & Tecnología</span>
          <h1 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6 font-serif leading-tight">
            {entry.title}
          </h1>
          
          <div className="flex items-center justify-between border-b border-slate-100 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                <User size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">{entry.author}</p>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Calendar size={12} />
                  <span>{entry.date}</span>
                  <span>•</span>
                  <span>8 min de lectura</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4 text-slate-400">
              <Share2 size={20} className="cursor-pointer hover:text-indigo-600 transition-colors" />
              <Bookmark size={20} className="cursor-pointer hover:text-indigo-600 transition-colors" />
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="prose prose-lg prose-slate max-w-none font-serif text-slate-700">
          <div className="text-lg leading-relaxed whitespace-pre-line text-slate-600 mb-10">
            {entry.intro}
          </div>

          <hr className="w-24 border-t-2 border-indigo-100 mx-auto my-10" />

          {/* Q1 */}
          <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 font-sans">
            1. Plataformas digitales y conocimiento colectivo
          </h3>
          <div className="bg-indigo-50/50 p-6 rounded-lg mb-6">
             <p className="text-sm font-semibold text-indigo-900 mb-2 font-sans">Pregunta:</p>
             <p className="italic text-indigo-800 text-sm">¿Cómo influyen las plataformas digitales en la construcción del conocimiento colectivo en entornos educativos?</p>
          </div>
          <p className="mb-8 leading-relaxed">
            {entry.question1}
          </p>

           {/* Q2 */}
          <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 font-sans">
            2. Facilitadores y barreras del trabajo colaborativo
          </h3>
          <div className="bg-indigo-50/50 p-6 rounded-lg mb-6">
             <p className="text-sm font-semibold text-indigo-900 mb-2 font-sans">Pregunta:</p>
             <p className="italic text-indigo-800 text-sm">Reflexione cómo estas herramientas facilitan o dificultan el trabajo colaborativo.</p>
          </div>
          <p className="mb-8 leading-relaxed">
            {entry.question2}
          </p>

          {/* Q3 */}
          <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 font-sans">
            3. Transformación de la relación docente-estudiante
          </h3>
          <div className="bg-sky-50/50 p-6 rounded-lg mb-6">
             <p className="text-sm font-semibold text-sky-900 mb-2 font-sans">Pregunta:</p>
             <p className="italic text-sky-800 text-sm">¿De qué manera las herramientas de comunicación digital han cambiado la relación entre docentes y estudiantes?</p>
          </div>
          <p className="mb-8 leading-relaxed">
            {entry.question3}
          </p>

          {/* Q4 */}
          <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4 font-sans">
            4. Ventajas y desafíos: Accesibilidad e Inmediatez
          </h3>
          <div className="bg-sky-50/50 p-6 rounded-lg mb-6">
             <p className="text-sm font-semibold text-sky-900 mb-2 font-sans">Pregunta:</p>
             <p className="italic text-sky-800 text-sm">Considere aspectos como la accesibilidad, la inmediatez y la retroalimentación.</p>
          </div>
          <p className="mb-8 leading-relaxed">
            {entry.question4}
          </p>

          {/* Conclusion */}
          <div className="mt-12 p-8 bg-slate-800 rounded-2xl text-center text-white shadow-lg">
            <h4 className="font-sans font-bold text-lg mb-4 flex items-center justify-center gap-2">
              <Quote size={20} className="text-indigo-400" /> Conclusión
            </h4>
            <p className="text-slate-100 leading-relaxed italic">
              {entry.conclusion}
            </p>
          </div>

          {/* Bibliography */}
          {entry.bibliography && (
            <div className="mt-16 border-t border-slate-200 pt-10">
              <h3 className="text-xl font-bold text-slate-900 mb-6 font-sans">Bibliografía</h3>
              <div className="text-sm text-slate-600 font-sans whitespace-pre-line pl-8 -indent-8 leading-relaxed">
                {entry.bibliography}
              </div>
            </div>
          )}
        </div>

        {/* Footer Interaction */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex items-center gap-4">
          <button className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-slate-600 hover:bg-slate-200 transition-colors">
            <MessageCircle size={18} />
            <span className="text-sm font-medium">Comentarios (0)</span>
          </button>
          <span className="text-slate-300">|</span>
          <span className="text-sm text-slate-400">Etiquetas: #TIC #Educación #SociedadDelConocimiento</span>
        </div>
      </div>
    </div>
  );
};

export default BlogPreview;