// Datos del proyecto EjeZ (fuente: EjeZ_Grupo4.pptx y ProyectoIO_EjeZ_Grupo4.xlsx)

export const equipo = {
  grupo: 'Grupo 4',
  curso: 'Investigación de Operaciones',
  fecha: 'Octubre 2026',
  // Agrega aquí a los demás integrantes: { nombre: '...', carne: '...' }
  integrantes: [{ nombre: 'Gabriel Alejandro Ajin Izaguirre', carne: '1184924' }],
  correo: '', // ej. 'grupo4@correo.com'
};

export const problema = {
  esperaHoras: 17.05,
  dias: 2.1,
  impresoras: 2,
  llegadas: 0.45,
  utilizacion: 90,
};

export const agenda = [
  { n: '01', titulo: 'El problema', sub: '17 h de espera en el laboratorio', href: '#problema' },
  { n: '02', titulo: 'Teoría de colas', sub: '¿Cuántas impresoras?', href: '#colas' },
  { n: '03', titulo: 'Programación lineal', sub: '¿Qué trabajos aceptar?', href: '#pl' },
  { n: '04', titulo: 'Simulación', sub: '¿Lo confirma JaamSim?', href: '#simulacion' },
  { n: '05', titulo: 'Inversión', sub: 'Q40,000 y su retorno', href: '#inversion' },
];

export const datosModelo = [
  { k: 'λ · Llegadas', v: '1 pedido / h', d: 'en una semana normal' },
  { k: '1/μ · Impresión', v: '4 h por pedido', d: 'μ = 0.25 pedidos por hora por impresora' },
  { k: 'Costo de espera', v: 'Q12 / h', d: 'por cada pedido que está en el sistema' },
  { k: 'Costo por impresora', v: 'Q7.21 / h', d: 'depreciación, luz, mantenimiento, local y operador' },
];

// Costo total por hora según número de impresoras (s). null = cola infinita (ρ ≥ 1)
export const costos = [
  { s: 1, espera: null, impresoras: 7.21 },
  { s: 2, espera: null, impresoras: 14.42 },
  { s: 3, espera: null, impresoras: 21.63 },
  { s: 4, espera: null, impresoras: 28.84 },
  { s: 5, espera: 74.62, impresoras: 36.05 },
  { s: 6, espera: 54.86, impresoras: 43.26 },
  { s: 7, espera: 50.2, impresoras: 50.47 },
  { s: 8, espera: 48.75, impresoras: 57.68 },
];

export const temporada = [
  { titulo: '6 impresoras · las de hoy', min: 494, extra: '≈ 8.2 h', util: 93.3, costo: 'Q248.71 / h', tono: 'bad' },
  { titulo: '7 impresoras', min: 83, extra: '≈ 1.4 h', util: 80, costo: 'Q141.03 / h', tono: 'mid' },
  { titulo: '8 impresoras · óptimo', min: 27, extra: '', util: 70, costo: 'Q132.50 / h', tono: 'good' },
];

export const mezcla = [
  { id: 'X1', trabajo: 'Pieza pequeña', precio: 45, ganancia: 34.11, semana: 35 },
  { id: 'X2', trabajo: 'Pieza mediana', precio: 95, ganancia: 66.27, semana: 22 },
  { id: 'X3', trabajo: 'Maqueta grande', precio: 260, ganancia: 182.4, semana: 8 },
  { id: 'X4', trabajo: 'Prototipo PETG', precio: 130, ganancia: 93.51, semana: 10 },
  { id: 'X5', trabajo: 'Pedido urgente', precio: 140, ganancia: 111.27, semana: 8 },
];

export const recursos = [
  { nombre: 'Horas de impresión', usado: 360, total: 360, unidad: 'h', nota: 'al tope' },
  { nombre: 'Horas de acabado', usado: 26.25, total: 30, unidad: 'h', nota: '87.5 %' },
  { nombre: 'Filamento', usado: 8900, total: 12000, unidad: 'g', nota: '74 %' },
];

export const demanda = [
  { tipo: 'Pequeñas', usado: 35, max: 35, nota: 'al tope' },
  { tipo: 'Medianas', usado: 22, max: 25, nota: 'holgura de 3' },
  { tipo: 'Maquetas', usado: 8, max: 8, nota: 'al tope (mín. 3)' },
  { tipo: 'Prototipos', usado: 10, max: 10, nota: 'al tope' },
  { tipo: 'Urgentes', usado: 8, max: 8, nota: 'al tope' },
];

export const etapas = [
  { titulo: 'Llegada', sub: 'cada 60 min', icon: 'in' },
  { titulo: 'Tipo de pedido', sub: 'mezcla PL', icon: 'split' },
  { titulo: 'Impresión', sub: '6 impresoras', icon: 'print' },
  { titulo: 'Acabado', sub: '2 operadores', icon: 'tool' },
  { titulo: 'Entregado', sub: 'fin del sistema', icon: 'out' },
];

