import React from 'react';

const Intro = (props) => {
  switch (props.page) {
    case 'home':
      return (
        <p className="introduction">
          The conception of this project has been inspired by a website that I have discovered recently, “<a href='https://buyfriend.moe/'>buyfriend.moe</a>". Currently, its central function is to fetch public information found on other websites and display it on one page, for ease of viewing. The scope of this project is limited to shopping for figures and hobbies, notably from japan, e.g. “amiami.com”.
        </p>
      );
    case 'blog':
      return (
        <p className="introduction">
          This section will show blog posts with insightful information about any items. The posts will be sorted from the most recent to the oldest. The goal is to create an input interface which can be used to style the post, such as headings, font size, indentations, paragraph separation, and so on. It will be connected to an API server as its database.
        </p>
      );
    case 'watches':
      return (
        <p className="introduction">
          This is where the user can fetch item information from supported websites to display and organize each one on the same page. It shares functional similarities to a shopping wish list, which is to facilitate the access to your items of interest. Currently, only two websites are supported (i.e. “<a href="https://1999.co.jp/eng">HobbySearch</a>” and “<a href="https://amiami.com/eng">amiami</a>”) and HTTP requests are used to fetch the HTML page of the requested item, via URL on the respective website. Then, I use the HTML parser tool, Cheerio.js, and regex to extract all relevant information, such as item ID, price, and stock. The information is stored into this class component’s state (note that I intentionally made this as the only class component of this project as a way to practice with it).
        </p>
      );
    case 'faq':
      return (
        <p className="introduction">
          If there are enough visitors once this project goes live, I expect to have some frequently asked questions. So, this section is where I list the questions along with my responses.
        </p>
      );
    case 'contact':
      return (
        <p className="introduction">
          This section simply has a contact form which will be linked to an email address.
        </p>
      );
    case 'signin':
      return (
        <p className="introduction">
          Ultimately, I would want to have a user database for the purpose of letting users save their preferences on their layout options, custom placement of information, notification setting, and such. I have yet to look into the secure handling and storing of user credentials, so until then, this section will be for internal users only.
        </p>
      );
  }
}

export default Intro;