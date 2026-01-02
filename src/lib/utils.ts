import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function generateStoryTitle(tags: string[]): string {
  const templates = [
    `Una aventura de {0} en {1} con {2}`,
    `{2} y {0} se encuentran en {1}`,
    `El misterio de {1}: {0} y {2}`,
    `Cuando {0} conoce {2} en {1}`,
  ];
  
  const template = templates[Math.floor(Math.random() * templates.length)];
  let result = template;
  
  tags.forEach((tag, index) => {
    result = result.replace(`{${index}}`, tag);
  });
  
  return result;
}
