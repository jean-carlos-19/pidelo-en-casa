
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');
const webpack = require("webpack");
const path = require('path');

module.exports = {

  watch:false,
  devtool:false,
  mode:"development",
  devServer:{
      port:3000,
      static: {
          directory: path.join(__dirname, 'dist'),
      },
      compress:true
  },
  
  entry: {
    index:'./src/index.ts',
    inicia_sesion: './src/inicia_sesion.ts',
    crear_cuenta: './src/crear_cuenta.ts',
    producto: './src/producto.ts',
    eliminar_actualizar:"./src/eliminar_actualizar.ts",
    administrador:"./src/administrador.ts"
  },
  
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name]-[contenthash].js',
  },

  module: {
      rules: [
          {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['@babel/preset-env']
                  }
              } 
          },
          {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/,
          },
          {
              test: /.s?css$/,
              use: [
                  {
                      loader: MiniCssExtractPlugin.loader,
                      options:{
                          publicPath:"./"
                      }
                  },
                  {
                   loader: "css-loader",
                    options:{
                        url:false
                    }
                  },
                  "postcss-loader",
                  "sass-loader",
              ],
          },
          {
              test: /\.ejs$/i,
              use: [
                  {
                      loader:"html-loader",
                      options:{
                          sources:false
                      }
                  }, 
              ],
          },
          {
              test:/\.(jpe?g|png|gif|svg|webp|ico)$/i,
              use:[
                  {
                      loader:"file-loader",
                      options:{
                          name: "[name].[ext]",
                          outputPath: "assets"
                      }
                  }
              ]
          },
      ],
  },
  resolve: {
      extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
      minimizer: [
        new CssMinimizerPlugin(),
      ],
  },
  
  plugins:[
      new WebpackManifestPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
          minify:true,
          scriptLoading:'blocking',
          title: 'My App',
          filename: 'index.html',
          template: "src/vistas/index.html",
          chunks:["index","inicia_sesion"],
          hash:true
      }),
      new HtmlWebpackPlugin({
        minify:true,
        scriptLoading:'blocking',
        title: 'My App',
        filename: 'administrador.html',
        template: "src/vistas/administrador.html",
        chunks:["index","administrador"],
        hash:true
    }),
    new HtmlWebpackPlugin({
        minify:true,
        scriptLoading:'blocking',
        title: 'My App',
        filename: 'producto_actualizar.html',
        template: "src/vistas/producto_actualizar.html",
        chunks:["index","eliminar_actualizar"],
        hash:true
    }),
    new HtmlWebpackPlugin({
        minify:true,
        scriptLoading:'blocking',
        title: 'My App',
        filename: 'producto_anadir.html',
        template: "src/vistas/producto_anadir.html",
        chunks:["index","producto"],
        hash:true
    }),
    new HtmlWebpackPlugin({
        minify:true,
        scriptLoading:'blocking',
        title: 'My App',
        filename: 'producto_eliminar.html',
        template: "src/vistas/producto_eliminar.html",
        chunks:["index","eliminar_actualizar"],
        hash:true
    }),
    new HtmlWebpackPlugin({
        minify:true,
        scriptLoading:'blocking',
        title: 'My App',
        filename: 'registrate.html',
        template: "src/vistas/registrate.html",
        chunks:["index","crear_cuenta"],
        hash:true
    }),
      new MiniCssExtractPlugin({
          filename:"css/[name]-[contenthash].css"
      }),
  ]
};