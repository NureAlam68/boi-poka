import { toast } from "react-toastify";

const getStoredReadList = () => {
  const storedListStr = localStorage.getItem("read-list");

  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredReadList = (id) => {
  const storedList = getStoredReadList();

  if (storedList.includes(id)) {
    toast.error("Already exists !")
  } else {
    storedList.push(id); // id array te add
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedListStr);
    toast.success("Book adding read list...")
  }
};



const getStoredWishList = () => {
  const storedWishListStr = localStorage.getItem("wish-list");

  if (storedWishListStr) {
    const storedWishList = JSON.parse(storedWishListStr);
    return storedWishList;
  } else {
    return [];
  }
};

const addToStoredWishList = (id) => {
  const storedWishList = getStoredWishList();

  if (storedWishList.includes(id)) {
    toast.error("Already exists !")
  } else {
    storedWishList.push(id);
    const storedWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem("wish-list", storedWishListStr);
    toast.success("Book adding wish list...")

  }
};

export { addToStoredWishList, addToStoredReadList, getStoredReadList, getStoredWishList };
