import {IBook} from "@/data/types";

export function removeDuplicates(books: IBook[]): IBook[] {
    const uniqueBooks: Map<string, IBook> = new Map();

    for (const book of books) {
        uniqueBooks.set(book.id, book);
    }

    return Array.from(uniqueBooks.values());
}