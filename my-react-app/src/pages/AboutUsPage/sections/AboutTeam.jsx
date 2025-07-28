import React from 'react';

export const AboutTeam = () => {
  const team = [
    { name: 'BASSEL EL BATOUTY', position: 'CEO' },
    { name: 'AHMED HASSAN', position: 'Operations Director' },
    { name: 'SARAH MAHMOUD', position: 'CX Manager' }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-['Manrope'] text-center text-[#003950] mb-16">
          Leadership Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((m, i) => (
            <div key={i} className="text-center">
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden mb-6">
                <div className="w-full h-full bg-gradient-to-br from-[#003950]/20 to-[#003950]/40 flex items-center justify-center">
                  <span className="text-white/50 text-lg">Team Member</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#003950]">{m.name}</h3>
              <p className="text-gray-600">{m.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
);
};
