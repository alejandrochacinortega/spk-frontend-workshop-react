# WELCOME TO DEMO #5: Show several lists of users

## 🤓️ Your task is make the UsersList component even more reactive.

### 📢️ IMPORTANT: Read all the following lines before you start coding.

### ⛔️ DO NOT write your code in this file. This is just a read me file.

See the `result.png` picture to see what the final result should look like.

- **TODO 1:**
  **Just read this**
  Components normally do not handle too much logic, but rather show information to the UI. In our case, you can see that the `UsersList` component has different functions to show different user. Wouldn't be better that this componentt just show the a list of users sent by `App.tsx`?

Currently, you render the `UsersList` component from `App.tsx` like this:

<UsersList users={users} eyeColor="brown" title="People with brown eyes" />

This is a very general component (and it is ok), but we want to improve it. We want to add more props to the `UsersList` component so that the component can do filtering for us.

For instance, let's say we would like to show all the users with brown eyes, we would then use the `UsersList` component like this:

<UsersList users={users} eyeColor="brown" title="People with brown eyes" />

- **TODO 2:** Let's make the `UsersList` a more powerful component. `UsersList` component should receive props for `eyeColor`, `favoriteFruit`, `gender`, `minAge`, `maxAge`, `title`. You can define types as `string` or `number` for now. We'll create new types later.

- **TODO 3:** All the props in the `UsersList` component must be optional EXCEPT `users`. Make `eyeColor`, `favoriteFruit`, `gender`, `minAge`, `maxAge`, `title` optional props.
  **hint**: You can turn a required prop to an optional prop by adding `?` at the end of the declaration type.
  **hint 2**: Required title -> `title: string`
  **hint 3**: Optional title -> `title?: string`

- **TODO 4:** As stated earlier, these new props must also have specific types. Check the `types.ts` file and see the new type `EyeColor` added. Create similar types for `favoriteFruit` and `gender`. Use these new types you just created in the `IUser` interface in the same file.

- **TODO 5:** Use the types you just created in the props of the `UsersList` component. All the `props` must have the right types.

- **TODO 6:** The `title` props should be optional. `title` must be `List of Users` as default value if this is not set.
  **hint** See this for more info https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/default_props/#you-may-not-need-defaultprops

- **TODO 7:** Improve the `renderUsers` functions in the `UsersList.tsx` component. Instead of always returning all the users, do something so that the function returns changes based on the props the component receives.

- **TODO 8:** Call the `UsersList.tsx` component from `App.tsx` that shows only people with blue eyes.

- **TODO 9:** Call the `UsersList.tsx` component from `App.tsx` that shows only people older than 39.

- **TODO 10:** Call the `UsersList.tsx` component from `App.tsx` that shows only people who have apple as their favorite fruit.

- **TODO 11:** Call the `UsersList.tsx` component from `App.tsx` that shows only people who have apple as their favorite fruite and are older than 30.

- **TODO 12:** Call the `UsersList.tsx` component from `App.tsx` that shows only people who have strawberry as their favorite fruite, are older than 20 and younger than 29.

- **TODO 13:** Make sure all the lists that are being shown have a text on top of the list. For instance, `TODO 8` should show a text stating `People with blue eyes`, and the list of people with blue eyes under that. See `result.png` for more details.

🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

#### 🎊️ CONGRATULATIONS! YOU MADE IT! 🎊️

🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
