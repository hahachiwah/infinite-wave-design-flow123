// Image mapping from friendly names to UUID filenames
export const imageMap: Record<string, string> = {
  // Case Study Images
  'copper-mine-townsville': '82b47e25-afe6-415a-9d49-1a0528920cad.png',
  'reusable-packaging-manufacturer': '849bf037-c412-438e-95a1-27eaca8cfe5a.png',
  'dairy-industry-recycling': '8d653f41-3935-45c7-a898-8d75231a5350.png',
  'bangladesh-drinking-water': '65f160dc-4c3c-494d-9e80-541bdc3a2a70.png',
  
  // Expert Images
  'expert-john-smith': '18223f46-e114-4f16-8a48-67997d32111a.png',
  'expert-sarah-johnson': '18d6054d-681d-414e-a2a3-a5a55388dd3e.png',
  'expert-michael-brown': '1c20599a-af33-4f8f-a707-f6f3de27a32e.png',
  'expert-emily-davis': '451f66e4-4bd0-4272-911a-f76f62a0be5d.png',
  
  // Partner/Technology Images
  'water-treatment-facility': '477e690f-5885-48a2-b986-85362f3f6caa.png',
  'industrial-plant': '5c360a7b-0769-46b4-a4cc-0eba0ec52e9a.png',
  'laboratory-equipment': '5d9a39f1-cfce-46c3-b940-8a9de2c8e4b8.png',
  'mining-operation': '64d79107-03a1-4078-8268-06d438d4e73f.png',
  
  // Default/Fallback Images
  'default-case-study': '65197fb1-b394-43c0-85fc-3db5c54da40c.png',
  'default-expert': '783d540b-a9cf-4309-ada6-9657d99bd8f9.png',
  'default-technology': '79cfa447-bb10-4f4a-8bb2-bf949de10ab9.png',
};

/**
 * Convert a friendly image name to its UUID filename
 * @param imageName - The friendly name of the image
 * @param fallback - Optional fallback image name if the primary is not found
 * @returns The UUID filename or undefined if not found
 */
export const getImageUuid = (imageName: string, fallback?: string): string | undefined => {
  const uuid = imageMap[imageName];
  if (uuid) return uuid;
  
  if (fallback && imageMap[fallback]) {
    console.warn(`Image "${imageName}" not found, using fallback "${fallback}"`);
    return imageMap[fallback];
  }
  
  console.warn(`Image "${imageName}" not found in image map`);
  return undefined;
};

/**
 * Get the full path to an image by its friendly name
 * @param imageName - The friendly name of the image
 * @param fallback - Optional fallback image name
 * @returns The full path to the image or undefined
 */
export const getImagePath = (imageName: string, fallback?: string): string | undefined => {
  const uuid = getImageUuid(imageName, fallback);
  return uuid ? `/lovable-uploads/${uuid}` : undefined;
};

/**
 * Get all available image names for reference
 * @returns Array of all friendly image names
 */
export const getAvailableImageNames = (): string[] => {
  return Object.keys(imageMap);
};