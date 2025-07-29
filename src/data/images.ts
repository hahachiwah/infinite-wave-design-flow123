// Image mapping from friendly names to UUID filenames
export const imageMap: Record<string, string> = {
  // Company Logo
  'infinite-water-logo': '18223f46-e114-4f16-8a48-67997d32111a.png',
  
  // Expert Images
  'expert-gheorghe': '927cd115-1865-4db6-8aca-0fe09ab31ec3.png',
  'expert-yk-ip': '998d6beb-39d2-4395-ae19-69f5258185c3.png',
  'expert-daniel-jin': '18d6054d-681d-414e-a2a3-a5a55388dd3e.png',
  'expert-felix-wong': '65197fb1-b394-43c0-85fc-3db5c54da40c.png',
  
  // Partner Images
  'partner-university-queensland': '477e690f-5885-48a2-b986-85362f3f6caa.png',
  'partner-unsw-sydney': '8bcf1e74-d850-4bde-93d8-690e34e6ba25.png',
  'partner-uts-sydney': '832973b9-ee0e-40f4-ad25-e34dfd42f701.png',
  'partner-water-corporation': '64d79107-03a1-4078-8268-06d438d4e73f.png',
  'partner-westland-milk': '783d540b-a9cf-4309-ada6-9657d99bd8f9.png',
  'partner-xstrata': 'feb54366-a8ca-4d04-ba53-76edb8289ece.png',
  'partner-alano': 'e43bf717-791c-448d-bc4c-cbcb1918d37c.png',
  'partner-australian-aid': 'b02c1a37-3c68-4fcc-b5c4-b630929a9a0c.png',
  'partner-freedom-lifestyle': '849bf037-c412-438e-95a1-27eaca8cfe5a.png',
  'partner-fonterra': '451f66e4-4bd0-4272-911a-f76f62a0be5d.png',
  'partner-multiplex': '5d9a39f1-cfce-46c3-b940-8a9de2c8e4b8.png',
  'partner-narromine-shire': '65f160dc-4c3c-494d-9e80-541bdc3a2a70.png',
  'partner-oji': '8be17a64-f64a-40a5-9531-12daa932cd23.png',
  'partner-schutz': '82b47e25-afe6-415a-9d49-1a0528920cad.png',
  'partner-sealed-air': 'ed1767dd-3b17-4219-abac-5ad286652fa4.png',
  'partner-sydney-water': '8d653f41-3935-45c7-a898-8d75231a5350.png',
  
  // Case Study Images
  'case-study-copper-mine': '82b47e25-afe6-415a-9d49-1a0528920cad.png',
  'copper-mine-townsville': '82b47e25-afe6-415a-9d49-1a0528920cad.png',
  'case-study-packaging-manufacturer': '849bf037-c412-438e-95a1-27eaca8cfe5a.png',
  'reusable-packaging-manufacturer': '849bf037-c412-438e-95a1-27eaca8cfe5a.png',
  'case-study-dairy-recycling': '8d653f41-3935-45c7-a898-8d75231a5350.png',
  'dairy-industry-recycling': '8d653f41-3935-45c7-a898-8d75231a5350.png',
  'case-study-bangladesh-water': '65f160dc-4c3c-494d-9e80-541bdc3a2a70.png',
  'bangladesh-drinking-water': '65f160dc-4c3c-494d-9e80-541bdc3a2a70.png',
  
  // Technology/Equipment Images
  'technology-water-treatment': '477e690f-5885-48a2-b986-85362f3f6caa.png',
  'technology-industrial-plant': '5c360a7b-0769-46b4-a4cc-0eba0ec52e9a.png',
  'technology-laboratory': '5d9a39f1-cfce-46c3-b940-8a9de2c8e4b8.png',
  'technology-mining-operation': '64d79107-03a1-4078-8268-06d438d4e73f.png',
  
  // Additional Images
  'additional-1': '1c20599a-af33-4f8f-a707-f6f3de27a32e.png',
  'additional-2': '5c360a7b-0769-46b4-a4cc-0eba0ec52e9a.png',
  'additional-3': 'e4fa0a4f-d2f1-473e-b60a-659b475b7202.png',
  'additional-4': 'e55dfd43-2575-4059-a623-e805c11c1a38.png',
  
  // Default/Fallback Images
  'default-case-study': '65197fb1-b394-43c0-85fc-3db5c54da40c.png',
  'default-expert': '783d540b-a9cf-4309-ada6-9657d99bd8f9.png',
  'default-partner': '79cfa447-bb10-4f4a-8bb2-bf949de10ab9.png',
  'default-technology': '79cfa447-bb10-4f4a-8bb2-bf949de10ab9.png',
};

// Video mapping
export const videoMap: Record<string, string> = {
  'header-video': 'infinite-water_header.mp4',
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
 * Get the full path to a video by its friendly name
 * @param videoName - The friendly name of the video
 * @returns The full path to the video or undefined
 */
export const getVideoPath = (videoName: string): string | undefined => {
  const filename = videoMap[videoName];
  return filename ? `/lovable-uploads/${filename}` : undefined;
};

/**
 * Get all available image names for reference
 * @returns Array of all friendly image names
 */
export const getAvailableImageNames = (): string[] => {
  return Object.keys(imageMap);
};