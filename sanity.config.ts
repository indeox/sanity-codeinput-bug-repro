import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";
import { codeInput } from "@sanity/code-input";

export default defineConfig({
  name: "default",

  projectId: "PROJECT_ID",
  dataset: "staging",

  // Disable Comments &  Tasks modules
  unstable_tasks: { enabled: false },
  document: { unstable_comments: { enabled: false } },

  plugins: [structureTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
});
