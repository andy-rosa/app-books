export const clearBookDescription = (description: string | undefined): string | null => {
    if (!description) return null
    const htmlTagRegExp = /(\<(\/?[^>]+)>)/g;
    return description.replace(htmlTagRegExp, '');
}
