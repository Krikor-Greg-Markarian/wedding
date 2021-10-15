// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const data = {
    latestjournalstories: [
        {
          imageURl:
            "http://themes.sindevo.com/marriage-full/wp-content/uploads/2017/11/thumb1.jpg",
          text: "Let us always meet each other with smile, for the smile is the beginning of love.",
        },
        {
          imageURl:
            "http://themes.sindevo.com/marriage-full/wp-content/uploads/2017/11/thumb2.jpg",
          text: "Let us always meet each other with smile, for the smile is the beginning of love.",
        },
        {
          imageURl:
            "http://themes.sindevo.com/marriage-full/wp-content/uploads/2017/11/thumb3.jpg",
          text: "Let us always meet each other with smile, for the smile is the beginning of love.",
        },
        {
          imageURl:
            "http://themes.sindevo.com/marriage-full/wp-content/uploads/2017/11/thumb4.jpg",
          text: "Let us always meet each other with smile, for the smile is the beginning of love.",
        },
      ],
      recentItems: [
        {
          text1:
            "Admin on Let us always meet each other with smile, for the smile is the beginning of love.",
          text2:
            "Admin on Let us always meet each other with smile, for the smile is the beginning of love.",
          text3:
            "Admin on Let us always meet each other with smile, for the smile is the beginning of love.",
          text4: "A WordPress Commenter on Hello world!",
        },
      ],
  };

  res.status(200).json(data);
}
