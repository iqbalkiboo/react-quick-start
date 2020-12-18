<!-- 
Nama : Moch. Iqbal Dzulfiqar Rahman , 24thn, 22 April 1996
Kandidat : Frontend Developer
Agama : Muslim / Islam 
-->

Dengan Memulai Test ini, saya melakukan Install atau pemasangan dengan secara manual setting Babel dan Webpack yang telah tertera di peraturan Test berlangsung tanpa menggunakan 'npm install create-react-app / npx install create-react-app',

langkah awal,
- membuat folder bernama 'kitabisareact' dengan membuka terminal
- melakukan mkdir kitabisareact
- install init npm nya dengan melakukan 'npm init -y'
- lalu install npm react dan react-dom nya, dengan melakukan 'npm install react react-dom'
- masih pada halaman terminalnya, pertama tama kita akan melakukan pemasangan atau install konfigurasi webpack dengan versi ke-4
- dengan mengetik masih di halaman Terminal, 'npm install --save-dev webpack webpack-dev-server webpack-cli'
- dia akan menginstall, 
    - webpack-module -> memasukan semua fungsi di dalam webpack nya
    - webpack-dev-serve -> berfungsi untuk mengotomatiskan reload jika ada perubahan terjadi saat mendevelop sesuatu atau perubahan pada struktur codingan
    - webpack-cli -> berfungsi untuk membuat enable running command line
- lalu setelah melakukan pemasangan di dalam webpack nya, kita bisa melakukan configurasi di dalam package.json 
 -  "scripts": {
        "start": "webpack-dev-server --mode development",
    },
- setelah itu kita membuat HTML nya di dalam, dengan menggunakan beberapa tagging basic dari HTML nyaa,
 - ex.
    <!-- 
        <!DOCTYPE html>
        <html>
            <head>
                <title>My React Configuration Setup</title>
            </head>
            <body>
                <div id="root"></div>
                <script src="./dist/bundle.js"></script>
            </body>
        </html> 
    -->
membuat directory baru dengan memberinama src, lalu didalamnya kita membuat file baru index.js
- dengan membuka command line, 'mkdir src && cd src && touch index.js'
- setelah itu di dalam index.js kita akan memasukan sample coding untuk menjalankan index.js nya
    ex.
        import React from "react";
        import ReactDOM from "react-dom";
        
        class Welcome extends React.Component {
            render() {
                return <h1>Hello World from React boilerplate</h1>;
            }
        }
        ReactDOM.render(<Welcome />, document.getElementById("root"));
- kita bisa mencoba menjalankan aplikasi yang telah kita setting, dengan cara 'npm run start'
- jika kita muncul error kita, kita perlu install atau pasang babel nya,
 'npm install --save-dev @babel/core @babel/preset-env \@babel/preset-react babel-loader'
- setelah berhasil menginstal babel nya, kita bisa membuka webpack.config.js nya untuk melakukan setting konfigurasi si babel nya tersebut
    ex.
        module.exports = {
            entry: './src/index.js',
            output: {
                path: __dirname + '/dist',
                publicPath: '/',
                filename: 'bundle.js'
            },
            devServer: {
                contentBase: './dist',
            },
            module: {
                rules: [
                {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
                }
                ]
            },
        };
- Konfigurasi webpack ini pada dasarnya mengatakan bahwa titik masuk aplikasi kita adalah dari index.js, jadi tarik semua yang dibutuhkan oleh file tersebut, lalu masukkan keluaran dari proses bundling ke direktori dist, bernama bundle.js. Oh, jika kita berjalan di webpack-dev-server, beritahu server untuk menyajikan konten dari config contentBase, yang merupakan direktori yang sama dengan konfigurasi ini. Untuk semua file .js atau .jsx, gunakan babel-loader untuk transpile mereka semua.
- dengan melakukan itu, kita akan membuat file baru yang kita namakan '.babelrc' 
- setelah membuat file dengan nama '.babelrc', kita masukan konfigurasi setting untuk si babelrc nyaa
    ex.
        {
            "presets": [
                "@babel/preset-env",
                "@babel/preset-react"
            ]
        }
- lalu kita menjalankan lagi dengan mengetik 'npm run start'

terimakasih, iqbaldzulfiqar 2020
