import { CellData } from './types';

export const DESCRIPTIONS = {
  nucleu: 'Este ca un "creier" al celulei. Conține ADN-ul, adică instrucțiunile pentru tot ce face celula. Are formă rotundă și se vede ușor la microscop.',
  nucleoid: 'Zona din mijlocul bacteriei unde se află ADN-ul circular. Nu este înconjurat de o membrană, spre deosebire de celulele animale și vegetale.',
  membrana: 'Un înveliș subțire și elastic ca o "piele" a celulei. Este făcută din grăsimi și proteine aranjate în două straturi.',
  pereteProc: 'Un înveliș dur ca o armură în jurul bacteriei. Este făcut din peptidoglican, un material care nu există în celulele umane.',
  pereteVeg: 'Un strat gros și tare din celuloză în jurul celulei plantei. Funcționează ca un schelet extern pentru celulă.',
  citoplasma: 'Un gel transparent care umple celula. Toate organitele plutesc aici. Este în mare parte apă.',
  mitocondrii: 'Sunt ca niște "baterii" ale celulei, cu formă de fasole. Transformă nutrienții în energie utilizabilă prin respirație celulară. Au propriul lor ADN.',
  ribozomi: 'Cele mai mici organite, ca niște puncte. Fabrică proteinele necesare celulei. Sunt atât de mici încât nu se văd la microscopul obișnuit.',
  cloroplaste: 'Organitele verzi ale plantelor ce conțin clorofilă. Transformă energia solară în hrană prin fotosinteză. Doar plantele au cloroplaste.',
  vacuola: 'Un "balon cu apă" foarte mare în celula plantei. Ocupă aproape tot spațiul și împinge restul organitelor la margini. Menține presiunea internă a celulei.',
  capsula: 'Un strat cleios și alunecos în jurul unor bacterii. Nu toate bacteriile au capsulă.',
  flagel: 'O „coadă” lungă și subțire care se învârte ca o elice. Unele bacterii au una sau mai multe.'
} as const;

