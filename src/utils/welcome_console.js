class _welcome {
  console() {
    if (window.console && window.console.log) {
      console.warn(
        "%c你在电脑前看这段文字，",
        "color:#990033; font-size: 15px; text-shadow: 0 0 10px rgba(255, 255, 255, 1); border-radius:3px ;"
      );
      console.warn(
        "%c写文字的人在4433等你。",
        "color:#CC0033; font-size: 15px; text-shadow: 0 0 10px rgba(255, 255, 255, 1); border-radius:3px ;"
      );
      console.warn(
        "%cN年前你来到了这个世界，",
        "color:#FF0000; font-size: 15px; text-shadow: 0 0 10px rgba(255, 255, 255, 1);  border-radius:3px ;"
      );
      console.warn(
        "%cN年后你想改变世界。",
        "color:#CC3366; font-size: 15px; text-shadow: 0 0 10px rgba(255, 255, 255, 1); border-radius:3px ;"
      );
      console.warn(
        "%c期待你脚踏祥云，",
        "color: #FF99CC; font-size: 15px; text-shadow: 0 0 10px rgba(255, 255, 255, 1); border-radius:3px ;"
      );
      console.warn(
        "%c与4433一起改变世界。",
        "color:#FF3399; font-size: 15px; text-shadow: 0 0 10px rgba(255, 255, 255, 1); border-radius:3px ;"
      );
    }
  }
}

const welcome = new _welcome();

export default welcome;
