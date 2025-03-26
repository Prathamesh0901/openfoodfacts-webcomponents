import { signal } from "@lit-labs/signals"
import { DEFAULT_ASSETS_IMAGES_PATH } from "../constants"

export const assetsImagesPath = signal(DEFAULT_ASSETS_IMAGES_PATH)

export const getImageUrl = (fileName: string) => {
  return `${assetsImagesPath.get()}/${fileName}`
}
