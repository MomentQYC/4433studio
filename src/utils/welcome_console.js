class _welcome {
  console() {
    if (window.console && window.console.log) {
      console.info(
        `%c#4433%c4433工作室%c\n%c  ${new Date().getFullYear()} by 4433 SOFT STUDIO  `,
        'color:#fff;background-image: linear-gradient(90deg,#71b7fe,#1c81ff);padding:5px 10px;font-size:20px;line-height:44px;border-radius:4px 0 0 0;margin-right:2px',
        'color:white;background:#333;padding:5px 13px;font-size:20px;line-height:44px;border-radius:0 4px 0 0',
        'padding:0px',
        'color:white;background:#5c5c5c;padding:2px 8px;font-size:12px;line-height:14px;border-radius:0 0 4px 4px;margin-top:2px'
      );
      console.info(
        "%c你在电脑前看这段文字，",
        "color:#990033; font-size: 15px; text-shadow: 0 0 10px rgba(255, 255, 255, 1); border-radius:3px ;"
      );
      console.info(
        "%c写文字的人在4433等你。",
        "color:#CC0033; font-size: 15px; text-shadow: 0 0 10px rgba(255, 255, 255, 1); border-radius:3px ;"
      );
      console.info(
        "%cN年前你来到了这个世界，",
        "color:#FF0000; font-size: 15px; text-shadow: 0 0 10px rgba(255, 255, 255, 1);  border-radius:3px ;"
      );
      console.info(
        "%cN年后你想改变世界。",
        "color:#CC3366; font-size: 15px; text-shadow: 0 0 10px rgba(255, 255, 255, 1); border-radius:3px ;"
      );
      console.info(
        "%c期待你脚踏祥云，",
        "color: #FF99CC; font-size: 15px; text-shadow: 0 0 10px rgba(255, 255, 255, 1); border-radius:3px ;"
      );
      console.info(
        "%c与4433一起改变世界。",
        "color:#FF3399; font-size: 15px; text-shadow: 0 0 10px rgba(255, 255, 255, 1); border-radius:3px ;"
      );
    }
  }
}

const welcome = new _welcome();

export default welcome;
