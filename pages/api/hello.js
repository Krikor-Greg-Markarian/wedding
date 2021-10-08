// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const data = {
    about: [
      {
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/04/05/10/45/girl-2204622__340.jpg",
        title: "about Sarah",
        description:
          "Love is friendship that has caught fire. It is quiet understanding, sharing and forgiving. It is loyalty through good and bad times. It settles for less than perfection and makes allowances for human weaknesses",
        readMore: "READ MORE",
      },
      {
        imageUrl:
          "https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814__480.jpg",
        title: "about michael",
        description:
          "Friends can help each other. A true friend is someone who lets you have total freedom to be yourself – and especially to feel. Or, not feel. Whatever you happen to be feeling at the moment is fine with them.",
        readMore: "READ MORE",
      },
    ],
  };

  res.status(200).json(data);
}