export const CELLS: Record<string, CellData> = {
  procariota: {
    type: 'procariota',
    title: 'Celula Procariotă (Bacterie)',
    parts: [
      { id: 'nucleoid', name: 'Nucleoid', description: DESCRIPTIONS.nucleoid, functionText: 'Conține instrucțiunile genetice ale bacteriei.', icon: '🧬', colorClass: 'stroke-nucleus fill-blue-100' },
      { id: 'capsula', name: 'Capsulă', description: DESCRIPTIONS.capsula, functionText: 'Protejează și ajută la lipirea de suprafețe.', icon: '🛡️', colorClass: 'stroke-gray-400 fill-capsule' },
      { id: 'perete', name: 'Perete celular', description: DESCRIPTIONS.pereteProc, functionText: 'Protejează bacteria și îi dă formă (peptidoglican).', icon: '🧬', colorClass: 'stroke-wall fill-yellow-100' },
      { id: 'membrana', name: 'Membrană celulară', description: DESCRIPTIONS.membrana, functionText: 'Controlează ce intră și iese din celulă.', icon: '🫧', colorClass: 'stroke-membrane fill-pink-100' },
      { id: 'ribozomi', name: 'Ribozomi', description: DESCRIPTIONS.ribozomi, functionText: 'Fabrică proteinele celulei.', icon: '⚙️', colorClass: 'fill-ribosome' },
      { id: 'flagel', name: 'Flagel', description: DESCRIPTIONS.flagel, functionText: 'Ajută bacteria să se deplaseze.', icon: '🏴', colorClass: 'stroke-flagellum' },
      { id: 'citoplasma', name: 'Citoplasmă', description: DESCRIPTIONS.citoplasma, functionText: 'Mediu pentru reacții chimice.', icon: '💧', colorClass: 'fill-cytoplasm' }
    ]
  },
  animala: {
    type: 'animala',
    title: 'Celula Eucariotă Animală',
    parts: [
      { id: 'nucleu', name: 'Nucleu', description: DESCRIPTIONS.nucleu, functionText: 'Comandă celula și păstrează ADN-ul.', icon: '🧠', colorClass: 'stroke-nucleus fill-blue-100' },
      { id: 'membrana', name: 'Membrană celulară', description: DESCRIPTIONS.membrana, functionText: 'Controlează schimbul de substanțe.', icon: '🫧', colorClass: 'stroke-membrane fill-pink-100' },
      { id: 'citoplasma', name: 'Citoplasmă', description: DESCRIPTIONS.citoplasma, functionText: 'Mediu pentru organite și reacții.', icon: '💧', colorClass: 'fill-cytoplasm' },
      { id: 'mitocondrii', name: 'Mitocondrii', description: 'Sunt ca niște „baterii” ale celulei, cu formă ovală ca o fasole. O celulă poate avea multe mitocondrii, mai ales dacă este foarte activă. Au propriul lor ADN.', functionText: 'Produc energie sub formă de ATP (adenozin trifosfat), care este "moneda energetică" a celulei. Transformă nutrienții din mâncare în energie utilizabilă prin procesul de respirație celulară. Cu cât celula lucrează mai mult, cu atât are mai multe mitocondrii.', icon: '⚡', colorClass: 'fill-mitochondria' },
      { id: 'ribozomi', name: 'Ribozomi', description: DESCRIPTIONS.ribozomi, functionText: 'Produc proteine.', icon: '⚙️', colorClass: 'fill-ribosome' }
    ]
  },
  vegetala: {
    type: 'vegetala',
    title: 'Celula Eucariotă Vegetală',
    parts: [
      { id: 'perete', name: 'Perete celular', description: DESCRIPTIONS.pereteVeg, functionText: 'Oferă rigiditate și protecție (celuloză).', icon: '🌱', colorClass: 'stroke-wall fill-yellow-100' },
      { id: 'nucleu', name: 'Nucleu', description: DESCRIPTIONS.nucleu, functionText: 'Comandă celula; împins la margine de vacuolă.', icon: '🧠', colorClass: 'stroke-nucleus fill-blue-100' },
      { id: 'membrana', name: 'Membrană celulară', description: DESCRIPTIONS.membrana, functionText: 'Controlează schimbul de substanțe.', icon: '🫧', colorClass: 'stroke-membrane fill-pink-100' },
      { id: 'citoplasma', name: 'Citoplasmă', description: DESCRIPTIONS.citoplasma, functionText: 'Mediu fluid rezidual în jurul vacuolei.', icon: '💧', colorClass: 'fill-cytoplasm' },
      { id: 'mitocondrii', name: 'Mitocondrii', description: 'Sunt ca niște „baterii” ale celulei, cu formă ovală ca o fasole. O celulă poate avea multe mitocondrii, mai ales dacă este foarte activă. Au propriul lor ADN.', functionText: 'Produc energie sub formă de ATP (adenozin trifosfat), care este "moneda energetică" a celulei. Transformă nutrienții din mâncare în energie utilizabilă prin procesul de respirație celulară. Cu cât celula lucrează mai mult, cu atât are mai multe mitocondrii.', icon: '⚡', colorClass: 'fill-mitochondria' },
      { id: 'ribozomi', name: 'Ribozomi', description: DESCRIPTIONS.ribozomi, functionText: 'Fabrică proteine.', icon: '⚙️', colorClass: 'fill-ribosome' },
      { id: 'cloroplaste', name: 'Cloroplaste', description: DESCRIPTIONS.cloroplaste, functionText: 'Fac fotosinteza; produc glucoză și oxigen.', icon: '🌿', colorClass: 'fill-chloroplast' },
      { id: 'vacuola', name: 'Vacuolă mare', description: DESCRIPTIONS.vacuola, functionText: 'Depozit mare; menține presiunea internă.', icon: '💧', colorClass: 'fill-vacuole' }
    ]
  }
};

export const COLOR_CLASSES = {
  nucleus: 'fill-nucleus',
  membrane: 'fill-membrane',
  cytoplasm: 'fill-cytoplasm',
  mitochondria: 'fill-mitochondria',
  ribosome: 'fill-ribosome',
  chloroplast: 'fill-chloroplast',
  vacuole: 'fill-vacuole',
  wall: 'fill-wall',
  capsule: 'fill-capsule',
  flagellum: 'stroke-flagellum'
};


