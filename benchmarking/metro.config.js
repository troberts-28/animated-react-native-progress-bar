/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

const extraNodeModules = {
    "animated-react-native-progress-bar": path.resolve(__dirname, "../src"),
};
const watchFolders = [path.resolve(__dirname, "../src")];

module.exports = {
    ...config,
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false,
            },
        }),
    },
    resolver: {
        extraNodeModules: new Proxy(extraNodeModules, {
            get: (target, name) =>
                // redirects dependencies referenced from src/ to local node_modules
                name in target
                    ? target[name]
                    : path.join(process.cwd(), `node_modules/${name}`),
        }),
    },
    watchFolders,
};
