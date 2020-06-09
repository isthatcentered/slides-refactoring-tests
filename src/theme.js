const theme = {
  colors: {
    background: "#f8f6f9",
    text: "rgb(57, 58, 52)",
    primary: "#c3299a", //rgb(0, 164, 219) // #7605e8
    primaryDark: "#6b2494",
  },
  styles: {
    CodeSurfer: {
      pre: {
        color: "text",
        backgroundColor: "background",
      },
      code: {
        color: "text",
        backgroundColor: "background",
      },
      tokens: {
        "comment cdata doctype": {
          fontStyle: "italic",
        },
        "builtin changed keyword punctuation operator tag deleted string attr-value char number inserted": {
          color: "primary",
        },
        "line-number": {
          opacity: 0.3,
          userSelect: "none",
        },
      },
      title: {
        backgroundColor: "background",
        color: "text",
      },
      subtitle: {
        color: "#d6deeb",
        backgroundColor: "rgba(10,10,10,0.9)",
      },
      unfocused: {
        opacity: 0.3,
      },
    },
  },
};

export default theme
