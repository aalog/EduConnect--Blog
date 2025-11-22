import React, { useState } from 'react';
import { BlogEntry } from '../types';
import { Wand2, RefreshCw, Save, Book } from 'lucide-react';
import { generateBlogAssistance, improveText } from '../services/geminiService';

interface EditorProps {
  entry: BlogEntry;
  setEntry: React.Dispatch<React.SetStateAction<BlogEntry>>;
  onViewChange: () => void;
}

const Editor: React.FC<EditorProps> = ({ entry, setEntry, onViewChange }) => {
  const [loadingField, setLoadingField] = useState<string | null>(null);

  const handleInputChange = (field: keyof BlogEntry, value: string) => {
    setEntry(prev => ({ ...prev, [field]: value }));
  };

  const handleAIGenerate = async (field: 'question1' | 'question2' | 'question3' | 'question4', prompt: string) => {
    setLoadingField(field);
    const result = await generateBlogAssistance(entry.intro, prompt);
    handleInputChange(field, result);
    setLoadingField(null);
  };

  const handleAIImprove = async (field: keyof BlogEntry) => {
    const currentValue = entry[field];
    if (!currentValue) return;
    setLoadingField(field);
    const result = await improveText(currentValue);
    handleInputChange(field, result);
    setLoadingField(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 bg-indigo-600 text-white flex justify-between items-center">
          <h2 className="text-2xl font-bold">Editor de Entrada de Blog</h2>
          <button 
            onClick={onViewChange}
            className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition-colors flex items-center gap-2"
          >
            <Save size={18} /> Guardar y Ver
          </button>
        </div>

        <div className="p-8 space-y-8">
          
          {/* Metadata Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Título del Artículo</label>
              <input
                type="text"
                value={entry.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Autor</label>
              <input
                type="text"
                value={entry.author}
                onChange={(e) => handleInputChange('author', e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              />
            </div>
          </div>

          {/* Intro */}
          <div>
             <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-slate-700">Introducción</label>
              <button 
                onClick={() => handleAIImprove('intro')}
                disabled={loadingField === 'intro'}
                className="text-xs flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-medium"
              >
                {loadingField === 'intro' ? <RefreshCw className="animate-spin" size={14}/> : <Wand2 size={14}/>} 
                Mejorar con IA
              </button>
            </div>
            <textarea
              value={entry.intro}
              onChange={(e) => handleInputChange('intro', e.target.value)}
              rows={6}
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm"
              placeholder="Breve introducción al tema de las TIC..."
            />
          </div>

          <hr className="border-slate-200" />

          {/* Question 1 */}
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <label className="block text-lg font-semibold text-slate-800 mb-2">
              1. ¿Cómo influyen las plataformas digitales en la construcción del conocimiento colectivo?
            </label>
            
            <div className="relative">
              <textarea
                value={entry.question1}
                onChange={(e) => handleInputChange('question1', e.target.value)}
                rows={5}
                className="w-full p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none shadow-sm"
                placeholder="Escribe tu respuesta aquí..."
              />
              <div className="absolute top-3 right-3 flex gap-2">
                <button 
                  onClick={() => handleAIGenerate('question1', '¿Cómo influyen las plataformas digitales en la construcción del conocimiento colectivo?')}
                  disabled={!!loadingField}
                  className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 p-2 rounded-full transition-colors"
                  title="Generar borrador con IA"
                >
                  {loadingField === 'question1' ? <RefreshCw className="animate-spin" size={16}/> : <Wand2 size={16}/>}
                </button>
              </div>
            </div>
          </div>

          {/* Question 2 */}
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <label className="block text-lg font-semibold text-slate-800 mb-2">
              2. Reflexione cómo estas herramientas facilitan o dificultan el trabajo colaborativo.
            </label>
            
            <div className="relative">
              <textarea
                value={entry.question2}
                onChange={(e) => handleInputChange('question2', e.target.value)}
                rows={5}
                className="w-full p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none shadow-sm"
                placeholder="Escribe tu respuesta aquí..."
              />
              <div className="absolute top-3 right-3 flex gap-2">
                 <button 
                  onClick={() => handleAIGenerate('question2', '¿Cómo estas herramientas facilitan o dificultan el trabajo colaborativo?')}
                  disabled={!!loadingField}
                  className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 p-2 rounded-full transition-colors"
                  title="Generar borrador con IA"
                >
                  {loadingField === 'question2' ? <RefreshCw className="animate-spin" size={16}/> : <Wand2 size={16}/>}
                </button>
              </div>
            </div>
          </div>

          {/* Question 3 */}
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <label className="block text-lg font-semibold text-slate-800 mb-2">
              3. ¿De qué manera las herramientas de comunicación digital han cambiado la relación entre docentes y estudiantes?
            </label>
            
            <div className="relative">
              <textarea
                value={entry.question3}
                onChange={(e) => handleInputChange('question3', e.target.value)}
                rows={5}
                className="w-full p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none shadow-sm"
                placeholder="Escribe tu respuesta aquí..."
              />
              <div className="absolute top-3 right-3 flex gap-2">
                 <button 
                  onClick={() => handleAIGenerate('question3', '¿De qué manera ha cambiado la relación docente-estudiante?')}
                  disabled={!!loadingField}
                  className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 p-2 rounded-full transition-colors"
                  title="Generar borrador con IA"
                >
                  {loadingField === 'question3' ? <RefreshCw className="animate-spin" size={16}/> : <Wand2 size={16}/>}
                </button>
              </div>
            </div>
          </div>

          {/* Question 4 */}
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <label className="block text-lg font-semibold text-slate-800 mb-2">
              4. Considere aspectos como la accesibilidad, la inmediatez y la retroalimentación.
            </label>
            
            <div className="relative">
              <textarea
                value={entry.question4}
                onChange={(e) => handleInputChange('question4', e.target.value)}
                rows={5}
                className="w-full p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none shadow-sm"
                placeholder="Escribe tu respuesta aquí..."
              />
              <div className="absolute top-3 right-3 flex gap-2">
                 <button 
                  onClick={() => handleAIGenerate('question4', 'Ventajas y desafíos: accesibilidad, inmediatez, retroalimentación.')}
                  disabled={!!loadingField}
                  className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 p-2 rounded-full transition-colors"
                  title="Generar borrador con IA"
                >
                  {loadingField === 'question4' ? <RefreshCw className="animate-spin" size={16}/> : <Wand2 size={16}/>}
                </button>
              </div>
            </div>
          </div>

           {/* Conclusion */}
           <div>
             <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-slate-700">Conclusión</label>
              <button 
                onClick={() => handleAIImprove('conclusion')}
                disabled={loadingField === 'conclusion'}
                className="text-xs flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-medium"
              >
                {loadingField === 'conclusion' ? <RefreshCw className="animate-spin" size={14}/> : <Wand2 size={14}/>} 
                Mejorar con IA
              </button>
            </div>
            <textarea
              value={entry.conclusion}
              onChange={(e) => handleInputChange('conclusion', e.target.value)}
              rows={4}
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              placeholder="Conclusión final..."
            />
          </div>

           {/* Bibliography */}
           <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
             <div className="flex justify-between items-center mb-2">
              <label className="block text-lg font-serif font-medium text-slate-800 flex items-center gap-2">
                <Book size={20} /> Bibliografía
              </label>
            </div>
            <textarea
              value={entry.bibliography}
              onChange={(e) => handleInputChange('bibliography', e.target.value)}
              rows={5}
              className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-stone-500 outline-none font-mono text-sm"
              placeholder="Referencias bibliográficas..."
            />
          </div>

          <div className="flex justify-end pt-4">
             <button 
              onClick={onViewChange}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl"
            >
              Publicar en Blog (Vista Previa)
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Editor;