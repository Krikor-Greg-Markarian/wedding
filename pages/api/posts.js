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
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ReadMoreButtonName: "READ MORE",
      },
      {
        date: "Nov,07-17",
        title:
          "Love is when the other person’s happiness is more important than your own.",
        posted: "POSTED IN",
        journal: "JOURNAL",
        imageUrl:
          "http://themes.sindevo.com/marriage-full/wp-content/uploads/2017/11/slider3.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat. Sed utperspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium, totam rem aperiam, eaqueipsa quae ab illo inventore veritatis et quasi architectobeatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatemquia voluptas sit aspernatur aut odit aut fugit, sed quiaconsequuntur magni dolores eos qui ratione voluptatem sequinesciunt. Neque porro quisquam est, qui dolorem ipsum quiadolor sit amet, consectetur, adipisci velit, sed quia nonnumquam eius modi tempora incidunt ut labore et dolore magnamaliquam quaerat voluptatem. Ut enim ad minima veniam, quisnostrum exercitationem ullam corporis suscipit laboriosam,nisi ut aliquid ex ea commodi consequatur? Quis autem vel eumiure reprehenderit qui in ea voluptate velit esse quam nihilmolestiae consequatur, vel illum qui dolorem eum fugiat quovoluptas nulla.",
        ReadMoreButtonName: "READ MORE",
      },
      {
        date: "Nov,07-17",
        title:
          "Being deeply loved by someone gives you strength, while loving gives you courage.",
        posted: "POSTED IN",
        journal: "JOURNAL",
        imageUrl:
          "https://cdn.pixabay.com/photo/2015/09/02/13/04/marriage-918864__340.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        ReadMoreButtonName: "READ MORE",
      },
    ],
    about: [
      {
        imageUrlSara:
          "http://themes.sindevo.com/marriage-new/wp-content/uploads/2017/11/about_f.jpg",
        girlName: "about Sarah",
        text: "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.",
      },
    ],
    latestItems: [
      {
        imageUrl:
          "http://themes.sindevo.com/marriage-full/wp-content/uploads/2017/11/thumb1.jpg",

        text: "Let us always meet each other with smile, for the smile is the beginning of love.",
      },
      {
        imageUrl:
          "http://themes.sindevo.com/marriage-full/wp-content/uploads/2017/11/thumb2.jpg",

        text: "Love is when the other person’s happiness is more important than your own.",
      },
      {
        imageUrl:
          "http://themes.sindevo.com/marriage-full/wp-content/uploads/2017/11/thumb3.jpg",

        text: "Being deeply loved by someone gives you strength, while loving gives you courage.",
      },
    ],
    popularItems: [
      {
        text1: "best selling wordpress theme",
        text2: "best wedding theme",
        text3: "couple theme",
        text4: "love",
        text5: "marriage",
        text6: "marriage theme",
        text7: "top wedding theme",
        text8: "wedding design",
        text9: "wedding theme",
        text10: "wedding wordpress theme",
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
    archivesItem: [
      {
        date: "November 2017",
        anotherDate: "june 2017",
      },
    ],
  };

  res.status(200).json(data);
}
