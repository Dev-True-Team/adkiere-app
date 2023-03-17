export const paginate = (items:any, pageNumber:any, pageSize:any) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
   };