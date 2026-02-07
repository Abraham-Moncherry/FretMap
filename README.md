<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Abraham-Moncherry/FretMap">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="public/stratocaster-dark.png">
      <source media="(prefers-color-scheme: light)" srcset="public/stratocaster.png">
      <img src="public/stratocaster.png" alt="Logo" width="80" height="80">
    </picture>
  </a>

  <h3 align="center">FretMap</h3>

  <p align="center">
    An interactive guitar fretboard visualizer to help you learn every note on the neck.
    <br />
    <a href="https://github.com/Abraham-Moncherry/FretMap/issues/new?labels=bug">Report Bug</a>
    &middot;
    <a href="https://github.com/Abraham-Moncherry/FretMap/issues/new?labels=enhancement">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

FretMap is a web-based guitar fretboard trainer that renders a full 24-fret board in standard tuning. Click any fret to reveal its note and build muscle memory for the entire neck. It also includes a built-in metronome to keep you in time while you practice.

Key features:

* **Interactive fretboard** — click to reveal and hide notes across all 6 strings and 24 frets
* **Accurate note mapping** — standard tuning with correct sharps/flats for every position
* **Built-in metronome** — adjustable BPM (40–240) with accented downbeats and a visual beat indicator
* **Realistic visuals** — string thickness variation, fret markers, and nut styling

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![TypeScript][TypeScript]][TypeScript-url]
* [![TailwindCSS][TailwindCSS]][TailwindCSS-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

* Node.js 18+
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Abraham-Moncherry/FretMap.git
   ```
2. Navigate to the project directory
   ```sh
   cd FretMap
   ```
3. Install dependencies
   ```sh
   npm install
   ```
4. Start the development server
   ```sh
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE -->
## Usage

- Click any fret on the board to reveal the note at that position. Click again to hide it.
- Open notes (fret 0) are always visible for reference.
- Use the metronome at the bottom to set a tempo and practice identifying notes in time.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] Interactive fretboard with click-to-reveal notes
- [x] Built-in metronome with adjustable BPM
- [ ] Scale and chord highlighting
- [ ] Alternate tuning support
- [ ] Note quiz / training mode
- [ ] Audio playback for each note

See the [open issues](https://github.com/Abraham-Moncherry/FretMap/issues) for a full list of proposed features and known issues.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community amazing. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/amazing-feature`)
3. Commit your Changes (`git commit -m 'Add some amazing feature'`)
4. Push to the Branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Abraham Moncherry - [@Abraham-Moncherry](https://github.com/Abraham-Moncherry)

Project Link: [https://github.com/Abraham-Moncherry/FretMap](https://github.com/Abraham-Moncherry/FretMap)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/Abraham-Moncherry/FretMap.svg?style=for-the-badge
[contributors-url]: https://github.com/Abraham-Moncherry/FretMap/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Abraham-Moncherry/FretMap.svg?style=for-the-badge
[forks-url]: https://github.com/Abraham-Moncherry/FretMap/network/members
[stars-shield]: https://img.shields.io/github/stars/Abraham-Moncherry/FretMap.svg?style=for-the-badge
[stars-url]: https://github.com/Abraham-Moncherry/FretMap/stargazers
[issues-shield]: https://img.shields.io/github/issues/Abraham-Moncherry/FretMap.svg?style=for-the-badge
[issues-url]: https://github.com/Abraham-Moncherry/FretMap/issues
[license-shield]: https://img.shields.io/github/license/Abraham-Moncherry/FretMap.svg?style=for-the-badge
[license-url]: https://github.com/Abraham-Moncherry/FretMap/blob/main/LICENSE
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TypeScript]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[TailwindCSS]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/
