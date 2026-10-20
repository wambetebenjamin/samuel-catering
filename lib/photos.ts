/** Verified Pexels CDN photo IDs. Keep the numeric ID in both URL path segments. */
export const pexelsPhotoIds = {
  feast: '958545',
  salad: '70497',
  plated: '1640777',
  grill: '376464',
  buffet: '769289',
  table: '262978',
  event: '3184192',
  team: '3184183',
};
export function pexelsImage(id: string, width = 900) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}
