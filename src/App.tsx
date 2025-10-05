import React from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import CellDiagram from './components/CellDiagram';
import { CELLS } from './data';
import { CellPartInfo, CellType } from './types';

const App: React.FC = () => {
  const [selected, setSelected] = React.useState<CellType>('procariota');
  const [activePart, setActivePart] = React.useState<CellPartInfo | null>(null);

  const data = CELLS[selected];

  return (
    <div className="min-h-screen text-gray-900 flex flex-col">
      <Header selected={selected} onSelect={setSelected} />
      <main className="mx-auto max-w-6xl px-4 py-8 md:py-12 space-y-8 flex-1 w-full">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2 text-gray-900">{data.title}</h2>
          <p className="text-gray-700 text-base md:text-lg">Alege o componentă din diagramă pentru a afla mai multe.</p>
        </div>

        <div className="transition-opacity duration-300">
          <CellDiagram data={data} onPartClick={setActivePart} />
        </div>

        {/* Legend simple: emoji + text only (no checkboxes, no squares) */}
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {data.parts.map((p) => (
            <button key={p.id} className="text-left p-2 rounded-md hover:bg-gray-100 transition-colors" onClick={() => setActivePart(p)}>
              <div className="flex items-center gap-2">
                <span className="text-xl" aria-hidden>{p.icon ?? '🔬'}</span>
                <span className="font-medium text-gray-800">{p.name}</span>
              </div>
            </button>
          ))}
        </section>
      </main>

      <footer className="text-center py-4 text-xs text-gray-400 border-t border-gray-200">
        <p>
          © 2025 <span className="font-medium">celula.one</span> · Creat de <a href="https://cori.cafe" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">cori.cafe</a>
        </p>
      </footer>

      {activePart && (
        <Modal
          title={activePart.name}
          description={activePart.description}
          icon={activePart.icon}
          functionText={activePart.functionText}
          onClose={() => setActivePart(null)}
        />
      )}
    </div>
  );
};

export default App;

// Footer branding


