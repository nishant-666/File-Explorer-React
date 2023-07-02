export const mock = [
  {
    name: "public",
    type: "folder",
    subItems: [
      {
        name: "css",
        type: "folder",
        isNested: true,
        subItems: [
          {
            name: "scss",
            type: "folder",
            isNested: true,
            subItems: [
              {
                name: "index.scss",
                type: "files"
              }
            ]
          }
        ]
      },
      {
        name: "index.html",
        type: "files",
        isCollapsed: false
      }
    ]
  },
  {
    name: "src",
    type: "folder",
    isCollapsed: false,
    subItems: [
      {
        name: "app.js",
        type: "files"
      },
      {
        name: "FileSystem.js",
        type: "files"
      },
      {
        name: "index.js",
        type: "files"
      },
      {
        name: "styles.css",
        type: "files"
      }
    ]
  }
];
