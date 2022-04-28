export default function (articleWishList = [], action) {
  if (action.type == "ADD_ARTICLE") {
    var articleWishListCopy = [...articleWishList];
    var findDuplicate = articleWishListCopy.find((e) => e.title == action.article.title);

    if (findDuplicate == undefined) {
      articleWishListCopy.push(action.article);    
    }
      console.log(articleWishListCopy);
      return articleWishListCopy;

  } else if (action.type == "DELETE_ARTICLE") {
    var articleDeleteWishListCopy = [...articleWishList];
    var position = null

        for(let i=0;i<articleDeleteWishListCopy.length;i++){
            if(articleDeleteWishListCopy[i].title == action.title){
                position = i
            }
        }
        if(position != null){
          articleDeleteWishListCopy.splice(position,1)
        }
    return articleDeleteWishListCopy;
  } else {
    return articleWishList;
  }
}
