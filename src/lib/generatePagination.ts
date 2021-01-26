interface PaginationsArgs {
  currentPage: number;
  totalItems: number;
  itemLimit: number;
  blockLimit?: number;
  pageCount?: number;
}

export interface Paginations {
  currentPage: number;
  totalPage: number;
  pageItems: number[];
  totalItems: number;
}

export const createPaginations = (args: PaginationsArgs): Paginations => {
  args.pageCount = args.pageCount ? args.pageCount : 10;
  const { currentPage, totalItems, itemLimit, pageCount } = args;

  let blockStartPage: number = 0;
  if (args.currentPage % pageCount === 0) {
    blockStartPage = currentPage - (pageCount - 1);
  } else {
    blockStartPage = Math.floor(currentPage / pageCount) * pageCount + 1;
  }
  const totalPage: number = Math.ceil(totalItems / itemLimit);
  const blockLimitPage: number = Math.ceil(currentPage / pageCount) * pageCount;
  const endPage: number = blockLimitPage < totalPage ? blockLimitPage : totalPage;

  const pageItems: number[] = [];

  for (let i: number = blockStartPage; i <= endPage; i++) {
    pageItems.push(i);
  }

  return {
    currentPage,
    totalPage,
    pageItems,
    totalItems,
  };
};
