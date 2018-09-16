import QRcode from 'qrcode';

export function getImage(url) {
  // if(indexedDB.of)
  return QRcode.toDataURL(url);
}
export default {};
