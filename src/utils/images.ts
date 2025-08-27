export const carSlugFromName = (name: string): string => {
  return name
    .replace(/^Ferrari\s+/i, '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export const carImagePathFromName = (name: string): string => {
  return `/images/cars/${carSlugFromName(name)}.webp`
}
