const withFonts = require("next-fonts");

module.exports = withFonts({
  reactStrictMode: true,
  webpack(config) {
    // Find the existing SVG rule
    const svgRule = config.module.rules.find((rule) => {
      return (
        rule.test && rule.test.toString() === "/\\.(svg|ico|png|gif|jp(e?)g)$/"
      );
    });

    // Add the SVG URL loader for SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 8192, // Use url-loader for small SVG files
            fallback: require.resolve("file-loader"),
            publicPath: "/_next/static/", // Adjust the publicPath as needed
            outputPath: "static/", // Adjust the outputPath as needed
            name: "[name].[hash].[ext]",
            esModule: false,
          },
        },
      ],
    });

    // Remove the existing SVG rule to prevent conflicts
    if (svgRule) {
      const svgIndex = config.module.rules.indexOf(svgRule);
      config.module.rules.splice(svgIndex, 1);
    }

    return config;
  },
});
