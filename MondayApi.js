import "dotenv/config";
// boards.items_page.items.id.name
const MONDAY_QUERY = `
query{
  boards(ids:11437862342) {
    items_page{
      items{
        id
        name
        column_values{
          id
          text
        }
        }
      }
    }
}
`;
 
 
// Make API Request
 
export const fetchFromMondayAPI = async () => {
  // Check if the token exists. If not, error.
  if (!process.env.MONDAY_TOKEN) {
    throw new Error (
      "Missing MONDAY_TOKEN! Add it to your .env file"
    );
  }
    // Capturing the API's response in a variable by making request
    // post is used for universal to grab data
    // header = authorization, body = QUERY
  const response = await fetch("https://api.monday.com/v2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.MONDAY_TOKEN,
    },
    body: JSON.stringify({ query: MONDAY_QUERY }),
  });
 
  // Turn the reponse into a JavaScript object
  const data = await response.json();
  const status = response.status
  return {data, status};
}
 
fetchFromMondayAPI()
  .then((result) => {
    console.log= ("Yay! I fetched the data from monday.com!", result.data);
    const data = result.data
    // Show the FULL JSON
    // console.log(JSON.stringify(data, null, 2));
    const items = data.data.boards[0].items_page.items //data: { boards: [ [Object] ] },
    const itemName = items.map((item) => items.name)
   
    console.table(items.map((i) => ({
      id: i.id,
      name: i.name,
      column: i.column_value
    })))
  })
  .catch((err) => {
    console.error("Aw shucks! Failed to fecth data from monday.com :( ");
    console.error("Reason: ", err.message);
 
    process.exit(1);
  });
 