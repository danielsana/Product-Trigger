import api, { route } from "@forge/api";

export async function run(event, context) {
  //   console.log('Hello World!');
  console.log(event);

  var bodyData = `{
  "body": {
    "content": [
      {
        "content": [ 
          {
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget venenatis elit. Duis eu justo eget augue iaculis fermentum. Sed semper quam laoreet nisi egestas at posuere augue semper.",
            "type": "text"
          }
        ],
        "type": "paragraph"
      }
    ]
}`;

  var issueIdOrKey = event.issue.id;

  const response = await api
    .asApp()
    .requestJira(route`/rest/api/3/issue/${issueIdOrKey}/comment`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: bodyData,
    });

  console.log(`Response: ${response.status} ${response.statusText}`);
  console.log(await response.json());
}
