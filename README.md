<h1 align="center">
  <br>
   Screenshot pipeline
  <br>
</h1>
<h4 align="center">A screenshot pipeline with Visual Regression Test made with <a href="https://pptr.dev/" target="_blank">Puppeteer</a> and <a href="https://jestjs.io/" target="_blank">Jest</a> with <a href="https://github.com/americanexpress/jest-image-snapshot" target="_blank">Jest Image Snapshot</a></h4>  

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#motivation">Motivation</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

<p align="center">
  <img src="https://github.com/evans-costa/screenshot-pipeline/blob/main/images/visual-regression-diff.png?raw=true">
</p>

## Key Features

* Everytime you make a push on the repo, the GitHub Action will run a pipeline CI workflow
* This pipeline will take a deploy preview made by Vercel
* It will make a screenshot of this deployed preview website 
* If not pass in the visual regression test, generates an artifact with the differences
* If pass, the pipeline will commit the new snapshot and update the image in README.md

## Motivation

I know how make a CI/CD integration is important for real-life projects and how is also important a E2E tests. To learn how things like that work, I made this project. This work helped me to understand the concepts of a CI/CD pipeline, using GitHub actions, tests with Jest and Puppeteer.

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/evans-costa/screenshot-pipeline.git

# Go into the repository
$ cd screenshot-pipeline
```

> **📌 Note:** </br>
> This project uses a simple `create-next-app` to demonstrate the use of puppeteer with jest-image-snapshot for visual regression tests. If you like to use for other projects, some changes are necessary.

```bash
# Install dependencies
$ npm install

# Run the tests
$ npm run test
```
When running the tests for the first time, it will generate a first snapshot, which will serve as a base for the following tests

If you deliberately made changes on your page, you might want update the snapshot, to do this, run the following:

```bash
# Run the update test
$ npm run test:update
```

Once you commit your changes, the workflow, perfomed by GitHub Actions, will run the tests.

## Credits

This project uses the following open source packages:

- [Node.js](https://nodejs.org/)
- [GitHub Actions](https://docs.github.com/pt/actions)
- [Puppeteer](https://pptr.dev/)
- [Jest](https://jestjs.io/) powered by
- [Jest Image Snapshot](https://github.com/americanexpress/jest-image-snapshot) with
- [Jest-Puppeteer](https://github.com/argos-ci/jest-puppeteer) preset

Some useful links and Actions I used in my GitHub Actions pipeline:
- [Running Puppeteer on WSL2](https://log.rdl.ph/post/running-puppeteer-on-wsl2.html)
- [Git Auto Commit Action](https://github.com/marketplace/actions/git-auto-commit)
- [Upload Artifacts](https://github.com/actions/upload-artifact)
- [Await for Vercel deployment Action](https://github.com/marketplace/actions/await-for-vercel-deployment#examples)

## License

The MIT License (MIT) 2023 - Evandro Costa. Please have a look at the LICENSE for more details.

---
> GitHub [@evans-costa](https://github.com/evans-costa) &nbsp;&middot;&nbsp;
> LinkedIn [@evandro-souzac](https://www.linkedin.com/in/evandro-souzac/)

