import { Award, Users, BookOpen, Trophy } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Award, value: '25+', label: 'Años de experiencia' },
    { icon: Users, value: '800+', label: 'Estudiantes activos' },
    { icon: BookOpen, value: '50+', label: 'Profesores calificados' },
    { icon: Trophy, value: '100+', label: 'Premios ganados' },
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre Nosotros</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos una institución educativa dedicada a formar estudiantes integrales,
            combinando excelencia académica con desarrollo personal y valores éticos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Misión</h3>
            <p className="text-gray-600 mb-4">
              Proporcionar una educación integral de calidad que fomente el desarrollo
              académico, social y emocional de cada estudiante, preparándolos para ser
              ciudadanos responsables y líderes del futuro.
            </p>
            <p className="text-gray-600">
              Nos comprometemos a crear un ambiente de aprendizaje seguro, inclusivo y
              estimulante donde cada estudiante pueda alcanzar su máximo potencial.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Visión</h3>
            <p className="text-gray-600 mb-4">
              Ser reconocidos como la institución educativa líder en la región, destacando
              por la excelencia académica, la innovación pedagógica y la formación integral
              de nuestros estudiantes.
            </p>
            <p className="text-gray-600">
              Aspiramos a formar graduados que se distingan por su conocimiento, valores,
              habilidades críticas y compromiso con la sociedad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
