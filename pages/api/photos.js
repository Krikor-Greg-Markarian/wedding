// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const data = {
    journalSection: [
      {
        date: "Nov,07-17",
        title:
          "Let us always meet each other with smile, for the smile is the beginning of love.",
        posted: "POSTED IN",
        journal: "JOURNAL",
        imageUrl:
          "http://themes.sindevo.com/marriage-full/wp-content/uploads/2017/11/slider2.jpg",
        isVideo: false,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ReadMoreButtonName: "READ MORE",
      },
    ],
    ourPhotoGallery: [
        {
            imageUrl:"https://cdn.pixabay.com/photo/2014/11/13/17/04/heart-529607__480.jpg",
          title:"Godfather",
        },
        {
            imageUrl:"https://cdn.pixabay.com/photo/2014/09/13/04/59/couple-443600__340.jpg",
          title:"Flowers Decoration",
        },
        {
            imageUrl:"https://cdn.pixabay.com/photo/2014/02/07/11/36/couple-260899__340.jpg",
          title:"Table Setup",
        },
        {
            imageUrl:"https://cdn.pixabay.com/photo/2016/06/29/04/39/bride-1486004__340.jpg",
          title:"BrideAndFriends",
        },
        {
            imageUrl:"https://cdn.pixabay.com/photo/2021/09/06/05/55/love-6600904__340.jpg",
          title:"Bachelor Party",
        },
        {
            imageUrl:"https://cdn.pixabay.com/photo/2016/11/22/19/05/couple-1850073__340.jpg",
          title:"Wedding Venue",
        },
        {
            imageUrl:"https://cdn.pixabay.com/photo/2016/11/21/15/58/wedding-1846114__340.jpg",
          title:"Wedding Cake",
        },
        {
            imageUrl:"https://cdn.pixabay.com/photo/2015/09/02/13/04/marriage-918864__340.jpg",
          title:"Wedding In Nature",
        },
        {
            imageUrl:"https://cdn.pixabay.com/photo/2016/10/26/07/56/wedding-1770860__340.jpg",
          title:"Michael And Sarah",
        },
      ],
  };

  res.status(200).json(data);
}
