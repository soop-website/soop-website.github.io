export function getProductAssetPath(productId: string, relativePath: string) {
    return `/product_files/${productId}/${relativePath}`;
}
