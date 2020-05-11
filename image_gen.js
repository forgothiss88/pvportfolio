#!/usr/bin/env node
require('./node_modules/responsive-images-generator')
const dir = "assets/img/works"
const configs = [
    {width: '160px', rename: {suffix: '@160px'}},
    {width: '320px', rename: {suffix: '@320px'}},
    {width: '640px', rename: {suffix: '@640px'}},
    {width: '1280px', rename: {suffix: '@1280px'}}
]

const images = [
  path.join(dir, '/ametis/*.jpg'),
]

generateResponsiveImages(images, configs)