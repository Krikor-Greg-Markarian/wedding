// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const data = {
    journalSection: [
      {
        //   date: "Nov,07-17",
        //   title:
        //     "Let us always meet each other with smile, for the smile is the beginning of love.",
        //   posted: "POSTED IN",
        //   journal: "JOURNAL",
        imageUrl:
          "http://themes.sindevo.com/marriage-full/wp-content/uploads/2017/11/slider3.jpg",
        //   isVideo: false,
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem..",
        //   ReadMoreButtonName: "READ MORE",
      },
    ],
    theitem: [
      {
        title: "The Venue",
        description:
          "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        ReadMoreButtonName: "READ MORE",
      },
      {
        title: "The Church",
        description:
          "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        ReadMoreButtonName: "READ MORE",
      },
      {
        title: "The Guests",
        description:
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est",
        ReadMoreButtonName: "READ MORE",
      },
    ],
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
