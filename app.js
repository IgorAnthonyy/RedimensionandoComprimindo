const sharp = require('sharp');
const compress_images = require('compress-images');

let path = process.argv[2];
let width = Number(process.argv[3]);

function resize(inputPath, outputPath ,width){
    sharp(inputPath)
    .resize({width: width})
    .toFile(outputPath, (err, info) => {
        if(err){
            console.log(err);
        }{
            console.log("Imagem redimensionada com sucesso!");
            compress(outputPath, './compressed/');
        }
        
    });
}

function compress(inputPath, outputPath){
    compress_images(inputPath, outputPath, {compress_force: false, statistic: true, autoupdate: true}, false,
    {jpg: {engine: 'mozjpeg', command: ['-quality', '60']}},
    {png: {engine: 'pngquant', command: ['--quality=20-50']}},
    {svg: {engine: 'svgo', command: '--multipass'}},
    {gif: {engine: 'gifsicle', command: ['--colors', '64', '--use-col=web']}}, function(){
        console.log("Imagem comprimida com sucesso!");
    });

}

resize(path, './temp/output_resize.jpg' ,width);