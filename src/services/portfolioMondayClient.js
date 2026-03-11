/**
 * "service layer" for the Portfolio Manager component.
 * This file will handle the "talking" to monday.com for us
 * -Portfolio Manager.vue handles the screen and user interaction
 * -This file handles talking to monday.com
 * -Keeps us organuzed!
 */
//endpoint!
const Monday_API_URL = "https://api.monday.com/v2";

// Setting up values from .env files
const config = {
    token: import.meta.env.VITE_MONDAY_TOKEN,
    boardId: import.meta.env.VITE_MONDAY_BOARD_ID,
    columns: {
        description: import.meta.env.VITE_MONDAY_DESCRIPTION_COLUMN_ID,
        techStack: import.meta.env.VITE_MONDAY_TECH_STACK_COLUMN_ID,
        status: import.meta.env.VITE_MONDAY_STATUS_COLUMN_ID,
        githublink: import.meta.env.VITE_MONDAY_GITHUB_LINK_COLUMN_ID,
        imageurl: import.meta.env.VITE_MONDAY_IMAGE_URL_COLUMN_ID
    }
};

// Function to ensure the values within .env file exist before any request runs
const ensureCongig = () => {
    const missingValues = [
        ["VITE_MONDAY_TOKEN", config.token],
        ["VITE_MONDAY_BOARD_ID", config.boardId],
        ["VITE_MONDAY_DESCRIPTUI_COLUMN_ID", config.columns.description],
        ["VITE_MONDAY_TECH_STACK_COLUMN_ID", config.columns.techStack],
        ["VITE_MONDAY_STATUS_COLUMN_ID", config.columns.status],
        ["VITE_MONDAY_GITHUB_LINK_COLUMN_ID", config.columns.githubLink],
        ["VITE_MONDAY_IMAGE_URL_COLUMN_ID", config.columns.imageUrl],
    ]
    /**
     *  ([, value]) means "ignore the first part, grab only the second part"
     * So:
     * [, value] is deconstructing an array with two items and skipping the first item
     * Example:
     * ["VITE_MONDAY_TOKEN", config.token]
     * first part: "VITE_MONDAY_TOKEN"
     * second part: "abc123"
     *
     * !value
     * If value is missing, null, or undefined, then !value is true
     */
    .filter(([, value]) => !value);

    if (missingValues.length > 0) {
        /**
         * Example:
         * missingValues = [
         *     ["VITE_MONDAY_TOKEN", config.token],
         *     ["VITE_MONDAY_BOARD_ID", config.boardId]
         * ]
         * To:
         * "VITE_MONDAY_TOKEN, VITE_MONDAY_BOARD_ID..."
         */
        const missingValueName = missingValue.map(([name]) => name).join(", ");
        throw new Error(
            'Missing monday.com setup values: ${missingValueName}. Check your .env file!'
        )
    }

};

// Generic helper that sends a query or mutation to monday.com
// This will help keep the CRUD functions smaller and easier to read
const makeRequest =async (query, variables = {}) => {
    ensureConfig();

    const response = await fetch(MONDAY_API_URL, {
        method: "POST"
        headers: {
            "Content-Type": "application/json",
            Authorization: config.token,
        },
        body: JSON.stringify({ query, variables})
    });

    // Create Javascript object we can use
    const json = await response.json();

    //Capture any HTTP errors (e.g. 404, 401, 500, etc)
    if (!response.okay) {
        throw new Error (
            'Yikes! monday.com request failed with the status: $ {response.status}'
        )
    }

    // Capture GraphQL errors
    if (json.error?.length) {
        throw new Error (json.error[0].message);
    }

    return json.data;
};

const toColumnValuesObject = (item) => ({
    [config.columns.description]: item.description || "",
    [config.columns.techStack]: item.techStack || "",
    [config.columns.githubLink]: item.githubLink || "",
    [config.columns.imageUrl]: item.imageUrl || "",
    [config.columns.status]: item.status ? { label: item.staus } : {},
});

const mapColumnsValues = (columnValues = []) => {
     /**
     * Example:
     * [
     *  ["abc", "Hello"],
     *  ["def", "World"],
     * ]
     *
     * Becomes:
     * {
     *  abc: "Hello",
     *  def: "World"
     * }
     */
    const valueById = Object.fromEntries(
        columnValues.map((column) => [column.id, column.text || ""])
    );
 
    return {
        description: valueById[config.columns.description] || "",
        techStack: valueById[config.columns.techStack] || "",
        status: valueById[config.columns.status] || "",
        githubLink: valueById[config.columns.githubLink] || "",
        imageUrl: valueById[config.columns.imageUrl] || "",
    };
};

export const fetchPortfolioItems = async () => {
      const query = `
    query GetPortfolioItems($boardId: [ID!]) {
      boards(ids: $boardId) {
        items_page {
          items {
            id
            name
            column_values {
              id
              text
            }
          }
        }
      }
    }
  `;

  const data = await makeRequest(query, { boardId: [config.boardId] });
    // || = or
    // && = and
  const items = data.boards?.[0]?.items_page?.items || [];

  return items.map((item) => ({
    id: item.id,
    title: item.name,
    ...mapColumnsValues(item.column_values)
  }))
};