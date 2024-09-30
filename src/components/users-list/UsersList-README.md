# WELCOME TO DEMO #3: Show a list of users

## 🤓️ Your task is to show a list of users in the UI.

### 📢️ IMPORTANT: Read all the following lines before you start coding.

### ⛔️ DO NOT write your code in this file. This is just a read me file.

See the `result.png` picture to see what the final result should look like.

- **TODO 1:** Create a new file called `UsersList.tsx`. You need to make sure the component is well written and actually working, so for now, you can just make this component return a `I am the User List Component` as `<p>`. \
  **hint:** Once you have created the component. Remember to export it so that it can be used in other components. For more info, check `the demo 2 you completed earlier today https://gitlab.com/alejandrochacinortega/spk-frontend-workshop-react/-/blob/2-demo-end/src/components/hello-world/HelloWorld.tsx.

- **TODO 2:** Know that you know your component is working, you can make used of it in the `App.tsx` component. Add this component in the `App.tsx` component. \
  **hint:** For more info, check `the demo 2 you completed earlier today https://gitlab.com/alejandrochacinortega/spk-frontend-workshop-react/-/blob/2-demo-end/src/components/app/App.tsx.

- **TODO 3:** In the `App.tsx` component, add `users` as props in the `UsersList.tsx`. `users` is equal to the to the data from `data.ts`. \
  **hint 1:** Check https://reactjs.org/docs/components-and-props.html in order to see how to send props from one component and receive it from the other. `UsersList.tsx` will receive props. `App.tsx` will send the props.
  **hint 2:** Remember to import the data from `api/data` inside the `App.tsx` component.

- **TODO 4:** Define a interface and call it IUsersListProps. This interface takes `users` as type of `IUsers[]`. Use the interface in `props` `UsersList.tsx` is receiving. \
  **hint:** See this for more info https://dev.to/umeshiscreative/use-multiple-interfaces-types-as-props-in-react-with-typescript-2bkg

- **TODO 5:** Go to the `UsersList.tsx` component. Instead of returning `I am the User List Component`. you know have to do something so that the component returns all the names of the `users` \
   **hint 1:** A good way to do this could be to create a function called `allUsers`. You can use the map function you learn last week 😉️ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  **hint 2:** Once you create the function, make sure to add it to what the component is returning so that you can see it in the UI.

🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

#### 🎊️ CONGRATULATIONS! YOU MADE IT! 🎊️

🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
