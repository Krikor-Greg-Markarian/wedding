// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const data = {
    about: [
      {
        imageUrl:
          "http://themes.sindevo.com/marriage-full/wp-content/uploads/2017/11/about_f.jpg",
        title: "about Sarah",
        description:
          "Love is friendship that has caught fire. It is quiet understanding, sharing and forgiving. It is loyalty through good and bad times. It settles for less than perfection and makes allowances for human weaknesses",
        ReadMoreButtonName: "READ MORE",
      },
      {
        imageUrl:
          "http://themes.sindevo.com/marriage-full/wp-content/uploads/2017/11/about_m.jpg",
        title: "about michael",
        description:
          "Friends can help each other. A true friend is someone who lets you have total freedom to be yourself – and especially to feel. Or, not feel. Whatever you happen to be feeling at the moment is fine with them.",
        ReadMoreButtonName: "READ MORE",
      },
    ],
    weddingItem: [
      {
        title: "Wedding Details",
        imageUrl:
          "http://themes.sindevo.com/marriage-full/wp-content/uploads/2017/11/image13.jpg",
        description:
          "Love is friendship that has caught fire. It is quiet understanding, mutual confidence, sharing and forgiving. It is loyalty through good and bad times. It settles for less than perfection and makes allowances for human weaknesses.",
        ReadMoreButtonName: "READ MORE",
      },
      {
        title: "Bachelor Party",
        imageUrl:
          "http://themes.sindevo.com/marriage-full/wp-content/uploads/2017/11/image132.jpg",
        description:
          "We’ve got this gift of love, but love is like a precious plant. You can’t just accept it and leave it in the cupboard or just think it’s going to get on by itself. You’ve got to keep watering it. You’ve got to really look after it and nurture it.",
        ReadMoreButtonName: "READ MORE",
      },
      {
        title: "Wedding Decoration",
        imageUrl:
          "http://themes.sindevo.com/marriage-full/wp-content/uploads/2017/11/image133.jpg",
        description:
          "We’ve got this gift of love, but love is like a precious plant. You can’t just accept it and leave it in the cupboard or just think it’s going to get on by itself. You’ve got to keep watering it. You’ve got to really look after it and nurture it.",
        ReadMoreButtonName: "READ MORE",
      },
    ],
    brideGroomItem: [
      {
        imageUrl:
          "http://themes.sindevo.com/marriage-full/wp-content/uploads/2017/11/bridemaids6.jpg",
        name: "Roxane Doe",
        description: "Maid of Honor",
      },
      {
        imageUrl:
          "http://themes.sindevo.com/marriage-full/wp-content/uploads/2017/11/bridemaids5.jpg",
        name: "Alicia Paterson",
        description: "Bride Best Friend",
      },
      {
        imageUrl:
          "http://themes.sindevo.com/marriage-full/wp-content/uploads/2017/11/bridemaids4.jpg",
        name: "Maya Eliot",
        description: "Bride Sister",
      },
      {
        imageUrl:
          "http://themes.sindevo.com/marriage-full/wp-content/uploads/2017/11/bridemaids3.jpg",
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
