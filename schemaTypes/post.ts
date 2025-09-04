import {defineField, defineType} from "sanity";

export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Untitled Post",
    }),

    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        // Normal blocks
        {type: "block"},

        // Code blocks
        {type: "code"},
      ],
      description: "Body content that can include text blocks and code snippets",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const {title} = selection;
      return {
        title: title || "Untitled Blog Post",
      };
    },
  },
});
