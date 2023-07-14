import { createClient } from "@sanity/client";
const client = createClient({
  projectId: "YOUR PROJECT ID HERE",
  dataset: "production",
  // authenticated requests can't be cached so we have to set useCdn to false
  useCdn: false,
  token: "YOUR TOKEN HERE",
});

export default client;
