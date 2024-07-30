import React from "react";

const splitSentences = (description: string) => {
  return description.split(".").map((sentence, index, array) => {
    const trimmedSentence = sentence.trim();
    if (trimmedSentence !== "") {
      return (
        <React.Fragment key={index}>
          {trimmedSentence + (index !== array.length - 1 ? "." : "")}
          {index !== array.length - 1 && <br />}
        </React.Fragment>
      );
    }
    return null;
  });
};

export default splitSentences;
