import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Embed from "@editorjs/embed";
import List from "@editorjs/list";
import Undo from 'editorjs-undo';
import InlineImage from 'editorjs-inline-image';

const editor = new EditorJS({
  holder: "editorjs",
  tools: {
    header: {
      class: Header,
      config: {
        placeholder: "Enter a header",
        levels: [2, 3, 4],
        defaultLevel: 3,
      },
    },
    embed: {
      class: Embed,
      config: {
        services: {
          youtube: true,
          coub: true,
        },
      },
    },
    list: {
      class: List,
      inlineToolbar: true,
    },
    image: {
        class: InlineImage,
        inlineToolbar: true,
      }
  },
  onReady: () => {
    new Undo({ editor });
  },
});

let saveButton = document.querySelector("button");

saveButton.addEventListener("click", () => {
  editor
    .save()
    .then((outputData) => {
      console.log("Article data: ", outputData);
    })
    .catch((error) => {
      console.log("Save failed: ", error);
    });
});
