// Convierte [texto] en un placeholder visible (dato por confirmar).
export const ph = (text: string) =>
  text.replace(/\[([^\]]+)\]/g, '<span class="ph" title="Dato por confirmar">$1</span>');

