import React from 'react';
import { BookOpen, FileText, CheckCircle, Target } from 'lucide-react';

const AssignmentDetails: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-slate-200">
      <div className="border-b border-slate-100 pb-6 mb-6">
        <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
          <BookOpen className="text-primary" size={32} />
          Actividad de Aprendizaje
        </h2>
        <p className="text-slate-500 mt-2 text-lg">Unidad 2: Nuevas formas de comunicación en la sociedad del conocimiento</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-indigo-50 p-5 rounded-lg">
          <h3 className="font-semibold text-indigo-900 flex items-center gap-2 mb-2">
            <Target size={20} /> Resultado de Aprendizaje
          </h3>
          <p className="text-indigo-700 text-sm leading-relaxed">
            Reconoce las nuevas formas de comunicación emanadas del desarrollo tecnológico y su implicación en la educación y en la sociedad.
          </p>
        </div>
        <div className="bg-sky-50 p-5 rounded-lg">
          <h3 className="font-semibold text-sky-900 flex items-center gap-2 mb-2">
            <FileText size={20} /> Tema
          </h3>
          <p className="text-sky-700 text-sm leading-relaxed">
            Justifique el papel de las TIC en la transformación de los procesos comunicativos en la sociedad del conocimiento.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-bold text-slate-800">Instrucciones</h3>
        
        <div className="flex gap-4">
          <div className="flex-shrink-0 mt-1">
            <CheckCircle className="text-green-500" size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-slate-800">1. Investigación Previa</h4>
            <p className="text-slate-600">Lea comprensivamente la Unidad 2 e investigue sobre los aportes de las TIC en la configuración de las nuevas formas de comunicación.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 mt-1">
            <CheckCircle className="text-green-500" size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-slate-800">2. Desarrollo del Blog</h4>
            <p className="text-slate-600 mb-3">Responda las siguientes interrogantes (aprox. 6 líneas cada una):</p>
            <ul className="list-disc list-inside bg-slate-50 p-4 rounded-lg text-slate-700 space-y-3 border border-slate-200 text-sm">
              <li>¿Cómo influyen las plataformas digitales en la construcción del conocimiento colectivo en entornos educativos?</li>
              <li>Reflexione cómo estas herramientas facilitan o dificultan el trabajo colaborativo y el intercambio de ideas.</li>
              <li>¿De qué manera las herramientas de comunicación digital han cambiado la relación entre docentes y estudiantes?</li>
              <li>Considere aspectos como la accesibilidad, la inmediatez, la retroalimentación y el acompañamiento.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;