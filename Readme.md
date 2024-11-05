# Coding challenge by L.Popov

This is a project with coding challenge for Esprow.

Task is to create app, that displays list of users and with ability to edit them.

## Requirements achieved:
- Typescript used
- React used
- no CRA used, only manual configuration
- eslint with necessary config used
- the 1000 users data json is provided.

## Aditional features
- **Jest** for testing. use `npm run test`
- **Storybook** for ui development (just for example, actually). use `npm run storybook` or `npm run build-storybook && npx http-server ./storybook-static -p 3000` to run on 3000 port
- **Prettier** for code styling
- **husky** and **lint-staged** for code quality control. **pre-commit**:  staged files linted, **pre-push**: Jest test run.
- **commitlint** for linting commits by conventional.
- webpack alias

## Following linters are disabled on purpose:
- `react/function-component-definition: warn`,
- `react/require-default-props: off`,
- `jsx-a11y/no-noninteractive-element-interactions: off`,

also `react/react-in-jsx-scope` should be disabled since React 17, but i didnt tho.

## To be done:
- docker and ci via github actions.
- ux/ui improvements
- minifying
- favicon
- Enviroment-based api (local stored data or [real time generated](https://next.json-generator.com/docs))