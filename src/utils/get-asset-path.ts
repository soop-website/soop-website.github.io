import { getPathForLang } from "./get-lang";

export function getProductAssetPath(productId: string, relativePath: string) {
    return getPathForLang(`/product_files/${productId}/${relativePath}`);
}
