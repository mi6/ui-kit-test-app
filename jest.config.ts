import type { Config } from 'jest'

const config: Config = {
  preset: "ts-jest",
  testEnvironment: 'jsdom',
  transform: {
      "^.+\\.tsx?$": "ts-jest",
      "^.+\\.js[x]?$": "babel-jest",
  },
  transformIgnorePatterns: [
    // "/node_modules/(?!@ukic/canary-react)",
    // "/node_modules/(?!@ukic/react)"
  ],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy"
  }
};

export default config