import React, { useState } from 'react';
import { CellData, CellPartInfo } from '../types';

interface CellDiagramProps {
  data: CellData;
  onPartClick: (part: CellPartInfo) => void;
}

// Stiluri îmbunătățite pentru interactivitate
const hoverable = 'transition-all duration-300 cursor-pointer hover:opacity-90 hover:filter hover:brightness-110';
const hoverableStroke = 'transition-all duration-300 cursor-pointer hover:stroke-width-[6]';

const CellDiagram: React.FC<CellDiagramProps> = ({ data, onPartClick }) => {
  const isProcaryote = data.type === 'procariota';
  const isPlant = data.type === 'vegetala';
  const isAnimal = data.type === 'animala';

  // Dimensiuni mai mari pentru toate celulele
  const viewBox = isProcaryote ? '0 0 800 500' : isAnimal ? '0 0 800 800' : '0 0 800 900';
  
  // Stare pentru interactivitate
  const [activePartId, setActivePartId] = useState<string | null>(null);

  // Funcție pentru gestionarea click-urilor pe organite
  const handlePartClick = (part: CellPartInfo) => {
    setActivePartId(part.id);
    onPartClick(part);
  };

  // Funcție pentru a verifica dacă o parte este activă
  const isPartActive = (partId: string) => activePartId === partId;

  // Funcție pentru a genera clase pentru părțile active
  const getActiveClass = (partId: string) => {
    return isPartActive(partId) ? 'opacity-100 stroke-width-[6] filter brightness-125' : '';
  };



  // Definirea limitelor pentru fiecare tip de celulă
  const getProcaryoteBounds = () => ({
    cell: { x: 150, y: 150, width: 500, height: 200, rx: 100 },
    safe: { minX: 180, minY: 180, maxX: 620, maxY: 320 }
  });
  
  const getAnimalBounds = () => ({
    cell: { cx: 400, cy: 400, rx: 350, ry: 320 },
    safe: { minX: 150, minY: 180, maxX: 650, maxY: 620 }
  });
  
  const getPlantBounds = () => ({
    cell: { x: 100, y: 100, width: 600, height: 700, rx: 40 },
    safe: { minX: 140, minY: 140, maxX: 660, maxY: 760 }
  });

  // Poziții fixe pentru organitele celulei procariote
  const procaryoteBounds = getProcaryoteBounds();
  const procaryoteNucleoid = { cx: 350, cy: 200, rx: 100, ry: 70 };
  
  // Poziții fixe pentru ribozomi în celula procariota
  const procaryoteRibosomes = [
    { cx: 200, cy: 200 },
    { cx: 250, cy: 180 },
    { cx: 300, cy: 220 },
    { cx: 350, cy: 290 },
    { cx: 400, cy: 230 },
    { cx: 450, cy: 200 },
    { cx: 500, cy: 180 },
    { cx: 550, cy: 220 },
    { cx: 600, cy: 250 },
    { cx: 580, cy: 280 },
    { cx: 520, cy: 270 },
    { cx: 460, cy: 290 },
    { cx: 400, cy: 280 },
    { cx: 340, cy: 260 },
    { cx: 280, cy: 290 },
    { cx: 220, cy: 270 }
  ];
  
  // Poziții fixe pentru organitele celulei animale
  const animalBounds = getAnimalBounds();
  const animalMitochondria = [
    { cx: 250, cy: 250, rx: 50, ry: 30 },
    { cx: 550, cy: 550, rx: 50, ry: 30 }
  ];
  
  const animalNucleus = { cx: animalBounds.cell.cx, cy: animalBounds.cell.cy, rx: 100, ry: 100 };
  
  // Poziții fixe pentru ribozomi în celula animală
  const animalRibosomes = [
    { cx: 200, cy: 200 },
    { cx: 250, cy: 300 },
    { cx: 300, cy: 200 },
    { cx: 350, cy: 300 },
    { cx: 450, cy: 200 },
    { cx: 500, cy: 300 },
    { cx: 550, cy: 200 },
    { cx: 600, cy: 300 },
    { cx: 200, cy: 500 },
    { cx: 250, cy: 600 },
    { cx: 300, cy: 500 },
    { cx: 350, cy: 600 },
    { cx: 450, cy: 500 },
    { cx: 500, cy: 600 },
    { cx: 550, cy: 500 },
    { cx: 600, cy: 600 },
    { cx: 180, cy: 400 },
    { cx: 620, cy: 400 },
    { cx: 400, cy: 180 },
    { cx: 400, cy: 620 }
  ];
  
  // Poziții fixe pentru organitele celulei vegetale
  const plantBounds = getPlantBounds();
  
  // Definirea zonei vacuolei pentru a o evita (mai mică)
  const vacuoleBounds = {
    x: 250,
    y: 300,
    width: 300,
    height: 300,
    rx: 30
  };
  
  // Poziții fixe pentru cloroplaste în celula vegetală (toate în interior)
  // Am eliminat două cloroplaste și am asigurat că niciuna nu este lângă nucleu
  const plantChloroplasts = [
    { cx: 180, cy: 300, rx: 45, ry: 28 },
    { cx: 180, cy: 450, rx: 45, ry: 28 },
    { cx: 180, cy: 600, rx: 45, ry: 28 },
    { cx: 620, cy: 450, rx: 45, ry: 28 },
    { cx: 620, cy: 600, rx: 45, ry: 28 },
    { cx: 200, cy: 700, rx: 45, ry: 28 },
    { cx: 500, cy: 700, rx: 45, ry: 28 }
  ];
  
  // Poziții fixe pentru mitocondrii în celula vegetală
  const plantMitochondria = [
    { cx: 600, cy: 200, rx: 40, ry: 25 },
    { cx: 250, cy: 650, rx: 40, ry: 25 }
  ];
  
  const plantNucleus = { cx: 450, cy: 180, rx: 60, ry: 60 };
  
  // Poziții fixe pentru ribozomi în celula vegetală - repoziționați pentru a nu fi sub alte componente
  const plantRibosomes = [
    { cx: 150, cy: 220 },
    { cx: 220, cy: 250 },
    { cx: 280, cy: 220 },
    { cx: 350, cy: 250 },
    { cx: 380, cy: 220 },
    { cx: 520, cy: 250 },
    { cx: 580, cy: 220 },
    { cx: 650, cy: 250 },
    { cx: 150, cy: 680 },
    { cx: 220, cy: 650 },
    { cx: 280, cy: 680 },
    { cx: 350, cy: 650 },
    { cx: 380, cy: 680 },
    { cx: 420, cy: 650 },
    { cx: 480, cy: 680 },
    { cx: 520, cy: 650 },
    { cx: 580, cy: 680 },
    { cx: 650, cy: 650 },
    { cx: 400, cy: 400 },
    { cx: 200, cy: 400 }
  ];

  return (
    <div className="w-full flex items-center justify-center">
      <div className="diagram-container w-full max-w-5xl">
        <svg viewBox={viewBox} className="w-full h-auto">
          {/* CELULA PROCARIOTA */}
          {isProcaryote && (
            <g>
              {/* Flagel - adăugat în spatele celulei */}
              <path 
                d="M650 250 C750 250, 800 200, 850 250 C900 300, 850 350, 850 400" 
                fill="none" 
                stroke="#10b981" 
                strokeWidth="6" 
                className={`${hoverable} ${getActiveClass('flagel')}`}
                onClick={() => handlePartClick(data.parts.find(p => p.id === 'flagel') || data.parts.find(p => p.id === 'perete')!)} 
              />
              
              {/* Citoplasmă */}
              <rect 
                x={procaryoteBounds.cell.x} 
                y={procaryoteBounds.cell.y} 
                width={procaryoteBounds.cell.width} 
                height={procaryoteBounds.cell.height} 
                rx={procaryoteBounds.cell.rx} 
                fill="#fef3c7" 
                className={`${hoverable} ${getActiveClass('citoplasma')}`}
                onClick={() => handlePartClick(data.parts.find(p => p.id === 'citoplasma')!)} 
              />
              
              {/* Capsulă */}
              <rect 
                x={procaryoteBounds.cell.x - 15} 
                y={procaryoteBounds.cell.y - 15} 
                width={procaryoteBounds.cell.width + 30} 
                height={procaryoteBounds.cell.height + 30} 
                rx={procaryoteBounds.cell.rx + 15} 
                fill="none" 
                stroke="#94a3b8" 
                strokeWidth="4" 
                opacity="0.4" 
                className={`${hoverable} ${getActiveClass('capsula')}`}
                onClick={() => handlePartClick(data.parts.find(p => p.id === 'capsula')!)} 
              />
              
              {/* Perete celular */}
              <rect 
                x={procaryoteBounds.cell.x - 8} 
                y={procaryoteBounds.cell.y - 8} 
                width={procaryoteBounds.cell.width + 16} 
                height={procaryoteBounds.cell.height + 16} 
                rx={procaryoteBounds.cell.rx + 8} 
                fill="none" 
                stroke="#78716c" 
                strokeWidth="5" 
                className={`${hoverable} ${getActiveClass('perete')}`}
                onClick={() => handlePartClick(data.parts.find(p => p.id === 'perete')!)} 
              />
              
              {/* Membrană */}
              <rect 
                x={procaryoteBounds.cell.x} 
                y={procaryoteBounds.cell.y} 
                width={procaryoteBounds.cell.width} 
                height={procaryoteBounds.cell.height} 
                rx={procaryoteBounds.cell.rx} 
                fill="none" 
                stroke="#f472b6" 
                strokeWidth="4" 
                className={`${hoverable} ${getActiveClass('membrana')}`}
                onClick={() => handlePartClick(data.parts.find(p => p.id === 'membrana')!)} 
              />
              
              {/* Nucleoid */}
              <path 
                d="M350 200c30-35 100-25 130 12s-12 88-80 88-88-30-50-100z" 
                fill="#60a5fa" 
                opacity="0.7" 
                className={`${hoverable} ${getActiveClass('nucleoid')}`}
                onClick={() => handlePartClick(data.parts.find(p => p.id === 'nucleoid')!)} 
              />
              
              {/* Ribozomi - poziții aleatorii */}
              {procaryoteRibosomes.map((r, i) => (
                <circle 
                  key={`r${i}`} 
                  cx={r.cx} 
                  cy={r.cy} 
                  r="5" 
                  fill="#34d399" 
                  className={`${hoverable} ${getActiveClass('ribozomi')}`}
                  onClick={() => handlePartClick(data.parts.find(p => p.id === 'ribozomi')!)} 
                />
              ))}
            </g>
          )}

          {/* CELULA ANIMALĂ */}
          {isAnimal && (
            <g>
              {/* Citoplasmă cu gradient */}
              <defs>
                <radialGradient id="cytoAnimal" cx="50%" cy="50%" r="70%">
                  <stop offset="0%" stopColor="#fde68a" />
                  <stop offset="100%" stopColor="#fef3c7" />
                </radialGradient>
              </defs>
              
              {/* Formă celulară */}
              <ellipse 
                cx={animalBounds.cell.cx} 
                cy={animalBounds.cell.cy} 
                rx={animalBounds.cell.rx} 
                ry={animalBounds.cell.ry} 
                fill="url(#cytoAnimal)" 
                className={`${hoverable} ${getActiveClass('citoplasma')}`}
                onClick={() => handlePartClick(data.parts.find(p => p.id === 'citoplasma')!)} 
              />
              
              {/* Membrană dublă */}
              <ellipse 
                cx={animalBounds.cell.cx} 
                cy={animalBounds.cell.cy} 
                rx={animalBounds.cell.rx} 
                ry={animalBounds.cell.ry} 
                fill="none" 
                stroke="#f472b6" 
                strokeWidth="6" 
                className={`${hoverable} ${getActiveClass('membrana')}`}
                onClick={() => handlePartClick(data.parts.find(p => p.id === 'membrana')!)} 
              />
              
              {/* Nucleu */}
              <circle 
                cx={animalBounds.cell.cx} 
                cy={animalBounds.cell.cy} 
                r="100" 
                fill="#818cf8" 
                stroke="#1e3a8a" 
                strokeWidth="3" 
                className={`${hoverable} ${getActiveClass('nucleu')}`}
                onClick={() => handlePartClick(data.parts.find(p => p.id === 'nucleu')!)} 
              />
              
              {/* Nucleol */}
              <circle 
                cx={animalBounds.cell.cx + 25} 
                cy={animalBounds.cell.cy - 15} 
                r="25" 
                fill="#4338ca" 
              />
              
              {/* Pori nucleari */}
              {Array.from({ length: 20 }).map((_, i) => {
                const angle = (i / 20) * Math.PI * 2;
                const x = animalBounds.cell.cx + Math.cos(angle) * 100;
                const y = animalBounds.cell.cy + Math.sin(angle) * 100;
                return (
                  <circle 
                    key={`p${i}`} 
                    cx={x} 
                    cy={y} 
                    r="4" 
                    fill="#4338ca" 
                  />
                );
              })}
              
              {/* Mitocondrii - doar 2 */}
              {animalMitochondria.map((m, i) => (
                <g 
                  key={`m${i}`} 
                  className={`${hoverable} ${getActiveClass('mitocondrii')}`}
                  onClick={() => handlePartClick(data.parts.find(p => p.id === 'mitocondrii')!)}
                >
                  <ellipse 
                    cx={m.cx} 
                    cy={m.cy} 
                    rx={m.rx} 
                    ry={m.ry} 
                    fill="#f87171" 
                    stroke="#dc2626" 
                    strokeWidth="3" 
                  />
                  <path 
                    d={`M ${m.cx - m.rx * 0.7} ${m.cy} q ${m.rx * 0.35} ${-m.ry * 0.4} ${m.rx * 0.7} 0 q ${m.rx * 0.35} ${m.ry * 0.4} ${m.rx * 0.7} 0`} 
                    fill="none" 
                    stroke="#dc2626" 
                    strokeWidth="2" 
                  />
                  <path 
                    d={`M ${m.cx - m.rx * 0.7} ${m.cy + m.ry * 0.3} q ${m.rx * 0.35} ${-m.ry * 0.4} ${m.rx * 0.7} 0 q ${m.rx * 0.35} ${m.ry * 0.4} ${m.rx * 0.7} 0`} 
                    fill="none" 
                    stroke="#dc2626" 
                    strokeWidth="2" 
                  />
                  <path 
                    d={`M ${m.cx - m.rx * 0.7} ${m.cy - m.ry * 0.3} q ${m.rx * 0.35} ${-m.ry * 0.4} ${m.rx * 0.7} 0 q ${m.rx * 0.35} ${m.ry * 0.4} ${m.rx * 0.7} 0`} 
                    fill="none" 
                    stroke="#dc2626" 
                    strokeWidth="2" 
                  />
                </g>
              ))}
              
              {/* Ribozomi - poziții aleatorii */}
              {animalRibosomes.map((r, i) => (
                <circle 
                  key={`ra${i}`} 
                  cx={r.cx} 
                  cy={r.cy} 
                  r="5" 
                  fill="#4ade80" 
                  className={`${hoverable} ${getActiveClass('ribozomi')}`}
                  onClick={() => handlePartClick(data.parts.find(p => p.id === 'ribozomi')!)} 
                />
              ))}
            </g>
          )}

          {/* CELULA VEGETALĂ */}
          {isPlant && (
            <g>
              {/* Perete celular */}
              <rect 
                x={plantBounds.cell.x} 
                y={plantBounds.cell.y} 
                width={plantBounds.cell.width} 
                height={plantBounds.cell.height} 
                rx={plantBounds.cell.rx} 
                fill="none" 
                stroke="#15803d" 
                strokeWidth="12" 
                className={`${hoverable} ${getActiveClass('perete')}`}
                onClick={() => handlePartClick(data.parts.find(p => p.id === 'perete')!)} 
              />
              
              {/* Membrană */}
              <rect 
                x={plantBounds.cell.x + 12} 
                y={plantBounds.cell.y + 12} 
                width={plantBounds.cell.width - 24} 
                height={plantBounds.cell.height - 24} 
                rx={plantBounds.cell.rx - 6} 
                fill="#fef3c7" 
                stroke="#f472b6" 
                strokeWidth="4" 
                className={`${hoverable} ${getActiveClass('membrana')}`}
                onClick={() => handlePartClick(data.parts.find(p => p.id === 'membrana')!)} 
              />
              
              {/* Citoplasmă */}
              <rect 
                x={plantBounds.cell.x + 16} 
                y={plantBounds.cell.y + 16} 
                width={plantBounds.cell.width - 32} 
                height={plantBounds.cell.height - 32} 
                rx={plantBounds.cell.rx - 8} 
                fill="#fef3c7" 
                fillOpacity="0.6" 
                className={`${hoverable} ${getActiveClass('citoplasma')}`}
                onClick={() => handlePartClick(data.parts.find(p => p.id === 'citoplasma')!)} 
              />
              
              {/* Vacuolă mai mică */}
              <rect 
                x={vacuoleBounds.x} 
                y={vacuoleBounds.y} 
                width={vacuoleBounds.width} 
                height={vacuoleBounds.height} 
                rx={vacuoleBounds.rx} 
                fill="#7dd3fc" 
                fillOpacity="0.4" 
                stroke="#0ea5e9" 
                strokeWidth="3" 
                className={`${hoverable} ${getActiveClass('vacuola')}`}
                onClick={() => handlePartClick(data.parts.find(p => p.id === 'vacuola')!)} 
              />
              
              {/* Nucleu */}
              <circle 
                cx="450" 
                cy="180" 
                r="60" 
                fill="#818cf8" 
                stroke="#1e3a8a" 
                strokeWidth="3" 
                className={`${hoverable} ${getActiveClass('nucleu')}`}
                onClick={() => handlePartClick(data.parts.find(p => p.id === 'nucleu')!)} 
              />
              
              {/* Nucleol */}
              <circle cx="470" cy="170" r="18" fill="#4338ca" />
              
              {/* Cloroplaste - toate în interiorul celulei */}
              {plantChloroplasts.map((c, i) => (
                <g 
                  key={`c${i}`} 
                  className={`${hoverable} ${getActiveClass('cloroplaste')}`}
                  onClick={() => handlePartClick(data.parts.find(p => p.id === 'cloroplaste')!)}
                >
                  <ellipse 
                    cx={c.cx} 
                    cy={c.cy} 
                    rx={c.rx} 
                    ry={c.ry} 
                    fill="#22c55e" 
                    stroke="#16a34a" 
                    strokeWidth="3" 
                  />
                  <path 
                    d={`M ${c.cx - c.rx * 0.7} ${c.cy - c.ry * 0.3} h ${c.rx * 1.4} M ${c.cx - c.rx * 0.7} ${c.cy} h ${c.rx * 1.4} M ${c.cx - c.rx * 0.7} ${c.cy + c.ry * 0.3} h ${c.rx * 1.4}`} 
                    stroke="#16a34a" 
                    strokeWidth="2" 
                  />
                </g>
              ))}
              
              {/* Mitocondrii - doar 2 */}
              {plantMitochondria.map((m, i) => (
                <g 
                  key={`mp${i}`} 
                  className={`${hoverable} ${getActiveClass('mitocondrii')}`}
                  onClick={() => handlePartClick(data.parts.find(p => p.id === 'mitocondrii')!)}
                >
                  <ellipse 
                    cx={m.cx} 
                    cy={m.cy} 
                    rx={m.rx} 
                    ry={m.ry} 
                    fill="#f87171" 
                    stroke="#dc2626" 
                    strokeWidth="3" 
                  />
                  <path 
                    d={`M ${m.cx - m.rx * 0.7} ${m.cy} q ${m.rx * 0.35} ${-m.ry * 0.4} ${m.rx * 0.7} 0 q ${m.rx * 0.35} ${m.ry * 0.4} ${m.rx * 0.7} 0`} 
                    fill="none" 
                    stroke="#dc2626" 
                    strokeWidth="2" 
                  />
                </g>
              ))}
              
              {/* Ribozomi - poziții aleatorii */}
              {plantRibosomes.map((r, i) => (
                <circle 
                  key={`rp${i}`} 
                  cx={r.cx} 
                  cy={r.cy} 
                  r="5" 
                  fill="#4ade80" 
                  className={`${hoverable} ${getActiveClass('ribozomi')}`}
                  onClick={() => handlePartClick(data.parts.find(p => p.id === 'ribozomi')!)} 
                />
              ))}
            </g>
          )}
        </svg>
      </div>
    </div>
  );
};

export default CellDiagram;


