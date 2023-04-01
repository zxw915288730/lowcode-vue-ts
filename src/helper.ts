import QRCode from 'qrcode'
import { saveAs } from 'file-saver'

export function generateQRCode(id: string, url: string, width = 100) {
  const ele = document.getElementById(id) as HTMLCanvasElement
  console.log(ele)
  return QRCode.toCanvas(ele, url, { width })
}


export const downloadImage = (url: string) => {
  const fileName = url.substring(url.lastIndexOf('/') + 1)
  saveAs(url, fileName)
}