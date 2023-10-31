# Space Tourism Webisite.

<div align="center"><img src="./showcase.gif" width=700 alt="gif of desktop preview of space-tourism website"></div>

Design, assets, and requirements provided by [Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3).

The challenge of this project is to create a _responsive and accessible_ space-tourism website where users can view information such as destinations, tour giudes, and the technology used for the voyages.

My personal goals for this challenge was to get a feel of the Next JS 13 `app` directory before implementing it in a larger project. I am already comfortable with the `pages` directory, so it doesn't hurt to try something new!

## Table of Contents

- [Techstack](#techstack)
- [Installation](#installation)
- [Development](#development)
- [Conclusion](#conclusion)

## TechStack

This project is bootstrapped using the NextJS 13 [`create-next-app@latest` command](https://nextjs.org/docs/getting-started/installation) with TypeScript enabled. The project is configured to use the new [`app` router feature](https://nextjs.org/docs/app). [lint-staged](https://github.com/okonet/lint-staged) and [husky](https://typicode.github.io/husky/) are used in conjunction to lint and format staged files before commits.

Some of the tools used in this project include:

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [CSS Modules](https://github.com/css-modules/css-modules)

A simple CI/CD process was created to lint the codebase before merging to the main branch and deploying to [Vercel](https://vercel.com/). The CI/CD process was creating with Github Actions and can be found in the `.github/workflows` directory.

## Installation

To Run the application locally, please follow the steps below:

1. Ensure that [Git](https://git-scm.com/) is installed on your machine and run the `git clone https://github.com/JorgeAMendoza/space-tourism-site` command.
2. Navigate to the project directory with `cd space-tourism-site` and run the `npm install` command to install the project dependencies.
3. Run the `npm run dev` command to start the development server. The application will be running on `localhost:3000`.

To run the application in the production environment, run `npm run build` to build the application and then run `npm run start` to preview the application on `localhost:3000`.

## Development

This section will review the design choices and challenges faced during the development of this project.

### App Router

All my previous Next JS projects use the `pages` router which I am still a fan of. After reading the documentation for the `app` directory, I was able to get the project off the ground faster than I expected thanks to the ease of using the feature. Using the `app` router, I found myself having an easier time organizing my pages and components where they belonged. For example, for the `/destinations` route, I could place the main page there, as well as create a `components` folder where re-useable components just meant for this route could live in.

### React Server Components

The main difference between between developing in `app` compared to `pages` is the introduction of [React Server Components](https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#react-server-components). I found the concept pretty simple to understand, components that do not dynamically render data could be rendered on the component, and components that are interactive and contain state (`useState` for example) would be rendered and hydrated on the client.

For example, since the `NavBar.tsx` component handles the various active states of the `<nav>`, it must be declared as a client component with the `use client` declaration at the top of the file.

The homeapge `index.tsx` only renders static data, so it can be considered a server component, just simply avoid declaring `use client` at the top of the file.

I understand that the concepts of server components go deeper and React time are constantly making changes, but I'm looking foward to how this feature will be used in not just Next JS, but in the React ecosystem as a whole.

### Problems with the App Router

Though the `app` router is considered to no longer be in beta, I still found myself having issues with it. Compared to the `pages` directory, I found the hot-reload functino to be slower and display errors when there were none to display. One other thing was that for some reason, after switching between a couple of pages, some CSS styles such as `margin` and `text-align` would disappear from the components. It's as if the style was removed or never existed at all. A simple relaod fixes the issue until another few route changes causes it to appear again.

During development, [NextJS 14](https://nextjs.org/blog/next-14) was released. Though this sounds like a breaking release, it was simply a substantial update to the current APIs of Next JS. I decided to run the update and found that some of my issues were resolved, except for the CSS one! No one else seems to have this issue, so if anyone has an idea on what could be causing this, please let me know!

## Conclusion

Overall this was fun project to work on, I'm always looking to expand my skillset and Next JS 13's `app` router was a great way to do so. I had recently started looking at ways to improve my developer workflow, so implementing pre-commits and code checks with `husky` and `lint-staged` turend out to be a worthwhile investment. I'll definitely be using these tools in my future projects.

Please feel free to open a pull request! 
