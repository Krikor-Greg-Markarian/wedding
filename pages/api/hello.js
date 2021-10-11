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
      },
      {
        imageUrl:
          "https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814__480.jpg",
        title: "about michael",
        description:
          "Friends can help each other. A true friend is someone who lets you have total freedom to be yourself – and especially to feel. Or, not feel. Whatever you happen to be feeling at the moment is fine with them.",
      },
    ],
    weddingItem: [
      {
        title: "Wedding Details",
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/12/14/02/40/table-3018151__340.jpg",
        description:
          "Love is friendship that has caught fire. It is quiet understanding, mutual confidence, sharing and forgiving. It is loyalty through good and bad times. It settles for less than perfection and makes allowances for human weaknesses.",
        ReadMoreButtonName: "READ MORE",
      },
      {
        title: "Bachelor Party",
        imageUrl:
          "https://cdn.pixabay.com/photo/2018/09/12/21/19/outdoor-3673280__340.jpg",
        description:
          "We’ve got this gift of love, but love is like a precious plant. You can’t just accept it and leave it in the cupboard or just think it’s going to get on by itself. You’ve got to keep watering it. You’ve got to really look after it and nurture it.",
        ReadMoreButtonName: "READ MORE",
      },
      {
        title: "Wedding Decoration",
        imageUrl:
          "https://cdn.pixabay.com/photo/2013/07/30/12/25/bouquet-168831__340.jpg",
        description:
          "We’ve got this gift of love, but love is like a precious plant. You can’t just accept it and leave it in the cupboard or just think it’s going to get on by itself. You’ve got to keep watering it. You’ve got to really look after it and nurture it.",
        ReadMoreButtonName: "READ MORE",
      },
    ],
    brideGroomItem: [
      {
        imageUrl:
          "https://cdn.pixabay.com/photo/2019/03/26/02/51/woman-4081760__480.jpg",
        name: "Roxane Doe",
        description: "Maid of Honor",
      },
      {
        imageUrl:
          "https://cdn.pixabay.com/photo/2016/03/09/12/11/bouquet-1246307__340.jpg",
        name: "Alicia Paterson",
        description: "Bride Best Friend",
      },
      {
        imageUrl:
          "https://cdn.pixabay.com/photo/2018/03/21/17/53/wedding-3247585__340.jpg",
        name: "Maya Eliot",
        description: "Bride Sister",
      },
      {
        imageUrl:
          "https://cdn.pixabay.com/photo/2021/07/17/04/50/woman-6472314__340.jpg",
        name: "Elizabeth Rohson",
        description: "Bride Friend",
      },
    ],

    journalItem: [
      {
        date: "Nov 07, 17",
        description:
          "Let us always meet each other with smile, for the smile is the beginning of love.",
        byAdmin: "by admin",
      },
      {
        date: "Nov 07, 17",
        description:
          "Love is when the other person’s happiness is more important than your own.",
        byAdmin: "by admin",
      },
      {
        date: "Nov 07, 17",
        description:
          "Being deeply loved by someone gives you strength, while loving gives you courage.",
        byAdmin: "by admin",
      },
    ],
  };

  res.status(200).json(data);
}