export const excelVsSim = [
  { r: 'Espera en cola', excel: '34.2 min', sim: '34.6 min', dif: '+0.5 min' },
  { r: 'Utilización', excel: '66.7 %', sim: '74.4 %', dif: '+7.7 pts' },
  { r: 'Pedidos en cola', excel: '0.57', sim: '0.64', dif: '+0.07' },
  { r: 'Horas hasta terminar de imprimir', excel: '4.57 h', sim: '4.83 h', dif: '+0.26 h' },
  { r: 'Pedidos por semana', excel: '72', sim: '73.1', dif: '+1.1' },
];

export const replicas = [41.8, 85.8, 57.9, 8.3, 57.8, 5.7, 20.1, 22.3, 2.7, 44.1];

export const laboratorio = [
  { k: 'Espera en cola', v: 17.8, suf: ' h', excel: '17.05 h', dec: 1 },
  { k: 'Utilización', v: 94.1, suf: ' %', excel: '90 %', dec: 1 },
  { k: 'Pedidos en cola', v: 8.6, suf: '', excel: '7.67', dec: 1 },
];

export const impresoras = [
  { modelo: 'Creality Ender 3 V3 SE', tienda: 'Creativo 3D', precio: 2159, area: '220 × 220 × 250', decision: 'No' },
  { modelo: 'Creality Ender 3 V3 SE', tienda: 'La Electrónica', precio: 2499, area: '220 × 220 × 250', decision: 'No' },
  { modelo: 'Creality Ender 3 V3 KE', tienda: 'La Electrónica', precio: 3299, area: '220 × 220 × 240', decision: 'Alternativa' },
  { modelo: 'Bambu Lab A1', tienda: 'Creativo 3D', precio: 3149, area: '256 × 256 × 256', decision: 'Sí · 5 unidades' },
  { modelo: 'Bambu Lab A1 Combo', tienda: 'Creativo 3D', precio: 4799, area: '256 × 256 × 256', decision: 'No' },
  { modelo: 'Bambu Lab A1 Combo', tienda: 'Pacifiko', precio: 6269, area: '256 × 256 × 256', decision: 'No' },
  { modelo: 'Bambu Lab A2L', tienda: 'Creativo 3D', precio: 4999, area: '330 × 320 × 325', decision: 'Sí · 1 unidad' },
  { modelo: 'Bambu Lab P2S', tienda: 'Creativo 3D', precio: 8099, area: '—', decision: 'No' },
];

export const gruposPresupuesto = {
  equipos: { nombre: 'Equipos', color: 'var(--cyan)' },
  insumos: { nombre: 'Insumos y montaje', color: 'var(--violet)' },
  lanzamiento: { nombre: 'Lanzamiento y caja', color: 'var(--amber)' },
} as const;

export const presupuesto: { item: string; monto: number; grupo: keyof typeof gruposPresupuesto }[] = [
  { item: 'Bambu Lab A1 × 5', monto: 15745, grupo: 'equipos' },
  { item: 'Filamento · 40 kg', monto: 6760, grupo: 'insumos' },
  { item: 'Capital de trabajo', monto: 5618, grupo: 'lanzamiento' },
  { item: 'Bambu Lab A2L × 1', monto: 4999, grupo: 'equipos' },
  { item: 'Mesa y estantería', monto: 2000, grupo: 'insumos' },
  { item: 'Herramientas de acabado', monto: 1500, grupo: 'insumos' },
  { item: 'Publicidad de lanzamiento', monto: 1500, grupo: 'lanzamiento' },
  { item: 'UPS y regletas', monto: 1200, grupo: 'insumos' },
  { item: 'Hotends de repuesto × 2', monto: 678, grupo: 'equipos' },
];

export const cascada = [
  { k: 'Ganancia anual', d: 'PL × 40 semanas', v: 237450, tipo: 'total' },
  { k: 'Gastos fijos del año', d: '', v: -96000, tipo: 'resta' },
  { k: 'Utilidad antes de ISR', d: '', v: 141450, tipo: 'sub' },
  { k: 'ISR 25 %', d: '', v: -35362.5, tipo: 'resta' },
  { k: 'Utilidad neta', d: '', v: 106087.5, tipo: 'sub' },
  { k: 'Inversionista 20 %', d: '', v: -21217.5, tipo: 'resta' },
  { k: 'Queda para EjeZ', d: '', v: 84870, tipo: 'final' },
];

export const conclusiones = [
  { t: '17 h → 34 min de espera', d: '−96.7 % frente al laboratorio; JaamSim lo confirma con 34.6 min.', c: 'cyan' },
  { t: '6 impresoras, costo mínimo', d: 'Q98.12 por hora. En época de entregas el modelo pide 8.', c: 'violet' },
  { t: 'Q5,936.25 por semana', d: 'Mezcla óptima de 83 trabajos; la impresión es el cuello de botella.', c: 'amber' },
  { t: '53 % de retorno anual', d: 'Q40,000 que el negocio recupera en unos 4.5 meses.', c: 'cyan' },
];
