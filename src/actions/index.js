export function selectBook(book){
    //  console.log(`This book was selected ${book}`)
    return{
        type:'BOOK_SELECTED',
        payload:book
    }
}